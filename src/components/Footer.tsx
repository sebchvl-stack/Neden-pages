import { Link } from 'react-router-dom';

// Structure élargie reprise du maquettage Figma NOLZUnUcR2iFPiu0bAzZjz, page
// "11- Site internet (temporaire)" — demandé par Sébastien le 13/09/2026.
// Le badge "Environnement Certifié & Vérifié" reste vague à dessein : le
// maquette ne précise aucun standard nommé (type ISO), donc on n'en invente
// pas un (constitution, Principe VI).
export default function Footer() {
  return (
    <footer className="border-t border-edge bg-surface mt-24">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="max-w-md">
            <div className="text-ink font-semibold text-lg mb-2">Sébastien Cheval</div>
            <p className="text-dim text-sm leading-relaxed">
              Direction de projets digitaux, gouvernance technique, stratégie produit
              et ingénierie de plateformes au sein de l'écosystème NEDEN.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-cardAlt px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="text-secondary text-xs font-semibold tracking-wide">
                Environnement privé & usage restreint
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-2 text-sm text-dim">
            <Link to="/confidentialite" className="hover:text-ink transition-colors">Confidentialité</Link>
            <Link to="/cgu" className="hover:text-ink transition-colors">Conditions Générales</Link>
            <a href="https://app.neden.fr" target="_blank" rel="noreferrer" className="hover:text-ink transition-colors">
              Accès plateforme
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 mt-8 border-t border-edge text-dim text-sm">
          <span>© {new Date().getFullYear()} Sébastien Cheval. Tous droits réservés. Écosystème NEDEN.</span>
          <span>Infrastructure Cloudflare</span>
        </div>
      </div>
    </footer>
  );
}
