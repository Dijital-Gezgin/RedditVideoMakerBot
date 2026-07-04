# Grafika.com.tr — Yeni Site (Test Ortamı)

Bu proje **grafika.com.tr WordPress sitenizin yeni versiyonudur**. Canlı siteye hiç dokunulmadı.

## Ne yapıldı?

- Modern, animasyonlu, mobil uyumlu site (Next.js + Tailwind)
- Mevcut içerikler WordPress'ten alındı (metinler, görseller, referanslar)
- Aynı URL yapısı korundu (`/fuar-standi`, `/kurumsal`, `/iletisim` vb.)
- Test bandı eklendi — ziyaretçi canlı site olmadığını anlar

## Yerel önizleme

```bash
cd grafika-web
npm install
npm run dev
```

Tarayıcıda: http://localhost:3000

## Canlı siteye dokunmadan test etme (Plesk)

1. Plesk'te **Alt Alan Adları** → `test.grafika.com.tr` oluşturun
2. Node.js uygulaması olarak bu projeyi yükleyin **veya** statik export kullanın:

```bash
npm run build
```

3. `test.grafika.com.tr` adresinde yeni siteyi inceleyin
4. Beğenince canlı geçiş planı yapılır (WordPress silinmeden önce)

## Canlı geçiş (ileride)

1. Yeni site `test.grafika.com.tr`'de onaylanır
2. Eski URL'ler için 301 yönlendirme listesi hazırlanır
3. Domain ana siteye yönlendirilir
4. WordPress yedekte tutulur (1–2 hafta)

## Eksik / sonraki adımlar

- İletişim formu e-posta entegrasyonu (şu an test modunda)
- Haber yazılarının tam metinleri
- Görsellerin sunucuya indirilmesi (şu an WordPress CDN'den geliyor)
- Google Analytics / Search Console
- Canlı geçişte staging bandının kaldırılması

## Sayfa listesi

| Sayfa | URL |
|-------|-----|
| Ana sayfa | `/` |
| Kurumsal | `/kurumsal` |
| Fuar Standı | `/fuar-standi` |
| İç Mekan | `/ic-mekan-tasarimi-ve-uygulama` |
| Tabela | `/tabela` |
| Logo | `/logo` |
| Kurumsal Kimlik | `/kurumsal-kimlik` |
| Afiş & Poster | `/afis-ve-poster` |
| Gazete İlanı | `/gazete-ilani` |
| PR & Organizasyon | `/pr-ve-organizasyon` |
| Referanslar | `/referanslar` |
| İletişim | `/iletisim` |
| Haberler | `/haberler` |
