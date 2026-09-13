# Finaliser le domaine et valider Google OAuth — guide pas à pas

Ce guide corrige les deux blocages trouvés le 13/09/2026 :
1. `neden.fr` (le domaine "officiel") renvoie une erreur SSL et ne charge pas.
2. Google Cloud Console pointe vers `site.neden.fr`, un domaine qui n'est
   pas déclaré comme autorisé.

Une fois ces deux points réglés, **tout le reste est déjà automatique** :
chaque `git push` sur `neden-pages` republie le site tout seul (Cloudflare
est branché en direct sur le dépôt GitHub), et le workflow
`.github/workflows/cloudflare.yml` maintient les réglages de sécurité
Cloudflare et le Worker `app.neden.fr` sans intervention. Il n'y a **aucun
script à relancer** après ce guide — seulement des réglages à poser une
fois, au clic, dans deux tableaux de bord (Cloudflare et Google).

Prévoir 15-20 minutes. Chaque étape dit exactement où cliquer.

---

## Partie A — Réparer neden.fr sur Cloudflare

### A1. Vérifier si neden.fr est déjà rattaché à un autre projet

1. Va sur [dash.cloudflare.com](https://dash.cloudflare.com) → connecte-toi.
2. Dans le menu de gauche, clique **Workers & Pages**.
3. Tu vas voir une liste de projets. Cherche s'il y a **deux entrées**
   différentes qui pourraient concerner le site (par exemple un ancien
   projet de type "Pages" en plus du projet **`neden-pages`**).
   - S'il y a un ancien projet Pages distinct de `neden-pages` : ouvre-le,
     va dans son onglet **Custom domains** (ou "Domaines personnalisés"),
     et regarde si `neden.fr` y est listé. Si oui, **note-le** — on le
     retirera à l'étape A3 avant de le rajouter au bon endroit.
   - S'il n'y a qu'un seul projet (`neden-pages`), passe directement à
     l'étape A2.

### A2. Regarder les domaines actuellement rattachés à `neden-pages`

1. Clique sur le projet **`neden-pages`**.
2. Va dans l'onglet **Settings** (Paramètres) → **Domains & Routes**
   (Domaines et routes).
3. Tu devrais voir `site.neden.fr` dans la liste (celui qui fonctionne
   aujourd'hui). Regarde si `neden.fr` y figure aussi.
   - **S'il n'y est pas** → c'est la cause du problème. Passe à A3.
   - **S'il y est déjà** mais que le site ne charge quand même pas →
     c'est un souci de certificat SSL en cours d'émission ou de DNS ;
     regarde le petit statut à côté du domaine (souvent "Active",
     "Pending", ou une icône d'erreur) et attends 5-10 minutes avant de
     réessayer `https://neden.fr` dans le navigateur.

### A3. Rattacher neden.fr au bon projet

1. Toujours dans `neden-pages` → **Settings** → **Domains & Routes**.
2. Clique **+ Add** (ou **+ Custom Domain**).
3. Tape `neden.fr` (sans `https://`, sans `www.`).
4. Valide. Cloudflare va :
   - Vérifier que le domaine est bien sur sa zone (il l'est déjà, DNS
     géré par Cloudflare).
   - Émettre automatiquement un certificat SSL pour ce domaine — ça peut
     prendre de quelques secondes à quelques minutes.
5. **Si Cloudflare refuse** en disant que le domaine est "déjà utilisé"
   ou "already in use" par un autre projet : c'est le vieux projet Pages
   repéré à l'étape A1. Il faut d'abord aller le détacher là-bas
   (ouvrir ce projet → Custom domains → supprimer `neden.fr`), puis
   revenir ici et refaire cette étape A3.
6. (Optionnel mais conseillé) Ajoute de la même façon `www.neden.fr`, pour
   que les deux adresses fonctionnent.

### A4. Vérifier que ça marche

Attends 2-3 minutes après l'ajout, puis :
- Ouvre `https://neden.fr` dans le navigateur (dans un onglet privé, pour
  être sûr de ne pas voir une vieille page en cache).
- Tu dois voir le même site que sur `site.neden.fr` (header "Sébastien
  Cheval", nav Accueil/Confidentialité/CGU).
- Si tu as encore l'erreur "SSL handshake failed" après 10 minutes,
  redonne-moi une capture — ça voudrait dire qu'il reste un enregistrement
  DNS conflictuel qu'il faut examiner dans l'onglet **DNS** du domaine
  `neden.fr` (pas du projet, du domaine lui-même, dans le menu principal
  Cloudflare).

---

## Partie B — Corriger Google Cloud Console

*(À faire seulement une fois que la Partie A fonctionne — `neden.fr`
doit charger correctement avant de changer les URLs dans Google, sinon
Google va re-tester une URL cassée et re-rejeter.)*

### B1. Mettre à jour les 3 URLs

1. Va sur [console.cloud.google.com](https://console.cloud.google.com).
2. Menu de gauche : **Google Auth Platform** → **Branding**.
3. Dans la section **Domaine de l'application**, remplace dans chacun des
   3 champs `site.neden.fr` par `neden.fr` :
   - **Page d'accueil de l'application** → `https://neden.fr`
   - **Lien vers les règles de confidentialité** → `https://neden.fr/confidentialite`
   - **Lien vers les conditions d'utilisation** → `https://neden.fr/cgu`
4. Clique **Enregistrer** (ou l'équivalent en bas de la page).

Le champ **Domaines autorisés** contient déjà `neden.fr` — pas besoin d'y
toucher, c'est justement pour ça que le choix de repasser sur `neden.fr`
(plutôt que d'ajouter `site.neden.fr` comme second domaine autorisé) est
le plus simple : un seul domaine à gérer, cohérent avec le reste du
projet (tous les fichiers du dépôt `neden-pages` parlent de `neden.fr`).

### B2. Vérifier l'état de validation

1. Toujours sur la page **Branding**, regarde le bloc **État de
   validation** à droite.
2. Clique **Afficher les problèmes** (ou relance une vérification si le
   bouton le propose) pour voir si les 4 erreurs d'avant ont disparu.
3. Il est possible qu'un message de vérification de domaine réapparaisse
   — c'est normal, direction la Partie C.

---

## Partie C — Vérifier la propriété du domaine (Google Search Console)

Google doit confirmer que `neden.fr` t'appartient vraiment, séparément de
la config OAuth ci-dessus.

1. Va sur [search.google.com/search-console](https://search.google.com/search-console).
2. **Ajouter une propriété** → choisis le type **Domaine** (pas
   "Préfixe d'URL") et tape `neden.fr`. Le type "Domaine" est important :
   il couvre automatiquement `neden.fr`, `www.neden.fr` ET
   `site.neden.fr` en une seule vérification, plutôt que de devoir
   vérifier chaque sous-domaine séparément.
3. Google te donne un enregistrement **TXT** à ajouter (une ligne de texte
   du genre `google-site-verification=xxxxxxxx`).
4. Va sur Cloudflare → domaine `neden.fr` → onglet **DNS** → **Add
   record** :
   - Type : `TXT`
   - Nom : `@` (représente le domaine racine)
   - Contenu : colle exactement la valeur donnée par Google
   - Enregistre.
5. Reviens sur Search Console, clique **Vérifier**. Ça peut prendre
   quelques minutes pour que Google voie le nouvel enregistrement DNS.

---

## Partie D — Revalider l'écran de consentement OAuth

1. Retour sur **Google Cloud Console → Google Auth Platform**.
2. Cherche l'onglet **Centre de validation** (ou le bouton de
   soumission pour vérification, selon l'endroit où Google l'affiche
   maintenant).
3. Soumets à nouveau la demande de validation.
4. Google review ça sous plusieurs jours en général (pas instantané) —
   pas d'inquiétude si rien ne change dans l'heure.

---

## Checklist finale

- [ ] `https://neden.fr` charge sans erreur (testé en navigation privée)
- [ ] `https://neden.fr/confidentialite` et `/cgu` chargent aussi
- [ ] Les 3 URLs dans Google Cloud Console → Branding utilisent `neden.fr`
- [ ] Propriété `neden.fr` vérifiée dans Search Console (type **Domaine**)
- [ ] Nouvelle demande de validation soumise dans Google Auth Platform

## Ce qui reste automatique après ça, sans rien faire

- **Chaque `git push` sur `neden-pages`** republie le site tout seul —
  Cloudflare surveille le dépôt GitHub directement (Workers Builds), pas
  besoin de commande à lancer.
- **`.github/workflows/cloudflare.yml`** maintient les réglages de
  sécurité de la zone et redéploie le Worker `app.neden.fr` à chaque
  changement pertinent — voir `docs/CLOUDFLARE.md` pour le détail.
- Le seul cas qui redemandera une intervention manuelle : si tu changes
  encore une fois de nom de domaine, ou si `APPS_SCRIPT_EXEC_URL` doit
  être mis à jour après un nouveau déploiement Apps Script (voir
  `docs/CLOUDFLARE.md`, section "Ce qui reste manuel").
