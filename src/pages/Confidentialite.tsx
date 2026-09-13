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
        <div className="text-dim text-xs mb-8">Dernière mise à jour : 13 septembre 2026</div>

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
              tâches d'orchestration personnelle.
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
