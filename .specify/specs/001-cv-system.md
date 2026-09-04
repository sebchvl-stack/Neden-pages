# Feature Specification: CV System (mémoires → édition → HTML/CSS → PDF)

**Feature Branch**: design/site-foundation / 001-cv-system
**Created**: 2026-09-04
**Status**: Draft

## User Story 1 — Générer un CV depuis les mémoires (P1)
Sélection titre, KPI, XYZ, compétences, outils → HTML → PDF.

**Acceptance**:
1. Given mémoires, When sélection, Then HTML avec outils Vercel Figma Cloudflare Grok Google AI Studio Perplexity GitHub HubSpot Slack/Discord Mobbin
2. Given preview, When PDF, Then A4 print-friendly

## User Story 2 — Adapter offre (P2)
Coller offre → suggestions titre + ATS + XYZ

## User Story 3 — Template Figma CV/* (P3)
Blocs texte éditables A4

## Requirements
- FR-001: Lire memory/* source de vérité
- FR-002: Sélection blocs
- FR-003: HTML/CSS tokens NEDEN print
- FR-004: Export PDF
- FR-005: Pas d’expérience inventée (constitution VI)
- FR-006: Outils listés inclus si sélectionnés

## Success Criteria
- SC-001: CV < 10 min
- SC-002: Faits traçables memory/
- SC-003: PDF Preview + Adobe OK

## Assumptions
v1 print CSS · Figma quand MCP OK · pas deploy prod sans GO
