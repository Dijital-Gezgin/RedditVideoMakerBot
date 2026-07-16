# 42 Skill — Cursor organizasyon şeması

Aynı departmanlar. Aynı çıktı. Maaş bordrosu yok.

Bu projedeki Agent Skills, Cursor’un okuduğu `.agents/skills/` dizinine kuruludur.
Yeni sohbette ilgili işi sorunca skill otomatik tetiklenir.

## Tek komutla yeniden kur

```bash
bash mockups/skill-org/install-cursor-skills.sh
```

Lock dosyasından geri yükleme:

```bash
npx skills experimental_install
```

Liste:

```bash
npx skills list -a cursor
```

## Departmanlar

| Departman | Kaynak | Not |
|-----------|--------|-----|
| Geliştiriciler | `obra/superpowers`, `upstash/context7`, `anthropics/skills`, `thedotmack/claude-mem` | Superpowers, Context7, Skill Creator, MCP Builder, Webapp Testing, Claude-Mem |
| Tasarımcılar | `nextlevelbuilder/ui-ux-pro-max-skill`, `Leonxlnx/taste-skill`, `Jakubantalik/transitions-dev`, `anthropics/skills` | UI UX Pro Max, Taste, Frontend Design, Transitions, Web Artifacts, Brand Guidelines |
| Pazarlama | `coreyhaines31/marketingskills` | 45 skill — kopya, SEO, CRO, lead magnet… |
| Sosyal Medya | `charlie947/social-media-skills` | 17 skill — post, Reels, thumbnail… |
| Finans | `anthropics/knowledge-work-plugins` | 8 skill — bilanço, mutabakat, denetim |
| Küçük İşletme | `anthropics/knowledge-work-plugins` | Nakit akışı, fatura, kampanya (`plan-payroll` hariç) |
| Hukuk | `anthropics/knowledge-work-plugins` | 9 skill — sözleşme, NDA, uyumluluk |

Görsel şema: `mockups/skill-org/index.html`
