# App NEDEN — wireframes / écrans (spec)

Surface produit distincte du site : fond `#0B1120`, primary indigo `#6366F1`, cyan data, vert succès seulement.

## Shell

**Mobile 390**
- Bottom tabs : Accueil · Candidatures · Tâches · JARVIS · Plus
- Top bar : titre écran + actions contextuelles

**Desktop 1440**
- Sidebar 240px : logo N, nav, profil bas
- Main canvas fluid

## Écrans

| ID | Écran | Contenu clé |
|----|-------|-------------|
| A01 | Dashboard | KPI jour, prochaines actions, FAB |
| A02 | Candidatures | Liste + filtres statut |
| A03 | Candidature détail | Timeline, score, CV versions, notes |
| A04 | Tâches | Liste / groupes priorité |
| A05 | Agenda | Events Calendar |
| A06 | Documents | Drive browser |
| A07 | Business | Projets |
| A08 | Formations | Suivi |
| A09 | Réglages | Auth, FT, Discord, Notion |
| A10 | JARVIS | Chat + micro/fichier audio + états idle/listen/speak |
| A11 | CV Editor | Split params (titre, keywords, XYZ) / preview A4 + export PDF |

## JARVIS états UI
- idle : orb cyan faible pulse
- listening : waveform
- speaking : glow indigo
- error : soft danger text

## Lien code
Implémentation réelle : `Neden-application` → `src/backend/Index.html` + modules `.gs`  
Ne pas réécrire en React sans décision d’architecture (Constitution V).
