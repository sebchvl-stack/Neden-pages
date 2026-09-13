import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta';

// Structure (numérotation d'articles, sommaire) reprise du maquettage Figma
// NOLZUnUcR2iFPiu0bAzZjz, page "11- Site internet (temporaire)", frame
// 535:12 — demandé par Sébastien le 13/09/2026. Le FOND reste celui déjà
// approuvé (Neden-application/docs/GUIDE_PAGES_OAUTH_PUBLIQUES.md) : aucun
// fait ajouté ne contredit ce texte (constitution, Principe V). Le ton plus
// formel du maquette (mentions de poursuites en cas d'intrusion, etc.) est
// repris tel quel — c'est un registre juridique standard de CGU, pas une
// donnée factuelle vérifiable au sens du Principe VI.
const ARTICLES = [
  {
    numero: 1,
    titre: "Objet et champ d'application",
    paragraphes: [
      "Les présentes Conditions Générales d'Utilisation régissent l'accès, la consultation et l'exploitation des services regroupés au sein du domaine neden.fr ainsi que de son sous-domaine applicatif app.neden.fr.",
      "L'écosystème comprend à la fois le site de présentation portfolio de Sébastien Cheval et la plateforme applicative NEDEN, dédiée à l'automatisation et à l'organisation de son activité professionnelle personnelle."
    ]
  },
  {
    numero: 2,
    titre: 'Accès et restriction d’usage',
    paragraphes: [
      "L'application app.neden.fr constitue un espace strictement privé, exclusivement réservé à son concepteur et unique utilisateur, Sébastien Cheval.",
      "Aucun mécanisme d'inscription publique, de souscription commerciale ou d'ouverture d'espace utilisateur pour des personnes tierces n'est proposé.",
      "L'authentification OAuth (Google Identity) est restreinte aux identifiants explicitement autorisés par le concepteur. Toute tentative d'intrusion ou de contournement des protocoles d'accès fera l'objet d'un blocage et, le cas échéant, des suites qu'elle appelle."
    ]
  },
  {
    numero: 3,
    titre: 'Absence de garantie commerciale',
    paragraphes: [
      "NEDEN est un projet personnel en développement continu, fourni tel quel, sans garantie de disponibilité continue, d'exactitude ou d'absence d'erreur — ce n'est pas un service commercial."
    ]
  },
  {
    numero: 4,
    titre: 'Propriété intellectuelle',
    paragraphes: [
      "L'ensemble des éléments composant NEDEN — code source, interfaces, charte graphique, textes, logo — relève de la propriété exclusive de Sébastien Cheval.",
      'Toute reproduction ou extraction non autorisée, intégrale ou partielle, est interdite.'
    ]
  },
  {
    numero: 5,
    titre: 'Évolution et maintenance',
    paragraphes: [
      "L'application fait l'objet de mises à jour et d'évolutions fréquentes, au fil du développement.",
      "Le concepteur se réserve le droit de modifier, restreindre ou interrompre l'accès à tout composant à tout moment, sans préavis — l'usage restant strictement personnel."
    ]
  },
  {
    numero: 6,
    titre: 'Contact & assistance',
    paragraphes: [
      'Pour toute question relative aux présentes conditions ou à l’application :'
    ]
  }
];

export default function Cgu() {
  useDocumentMeta(
    "Conditions d'utilisation — NEDEN",
    "Conditions d'utilisation de NEDEN, l'orchestrateur personnel de Sébastien Cheval.",
    '/cgu'
  );
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-extrabold tracking-tight mb-1">
        Conditions d'utilisation — NEDEN
      </h1>
      <div className="text-dim text-xs mb-8">Dernière mise à jour : 13 septembre 2026</div>

      <p className="text-dim text-sm leading-relaxed mb-8">
        NEDEN est un outil personnel développé et utilisé par une seule personne, Sébastien
        Cheval, pour organiser sa propre recherche d'emploi et son activité professionnelle. Il
        n'est ni distribué, ni vendu, ni proposé à d'autres utilisateurs.
      </p>

      <div className="bg-card border border-edge rounded-2xl p-5 mb-10">
        <div className="text-xs uppercase tracking-wide text-secondary mb-3">Index des articles</div>
        <ol className="text-dim text-sm space-y-1 list-decimal pl-5">
          {ARTICLES.map((a) => (
            <li key={a.numero}>{a.titre}</li>
          ))}
        </ol>
      </div>

      {ARTICLES.map((a) => (
        <div key={a.numero} className="mb-8">
          <h2 className="text-secondary font-bold mb-2">
            {a.numero}. {a.titre}
          </h2>
          {a.paragraphes.map((p, i) => (
            <p key={i} className="text-dim text-sm leading-relaxed mt-2">
              {p}
            </p>
          ))}
        </div>
      ))}

      <p className="text-dim text-sm leading-relaxed">
        <a href="mailto:sebchvl@gmail.com" className="text-secondary hover:underline">
          sebchvl@gmail.com
        </a>
      </p>

      <div className="mt-12 pt-6 border-t border-edge text-sm">
        <Link to="/" className="text-secondary hover:underline">
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
