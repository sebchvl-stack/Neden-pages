# AI Handoff — NEDEN (2026-09-04)

## Dual product context

1. **NEDEN App** (`sebchvl-stack/Neden-application`) — cockpit candidatures/tâches/JARVIS, GAS + Notion + Make + Discord, PWA Firebase. Constitution SpecKit active.
2. **NEDEN Pages** (`sebchvl-stack/Neden-pages`, branch `design/site-foundation`) — site neden.fr (React+Vite), design system, mémoires profil CV, OAuth privacy/CGU.
3. **NEDEN Brand studio** — « Au service du sens », photo + DA + design + gestion de projet (dossier présentation / business plan). Ne pas confondre app tracking et studio créatif dans les copy sans cadrage.

## Repos & branches

| Repo | Branch | Rôle |
|------|--------|------|
| Neden-pages | `design/site-foundation` | Site, tokens CSS, memory profil, CV_SYSTEM |
| Neden-application | `main` (+ feature SpecKit) | App GAS, JARVIS, CVGenerator |

## Figma

- https://www.figma.com/design/NOLZUnUcR2iFPiu0bAzZjz
- 3 pages max (Starter): Design System · Components · Hero
- Vert = soutien (#1B4D3E / #52B788), CTA orange #F97316, fonds #050505 / #0B1120
- **MCP Figma rate-limited** le 2026-09-04 — reprendre frames CV A4 + CV Editor manuellement ou après upgrade

## Memory profil (CV)

`memory/COMPETENCES.md`, `CHIFFRES_CLES.md`, `TITRES_POSTE.md`, `MOTS_CLES.md`, `MISSIONS_XYZ.md`, `OUTILS.md`, `CERTIFICATIONS.md`, `PROFILE.json`

Docs: `docs/CV_SYSTEM.md`

Outils CV prioritaires: Figma, Mobbin, Vercel, Cloudflare, Grok, Google AI Studio, Perplexity, GitHub, HubSpot, Slack/Discord

## SpecKit

- Constitution: `Neden-application/.specify/memory/constitution.md`
- Feature CV: poussée dans Neden-application `specs/001-cv-generator/`
- Preserve > Refactor · no secrets · no invent data · GO before prod

## Contact

Sébastien Cheval · Nantes · sebchvl@gmail.com · PO / directeur de projet Agile · 10+ ans · 50+ clients · 150+ projets

## Do not

- Deploy production without GO
- Invent experiences/KPIs
- Green as dominant UI color
- >3 Figma pages without plan upgrade
