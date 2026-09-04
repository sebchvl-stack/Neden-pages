# Delivery package — 002-design-system

**Branche :** `002-design-system`  
**Date :** 2026-09-04

## Livré

### Identité
- [x] Dual surface Site vs App documentée
- [x] Tokens CSS (`src/styles/tokens.css`)
- [x] Logo SVG wordmark `public/brand/logo.svg`
- [x] Favicon 120 SVG `public/brand/favicon.svg` (+ variant path)
- [x] Directions créatives ouvertes (`docs/CREATIVE_DIRECTIONS.md`)

### Site
- [x] Home contenu memory (profil, XYZ, skills, outils, NEDEN, studio, contact)
- [x] Micro-interactions (`src/styles/micro.css`)
- [x] Nav mobile burger
- [x] Privacy + CGU routes
- [x] SPA `_redirects` Cloudflare

### CV
- [x] Template A4 HTML/CSS + data-blocks
- [x] Bridge doc vers app document-engine

### App (spec, pas rewrite Index.html)
- [x] Wireframes A01–A11 + JARVIS states

### SpecKit
- [x] `specs/002-design-system/*`
- [x] Architecture + handoff docs

## Non livré volontairement (besoin GO / action humaine)
- [ ] Export PNG 120×120 depuis SVG (OAuth consent image ≤1 Mo)
- [ ] Merge `002-design-system` → main + deploy Cloudflare Pages
- [ ] Refonte visuelle profonde Index.html app
- [ ] Framer Motion scroll-scrub path (hook CSS déjà là)
- [ ] Figma GUI si MCP quota (prompts prêts)

## Comment tester site
```bash
git checkout 002-design-system
npm install && npm run dev
```

## Comment produire favicon PNG
Ouvrir `public/brand/favicon.svg` dans Figma/Inkscape/browser → export PNG 120×120.
