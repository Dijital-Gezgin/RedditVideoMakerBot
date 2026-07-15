#!/usr/bin/env python3
"""
Narlıdere Belediyesi E-İmar (KEOS) Ada/Parsel sorgulama betiği.

Limanreis Mahallesi, Ada 122, Parsel 198 için örnek kullanım:
    python narlidere_imar_sorgula.py
    python narlidere_imar_sorgula.py --mahalle Limanreis --ada 122 --parsel 198
"""

from __future__ import annotations

import argparse
import re
import sys
from playwright.sync_api import Browser, Page, TimeoutError as PlaywrightTimeoutError
from playwright.sync_api import sync_playwright

BASE_URL = "https://keos.narlidere-bld.gov.tr/imardurumu/index.aspx"

# Detay panelinde öncelikli olarak yazdırılacak alanlar
PRIORITY_KEYS = (
    "T.A.K.S",
    "TAKS",
    "K.A.K.S (Emsal)",
    "K.A.K.S",
    "KAKS",
    "Plan Fonksiyon",
    "Fonksiyon",
    "Bina Yüksekliği",
    "Yükseklik",
    "Kat Adedi",
    "İnşaat Nizamı",
    "Ada/Parsel",
    "Tapu Kütüğü",
    "Parsel Alanı (1)",
    "Mer'i İmar Planı",
    "Ölçeği",
    "Plan Onay Tarihi-No",
    "ACIKLAMA",
)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Narlıdere E-İmar sisteminden Ada/Parsel imar bilgisi çeker."
    )
    parser.add_argument("--mahalle", default="Limanreis", help="Mahalle / tapu kütüğü adı")
    parser.add_argument("--ada", default="122", help="Ada numarası")
    parser.add_argument("--parsel", default="198", help="Parsel numarası")
    parser.add_argument(
        "--headed",
        action="store_true",
        help="Tarayıcıyı görünür modda aç (varsayılan: headless)",
    )
    parser.add_argument(
        "--timeout",
        type=int,
        default=60000,
        help="Sayfa işlem zaman aşımı (ms)",
    )
    return parser.parse_args()


def install_nonce_route(page: Page, browser_context_cookies) -> None:
    """imarsvc.aspx isteklerine X-Service-Nonce ekler (site.js ajaxSetup yedegi)."""

    def handle_route(route, request) -> None:
        if "imarsvc.aspx" not in request.url:
            route.continue_()
            return
        cookies = browser_context_cookies()
        nonce = next((c["value"] for c in cookies if c["name"] == "svc_nonce"), None)
        headers = dict(request.headers)
        if nonce:
            headers["X-Service-Nonce"] = nonce
        route.continue_(headers=headers)

    page.route("**/*", handle_route)


def normalize(text: str) -> str:
    return re.sub(r"\s+", " ", text or "").strip()


def turkish_fold(text: str) -> str:
    table = str.maketrans(
        {
            "İ": "i",
            "I": "i",
            "ı": "i",
            "Ş": "s",
            "ş": "s",
            "Ğ": "g",
            "ğ": "g",
            "Ü": "u",
            "ü": "u",
            "Ö": "o",
            "ö": "o",
            "Ç": "c",
            "ç": "c",
        }
    )
    return text.translate(table).casefold()


def open_ada_parsel_tab(page: Page) -> None:
    tab = page.locator('button[data-tab="parcel"]')
    tab.wait_for(state="visible")
    tab.click()
    page.locator("#txtAdaParsel, #txtAda").first.wait_for(state="visible")


def maybe_select_mahalle(page: Page, mahalle: str) -> None:
    """Ada/Parsel sekmesinde mahalle alanı görünürse seçer (çoğu kurulumda gizli)."""
    for btn_sel, drop_sel in (
        ("#btnTapuMahalle", "#tapuMahalleDropdown"),
        ("#btnMahalle", "#mahalleDropdown"),
    ):
        btn = page.locator(btn_sel)
        if btn.count() == 0 or not btn.is_visible():
            continue
        btn.click()
        dropdown = page.locator(drop_sel)
        dropdown.wait_for(state="visible")
        search = dropdown.locator("input").first
        if search.count():
            search.fill(mahalle)
            page.wait_for_timeout(300)
        options = dropdown.locator("a")
        target = turkish_fold(mahalle)
        for i in range(options.count()):
            opt = options.nth(i)
            label = normalize(opt.inner_text())
            if opt.is_visible() and target in turkish_fold(label):
                opt.click()
                print(f"Mahalle seçildi: {label}")
                return
        print(f"Uyarı: '{mahalle}' mahallesi dropdown'da bulunamadı; ada/parsel ile devam.")
        page.keyboard.press("Escape")
        return


def fill_ada_parsel(page: Page, ada: str, parsel: str) -> None:
    combined = page.locator("#txtAdaParsel")
    if combined.count() and combined.is_visible():
        combined.fill(f"{ada}/{parsel}")
        return

    ada_input = page.locator("#txtAda")
    parsel_input = page.locator("#txtParsel")
    if ada_input.count() and parsel_input.count():
        ada_input.fill(ada)
        parsel_input.fill(parsel)
        return

    raise RuntimeError("Ada/Parsel giriş alanları bulunamadı.")


def search_and_open_detail(page: Page, mahalle: str, timeout: int) -> None:
    page.locator("#btnAdaParselSearch").click()

    try:
        page.wait_for_selector(
            "#result-content .result-item, #result-content .no-result",
            timeout=timeout,
        )
    except PlaywrightTimeoutError as exc:
        raise RuntimeError("Sorgulama sonucu zaman aşımına uğradı.") from exc

    no_result = page.locator("#result-content .no-result")
    if no_result.count() and no_result.is_visible():
        raise RuntimeError(no_result.inner_text().strip() or "Parsel bulunamadı.")

    items = page.locator("#result-content .result-item")
    if items.count() == 0:
        err = normalize(page.locator("#result-content").inner_text())
        raise RuntimeError(f"Parsel sonucu yok: {err or 'bilinmeyen hata'}")

    chosen = None
    target = turkish_fold(mahalle)
    for i in range(items.count()):
        item = items.nth(i)
        text = normalize(item.inner_text())
        if target in turkish_fold(text):
            chosen = item
            break
    if chosen is None:
        chosen = items.first
        print(
            f"Uyarı: Sonuçlarda '{mahalle}' eşleşmesi yok; ilk kayıt kullanılıyor: "
            f"{normalize(chosen.inner_text())}"
        )
    else:
        print(f"Parsel sonucu: {normalize(chosen.inner_text())}")

    chosen.click()
    page.wait_for_function(
        "() => Boolean((document.getElementById('parselid') || {}).value)",
        timeout=timeout,
    )

    imar_btn = page.locator(".btn-imar-action")
    visible_btn = None
    for i in range(imar_btn.count()):
        candidate = imar_btn.nth(i)
        if candidate.is_visible():
            visible_btn = candidate
            break

    if visible_btn is not None:
        visible_btn.click()
    else:
        page.evaluate("() => validateForm('imar.aspx')")

    _wait_for_imar_page(page, timeout)
    page.wait_for_load_state("domcontentloaded")
    page.wait_for_selector(".divTableContent, .divTable", timeout=timeout)


def _wait_for_imar_page(page: Page, timeout: int) -> None:
    """Özel not (Swal) onayını gerekirse tıklayıp imar.aspx'e geçişi bekler."""
    page.wait_for_function(
        """() => {
            if (location.href.includes('imar.aspx')) return true;
            const btn = document.querySelector('.swal2-confirm');
            if (btn && btn.offsetParent !== null) {
              const label = (btn.textContent || '').trim();
              if (label.includes('Devam') || label.includes('Tamam')) {
                btn.click();
              }
            }
            return location.href.includes('imar.aspx');
        }""",
        timeout=timeout,
    )


def extract_imar_fields(page: Page) -> dict[str, str]:
    raw: dict[str, str] = page.evaluate(
        """() => {
            const out = {};
            document.querySelectorAll('.divTable').forEach(row => {
                const label = row.querySelector('.divTableLabel, .table-subtitle');
                const val = row.querySelector('.divTableContent');
                if (!label || !val) return;
                const k = (label.innerText || '').replace(/\\s+/g, ' ').trim();
                const v = (val.innerText || '').replace(/\\s+/g, ' ').trim();
                if (k) out[k] = v;
            });
            return out;
        }"""
    )

    # Ada/Parsel hücresindeki "Harita" eki temizliği
    for key in list(raw):
        if key.startswith("Ada/Parsel"):
            raw[key] = re.sub(r"\s*Harita\s*$", "", raw[key]).strip()
    return raw


def pick_display_fields(fields: dict[str, str]) -> list[tuple[str, str]]:
    used: set[str] = set()
    ordered: list[tuple[str, str]] = []

    def match_key(wanted: str) -> str | None:
        wanted_n = turkish_fold(wanted)
        for key in fields:
            if turkish_fold(key) == wanted_n:
                return key
        for key in fields:
            kn = turkish_fold(key)
            if not kn.startswith(wanted_n):
                continue
            remainder = kn[len(wanted_n) :].lstrip()
            if remainder.startswith("uyar"):
                continue
            return key
        return None

    for wanted in PRIORITY_KEYS:
        key = match_key(wanted)
        if key and key not in used:
            ordered.append((key, fields[key]))
            used.add(key)

    return ordered


def print_fields(fields: dict[str, str], mahalle: str, ada: str, parsel: str) -> None:
    print()
    print("=" * 60)
    print("Narlıdere E-İmar Sorgu Sonucu")
    print("=" * 60)
    print(f"Sorgulanıyor : {mahalle} / Ada {ada} / Parsel {parsel}")
    print(f"Sayfa        : {fields.get('Ada/Parsel', f'{ada}/{parsel}')}")
    print("-" * 60)

    display = pick_display_fields(fields)
    if not display:
        print("Detay alanında beklenen alanlar bulunamadı.")
        print("Ham alanlar:")
        for key, value in fields.items():
            print(f"  {key}: {value}")
        return

    width = max(len(k) for k, _ in display)
    for key, value in display:
        print(f"{key.ljust(width)} : {value}")
    print("=" * 60)


def run(mahalle: str, ada: str, parsel: str, headed: bool, timeout: int) -> dict[str, str]:
    with sync_playwright() as playwright:
        browser: Browser = playwright.chromium.launch(headless=not headed)
        context = browser.new_context(
            locale="tr-TR",
            user_agent=(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/122.0.0.0 Safari/537.36"
            ),
            extra_http_headers={"Accept-Language": "tr-TR,tr;q=0.9"},
        )
        page = context.new_page()
        page.set_default_timeout(timeout)
        install_nonce_route(page, context.cookies)

        print(f"Sayfa açılıyor: {BASE_URL}")
        page.goto(BASE_URL, wait_until="domcontentloaded")
        page.wait_for_selector('button[data-tab="parcel"]')

        print("Ada/Parsel sekmesine geçiliyor...")
        open_ada_parsel_tab(page)
        maybe_select_mahalle(page, mahalle)
        fill_ada_parsel(page, ada, parsel)
        print(f"Sorgulanıyor: {ada}/{parsel}")

        search_and_open_detail(page, mahalle, timeout)
        print(f"Detay paneli açıldı: {page.url}")

        fields = extract_imar_fields(page)
        browser.close()
        return fields


def main() -> int:
    args = parse_args()
    try:
        fields = run(
            mahalle=args.mahalle,
            ada=args.ada,
            parsel=args.parsel,
            headed=args.headed,
            timeout=args.timeout,
        )
    except PlaywrightTimeoutError as exc:
        print(f"Hata: zaman aşımı — {exc}", file=sys.stderr)
        return 1
    except Exception as exc:  # noqa: BLE001 — CLI çıktısı için tek noktadan yakala
        print(f"Hata: {exc}", file=sys.stderr)
        return 1

    print_fields(fields, args.mahalle, args.ada, args.parsel)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
