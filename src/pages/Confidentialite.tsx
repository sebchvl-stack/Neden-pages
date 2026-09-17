import { Link } from 'react-router-dom';
import Header from '../components/Header';
import useDocumentMeta from '../hooks/useDocumentMeta';

// Structure (sections numérotées, cartes, badges) reprise du maquettage
// Figma NOLZUnUcR2iFPiu0bAzZjz, page "11- Site internet (temporaire)",
// frame 535:348 — demandé par Sébastien le 13/09/2026. Le FOND reste celui
// déjà approuvé (Neden-application/docs/GUIDE_PAGES_OAUTH_PUBLIQUES.md),
// jamais contredit (constitution, Principe V), mais plusieurs formulations
// du maquette ont été vérifiées puis CORRIGÉES avant d'être reprises :
//
// 1. Scopes OAuth — le maquette affichait "gmail.readonly / gmail.modify",
//    "calendar.events" et "drive.file / drive.readonly". Vérifié contre le
//    vrai manifeste (Neden-application/src/appsscript.json) : les scopes
//    réellement demandés sont gmail.modify (pas de scope readonly séparé),
//    calendar (accès complet, pas seulement .events) et drive (accès
//    complet, pas seulement .file/.readonly) — le maquette SOUS-estimait
//    la portée réelle des scopes, ce qui serait doublement faux sur un
//    document de conformité OAuth. Corrigé ci-dessous aux scopes réels.
//    17/09/2026 — le manifeste réel (Neden-application/appsscript.json)
//    déclare aussi deux scopes techniques Apps Script absents du
//    maquette : script.scriptapp (déclencheurs / ScriptApp) et
//    script.external_request (appels HTTP UrlFetchApp). Documentés
//    honnêtement ci-dessous, sans inventer d'usage au-delà de ce que
//    le code et cette page décrivent déjà.
// 2. "TLS 1.3 / E2E" (badge) — "E2E" (chiffrement de bout en bout) est une
//    revendication cryptographique précise qui ne correspond pas à
//    l'architecture réelle (les données transitent en clair côté serveur
//    Apps Script pour être traitées) — retiré, gardé seulement "TLS" côté
//    transport, sans version épinglée qui ne serait pas vérifiable ici.
// 3. "Révocation immédiate et purge des métadonnées" — reformulé pour
//    distinguer clairement : la révocation d'accès OAuth se fait bien via
//    les paramètres du compte Google de l'utilisateur (réel, vérifiable),
//    mais NEDEN lui-même n'a pas d'outil de purge automatique de ses
//    données Notion — same raison que pour "droits de suppression
//    intégrale" ci-dessous.
// 4. "droits de suppression intégrale de vos informations" — pas repris
//    tel quel : Neden-application/CLAUDE.md est explicite (règle non
//    négociable n°4) : une "suppression" dans Notion est toujours un
//    archivage, jamais une suppression réelle — aucun outil de suppression
//    réelle n'existe. Reformulé pour rester exact.
const SCOPES_GOOGLE = [
  {
    nom: 'Gmail',
    pill: 'gmail.modify',
    justification:
      "Lecture et classification automatisée des emails liés à la recherche d'emploi et aux activités professionnelles entrantes, pour générer un résumé et des étiquettes."
  },
  {
    nom: 'Google Calendar',
    pill: 'calendar',
    justification:
      "Création, lecture et synchronisation d'événements (entretiens, formations, rappels) directement liés à l'organisation personnelle de l'utilisateur unique."
  },
  {
    nom: 'Google Drive',
    pill: 'drive',
    justification:
      "Stockage et indexation des documents générés par l'application (CV, comptes rendus) dans le Drive personnel de son unique utilisateur."
  },
  {
    nom: 'Identité Google',
    pill: 'userinfo.email / userinfo.profile',
    justification: "Identification du compte Google unique autorisé à s'authentifier auprès de l'application."
  },
  {
    nom: 'Apps Script — application et déclencheurs',
    pill: 'script.scriptapp',
    justification:
      "Scope technique de Google Apps Script : il autorise NEDEN à gérer l'application de script elle-même, notamment l'installation et la maintenance de déclencheurs horaires (ScriptApp) qui exécutent les automatisations personnelles de son unique utilisateur. Il n'élargit pas l'accès à Gmail, Calendar ni Drive."
  },
  {
    nom: 'Apps Script — requêtes HTTP externes',
    pill: 'script.external_request',
    justification:
      "Scope technique de Google Apps Script : il autorise NEDEN à effectuer des appels HTTP depuis le script (UrlFetchApp) vers les services externes déjà listés sur cette page (Notion, modèles d'IA) et vers les APIs Google correspondant aux scopes ci-dessus. Il ne constitue pas un accès à des données Google au-delà de ces appels."
  }
];

const ENGAGEMENTS = [
  {
    titre: 'Aucune revente ni location',
    detail: "NEDEN ne vend, ne loue, n'échange ni ne cède aucune donnée à un tiers ou courtier de données."
  },
  {
    titre: 'Zéro monétisation publicitaire',
    detail: "Aucun profilage marketing, pixel publicitaire ni SDK d'analyse commerciale n'est incorporé au système."
  },
  {
    titre: "Pas d'exposition publique",
    detail: "Aucune donnée personnelle issue des APIs Google ne fait l'objet d'un affichage ou d'une diffusion publique."
  },
  {
    titre: "Pas de ré-entraînement IA public",
    detail: "Les données Google ne sont jamais utilisées pour entraîner un modèle d'IA tiers ou accessible publiquement."
  }
];

const SERVICES_TIERS = [
  {
    nom: 'Notion',
    role: 'Stockage structuré des candidatures, tâches et projets — les données déjà présentes dans cet espace de travail personnel.'
  },
  {
    nom: 'Cloudflare (Workers)',
    role: "Terminaison TLS et routage pour le site et l'application, sans conservation de charge utile persistante."
  },
  {
    nom: "Modèles d'IA (Google Gemini, en secours d'autres fournisseurs)",
    role: "Analyse ponctuelle de texte déjà présent dans l'espace de travail — jamais pour entraîner un modèle tiers avec ces données."
  }
];

function SectionCard({
  numero,
  titre,
  children
}: {
  numero: number;
  titre: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card border border-edge rounded-xl p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-secondary font-mono text-xs bg-cardAlt border border-edge rounded-full w-6 h-6 flex items-center justify-center shrink-0">
          {numero}
        </span>
        <h2 className="text-ink font-semibold text-lg">{titre}</h2>
      </div>
      <div className="text-dim text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function Confidentialite() {
  useDocumentMeta(
    'Politique de confidentialité — NEDEN',
    "Ce que NEDEN fait des données Google auxquelles l'application accède, et ce qu'elle n'en fait pas.",
    '/confidentialite'
  );
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="inline-flex items-center gap-2 bg-cardAlt px-3 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          <span className="text-secondary text-xs font-semibold tracking-wide">
            Google OAuth · Document de conformité
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1 text-ink">
          Politique de confidentialité — NEDEN
        </h1>
        <div className="text-dim text-xs mb-8">Dernière mise à jour : 17 septembre 2026</div>

        <p className="text-dim text-sm leading-relaxed mb-8">
          NEDEN est une application <strong className="text-ink">personnelle et à usage unique</strong>,
          conçue, administrée et opérée par Sébastien Cheval pour assister son propre travail
          d'organisation. Elle n'est pas distribuée ni proposée à d'autres utilisateurs. Cette page
          décrit, avec précision et sans détail superflu, quelles données NEDEN utilise et pourquoi.
        </p>

        <div className="grid sm:grid-cols-3 gap-3 mb-10">
          <div className="bg-cardAlt border border-edge rounded-xl p-4">
            <div className="text-xs uppercase tracking-wide text-secondary mb-1">Usage de la plateforme</div>
            <div className="text-ink text-sm font-semibold">Mono-utilisateur</div>
          </div>
          <div className="bg-cardAlt border border-edge rounded-xl p-4">
            <div className="text-xs uppercase tracking-wide text-secondary mb-1">Gouvernance des données</div>
            <div className="text-ink text-sm font-semibold">Zéro revente de données</div>
          </div>
          <div className="bg-cardAlt border border-edge rounded-xl p-4">
            <div className="text-xs uppercase tracking-wide text-secondary mb-1">Garantie chiffrement</div>
            <div className="text-ink text-sm font-semibold">TLS en transit</div>
          </div>
        </div>

        <div className="space-y-6">
          <SectionCard numero={1} titre="Présentation générale et nature de l'application">
            <p>
              NEDEN (accessible via le domaine principal <strong className="text-ink">neden.fr</strong> et
              son application <strong className="text-ink">app.neden.fr</strong>) est un environnement
              personnel d'orchestration et d'automatisation, conçu, administré et opéré exclusivement par
              Sébastien Cheval pour assister sa propre recherche d'emploi et son activité professionnelle.
            </p>
          </SectionCard>

          <SectionCard numero={2} titre="Utilisateur unique et exclusion de tiers">
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong className="text-ink">Usage exclusif</strong> — un seul compte Google autorisé,
                celui du concepteur, Sébastien Cheval.
              </li>
              <li>
                <strong className="text-ink">Absence d'inscriptions publiques</strong> — aucun formulaire
                de création de compte n'est exposé.
              </li>
              <li>
                <strong className="text-ink">Isolement total</strong> — aucune donnée d'un autre
                utilisateur ne transite jamais par l'application, puisqu'il n'y en a pas d'autre.
              </li>
            </ul>
          </SectionCard>

          <SectionCard numero={3} titre="Données Google et justification des scopes OAuth">
            <p className="mb-4">
              Conformément à la Politique relative aux données utilisateur des services d'API Google, la
              demande d'accès aux scopes est strictement limitée aux fonctionnalités requises pour les
              tâches d'orchestration personnelle. Les quatre premiers scopes ci-dessous portent sur des
              données Google de l'utilisateur unique ; les deux derniers sont des scopes techniques
              d'exécution Apps Script, présents dans le manifeste réel de l'application.
            </p>
            <div className="space-y-4">
              {SCOPES_GOOGLE.map((s) => (
                <div key={s.nom} className="bg-cardAlt rounded-lg p-4">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span className="text-ink text-sm font-semibold">{s.nom}</span>
                    <span className="text-secondary text-xs font-mono bg-bg/60 border border-edge rounded px-2 py-0.5">
                      {s.pill}
                    </span>
                  </div>
                  <div className="text-dim text-sm">{s.justification}</div>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard numero={4} titre="Ce que NEDEN ne fait jamais">
            <div className="grid sm:grid-cols-2 gap-3">
              {ENGAGEMENTS.map((e) => (
                <div key={e.titre} className="bg-cardAlt rounded-lg p-4">
                  <div className="text-danger text-sm font-semibold mb-1">{e.titre}</div>
                  <div className="text-dim text-sm">{e.detail}</div>
                </div>
              ))}
            </div>
            <p className="pt-1">
              Ne conserve pas de copie des données Google en dehors de son propre compte Google et de
              son espace Notion personnel.
            </p>
          </SectionCard>

          <SectionCard numero={5} titre="Autres services tiers intégrés">
            <div className="space-y-3">
              {SERVICES_TIERS.map((s) => (
                <div key={s.nom}>
                  <div className="text-ink text-sm font-semibold">{s.nom}</div>
                  <div className="text-dim text-sm">{s.role}</div>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard numero={6} titre="Sécurité, chiffrement et stockage des accès">
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong className="text-ink">Chiffrement au repos</strong> — les jetons de rafraîchissement
                OAuth et les clés d'API sont stockés exclusivement dans l'environnement sécurisé (Script
                Properties) de Google Apps Script, jamais dans le code source.
              </li>
              <li>
                <strong className="text-ink">Chiffrement en transit</strong> — les échanges entre le
                navigateur, les serveurs d'API Google et Cloudflare passent par HTTPS/TLS.
              </li>
              <li>
                <strong className="text-ink">Révocation d'accès</strong> — l'utilisateur unique peut à
                tout moment révoquer l'autorisation OAuth de NEDEN depuis les paramètres de sécurité de
                son propre compte Google (myaccount.google.com/permissions).
              </li>
            </ul>
          </SectionCard>

          <SectionCard numero={7} titre="Contact, représentant et protection des données">
            <p>
              Responsable du traitement : Sébastien Cheval — Application hébergée sur :{' '}
              <a href="https://app.neden.fr" target="_blank" rel="noreferrer" className="text-secondary hover:underline">
                https://app.neden.fr
              </a>
              .
            </p>
            <p>
              Pour toute question sur cette politique, sur les audits d'accréditation OAuth Google, ou
              pour toute demande relative à vos informations (y compris une demande de suppression dans
              Notion — traitée manuellement par le concepteur sous forme d'archivage, NEDEN n'ayant pas
              d'outil de suppression réelle automatique de ses données Notion) :{' '}
              <a href="mailto:sebchvl@gmail.com" className="text-secondary hover:underline">
                sebchvl@gmail.com
              </a>
              .
            </p>
          </SectionCard>

          <SectionCard numero={8} titre="Conservation des données et conformité Google API Services">
            <p>
              <strong className="text-ink">Durée de conservation</strong> — NEDEN ne conserve aucune copie
              séparée des données Google au-delà de leur usage direct : les emails restent dans la boîte
              Gmail de l'utilisateur (l'application y applique des étiquettes, elle ne les copie pas
              ailleurs), les événements sont créés directement dans son propre Google Calendar, et les
              documents restent dans son propre Google Drive. Les seules données dérivées conservées (par
              exemple un résumé ou une étiquette de suivi) le sont dans l'espace Notion personnel de
              l'utilisateur, aussi longtemps que son compte reste actif.
            </p>
            <p className="pt-2 border-t border-edge">
              <strong className="text-ink">Conformité Google API Services User Data Policy</strong> —
              L'utilisation et le transfert, par NEDEN, d'informations reçues des API Google vers toute
              autre application respectent la{' '}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noreferrer"
                className="text-secondary hover:underline"
              >
                Google API Services User Data Policy
              </a>
              , y compris les exigences de{' '}
              <em>Limited Use</em>.
            </p>
            <p className="text-xs text-dim/80 italic">
              NEDEN's use and transfer to any other app of information received from Google APIs will
              adhere to the Google API Services User Data Policy, including the Limited Use requirements.
            </p>
          </SectionCard>
        </div>

        <div className="mt-12 pt-6 border-t border-edge text-sm">
          <Link to="/" className="text-secondary hover:underline">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </>
  );
}
