#!/usr/bin/env bash
# 42 Skill → Cursor bağlantısı
# Aynı departmanlar. Aynı çıktı. Maaş bordrosu yok.
set -euo pipefail

AGENT="${AGENT:-cursor}"
FLAGS=(-a "$AGENT" --copy -y)

echo "==> 42 Skill org → Cursor ($AGENT)"
echo

install_pkg() {
  local repo="$1"
  shift
  echo "---- $repo $*"
  npx -y skills add "$repo" "${FLAGS[@]}" "$@"
  echo
}

# ── Geliştiriciler ──────────────────────────────────────────
install_pkg obra/superpowers --skill '*'
install_pkg upstash/context7 --skill find-docs context7-mcp context7-cli
install_pkg anthropics/skills --skill skill-creator mcp-builder webapp-testing
install_pkg thedotmack/claude-mem --skill mem-search knowledge-agent learn-codebase smart-explore

# ── Tasarımcılar ────────────────────────────────────────────
install_pkg nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max design design-system brand
install_pkg Leonxlnx/taste-skill --skill design-taste-frontend high-end-visual-design redesign-existing-projects
install_pkg Jakubantalik/transitions-dev --skill transitions-dev
install_pkg anthropics/skills --skill web-artifacts-builder brand-guidelines frontend-design

# ── Pazarlama (45) ──────────────────────────────────────────
install_pkg coreyhaines31/marketingskills --skill '*'

# ── Sosyal Medya (17) ───────────────────────────────────────
install_pkg charlie947/social-media-skills --skill '*'

# ── Finans (8) ──────────────────────────────────────────────
install_pkg anthropics/knowledge-work-plugins --skill \
  journal-entry journal-entry-prep reconciliation financial-statements \
  variance-analysis close-management audit-support sox-testing

# ── Küçük İşletme (31) — plan-payroll hariç (maaş bordrosu yok) ──
install_pkg anthropics/knowledge-work-plugins --skill \
  smb-router smb-onboard cash-flow-snapshot invoice-chase close-month \
  monday-brief friday-brief run-campaign margin-analyzer lead-triage \
  crm-cleanup crm-maintenance customer-pulse customer-pulse-check \
  business-pulse call-list canva-creator content-strategy contract-review \
  handle-complaint job-post-builder month-end-prep month-heads-up \
  price-check quarterly-review review-contract sales-brief tax-prep \
  tax-season-organizer ticket-deflector

# ── Hukuk (9) ───────────────────────────────────────────────
install_pkg anthropics/knowledge-work-plugins --skill \
  review-contract triage-nda vendor-check compliance-check \
  legal-risk-assessment meeting-briefing brief legal-response signature-request

echo "==> Kurulum tamam."
echo "    Liste: npx skills list -a $AGENT"
echo "    Cursor’da yeni sohbet aç; skill’ler otomatik tetiklenir."
