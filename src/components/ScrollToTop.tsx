import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router ne remet pas le scroll en haut entre les routes par défaut
// (comportement SPA standard) — nécessaire pour que /confidentialite et
// /cgu s'ouvrent bien en haut de page, pas là où l'accueil avait défilé.
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
