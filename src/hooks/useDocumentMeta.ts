import { useEffect } from 'react';

/**
 * Titre, description et URL canonique par route.
 *
 * Une SPA React sert le MÊME index.html sur les trois routes : sans ce hook,
 * /cgu et /confidentialite sont indexées avec le titre et la description de
 * l'accueil. Google considère alors qu'il s'agit de pages dupliquées et n'en
 * garde qu'une — les deux pages légales, précisément celles que la validation
 * OAuth doit pouvoir atteindre, disparaissent de l'index.
 *
 * Écrit à la main plutôt qu'avec react-helmet : trois champs sur trois routes
 * ne justifient pas une dépendance de plus dans un bundle qu'on veut léger
 * (la vitesse de chargement compte dans le classement).
 *
 * Limite assumée : ceci s'exécute côté navigateur. Googlebot rend le
 * JavaScript et voit donc le bon titre, mais les aperçus de partage
 * (LinkedIn, Slack, iMessage) lisent le HTML brut et afficheront toujours les
 * balises Open Graph de l'accueil. Pour un site de trois pages dont une seule
 * est réellement partagée, c'est un compromis acceptable ; le jour où les
 * pages légales devront avoir leur propre aperçu, il faudra du pré-rendu.
 */
export default function useDocumentMeta(titre: string, description: string, chemin: string) {
  useEffect(() => {
    document.title = titre;
    const url = `https://neden.fr${chemin}`;

    const majBalise = (
      selecteur: string,
      attributsCreation: Record<string, string>,
      attributValeur: string,
      valeur: string,
      tag: 'meta' | 'link'
    ) => {
      let el = document.head.querySelector(selecteur) as HTMLElement | null;
      if (!el) {
        el = document.createElement(tag);
        Object.keys(attributsCreation).forEach((k) => el!.setAttribute(k, attributsCreation[k]));
        document.head.appendChild(el);
      }
      el.setAttribute(attributValeur, valeur);
    };

    majBalise('meta[name="description"]', { name: 'description' }, 'content', description, 'meta');
    majBalise('link[rel="canonical"]', { rel: 'canonical' }, 'href', url, 'link');
    // Open Graph mis à jour aussi : sans ça, une navigation interne laisse les
    // balises de l'accueil collées sur une page légale.
    majBalise('meta[property="og:title"]', { property: 'og:title' }, 'content', titre, 'meta');
    majBalise('meta[property="og:url"]', { property: 'og:url' }, 'content', url, 'meta');
    majBalise('meta[property="og:description"]', { property: 'og:description' }, 'content', description, 'meta');
  }, [titre, description, chemin]);
}
