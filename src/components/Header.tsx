import { Link } from 'react-router-dom';

// Structure reprise du maquettage Figma NOLZUnUcR2iFPiu0bAzZjz, page
// "11- Site internet (temporaire)" (header sticky, badge app.neden.fr) —
// demandé par Sébastien le 13/09/2026. La nav du maquette liste aussi
// Profil/Compétences/Expériences : ces sections n'existent pas encore sur
// le site (contenu bloqué en attente des fichiers CV, cf. IDEES_EVOLUTIONS
// et le spec de ce dépôt) — volontairement PAS ajoutées comme faux liens de
// nav tant qu'elles ne mènent nulle part (constitution, Principe VI).
export default function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-bg/80 border-b border-edge">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-ink font-semibold tracking-tight">
          Sébastien Cheval
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-dim">
          <Link to="/" className="hover:text-ink transition-colors">Accueil</Link>
          <Link to="/confidentialite" className="hover:text-ink transition-colors">Confidentialité</Link>
          <Link to="/cgu" className="hover:text-ink transition-colors">CGU</Link>
        </nav>
        <a
          href="https://app.neden.fr"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-edge hover:bg-edgeLight transition-colors px-4 py-2 rounded-lg text-sm text-ink"
        >
          app.neden.fr
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </header>
  );
}
