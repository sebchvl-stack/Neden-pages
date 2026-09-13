import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta';

// Fond repris tel quel du texte déjà approuvé par Sébastien
// (Neden-application/docs/GUIDE_PAGES_OAUTH_PUBLIQUES.md) — jamais
// contredit (constitution, Principe V). Structure élargie (sommaire de
// conformité, tableau de justification par scope Google, section
// "engagements") reprise du maquettage Figma NOLZUnUcR2iFPiu0bAzZjz, page
// "11- Site internet (temporaire)", frame 535:348, à la demande explicite
// de Sébastien le 13/09/2026.
//
// Une formulation du maquette n'est PAS reprise telle quelle : "droits de
// suppression intégrale de vos informations" laissait entendre un vrai
// delete disponible sur demande. Or Neden-application/CLAUDE.md est
// explicite (règle non négociable n°4) : une "suppression" dans Notion est
// toujours un archivage, jamais une suppression réelle — aucun outil de
// suppression réelle n'existe. Reformulé ci-dessous pour rester exact :
// on peut contacter Sébastien à ce sujet, sans promettre une capacité
// technique qui n'existe pas.
const SCOPES_GOOGLE = [
  {
    nom: 'Gmail (lecture et classement)',
    justification:
      "Lecture et classification automatisée des emails liés à la recherche d'emploi et aux activités professionnelles, pour générer un résumé et des étiquettes."
  },
  {
    nom: 'Google Calendar',
    justification:
      'Création et lecture d’événements (entretiens, formations, rappels) directement liés à son organisation personnelle.'
  },
  {
    nom: 'Google Drive',
    justification:
      'Stockage et indexation des documents générés par l’application (CV, comptes rendus) dans le Drive personnel de son unique utilisateur.'
  }
];

const ENGAGEMENTS = [
  "Ne vend, ne loue, n'échange ni ne cède aucune donnée à un tiers ou courtier de données.",
  "N'intègre aucun profilage marketing, pixel publicitaire ni SDK d'analyse commerciale.",
  "N'affiche ni ne diffuse publiquement aucune donnée personnelle issue des APIs Google.",
  "N'utilise jamais les données Google pour entraîner un modèle d'IA tiers ou accessible publiquement."
];

export default function Confidentialite() {
  useDocumentMeta(
    'Politique de confidentialité — NEDEN',
    "Ce que NEDEN fait des données Google auxquelles l'application accède, et ce qu'elle n'en fait pas.",
    '/confidentialite'
  );
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-extrabold tracking-tight mb-1">
        Politique de confidentialité — NEDEN
      </h1>
      <div className="text-dim text-xs mb-8">Dernière mise à jour : 13 septembre 2026</div>

      <p className="text-dim text-sm leading-relaxed mb-6">
        NEDEN est une application <strong className="text-ink">personnelle et à usage unique</strong>,
        conçue, administrée et opérée par Sébastien Cheval pour assister son propre travail
        d'organisation. Elle n'est pas distribuée ni proposée à d'autres utilisateurs. Cette page
        décrit, honnêtement et sans détail superflu, quelles données NEDEN utilise et pourquoi.
      </p>

      <div className="grid sm:grid-cols-3 gap-3 mb-8">
        <div className="bg-card border border-edge rounded-xl p-4">
          <div className="text-xs uppercase tracking-wide text-secondary mb-1">Usage de la plateforme</div>
          <div className="text-dim text-xs">Usage strictement privé, sans inscription publique.</div>
        </div>
        <div className="bg-card border border-edge rounded-xl p-4">
          <div className="text-xs uppercase tracking-wide text-secondary mb-1">Gouvernance des données</div>
          <div className="text-dim text-xs">Aucun partage publicitaire, commercial ou tiers.</div>
        </div>
        <div className="bg-card border border-edge rounded-xl p-4">
          <div className="text-xs uppercase tracking-wide text-secondary mb-1">Garantie chiffrement</div>
          <div className="text-dim text-xs">Clés sécurisées dans Google Script Properties.</div>
        </div>
      </div>

      <h2 className="text-secondary font-bold mt-8 mb-2">Qui utilise cette application</h2>
      <p className="text-dim text-sm leading-relaxed">
        Une seule personne : Sébastien Cheval, à la fois développeur et unique utilisateur. Aucun
        compte tiers n'y accède.
      </p>
      <ul className="text-dim text-sm leading-relaxed mt-3 space-y-1.5 list-disc pl-5">
        <li>
          <strong className="text-ink">Usage exclusif</strong> — un seul compte Google autorisé,
          celui du concepteur.
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

      <h2 className="text-secondary font-bold mt-8 mb-2">Données Google utilisées et pourquoi</h2>
      <p className="text-dim text-sm leading-relaxed mb-3">
        Conformément à la Politique relative aux données utilisateur des services d'API Google, la
        demande d'accès aux scopes est strictement limitée aux fonctionnalités requises pour les
        tâches d'orchestration personnelle.
      </p>
      <div className="bg-card border border-edge rounded-2xl p-5 space-y-4">
        {SCOPES_GOOGLE.map((s) => (
          <div key={s.nom}>
            <div className="text-ink text-sm font-semibold mb-1">{s.nom}</div>
            <div className="text-dim text-sm">{s.justification}</div>
          </div>
        ))}
      </div>

      <h2 className="text-secondary font-bold mt-8 mb-2">Ce que NEDEN ne fait jamais</h2>
      <ul className="list-disc pl-5 text-dim text-sm space-y-1.5">
        {ENGAGEMENTS.map((e) => (
          <li key={e}>{e}</li>
        ))}
        <li>Ne conserve pas de copie des données Google en dehors de son propre compte Google et de son espace Notion personnel.</li>
      </ul>

      <h2 className="text-secondary font-bold mt-8 mb-2">Autres services utilisés</h2>
      <p className="text-dim text-sm leading-relaxed">
        NEDEN s'appuie aussi sur Notion (stockage structuré de ses candidatures, tâches et
        projets) et, ponctuellement, sur des modèles d'IA (Google Gemini et, en secours, d'autres
        fournisseurs) pour analyser du texte déjà présent dans son propre espace de travail —
        jamais pour entraîner un modèle tiers avec ses données.
      </p>

      <h2 className="text-secondary font-bold mt-8 mb-2">Sécurité</h2>
      <p className="text-dim text-sm leading-relaxed">
        L'application est hébergée sur Google Apps Script, protégée par une authentification
        propre à son unique utilisateur. Les clés d'accès aux services externes sont stockées de
        façon chiffrée côté Google (Script Properties), jamais dans le code source.
      </p>

      <h2 className="text-secondary font-bold mt-8 mb-2">Contact</h2>
      <p className="text-dim text-sm leading-relaxed">
        Pour toute question sur cette politique, sur les audits d'accréditation OAuth Google, ou
        pour toute demande relative à vos informations (y compris une demande de suppression —
        traitée manuellement par le concepteur, NEDEN n'ayant pas d'outil de suppression
        automatique de ses données Notion) :{' '}
        <a href="mailto:sebchvl@gmail.com" className="text-secondary hover:underline">
          sebchvl@gmail.com
        </a>
        .
      </p>

      <div className="mt-12 pt-6 border-t border-edge text-sm">
        <Link to="/" className="text-secondary hover:underline">
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
