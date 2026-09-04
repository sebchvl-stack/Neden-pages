import Footer from '../components/Footer';

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

// Réalisations synthétisées à partir des captures cyberscope.fr envoyées par
// Sébastien le 04/09/2026 (cyberscope.fr inaccessible depuis cet
// environnement de développement — jamais rédigé sans cette source réelle,
// constitution Principe I). Formule "X, Y, Z" (Accompli X, mesuré par Y, en
// faisant Z), un projet par capture reçue avec du contenu exploitable.
// gmp-lamotte (prévu à l'origine) n'apparaît dans aucune capture reçue —
// reste en attente plutôt que fabriqué.
const REALISATIONS = [
  {
    client: 'KNAUF',
    titre: 'Knauf Circular — app de collecte et valorisation des déchets PSE',
    texte:
      "Conçu et développé l'application Knauf Circular (web + mobile, Flutter/Symfony) pour Knauf, mesuré par un parcours de collecte et de valorisation des déchets PSE entièrement dématérialisé (demandes, notifications, back-office statistique), en structurant le cahier des charges du client autour d'un parcours UX repensé de bout en bout."
  },
  {
    client: 'Le Huddl',
    titre: 'Site web — réservation sport & coworking synchronisée',
    texte:
      "Conçu le site du Huddl (espace sportif nouvelle génération à La Roche-sur-Yon), mesuré par un système de réservation centralisé synchronisé en temps réel avec Matchpoint et COSOFT, en intégrant ces deux outils via API pour unifier réservation de terrains et d'espaces coworking en un seul parcours."
  },
  {
    client: 'AC Grains (Atlantique Céréales)',
    titre: 'AC Grains — outil de marché temps réel',
    texte:
      "Fait évoluer l'application AC Grains, mesuré par une intégration temps réel au flux EuroNext (cours différé 15 min) et une gestion d'offres de prix ouverte à plus de 40 négociants et 10 000 agriculteurs, en connectant l'application aux données de marché et en refondant son identité visuelle."
  },
  {
    client: 'Vivien Paillé',
    titre: 'Site vitrine — univers légumes secs',
    texte:
      "Conçu le site vitrine Vivien Paillé (gamme de légumes secs), mesuré par la création d'un univers graphique et éditorial dédié (identité rose/vert, ton humoristique) ciblant les moins de 35 ans, en construisant un site orienté recettes pour rendre les légumes secs désirables."
  },
  {
    client: 'SPI Informatique',
    titre: 'Refonte site — identité "station spatiale"',
    texte:
      "Refondu le site de SPI Informatique (ESN), mesuré par la centralisation de l'ensemble de ses offres en un parcours client unique, en concevant une identité visuelle et éditoriale sur-mesure inspirée de l'exploration spatiale (la « station SPI Informatique », ses « missions »)."
  },
  {
    client: 'CFA 2S',
    titre: 'Site + extranet enseignants',
    texte:
      "Refondu le site et l'extranet de CFA 2S, mesuré par un espace enseignants sécurisé donnant accès à une éphéméride pédagogique actualisée chaque semaine, en structurant le parcours utilisateur (arborescence, wireframes) puis un système d'inscription modéré par l'association."
  },
  {
    client: 'LPO France',
    titre: 'Extranet enseignants — biodiversité',
    texte:
      "Développé l'extranet enseignants de LPO France, mesuré par un accès hebdomadaire à des séances pédagogiques sur la biodiversité (fiches, éphéméride, export PDF), en donnant à chaque enseignant un accès personnel lié à sa classe et son établissement."
  },
  {
    client: 'Libellud',
    titre: 'Site Dixit / Mysterium — édition Disney',
    texte:
      "Conçu et développé le site Libellud (univers Dixit/Mysterium, édition Disney), mesuré par une bascule multilingue FR/EN et l'autonomisation complète du client sur la gestion de son contenu, en construisant un webdesign WordPress sur-mesure à partir de wireframes et parcours utilisateurs dédiés."
  }
];

// Compétences, expériences, formations, outils, passions et chiffres clés
// ci-dessous viennent des CV réels envoyés par Sébastien le 04/09/2026
// (4 versions : Product Manager/Extarnic, Product & Digital Leader/
// HelloWork, Directeur de Projet Satisfaction Client/Callity, Directeur de
// Projet Outils Métier & Infrastructure/Proxiad) et de son export
// MesCompétences (docx). Les 4 CV s'accordent sur les faits (poste/dates
// chez Cyberscope, formation, ancienneté) et diffèrent seulement par
// l'angle mis en avant selon l'offre visée — la synthèse ci-dessous
// retient les éléments communs aux 4 versions plutôt qu'un seul cadrage.
// Un document d'orientation professionnelle (bilan de compétences, tests
// de personnalité) a aussi été transmis dans le même lot : volontairement
// PAS utilisé ici — il contient des données personnelles (tests
// psychométriques, éléments de vie privée) hors du périmètre d'un
// portfolio public (constitution, Principe I/II — on publie ce qui est
// pertinent professionnellement, jamais par défaut tout ce qui est fourni).

const COMPETENCE_DOMAINES = [
  {
    domaine: 'Stratégie & Produit',
    items: ['Product strategy', 'Roadmap & priorisation', 'Discovery', 'KPI & analytics', 'Stratégie marketing/communication', 'Développement commercial']
  },
  {
    domaine: 'Direction & Management',
    items: ["Leadership d'équipe pluridisciplinaire", 'Gestion de projet', 'Gestion budgétaire', 'Relation client', 'Pilotage de la performance']
  },
  {
    domaine: 'Tech & Data',
    items: ['Coordination technique', 'Architecture & infrastructure', 'Sécurité IT', 'Delivery', 'Tracking, conversion & reporting']
  },
  {
    domaine: 'Création & Design',
    items: ['Direction artistique', 'Suite Adobe (Photoshop, Illustrator, InDesign, Première Pro)', 'Figma', 'Identité de marque', 'Photographie']
  },
  {
    domaine: 'IA & Innovation',
    items: ['IA générative', 'Automatisation', 'Prototypage', 'Veille technologique']
  }
];

const EXPERIENCES = [
  {
    periode: '2018 — aujourd’hui',
    poste: 'Direction, Associé, Stratégie digitale',
    structure: 'Cyberscope — Nantes',
    detail:
      "Pilotage stratégique et opérationnel de l'agence, participation aux décisions de direction. Management d'une équipe pluridisciplinaire (développeurs, UX/UI designers). Coordination des enjeux produit, technique, design et business, de la conception à la livraison. Plus de 50 clients actifs accompagnés, environ 200K€ de CA annuel piloté."
  },
  {
    periode: '2017 — 2018',
    poste: 'Chef de projet digital',
    structure: 'Animal & Co — Niort',
    detail: null
  },
  {
    periode: '2016 — 2017',
    poste: 'Assistant Communication & Marketing',
    structure: 'Alterburo Distribution — Saint-Herblain',
    detail: null
  },
  {
    periode: '2016',
    poste: 'Co-gérant & associé',
    structure: "L'Atelier — Communication Fait Main — Nantes",
    detail: null
  },
  {
    periode: '2014 — 2016',
    poste: 'Assistant Communication & Marketing',
    structure: 'Ernest Soulard',
    detail: null
  }
];

const FORMATIONS = [
  { periode: '2014 — 2016', titre: 'Bac+4/5 Chef de projet Marketing & Communication', etablissement: 'ISME Nantes' },
  { periode: '2012 — 2014', titre: 'BTS Communication', etablissement: 'Sup de Com Nantes' },
  { periode: '2010 — 2012', titre: 'Bac STMG Communication et ressources humaines', etablissement: 'Lycée Sacré-Cœur' },
  { periode: '2019', titre: 'Certification Gestion de projet web', etablissement: 'Actinuum' }
];

const CERTIFICATIONS_EN_COURS = [
  { titre: 'Google AI Professional Certificate — IA générative', organisme: 'Google' },
  { titre: 'Carrière dans l’IA / Préparer sa carrière en IA générative', organisme: 'Microsoft / LinkedIn' },
  { titre: 'Marketing digital', organisme: 'HubSpot' },
  {
    titre:
      "Parcours IBM SkillsBuild — Principes fondamentaux de l'engagement client, Bases de la conception UX, Exploration des technologies émergentes, Les Fondamentaux de la Data, Principes fondamentaux du développement durable et de la technologie, Initiation à l'IA générative, Principes fondamentaux du développement Web",
    organisme: 'IBM'
  },
  { titre: 'Alimentation durable, changement climatique et remodelage des économies', organisme: 'ONU' }
];

const OUTILS = [
  { categorie: 'Digital', items: ['WordPress', 'Prestashop', 'Google Analytics', 'GA4'] },
  { categorie: 'Produit & Tech', items: ['Claude', 'ChatGPT', 'Mistral', 'Gemini', 'Google AI Studio', 'Azure DevOps', 'GitHub', 'Google Apps Script'] },
  { categorie: 'Design & Création', items: ['Adobe Creative Cloud', 'Figma', 'Canva', 'Photographie'] },
  { categorie: 'Gestion', items: ['Suite Office', 'Google Workspace', 'Notion', 'Make'] }
];

const PASSIONS = [
  'Photographie',
  'Design & graphisme',
  'Jardinage & plantes',
  'Décoration & DIY-bricolage',
  'Univers fantastique & science-fiction',
  'Histoire & culture'
];

const CHIFFRES_CLES = [
  { valeur: '10+', label: "ans d'expérience en pilotage de projets digitaux" },
  { valeur: '50+', label: 'clients actifs accompagnés' },
  { valeur: '200K€+', label: 'de CA annuel piloté' },
  { valeur: '20+', label: 'lancements e-commerce & marketplace' }
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
        <p className="text-secondary font-semibold">
          Direction de projets digitaux · Stratégie, produit &amp; création — et NEDEN
        </p>
      </header>

      {/* ---------- Profil ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Profil</h2>
        <p className="text-dim leading-relaxed max-w-3xl">
          Profil digital hybride, à la croisée du produit, de la stratégie, de la création et
          de la technique. Depuis plus de dix ans, je pilote des projets digitaux
          complexes — du conseil amont à la livraison — en gardant le même réflexe :
          comprendre ce dont les utilisateurs et les clients ont vraiment besoin avant de
          proposer une solution.
        </p>
        <p className="text-dim leading-relaxed max-w-3xl mt-4">
          Chez Cyberscope, où j&rsquo;interviens depuis 2018 en tant qu&rsquo;associé,
          j&rsquo;ai accompagné des dizaines de clients sur des environnements e-commerce et
          marketplace, encadré une équipe pluridisciplinaire (développeurs, UX/UI designers)
          et participé aux décisions stratégiques de l&rsquo;agence — de l&rsquo;architecture
          technique au pilotage de la performance. Ce que je recherche : des projets où
          stratégie, technologie, design et humain sont réellement liés — c&rsquo;est aussi
          l&rsquo;intention derrière NEDEN, présenté plus bas sur cette page.
        </p>
      </section>

      {/* ---------- Compétences par domaine ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Compétences par domaine</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {COMPETENCE_DOMAINES.map((d) => (
            <div key={d.domaine} className="bg-card border border-edge rounded-2xl p-5">
              <h3 className="font-bold mb-3">{d.domaine}</h3>
              <div className="flex flex-wrap gap-2">
                {d.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-dim bg-surface border border-edge rounded-full px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Expériences professionnelles ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Expériences professionnelles</h2>
        <div className="space-y-6">
          {EXPERIENCES.map((e) => (
            <div key={e.periode + e.poste} className="border-l-2 border-edge pl-5">
              <div className="text-xs uppercase tracking-wide text-secondary mb-1">{e.periode}</div>
              <div className="font-bold">{e.poste}</div>
              <div className="text-dim text-sm">{e.structure}</div>
              {e.detail && <p className="text-dim text-sm mt-2 max-w-2xl">{e.detail}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Formations & certifications ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-2">Formations &amp; certifications</h2>
        <p className="text-dim text-sm mb-6">Logos des établissements/organismes en attente.</p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {FORMATIONS.map((f) => (
            <div key={f.titre} className="bg-card border border-edge rounded-2xl p-5">
              <div className="text-xs uppercase tracking-wide text-secondary mb-1">{f.periode}</div>
              <div className="font-bold">{f.titre}</div>
              <div className="text-dim text-sm">{f.etablissement}</div>
            </div>
          ))}
        </div>

        <h3 className="text-xs uppercase tracking-wide text-dim mb-3">Certifications en cours</h3>
        <ul className="space-y-3">
          {CERTIFICATIONS_EN_COURS.map((c) => (
            <li key={c.titre} className="text-dim text-sm">
              <span className="text-ink">{c.organisme}</span> — {c.titre}
            </li>
          ))}
        </ul>
      </section>

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

      {/* ---------- Réalisations ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-2">Exemples de réalisations</h2>
        <p className="text-dim text-sm mb-6">
          Synthétisées à partir de captures cyberscope.fr fournies par Sébastien (cyberscope.fr
          reste inaccessible depuis cet environnement de développement). Images à venir.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {REALISATIONS.map((r) => (
            <div key={r.client} className="bg-card border border-edge rounded-2xl p-5">
              <div className="text-xs uppercase tracking-wide text-secondary mb-1">{r.client}</div>
              <h3 className="font-bold mb-2">{r.titre}</h3>
              <p className="text-dim text-sm">{r.texte}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Outils ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Outils</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {OUTILS.map((o) => (
            <div key={o.categorie} className="bg-card border border-edge rounded-2xl p-5">
              <h3 className="font-bold mb-3">{o.categorie}</h3>
              <div className="flex flex-wrap gap-2">
                {o.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-dim bg-surface border border-edge rounded-full px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Passions ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Passions</h2>
        <div className="flex flex-wrap gap-3">
          {PASSIONS.map((p) => (
            <span
              key={p}
              className="bg-card border border-edge rounded-full px-4 py-2 text-sm text-dim"
            >
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- Chiffres clés ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-2">Chiffres clés</h2>
        <p className="text-dim text-sm mb-6">Chez Cyberscope, depuis 2018 — source : CV de Sébastien.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CHIFFRES_CLES.map((c) => (
            <div key={c.label} className="bg-card border border-edge rounded-2xl p-5 text-center">
              <div className="text-3xl font-extrabold text-secondary mb-1">{c.valeur}</div>
              <div className="text-dim text-xs">{c.label}</div>
            </div>
          ))}
        </div>
      </section>

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
