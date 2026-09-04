<!--
Sync Impact Report
Version change: (none) → 1.0.0
Modified principles: n/a (initial ratification)
Added sections: Core Principles (I-VIII), Technology & Deployment Constraints, Content Sourcing Workflow, Governance
Removed sections: none
Deferred/TODO: none — all placeholders resolved from user-supplied context (2026-09-04)
-->

# Neden-pages Constitution

## Purpose

This constitution governs `Neden-pages` (neden.fr / app.neden.fr) — a public,
personal portfolio and marketing website for Sébastien Cheval, built with
React + Vite + React Router and deployed to Cloudflare Pages. It is a
**separate project** from `Neden-application` (the NEDEN backend, Google
Apps Script): different tech stack, different risk profile (public repo,
no secrets, no backend), different purpose (public-facing content, not
personal-use automation). Do not import `Neden-application`'s constitution
here — its principles (Notion as source of truth, GAS architecture
preservation, etc.) do not apply to a static site.

This site serves two purposes at once, and both must hold simultaneously:
1. A real, well-crafted personal portfolio (profile, skills, experience,
   certifications, client realizations, the NEDEN app itself).
2. The public homepage/privacy/terms pages Google's OAuth verification
   requires for the NEDEN backend app — reachable without login, explains
   the app's purpose, app name matches, domain ownership verifiable.

## Core Principles

### I. Never Fabricate Biographical or Professional Content

Profile text, work experience, certifications, skills, and client project
descriptions MUST come only from source material Sébastien actually
provides — his real CV data, job postings, screenshots, or case-study text
he supplies (e.g. from cyberscope.fr). Nothing about his career, results,
or a client engagement may be invented, embellished, or extrapolated
beyond what the source material states. This mirrors Principe VI of the
`Neden-application` constitution (no fabricated data) applied to public
personal content, where the cost of getting it wrong is public and
reputational rather than just internal.

### II. Sourced Content or Explicit Placeholder — Never a Fabricated Stand-In

A client logo, project name, or case-study block is only published once
real sourced content exists for it. Until then, the corresponding section
is either omitted or marked with a clear internal placeholder/TODO — never
filled with an invented "example" case study that could pass as real.

### III. Fully Static, No Secrets, Public Repository

This repository is public and ships only static build output (Vite). It
MUST NEVER contain API keys, tokens, credentials, or any secret — there is
no backend here to protect, and nothing sensitive belongs in the client
bundle either. Any integration that would require a secret (e.g. a form
handler, an API proxy) MUST be designed to keep that secret outside this
repo (a Cloudflare Worker with its own encrypted binding, not inline code).

### IV. SPA Correctness on Cloudflare Pages

Because this is a single-page app (React Router), a `public/_redirects`
file (or equivalent Cloudflare Pages routing config) redirecting all paths
to `index.html` (200 rewrite, not a redirect) is MANDATORY and MUST ship
with the first deployable build. Without it, a direct load or reload of
any route other than `/` (including `/confidentialite`, `/cgu` — exactly
the URLs Google's OAuth verifier will hit) 404s.

### V. OAuth-Compliant Legal Pages, Kept Factually Accurate

The Confidentialité (privacy) and CGU (terms) pages must satisfy Google's
stated OAuth verification requirements: the privacy page describes data
collection/use in sufficient detail, the homepage explains the app's
purpose without requiring login, and the application name shown matches
"NEDEN" exactly. Their content originates from the text already drafted
and approved by Sébastien in `Neden-application/docs/
GUIDE_PAGES_OAUTH_PUBLIQUES.md` — that text is the factual baseline for
what NEDEN actually does with Google data; expanding it for a richer site
must not contradict or misrepresent that baseline.

### VI. Design Quality Bar — Crafted, Not Templated

This site is explicitly meant to read as a heavily-crafted, modern,
animated one-page portfolio — not a generic template. It follows a
graphic charter and named animation/interaction inspiration Sébastien
provides, is 100% responsive, and is built mobile-first. A generic,
undifferentiated layout is a constitution violation, not a style
preference.

### VII. Human Action Required for Account-Level Steps

No agent may perform, or claim to have performed, an action that requires
access to an account Sébastien controls: Cloudflare DNS changes, Cloudflare
Pages project/domain configuration, Google Search Console domain
verification, production deploys that go live on neden.fr. An agent may
prepare everything needed (code, config, exact step-by-step instructions)
but the account-level action itself is Sébastien's to execute, and requires
his explicit GO beforehand — consistent with `Neden-application`'s Règle 1
("jamais de déploiement sans GO explicite").

### VIII. Spec-Driven Development

Significant implementation work (new pages, major structural or design
changes, new integrations) is preceded by a spec (`spec.md`) via Spec Kit,
the same discipline used in `Neden-application`. Small fixes, copy edits,
and content updates from newly-supplied source material do not require a
full spec cycle each time.

## Technology & Deployment Constraints

- Stack: React + Vite + React Router, deployed to Cloudflare Pages.
- Domain: `neden.fr` (registrar IONOS, DNS at Cloudflare) for the portfolio
  site; `app.neden.fr` is reserved for a cleaner public entry point to the
  NEDEN Apps Script web app (via a Cloudflare Worker reverse proxy — GAS
  itself cannot serve a custom domain directly).
- No server-side rendering, no database, no user accounts — a static site
  plus, if ever needed, isolated Cloudflare Workers/Functions for specific
  integrations, each with its own least-privilege secret binding.

## Content Sourcing Workflow

Because Principle I forbids fabrication, content work on this repo follows
a strict sequence per section: (1) identify what real source material is
needed, (2) obtain it from Sébastien (files, pasted text, or a source he
names), (3) only then write the copy, staying traceable to that source.
Sections without source material yet are tracked openly (e.g. in the
feature spec's task list) rather than silently skipped or invented around.

## Governance

This constitution supersedes ad hoc practice for this repository. Any
amendment requires: a stated reason, a version bump per semantic
versioning (MAJOR for incompatible principle removal/redefinition, MINOR
for a new principle or materially expanded guidance, PATCH for wording/
clarification), and Sébastien's explicit ratification (per Principle VII,
he is the sole owner of this project). Every spec produced for this repo
must be checked against these principles before implementation begins.

**Version**: 1.0.0 | **Ratified**: 2026-09-04 | **Last Amended**: 2026-09-04
