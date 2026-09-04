# Feature Specification: Site portfolio neden.fr + point d'entrée app.neden.fr

**Feature Branch**: `001-site-portfolio`

**Created**: 2026-09-04

**Status**: Draft

**Input**: User description: demande de Sébastien Cheval de construire un site portfolio public à neden.fr (profil, compétences, expériences, clients, réalisations, NEDEN) plus un point d'entrée public plus propre pour l'app NEDEN à app.neden.fr, avec obligation de satisfaire les exigences de vérification OAuth de Google.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Google vérifie l'app OAuth NEDEN via ce site (Priority: P1)

En tant que Sébastien, je veux que le vérificateur OAuth de Google (humain
ou automatisé) puisse ouvrir la page d'accueil de neden.fr, comprendre en
la lisant ce que fait l'application NEDEN, retrouver le nom "NEDEN" qui
correspond exactement à l'écran de consentement OAuth, et accéder aux
pages de confidentialité et de conditions sans se connecter — pour que la
vérification OAuth de Google Cloud Console passe enfin, et que le jeton
d'actualisation NEDEN cesse d'expirer tous les 7 jours.

**Why this priority**: C'est le déclencheur direct de cette demande — sans
ce point réglé, NEDEN reste bloqué en mode "Testing" avec une contrainte
opérationnelle récurrente (régénération manuelle du refresh token chaque
semaine).

**Independent Test**: Ouvrir neden.fr, /confidentialite et /cgu dans un
navigateur en navigation privée (sans session connectée) : les 3 pages se
chargent, la page d'accueil nomme "NEDEN" et explique son objet en texte
lisible sans qu'aucune action de connexion ne soit requise.

**Acceptance Scenarios**:

1. **Given** un visiteur non connecté, **When** il ouvre neden.fr, **Then**
   la page se charge et affiche un texte expliquant l'objet de
   l'application NEDEN, sans redirection vers une page de connexion.
2. **Given** un visiteur non connecté, **When** il ouvre neden.fr/confidentialite
   directement (chargement direct de l'URL, pas de navigation depuis
   l'accueil), **Then** la page se charge sans erreur 404 et décrit en
   détail les données Google utilisées et pourquoi.
3. **Given** l'écran de consentement OAuth Google Cloud Console configuré
   avec le nom d'application "NEDEN", **When** on compare ce nom au nom
   affiché sur la page d'accueil de neden.fr, **Then** les deux
   correspondent exactement.

---

### User Story 2 - Un visiteur découvre le profil professionnel de Sébastien (Priority: P1)

En tant que recruteur ou contact professionnel, je veux consulter en une
seule page le profil hybride de Sébastien (compétences par domaine,
expériences, formations/certifications, clients accompagnés, exemples de
réalisations synthétisés, outils maîtrisés, passions), pour évaluer
rapidement son profil sans devoir demander un CV séparé.

**Why this priority**: C'est l'objet premier du site (portfolio
professionnel) — sans contenu réel et honnête, le site ne remplit pas sa
fonction même si l'aspect technique/OAuth est réglé.

**Independent Test**: Faire défiler la page d'accueil de bout en bout et
vérifier que chaque section annoncée (profil, compétences, expériences,
formations, clients, réalisations, outils, passions) est présente et que
tout son contenu correspond à une source réelle fournie par Sébastien
(aucune information inventée).

**Acceptance Scenarios**:

1. **Given** la page d'accueil chargée, **When** un visiteur fait défiler
   jusqu'à la section "Réalisations", **Then** il voit, pour chaque
   réalisation présentée, un client identifié, une image, et une phrase de
   synthèse (formule "X, Y, Z") dont le contenu correspond au texte
   source fourni par Sébastien pour ce client (jamais une phrase
   inventée).
2. **Given** une section de contenu dont la source n'a pas encore été
   fournie par Sébastien, **When** la page est publiée dans cet état,
   **Then** cette section reste absente ou clairement marquée comme en
   attente plutôt que remplie d'un contenu inventé.

---

### User Story 3 - Un visiteur découvre NEDEN, l'application (Priority: P2)

En tant que visiteur intéressé par le travail de Sébastien, je veux lire
une section dédiée à NEDEN (pourquoi ce projet existe, ce qu'il fait
aujourd'hui, les technologies utilisées, des chiffres clés réels, et le
fait qu'il évolue en continu), avec des liens vers le Discord et le
LinkedIn de Sébastien, pour comprendre l'ampleur de ce projet personnel et
pouvoir le suivre.

**Why this priority**: Renforce la crédibilité professionnelle (démontre
une pratique agile réelle sur un projet personnel de grande ampleur), mais
n'est pas bloquant pour la vérification OAuth (P1) ni pour la lisibilité
générale du profil (P1).

**Independent Test**: Faire défiler jusqu'à la section NEDEN et vérifier
que chaque chiffre affiché correspond à une donnée déjà vérifiée ailleurs
dans la documentation du projet NEDEN (jamais un chiffre inventé pour
l'occasion), et que les liens Discord/LinkedIn pointent vers de vraies
URLs fournies par Sébastien.

**Acceptance Scenarios**:

1. **Given** la section NEDEN affichée, **When** un visiteur clique sur le
   lien Discord ou LinkedIn, **Then** il est dirigé vers le vrai compte de
   Sébastien.
2. **Given** un chiffre clé affiché dans cette section (ex: nombre de
   modules, de fonctionnalités), **When** on le compare à la documentation
   interne du projet NEDEN, **Then** il correspond à une valeur déjà
   établie, jamais approximée pour l'occasion.

---

### User Story 4 - Sébastien retrouve l'application NEDEN via un lien propre (Priority: P3)

En tant que Sébastien, je veux atteindre l'application NEDEN via
`app.neden.fr` plutôt que via la longue URL `script.google.com/macros/...`,
pour un lien plus simple à partager et à retenir.

**Why this priority**: Confort d'usage réel mais non bloquant — l'URL
Apps Script actuelle continue de fonctionner en attendant ; ce n'est pas
lié à la vérification OAuth.

**Independent Test**: Ouvrir `app.neden.fr` dans un navigateur et vérifier
qu'il affiche bien l'application NEDEN (identique à l'ouverture directe de
l'URL Apps Script), sans étape intermédiaire visible.

**Acceptance Scenarios**:

1. **Given** `app.neden.fr` configuré, **When** un visiteur l'ouvre,
   **Then** il voit l'interface NEDEN comme s'il avait ouvert l'URL Apps
   Script directement.

---

### Edge Cases

- Que se passe-t-il si un visiteur charge directement `/confidentialite`
  ou `/cgu` sans passer par l'accueil (lien direct, ou robot de
  vérification Google) ? → Doit se charger normalement, pas d'erreur 404
  (déjà couvert par User Story 1, scénario 2).
- Que se passe-t-il pour une section de contenu dont la source n'est pas
  encore fournie au moment de la mise en ligne initiale ? → Ne doit
  jamais afficher un contenu inventé à sa place (couvert par User Story 2,
  scénario 2) ; reste absente ou visiblement en attente jusqu'à réception
  de la source.
- Que se passe-t-il si un logo client n'a pas encore été fourni ? → Le nom
  du client peut être affiché en texte, sans logo inventé ou générique à
  sa place.
- Que se passe-t-il si `app.neden.fr` n'est pas encore configuré (avant
  action de Sébastien côté Cloudflare) ? → L'URL Apps Script existante
  reste la référence fonctionnelle ; rien ne doit se rompre côté NEDEN en
  attendant.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: La page d'accueil DOIT être accessible sans authentification
  et expliquer en texte lisible l'objet de l'application NEDEN.
- **FR-002**: Le nom "NEDEN" affiché sur la page d'accueil DOIT
  correspondre exactement au nom configuré sur l'écran de consentement
  OAuth Google Cloud Console.
- **FR-003**: Les pages de confidentialité et de conditions d'utilisation
  DOIVENT être accessibles par URL directe (chargement/rechargement direct
  de l'URL) sans authentification et sans erreur.
- **FR-004**: Le contenu des pages de confidentialité et de conditions
  DOIT rester fidèle aux faits déjà validés par Sébastien (ce que NEDEN
  fait réellement des données Google), en approfondissant le niveau de
  détail attendu par Google plutôt qu'en le contredisant.
- **FR-005**: La page d'accueil DOIT présenter, dans l'ordre : profil,
  compétences par domaine, expériences professionnelles, formations et
  certifications, clients accompagnés, exemples de réalisations
  synthétisées, outils, passions, une section NEDEN, puis un pied de page
  avec les liens vers les pages de confidentialité et de conditions.
- **FR-006**: Chaque réalisation présentée DOIT citer un client réel et
  résumer le projet en une phrase suivant la structure "objectif atteint,
  résultat mesuré, méthode employée", sourcée depuis le contenu réel
  fourni par Sébastien pour ce projet — jamais reformulée au point de
  déformer les faits sources, jamais inventée en l'absence de source.
- **FR-007**: Le système NE DOIT JAMAIS publier de contenu biographique,
  professionnel, client, ou chiffré (expériences, certifications,
  compétences, chiffres clés, historique NEDEN) qui n'est pas directement
  traçable à une source fournie par Sébastien.
- **FR-008**: Une section dont la source n'est pas encore disponible DOIT
  rester absente de la page publiée, ou clairement marquée comme en
  attente dans le contenu — jamais remplie d'un contenu vraisemblable mais
  non sourcé.
- **FR-009**: Les liens Discord et LinkedIn affichés dans la section NEDEN
  DOIVENT pointer vers les comptes réels de Sébastien.
- **FR-010**: Le site DOIT rester utilisable et lisible sur mobile, tablette
  et ordinateur (aucune section illisible ou coupée selon la taille
  d'écran).
- **FR-011**: `app.neden.fr` DOIT afficher l'application NEDEN existante
  (Google Apps Script) de façon équivalente à l'accès direct par son URL
  actuelle, une fois la configuration réseau nécessaire effectuée par
  Sébastien.

### Key Entities

- **Section de contenu** : un bloc du site (profil, compétence, formation,
  client, réalisation, outil, passion, élément NEDEN) — a un statut
  (publié avec source réelle / en attente de source) et ne doit jamais
  passer à "publié" sans une source réelle rattachée.
- **Client accompagné** : nom, logo (optionnel tant que non fourni), et
  éventuellement un lien vers une réalisation associée.
- **Réalisation** : client associé, titre, image, phrase de synthèse
  (objectif/résultat/méthode), sourcée depuis le contenu réel fourni pour
  ce projet.
- **Page légale** : confidentialité ou conditions d'utilisation — contenu
  sourcé depuis le texte déjà approuvé par Sébastien, accessible sans
  authentification par URL directe.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: La vérification OAuth Google Cloud Console pour NEDEN passe
  sans nouveau rejet lié à la page d'accueil, à la page de confidentialité,
  au nom de l'application, ou à l'exigence de connexion.
- **SC-002**: Les 3 pages (accueil, confidentialité, conditions) se
  chargent sans erreur en moins de 3 secondes sur une connexion standard,
  y compris par rechargement direct de leur URL.
- **SC-003**: 100% du contenu biographique, professionnel, client et
  chiffré publié sur le site est traçable à une source fournie par
  Sébastien — aucune information inventée ne subsiste après revue.
- **SC-004**: Le site reste pleinement lisible et utilisable sans
  défilement horizontal ni contenu coupé sur un écran de largeur mobile
  (~375px) comme sur un écran de bureau large.
- **SC-005**: Une fois `app.neden.fr` configuré par Sébastien, l'ouverture
  de ce lien donne accès à NEDEN en une seule étape, sans URL intermédiaire
  visible plus longue à retenir.

## Assumptions

- **Mise à jour 04/09/2026** : Sébastien a fourni 4 CV réels (versions Product
  Manager/Extarnic, Product & Digital Leader/HelloWork, Directeur de Projet
  Satisfaction Client/Callity, Directeur de Projet Outils Métier &
  Infrastructure/Proxiad) + un export MesCompétences (docx). Profil,
  Compétences par domaine, Expériences professionnelles, Formations &
  certifications (texte — logos toujours en attente), Outils, Passions et
  Chiffres clés sont maintenant publiés sur `Home.tsx`, synthétisés à partir
  des éléments communs aux 4 CV (les 4 versions s'accordent sur les faits —
  poste/dates chez Cyberscope, formation, ancienneté — et diffèrent
  seulement par l'angle mis en avant selon l'offre visée). Un document
  d'orientation professionnelle (bilan de compétences, tests de
  personnalité type Big Five/RIASEC, éléments de vie privée) a été transmis
  dans le même lot mais volontairement **pas utilisé** : hors périmètre
  d'un portfolio public, à la différence des CV qui sont déjà conçus pour
  être partagés à des tiers (constitution, Principe I/II).
- **Mise à jour 04/09/2026** : Sébastien a fourni des captures cyberscope.fr
  (cyberscope.fr reste inaccessible depuis cet environnement de
  développement) couvrant 8 réalisations avec du contenu exploitable — KNAUF,
  Le Huddl, AC Grains, Vivien Paillé, SPI Informatique, CFA 2S, LPO France,
  Libellud — publiées sur `Home.tsx` (`REALISATIONS`, formule "X, Y, Z").
  `gmp-lamotte`, prévu dans le brief d'origine, n'apparaît dans aucune
  capture reçue — reste en attente plutôt que fabriqué. Images des
  réalisations : toujours en attente.
- Restent en attente : biographie/profil approfondi au-delà du CV (si
  Sébastien veut aller plus loin), logos des formations/certifications,
  logos des clients cités, images des réalisations, le contenu de
  `gmp-lamotte` (cyberscope.fr), l'historique/pourquoi de NEDEN, et les URLs
  Discord/LinkedIn réels. Tant que ces sources ne sont pas reçues, les
  sections correspondantes restent en attente plutôt que publiées avec un
  contenu approximatif.
- Les chiffres clés cités dans la section NEDEN proviennent exclusivement
  de données déjà établies dans la documentation existante du projet
  NEDEN (docs/BILAN_2026-09-03.md, MEMORY.md du dépôt Neden-application) —
  jamais recalculés ou estimés pour cette page.
- Le contenu des pages de confidentialité et de conditions part du texte
  déjà rédigé et approuvé par Sébastien (docs/GUIDE_PAGES_OAUTH_PUBLIQUES.md
  du dépôt Neden-application), enrichi si besoin pour répondre au niveau
  de détail exigé par Google, sans jamais le contredire.
- La configuration réseau nécessaire pour que `app.neden.fr` fonctionne
  réellement (DNS, routage) est une action que seul Sébastien peut
  effectuer sur son compte Cloudflare — hors périmètre de ce qui peut être
  réalisé automatiquement.
- La vérification de propriété du domaine neden.fr auprès de Google
  (Search Console) est également une action que seul Sébastien peut
  effectuer sur ses comptes Google/Cloudflare.
- La refonte visuelle de l'application NEDEN elle-même (dépôt
  Neden-application, distinct de ce site) est hors périmètre de cette
  spécification.
