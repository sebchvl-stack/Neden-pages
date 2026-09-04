import { Link } from 'react-router-dom';

// Contenu repris tel quel (fond) du texte déjà rédigé et approuvé par
// Sébastien dans Neden-application/docs/GUIDE_PAGES_OAUTH_PUBLIQUES.md —
// seule la forme (mise en page React/Tailwind) change ici. Ne pas
// contredire ces faits (constitution, Principe V).
export default function Confidentialite() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-extrabold tracking-tight mb-1">
        Politique de confidentialité — NEDEN
      </h1>
      <div className="text-dim text-xs mb-8">Dernière mise à jour : 3 septembre 2026</div>

      <p className="text-dim text-sm leading-relaxed mb-6">
        NEDEN est une application <strong className="text-ink">personnelle et à usage unique</strong>,
        développée par Sébastien Cheval pour son propre usage. Elle n'est pas
        distribuée ni proposée à d'autres utilisateurs. Cette page décrit,
        honnêtement et sans détail superflu, quelles données NEDEN utilise et
        pourquoi.
      </p>

      <h2 className="text-secondary font-bold mt-8 mb-2">Qui utilise cette application</h2>
      <p className="text-dim text-sm leading-relaxed">
        Une seule personne : Sébastien Cheval, à la fois développeur et unique
        utilisateur. Aucun compte tiers n'y accède.
      </p>

      <h2 className="text-secondary font-bold mt-8 mb-2">Données Google utilisées et pourquoi</h2>
      <div className="bg-card border border-edge rounded-2xl p-5">
        <ul className="list-disc pl-5 text-dim text-sm space-y-2">
          <li>
            <strong className="text-ink">Gmail (lecture et classement)</strong> — pour identifier
            automatiquement les emails liés à sa recherche d'emploi et à ses
            activités professionnelles, les classer par étiquettes, et générer
            un résumé quotidien.
          </li>
          <li>
            <strong className="text-ink">Google Calendar</strong> — pour créer et lire des
            événements (entretiens, formations, rappels) directement liés à
            son organisation personnelle.
          </li>
          <li>
            <strong className="text-ink">Google Drive</strong> — pour stocker et retrouver les
            documents générés par l'application (CV, comptes rendus) dans son
            propre Drive.
          </li>
        </ul>
      </div>

      <h2 className="text-secondary font-bold mt-8 mb-2">Ce que NEDEN ne fait jamais</h2>
      <ul className="list-disc pl-5 text-dim text-sm space-y-1.5">
        <li>Ne partage, ne vend, ni ne transmet aucune donnée à un tiers.</li>
        <li>N'utilise les données Google qu'à l'intérieur de l'application, pour l'usage de son unique utilisateur.</li>
        <li>N'affiche ni ne diffuse publiquement aucune donnée personnelle.</li>
        <li>Ne conserve pas de copie des données Google en dehors de son propre compte Google et de son espace Notion personnel.</li>
      </ul>

      <h2 className="text-secondary font-bold mt-8 mb-2">Autres services utilisés</h2>
      <p className="text-dim text-sm leading-relaxed">
        NEDEN s'appuie aussi sur Notion (stockage structuré de ses candidatures,
        tâches et projets) et, ponctuellement, sur des modèles d'IA (Google
        Gemini et, en secours, d'autres fournisseurs) pour analyser du texte
        déjà présent dans son propre espace de travail — jamais pour entraîner
        un modèle tiers avec ses données.
      </p>

      <h2 className="text-secondary font-bold mt-8 mb-2">Sécurité</h2>
      <p className="text-dim text-sm leading-relaxed">
        L'application est hébergée sur Google Apps Script, protégée par une
        authentification propre à son unique utilisateur. Les clés d'accès aux
        services externes sont stockées de façon chiffrée côté Google (Script
        Properties), jamais dans le code source.
      </p>

      <h2 className="text-secondary font-bold mt-8 mb-2">Contact</h2>
      <p className="text-dim text-sm leading-relaxed">
        Pour toute question sur cette politique :{' '}
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
