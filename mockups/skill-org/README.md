# 42 Skill — Organizasyon Şeması → Cursor

Aynı departmanlar. Aynı çıktı. Maaş bordrosu yok.

## Cursor’a bağla

Proje kökünden:

```bash
bash mockups/skill-org/install-cursor-skills.sh
```

Bu komut skill’leri **Cursor** agent’ına (`-a cursor`) proje seviyesinde kurar:

- Canonical kopya: `.agents/skills/`
- Kilit: `skills-lock.json`

Kurulumdan sonra Cursor’da yeni bir Agent sohbeti aç. Skill’ler görevle eşleşince otomatik yüklenir.

### Kontrol

```bash
npx skills list -a cursor
```

### Org şeması (görsel)

Tarayıcıda aç:

```bash
open mockups/skill-org/index.html
# veya
python3 -m http.server 8765 --directory mockups/skill-org
```

## Departman → paket

| Departman | Paket |
|-----------|--------|
| Geliştiriciler | `obra/superpowers`, `upstash/context7`, `anthropics/skills`, `thedotmack/claude-mem` |
| Tasarımcılar | `nextlevelbuilder/ui-ux-pro-max-skill`, `Leonxlnx/taste-skill`, `Jakubantalik/transitions-dev`, `anthropics/skills` |
| Pazarlama | `coreyhaines31/marketingskills` |
| Sosyal Medya | `charlie947/social-media-skills` |
| Finans | `anthropics/knowledge-work-plugins` (finance skills) |
| Küçük İşletme | `anthropics/knowledge-work-plugins` (SMB; `plan-payroll` hariç) |
| Hukuk | `anthropics/knowledge-work-plugins` (legal skills) |
