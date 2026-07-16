# 42 Skill — Cursor organizasyon şeması

Aynı departmanlar. Aynı çıktı. Maaş bordrosu yok.

Bu klasör kendi başına bir Cursor workspace’idir. Skill’ler `.agents/skills/` altındadır.

## Yeniden kur

```bash
bash install-cursor-skills.sh
# veya
npx skills experimental_install
```

Liste: `npx skills list -a cursor`

## Departmanlar

| Departman | Kaynak |
|-----------|--------|
| Geliştiriciler | `obra/superpowers`, `upstash/context7`, `anthropics/skills`, `thedotmack/claude-mem` |
| Tasarımcılar | `nextlevelbuilder/ui-ux-pro-max-skill`, `Leonxlnx/taste-skill`, `Jakubantalik/transitions-dev`, `anthropics/skills` |
| Pazarlama | `coreyhaines31/marketingskills` |
| Sosyal Medya | `charlie947/social-media-skills` |
| Finans | `anthropics/knowledge-work-plugins` (finance) |
| Küçük İşletme | `anthropics/knowledge-work-plugins` (SMB; `plan-payroll` hariç) |
| Hukuk | `anthropics/knowledge-work-plugins` (legal) |

Görsel şema: `index.html`
