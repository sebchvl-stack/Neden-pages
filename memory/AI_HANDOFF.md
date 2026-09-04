# AI Handoff — NEDEN

> **MAJ :** 2026-09-04 15:25 CEST  
> **Entry point :** `STATUS.md` à la racine de Neden-pages (branche `002-design-system`)

## Dual product context

1. **NEDEN App** (`sebchvl-stack/Neden-application`) — cockpit candidatures / tâches / JARVIS. **GAS** + Notion + Make + Discord + PWA Firebase. Frontend = **`Index.html` monofichier** (pas React). Constitution SpecKit active.
2. **NEDEN Pages** (`sebchvl-stack/Neden-pages`, branche **`002-design-system`**) — site **neden.fr** React+Vite+Tailwind, design system, memory profil, CV print, OAuth privacy/CGU.
3. **NEDEN Studio** — « Au service du sens. » Photo + DA + design + GP créatif (BtoB Nantes). Ne pas confondre copy studio et app tracking.

## Repos & branches (source de vérité travail design)

| Repo | Branch | Rôle |
|------|--------|------|
| Neden-pages | **`002-design-system`** | **ACTIVE** — tout le design site actuel |
| Neden-pages | `design/site-foundation` | Base antérieure |
| Neden-pages | `main` | Cible merge/deploy sous GO |
| Neden-application | `main` | App runtime |
| Neden-application | `001-cv-generator` | Spec CV |
| Neden-application | `002-design-system-link` | Pointeur charte |
| Neden-application | `spec-kit/bootstrap` | Gouvernance |

## Stack pages (002)

- React 18 + Vite 5 + React Router 6
- **Tailwind 3** (`preflight: false`) mappé sur `tokens.css`
- `global.css` + `micro.css` (interactions avancées)
- Cloudflare SPA : `public/_redirects` → `/* /index.html 200`

## Routes site

| Path | Page |
|------|------|
| `/` | Home (profil, parcours XYZ, compétences, outils, NEDEN, studio, contact) |
| `/moodboard` | Review tokens + composants |
| `/privacy` | Confidentialité OAuth |
| `/cgu` | CGU |

## Design rules

- Site : fond `#050505`, CTA **orange** `#F97316`
- App : fond `#0B1120`, primary **indigo** `#6366F1`
- Vert bouteille/forêt = **soutien seulement** (path, success, labels)
- Motion : transform/opacity · `prefers-reduced-motion` respecté

## Figma

- https://www.figma.com/design/NOLZUnUcR2iFPiu0bAzZjz
- Starter = 3 pages max · MCP souvent rate-limited
- Prompts : `prompts/FIGMA_AND_AI_PROMPTS.md` · bootstrap `prompts/NEXT_AI_DESIGN.md`

## Memory profil (ne pas inventer)

`COMPETENCES` · `CHIFFRES_CLES` · `TITRES_POSTE` · `MOTS_CLES` · `MISSIONS_XYZ` · `OUTILS` · `CERTIFICATIONS` · `PROFILE.json` · `POSITIONNEMENT` · `BRAND_*`

CV blocks : `cv-template/cv.html` attributs `data-block="CV/…"` — voir `docs/CV_EDITOR_BRIDGE.md`

## SpecKit pages

`specs/002-design-system/` — spec, plan, tasks, research, contracts

## Logo

SVG : `public/brand/logo.svg`, `favicon.svg`  
Tracks ouverts : `docs/LOGO_TRACKS.md` (5 pistes)  
Reste humain : export **PNG 120×120** OAuth

## Do not

- Production deploy without **GO** Sébastien
- Invent KPI / expériences
- Green as dominant UI
- Tailwind preflight ON sans audit
- App rewrite React sans AD
- Secrets in Git
- Edit `backend-live/` / `backend-archive/`

## Contact

Sébastien Cheval · Nantes · sebchvl@gmail.com · 06 12 36 07 50  
LinkedIn : linkedin.com/in/sebastien-cheval-digital-explorateur
