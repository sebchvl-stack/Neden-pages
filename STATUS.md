# STATUS NEDEN-PAGES — Point d’entrée reprise

> **MAJ :** 2026-09-05 09:15 CEST  
> **Branche active :** `002-design-system`  
> **Owner :** Sébastien Cheval · sebchvl@gmail.com · Nantes

---

## 1. État global

| Zone | État | Note |
|------|------|------|
| **Design Source of Truth** | 🟢 | `NEDEN_DESIGN_SOURCE_OF_TRUTH.md` + `design/` |
| Foundations DS-F01–F06 | 🟢 | Contracts in `design/tokens/` |
| Components DS-C01–C08 | 🟡 | C01/C02/C05/C08 designed+partial code ; rest specified |
| Modules DS-N (séparés) | 🟢 | ARWEN ≠ VIDEO ≠ BRAINSTORM ≠ JARVIS documented |
| Tokens + Tailwind | 🟢 | tokens.css · tailwind preflight off |
| Site Home + micro + nav | 🟢 | |
| Moodboard `/moodboard` | 🟢 | |
| Logo SVG | 🟢 | PNG OAuth 🟡 |
| CV template | 🟢 | |
| Deploy / merge main | 🔴 | GO requis |
| Figma GUI | 🟡 | Non bloquant (Git = vérité) |

---

## 2. Pipeline design (officiel)

```text
Spec → Design Contract → Figma/Penpot (opt.) → Code → QA → DONE
```

Statuts : SPECIFIED → WIREFRAME → DESIGNED → PROTOTYPED → IMPLEMENTED → QA → DONE

---

## 3. Séparation modules (stricte)

| Nom | Rôle |
|-----|------|
| **ARWEN** | Product Owner surface |
| **VIDEO STUDIO** | Module vidéo seul |
| **BRAINSTORMING** | Module créatif seul |
| **JARVIS** | Orchestrateur (délègue, ne remplace pas les 3) |

---

## 4. Lecture IA (ordre)

1. **STATUS.md** (ici)
2. **NEDEN_DESIGN_SOURCE_OF_TRUTH.md**
3. **design/README.md** (registry IDs)
4. `memory/AI_HANDOFF.md`
5. `docs/TOKENS.md` · `SITE_VS_APP.md`
6. `prompts/NEXT_AI_DESIGN.md`
7. App : `Neden-application/CLAUDE.md` + constitution

---

## 5. Backlog

### P0
1. Validation locale `npm i && npm run dev`
2. PNG favicon 120 OAuth
3. GO merge → main + Cloudflare

### P1 — Design system build
4. Contrats écrans app A01–A11 détaillés sous `design/screens/app/`
5. DS-C03 forms → DESIGNED + styles app/site
6. DS-N01 JARVIS states UI contract complet
7. Logo tracks 2–5 exploration

### P2
8. Framer Motion path scrub
9. 001-cv-generator pont template
10. Pass UI Index.html (app repo, Preserve)

---

## 6. Interdits

- Deploy sans GO · inventer faits · vert dominant · secrets Git  
- Mélanger ARWEN / VIDEO / BRAINSTORM / JARVIS  
- Bloquer le build sur Figma Free  
- Rewrite app React sans AD  
- Tailwind preflight ON sans audit

---

## 7. Journal

| Date | Action |
|------|--------|
| 2026-09-04 | SpecKit 002, Home, micro, Tailwind, moodboard, brand SVG |
| 2026-09-05 | Source of Truth + `design/` F01–F06 + C/N registry + isolation modules |

---

## 8. Commandes

```bash
git checkout 002-design-system
npm install && npm run dev
```
