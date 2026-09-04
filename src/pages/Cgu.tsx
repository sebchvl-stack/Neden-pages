import { Link } from 'react-router-dom';

// Contenu repris tel quel du texte déjà approuvé (voir Confidentialite.tsx
// pour la source exacte).
export default function Cgu() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-extrabold tracking-tight mb-1">
        Conditions d'utilisation — NEDEN
      </h1>
      <div className="text-dim text-xs mb-8">Dernière mise à jour : 3 septembre 2026</div>

      <p className="text-dim text-sm leading-relaxed mb-6">
        NEDEN est un outil personnel développé et utilisé par une seule
        personne, Sébastien Cheval, pour organiser sa propre recherche
        d'emploi et son activité professionnelle. Il n'est ni distribué, ni
        vendu, ni proposé à d'autres utilisateurs.
      </p>

      <h2 className="text-secondary font-bold mt-8 mb-2">Usage</h2>
      <p className="text-dim text-sm leading-relaxed">
        L'application est réservée à son auteur et unique utilisateur. Aucune
        inscription n'est ouverte à des tiers.
      </p>

      <h2 className="text-secondary font-bold mt-8 mb-2">Aucune garantie commerciale</h2>
      <p className="text-dim text-sm leading-relaxed">
        NEDEN est fourni tel quel, sans garantie de disponibilité continue,
        d'exactitude ou d'absence d'erreur — c'est un projet personnel en
        développement continu, pas un service commercial.
      </p>

      <h2 className="text-secondary font-bold mt-8 mb-2">Propriété</h2>
      <p className="text-dim text-sm leading-relaxed">
        Le code, les contenus et les données générées par NEDEN appartiennent
        à Sébastien Cheval.
      </p>

      <h2 className="text-secondary font-bold mt-8 mb-2">Modifications</h2>
      <p className="text-dim text-sm leading-relaxed">
        Ces conditions peuvent évoluer à tout moment au fil du développement
        de l'application, sans préavis particulier — l'usage restant
        strictement personnel.
      </p>

      <h2 className="text-secondary font-bold mt-8 mb-2">Contact</h2>
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
