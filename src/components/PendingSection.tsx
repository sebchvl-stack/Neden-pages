import type { ReactNode } from 'react';

/**
 * Marque une section dont le contenu réel n'est pas encore disponible
 * (constitution Neden-pages, Principe I/II : jamais de contenu
 * biographique/professionnel inventé). Reste visible en développement
 * pour piloter l'avancement, mais ne doit jamais être confondue avec du
 * contenu publié — d'où le bandeau explicite.
 */
export default function PendingSection({
  title,
  sourceNote,
  children
}: {
  title: string;
  sourceNote: string;
  children?: ReactNode;
}) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 border border-dashed border-edge rounded-2xl my-8">
      <div className="text-xs uppercase tracking-wide text-secondary mb-2">
        Section en attente de contenu source
      </div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-dim text-sm">{sourceNote}</p>
      {children}
    </section>
  );
}
