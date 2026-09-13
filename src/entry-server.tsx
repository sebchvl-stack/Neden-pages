import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

// Point d'entrée SSR — utilisé uniquement au moment du build (voir
// scripts/prerender.mjs), jamais servi tel quel. Rend l'app pour une URL
// donnée en pur JS côté serveur, sans navigateur : c'est ce qui permet à un
// robot qui ne lance pas JavaScript (le vérificateur OAuth de Google) de
// lire le vrai contenu des pages au lieu d'un <div id="root"></div> vide.
export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
}
