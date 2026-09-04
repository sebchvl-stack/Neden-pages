# Architecture NEDEN (synthèse)

## Dual system

| | App | Site |
|--|-----|------|
| Repo | Neden-application | Neden-pages |
| Runtime | Google Apps Script + Index.html | React + Vite → Cloudflare Pages |
| Data | Notion | memory/* + static |
| UI | #0B1120 / indigo | #050505 / orange |

## App flow
User → Index.html → api_* / WebApp.gs → Auth → Jarvis → modules → Notion / Gmail / Calendar / Drive / Discord / FT

- `src/backend/` = source active
- `backend-live/` / `backend-archive/` = ne pas éditer
- Fonctions `*_` = privées GAS

## Site flow
neden.fr → SPA routes `/` `/privacy` `/cgu` · tokens + micro.css · OAuth homepage publique

## Gouvernance
Constitution SpecKit · Preserve > Refactor · GO pour prod · pas de données inventées

## Branches design
`002-design-system` (pages) · features app isolées (`001-cv-generator`, etc.)
