import { Link } from 'react-router-dom';
import { APP_LOGIN_URL, CGU_URL, HOME_URL, PRIVACY_URL } from '../lib/site';

// Structure reprise du maquettage Figma NOLZUnUcR2iFPiu0bAzZjz, page
// "11- Site internet (temporaire)" (header sticky, badge app.neden.fr) —
// demandé par Sébastien le 13/09/2026. La nav du maquette liste aussi
// Profil/Compétences/Expériences : ces sections n'existent pas encore sur
// le site (contenu bloqué en attente des fichiers CV, cf. IDEES_EVOLUTIONS
// et le spec de ce dépôt) — volontairement PAS ajoutées comme faux liens de
// nav tant qu'elles ne mènent nulle part (constitution, Principe VI).
//
// Privacy / CGU en URL absolue canonique (slash) : un extracteur OAuth qui
// ne résout pas les href relatifs doit quand même trouver la privacy.
export default function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-bg/80 border-b border-edge">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href={HOME_URL} className="text-ink font-semibold tracking-tight">
          Sébastien Cheval
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-dim">
          <Link to="/" className="hover:text-ink transition-colors">Accueil</Link>
          <a href={PRIVACY_URL} className="hover:text-ink transition-colors">Confidentialité</a>
          <a href={CGU_URL} className="hover:text-ink transition-colors">CGU</a>
        </nav>
        <a
          href={APP_LOGIN_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-edge hover:bg-edgeLight transition-colors px-4 py-2 rounded-lg text-sm text-ink"
          title="Espace privé — écran de connexion, pas la page d'accueil OAuth"
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
