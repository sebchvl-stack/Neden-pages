import Footer from '../components/Footer';
import PendingSection from '../components/PendingSection';

// Clients réellement cités par Sébastien (noms confirmés) — logos en
// attente (constitution, Principe II : nom réel affichable, logo jamais
// improvisé). Ordre de la liste fournie, conservé tel quel.
const CLIENTS = [
  'Groupe Avril',
  'Invivo',
  'Vivien Paillé (Adaph44)',
  'CFA2S',
  'SPI Informatique',
  'Libner',
  'MAIF',
  'MACIF',
  'LPO',
  'DIXIT',
  'MYSTERIUM',
  'Assurance Maladie',
  'KNAUF'
];

export default function Home() {
  return (
    <div>
      {/* ---------- Hero ---------- */}
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-extrabold text-xl mb-6">
          N
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
          Sébastien Cheval
        </h1>
        <p className="text-secondary font-semibold">Portfolio &amp; NEDEN</p>
      </header>

      {/* ---------- Profil (en attente) ---------- */}
      <PendingSection
        title="Profil"
        sourceNote="En attente des fichiers annoncés par Sébastien (profil hybride technique / produit / design)."
      />

      {/* ---------- Compétences (en attente) ---------- */}
      <PendingSection
        title="Compétences par domaine"
        sourceNote="En attente des données CV de Sébastien."
      />

      {/* ---------- Expériences (en attente) ---------- */}
      <PendingSection
        title="Expériences professionnelles"
        sourceNote="En attente des données CV de Sébastien."
      />

      {/* ---------- Formations / certifications (en attente) ---------- */}
      <PendingSection
        title="Formations &amp; certifications"
        sourceNote="En attente des données CV de Sébastien (dont logos des certifications)."
      />

      {/* ---------- Clients (noms réels, logos en attente) ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-2">Clients accompagnés</h2>
        <p className="text-dim text-sm mb-6">Logos en attente — noms confirmés.</p>
        <div className="flex flex-wrap gap-3">
          {CLIENTS.map((c) => (
            <span
              key={c}
              className="bg-card border border-edge rounded-full px-4 py-2 text-sm text-dim"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- Réalisations (en attente, bloqué réseau) ---------- */}
      <PendingSection
        title="Exemples de réalisations"
        sourceNote="Bloqué : les 6 pages source (cyberscope.fr) sont inaccessibles depuis cet environnement de développement — en attente du texte ou de captures fournis par Sébastien."
      />

      {/* ---------- Outils (en attente) ---------- */}
      <PendingSection title="Outils" sourceNote="En attente des données CV de Sébastien." />

      {/* ---------- Passions (en attente) ---------- */}
      <PendingSection title="Passions" sourceNote="En attente des données CV de Sébastien." />

      {/* ---------- Chiffres clés (en attente) ---------- */}
      <PendingSection
        title="Chiffres clés"
        sourceNote="En attente du bilan de compétences de Sébastien — aucun chiffre n'est publié sans cette source (constitution, Principe I)."
      />

      {/* ---------- NEDEN ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-2">NEDEN</h2>
        <p className="text-dim text-sm mb-6">
          Histoire et raison d'être : en attente des fichiers annoncés par Sébastien.
        </p>

        <div className="bg-card border border-edge rounded-2xl p-6">
          <h3 className="text-xs uppercase tracking-wide text-dim mb-3">Ce que fait NEDEN</h3>
          <ul className="list-disc pl-5 text-dim text-sm space-y-2">
            <li>Organise candidatures, tâches, formations et projets dans Notion.</li>
            <li>Lit et classe automatiquement les emails liés à la recherche d'emploi (Gmail).</li>
            <li>Planifie des événements (Google Calendar) et gère des documents (Google Drive).</li>
            <li>Répond en langage naturel via un assistant intégré (JARVIS), avec une équipe de plusieurs agents spécialisés.</li>
            <li>Effectue une veille automatique et transcrit des réunions (visio ou en présentiel).</li>
          </ul>
          <p className="text-dim text-sm mt-4">
            L'accès aux données Google (Gmail, Calendar, Drive) sert uniquement à faire
            fonctionner ces automatisations pour son unique utilisateur — voir la{' '}
            <a href="/confidentialite" className="text-secondary hover:underline">
              politique de confidentialité
            </a>{' '}
            pour le détail exact.
          </p>
        </div>

        <p className="text-dim text-sm mt-6">
          Chiffres clés et technologies détaillées : en attente (constitution, Principe I —
          seules des données déjà vérifiées dans la documentation du projet seront publiées ici).
        </p>

        <div className="flex gap-4 mt-6 text-sm">
          <span className="text-dim italic">Lien Discord — en attente</span>
          <span className="text-dim italic">Lien LinkedIn — en attente</span>
        </div>
      </section>

      <Footer />
    </div>
  );
}
