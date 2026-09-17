import { Link } from 'react-router-dom';
import Header from '../components/Header';
import useDocumentMeta from '../hooks/useDocumentMeta';

// Structure (numérotation d'articles, cartes) reprise du maquettage Figma
// NOLZUnUcR2iFPiu0bAzZjz, page "11- Site internet (temporaire)", frame
// 535:12 — demandé par Sébastien le 13/09/2026. Le FOND reste celui déjà
// approuvé (Neden-application/docs/GUIDE_PAGES_OAUTH_PUBLIQUES.md) : aucun
// fait ajouté ne contredit ce texte (constitution, Principe V). Le ton plus
// formel du maquette (mentions de poursuites en cas d'intrusion, etc.) est
// repris tel quel — c'est un registre juridique standard de CGU, pas une
// donnée factuelle vérifiable au sens du Principe VI.
//
// Non repris du maquette : un badge de version logicielle ("R&D v3.4.1")
// qui ne correspond à aucun numéro de version réellement suivi pour ce
// site — un chiffre inventé n'a pas sa place sur un document contractuel.
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
    titre: "Accès et restriction d'usage",
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
    titre: 'Contact et assistance',
    paragraphes: [
      'Pour toute question relative aux présentes conditions ou à l\'application, vous pouvez vous adresser directement au concepteur :'
    ]
  }
];

export default function Cgu() {
  useDocumentMeta(
    "Conditions d'utilisation — NEDEN",
    "Conditions d'utilisation de NEDEN, l'orchestrateur personnel de Sébastien Cheval.",
    '/cgu/'
  );
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="inline-flex items-center gap-2 bg-cardAlt px-3 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          <span className="text-secondary text-xs font-semibold tracking-wide">
            Documentation légale & cadre opérationnel
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1 text-ink">
          Conditions d'utilisation — NEDEN
        </h1>
        <div className="text-dim text-xs mb-8">Dernière mise à jour : 13 septembre 2026</div>

        <div className="bg-cardAlt border border-edge rounded-xl p-6 mb-8">
          <div className="text-secondary text-sm font-semibold mb-2">Avertissement essentiel</div>
          <p className="text-dim text-sm leading-relaxed">
            L'environnement applicatif <strong className="text-ink">NEDEN</strong> constitue une
            plateforme personnelle développée et administrée à titre privé par{' '}
            <strong className="text-ink">Sébastien Cheval</strong>. Aucun service grand public ou
            adhésion commerciale tierce n'est proposé.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="bg-bg/40 border border-edge rounded-lg px-3 py-2 flex items-center gap-2 text-xs">
              <span className="text-dim">Ouverture aux tiers</span>
              <span className="text-danger font-semibold">Aucune</span>
            </div>
            <div className="bg-bg/40 border border-edge rounded-lg px-3 py-2 flex items-center gap-2 text-xs">
              <span className="text-dim">Nature de l'usage</span>
              <span className="text-secondary font-semibold">Restreint & personnel</span>
            </div>
          </div>
        </div>

        <div className="bg-cardAlt border border-edge rounded-xl p-5 mb-10">
          <div className="text-xs uppercase tracking-wide text-secondary mb-3">Index des articles</div>
          <ol className="text-dim text-sm space-y-1 list-decimal pl-5">
            {ARTICLES.map((a) => (
              <li key={a.numero}>{a.titre}</li>
            ))}
          </ol>
        </div>

        <div className="space-y-4">
          {ARTICLES.map((a) => (
            <div key={a.numero} className="bg-card border border-edge rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-secondary font-mono text-xs bg-cardAlt border border-edge rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                  {a.numero}
                </span>
                <h2 className="text-ink font-semibold text-lg">{a.titre}</h2>
              </div>
              <div className="text-dim text-sm leading-relaxed space-y-3">
                {a.paragraphes.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {a.numero === 6 && (
                  <a href="mailto:sebchvl@gmail.com" className="text-secondary hover:underline">
                    sebchvl@gmail.com
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-cardAlt border border-edge rounded-xl p-6 sm:p-8 mt-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-ink font-semibold">Fin du document contractuel</div>
            <div className="text-dim text-sm mt-1">
              Vous pouvez retourner à l'accueil du portfolio.
            </div>
          </div>
          <Link
            to="/"
            className="bg-edge hover:bg-edgeLight transition-colors text-ink text-sm font-medium px-5 py-2.5 rounded-lg"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </>
  );
}
