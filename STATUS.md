# STATUS NEDEN-PAGES — Point d’entrée reprise

> **MAJ :** 2026-09-04 15:25 CEST  
> **Branche de travail active :** `002-design-system`  
> **Owner :** Sébastien Cheval · sebchvl@gmail.com · Nantes

Toute IA ou humain **commence ici**, puis suit les liens.

---

## 1. État global (feu tricolore)

| Zone | État | Note |
|------|------|------|
| Design system tokens | 🟢 | `src/styles/tokens.css` |
| Tailwind 3 branché | 🟢 | preflight OFF · `tailwind.config.js` |
| Site Home contenu | 🟢 | Sourcé `memory/*` |
| Micro-interactions CSS | 🟢 | `micro.css` |
| Nav mobile | 🟢 | Burger |
| Privacy / CGU | 🟢 | Routes OAuth |
| Moodboard `/moodboard` | 🟢 | Swatches + composants |
| Logo / favicon SVG | 🟢 | `public/brand/` · PNG OAuth 🟡 |
| CV template data-blocks | 🟢 | `cv-template/` |
| SpecKit 002 | 🟢 | `specs/002-design-system/` |
| Deploy Cloudflare prod | 🔴 | **GO explicite requis** |
| Merge → `main` | 🔴 | Pas encore |
| Figma GUI complet | 🟡 | Starter 3 pages · MCP limit · prompts OK |
| App Index.html UI pass | 🟡 | Spec wireframes only (repo app) |

---

## 2. Repos & branches

| Repo | Branche | Rôle |
|------|---------|------|
| **Neden-pages** | **`002-design-system`** ← **ACTIVE** | Site + design + memory + CV print |
| Neden-pages | `design/site-foundation` | Ancêtre (dépassée par 002) |
| Neden-pages | `main` | Prod éventuelle — ne pas push design sans GO |
| Neden-application | `main` | App GAS runtime |
| Neden-application | `001-cv-generator` | Spec CV engine |
| Neden-application | `002-design-system-link` | Lien charte pages |
| Neden-application | `spec-kit/bootstrap` | Gouvernance SpecKit |

---

## 3. Carte docs (ordre de lecture IA)

1. **STATUS.md** (ce fichier)
2. `memory/AI_HANDOFF.md`
3. `docs/AI_CONTINUITY.md`
4. `docs/SITE_VS_APP.md`
5. `docs/TOKENS.md`
6. `docs/MOODBOARD.md` · route `/moodboard`
7. `docs/LOGO_TRACKS.md` · `prompts/NEXT_AI_DESIGN.md`
8. `docs/WIREFRAMES_FULL.md` · `docs/APP_WIREFRAMES.md`
9. `docs/CV_EDITOR_BRIDGE.md` · `docs/CV_SYSTEM.md`
10. `docs/ARCHITECTURE.md` · `docs/DELIVERY_002.md`
11. `specs/002-design-system/spec.md` + `tasks.md`
12. App : `Neden-application/CLAUDE.md` + `MEMORY.md` + constitution

---

## 4. Fichiers code clés (pages)

```
src/styles/tokens.css      # vérité couleurs/type/motion
src/styles/tailwind.css    # @layer composants tw-*
src/styles/global.css      # layout site legacy
src/styles/micro.css       # micro-interactions
src/pages/Home.tsx         # contenu marketing
src/pages/Moodboard.tsx    # review visuelle
cv-template/cv.html|css    # A4 data-block
public/brand/*             # logo + favicon SVG
public/_redirects          # SPA Cloudflare
memory/*                   # faits profil — ne pas inventer
```

---

## 5. Backlog priorisé (prochaine session)

### P0 — bloquant prod site
1. `npm install && npm run dev` validation locale
2. Export **PNG 120×120** favicon pour OAuth console
3. **GO** merge `002-design-system` → `main` + Cloudflare Pages

### P1 — design
4. Explorer logo tracks 2–5 (LOGO_TRACKS.md) → 3 SVG finals
5. Framer Motion path scroll-scrub (hook CSS existe)
6. Migrer progressivement sections Home vers `tw-*` sans casser micro.css

### P2 — app / CV
7. Avancer `001-cv-generator` (GAS document-engine ↔ template pages)
8. Pass UI Index.html selon APP_WIREFRAMES (dans repo app, Preserve > Refactor)

### P3 — Figma
9. Frames manuelles si MCP OK / plan upgrade

---

## 6. Interdits (rappel Constitution)

- Deploy prod sans GO Sébastien
- Inventer expériences / KPI / clients
- Vert dominant full-section
- Secrets dans Git
- Rewrite app en React sans décision d’architecture
- Activer Tailwind preflight sans audit global.css
- Modifier `backend-live/` / `backend-archive/` (app)

---

## 7. Journal court (session 2026-09-04)

| Heure approx | Action |
|--------------|--------|
| SpecKit | Feature `002-design-system` créée |
| Design | Master, tokens, dual site/app |
| Code | Home enrichi memory, micro-interactions, nav mobile |
| Brand | logo.svg + favicon 120 SVG |
| Tailwind | v3 + map neden-* + moodboard route |
| Docs | TOKENS, MOODBOARD, LOGO_TRACKS, WIREFRAMES, DELIVERY, STATUS |
| Contenu | XYZ 4 jobs, compétences, outils, studio, contact |

---

## 8. Commandes

```bash
git clone https://github.com/sebchvl-stack/Neden-pages.git
cd Neden-pages
git checkout 002-design-system
npm install
npm run dev
# → http://localhost:5173/  et  /moodboard
```

Figma : https://www.figma.com/design/NOLZUnUcR2iFPiu0bAzZjz
