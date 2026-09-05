# Design QA checklist — NEDEN

Run before marking a screen **DONE** or before prod GO.

## Dual surface
- [ ] Site uses orange CTA, not indigo-as-default
- [ ] App uses indigo primary, not orange-as-default
- [ ] No full-section green backgrounds

## Modules
- [ ] ARWEN / Video Studio / Brainstorm / JARVIS not mixed in one chrome
- [ ] Nav labels exact

## A11y
- [ ] focus-visible visible
- [ ] prefers-reduced-motion respected
- [ ] Contrast AA on text/muted where possible
- [ ] Form labels associated

## Content
- [ ] No invented KPI / jobs / clients
- [ ] CV/memory map respected (CONTENT_MAP.md)

## Responsive
- [ ] 390 · 768 · 1440 checked
- [ ] Site burger works ≤720

## Motion
- [ ] Max one strong motion idea per section
- [ ] Transform/opacity only for continuous anim

## Security / OAuth site
- [ ] /privacy substantive
- [ ] Homepage public without login
- [ ] Favicon PNG 120 ready for console
