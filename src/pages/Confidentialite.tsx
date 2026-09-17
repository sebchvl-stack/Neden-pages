import Header from '../components/Header';
import useDocumentMeta from '../hooks/useDocumentMeta';
import {
  APP_LOGIN_URL,
  CGU_URL,
  CONTACT_EMAIL,
  GOOGLE_PERMISSIONS_URL,
  GOOGLE_USER_DATA_POLICY_URL,
  HOME_URL,
  LIMITED_USE_EN,
  PRIVACY_URL
} from '../lib/site';

// Structure (sections numérotées, cartes, badges) reprise du maquettage
// Figma NOLZUnUcR2iFPiu0bAzZjz, page "11- Site internet (temporaire)",
// frame 535:348 — demandé par Sébastien le 13/09/2026. Le FOND reste celui
// déjà approuvé (Neden-application/docs/GUIDE_PAGES_OAUTH_PUBLIQUES.md),
// jamais contredit (constitution, Principe V), mais plusieurs formulations
// du maquette ont été vérifiées puis CORRIGÉES avant d'être reprises :
//
// 1. Scopes OAuth — le maquette affichait "gmail.readonly / gmail.modify",
//    "calendar.events" et "drive.file / drive.readonly". Vérifié contre le
//    vrai manifeste (Neden-application/src/appsscript.json) : les scopes
//    réellement demandés sont gmail.modify (pas de scope readonly séparé),
//    calendar (accès complet, pas seulement .events) et drive (accès
//    complet, pas seulement .file/.readonly) — le maquette SOUS-estimait
//    la portée réelle des scopes, ce qui serait doublement faux sur un
//    document de conformité OAuth. Corrigé ci-dessous aux scopes réels.
//    17/09/2026 — le manifeste réel (Neden-application/appsscript.json)
//    déclare aussi deux scopes techniques Apps Script absents du
//    maquette : script.scriptapp (déclencheurs / ScriptApp) et
//    script.external_request (appels HTTP UrlFetchApp). Documentés
//    honnêtement ci-dessous, sans inventer d'usage au-delà de ce que
//    le code et cette page décrivent déjà.
// 2. "TLS 1.3 / E2E" (badge) — "E2E" (chiffrement de bout en bout) est une
//    revendication cryptographique précise qui ne correspond pas à
//    l'architecture réelle (les données transitent en clair côté serveur
//    Apps Script pour être traitées) — retiré, gardé seulement "TLS" côté
//    transport, sans version épinglée qui ne serait pas vérifiable ici.
// 3. "Révocation immédiate et purge des métadonnées" — reformulé pour
//    distinguer clairement : la révocation d'accès OAuth se fait bien via
//    les paramètres du compte Google de l'utilisateur (réel, vérifiable),
//    mais NEDEN lui-même n'a pas d'outil de purge automatique de ses
//    données Notion — same raison que pour "droits de suppression
//    intégrale" ci-dessous.
// 4. "droits de suppression intégrale de vos informations" — pas repris
//    tel quel : Neden-application/CLAUDE.md est explicite (règle non
//    négociable n°4) : une "suppression" dans Notion est toujours un
//    archivage, jamais une suppression réelle — aucun outil de suppression
//    réelle n'existe. Reformulé pour rester exact.

const SCOPES_GOOGLE = [
  {
    nom: 'Gmail',
    pill: 'gmail.modify',
    scopeUrl: 'https://www.googleapis.com/auth/gmail.modify',
    acces:
      "NEDEN accède aux messages et fils de discussion de la boîte Gmail du compte unique : lecture du contenu, des métadonnées (expéditeur, objet, date) et des étiquettes, et capacité de modifier le classement (appliquer / retirer des étiquettes, marquer comme lu). Le scope demandé est gmail.modify. NEDEN n'utilise pas le scope gmail.send.",
    usage:
      "Identifier et classer automatiquement les emails liés à la recherche d'emploi et aux activités professionnelles entrantes, puis générer un résumé et des étiquettes de suivi pour l'unique utilisateur.",
    stockage:
      "Les emails restent dans Gmail. NEDEN n'en crée pas de copie intégrale ailleurs. Un résumé ou une étiquette de suivi peut être écrit dans l'espace Notion personnel.",
    partage:
      "Non partagé avec un public, un courtier, un annonceur ni un autre utilisateur. Un extrait déjà présent dans l'espace de travail peut être envoyé ponctuellement à un modèle d'IA (voir section Partage) pour produire un résumé — jamais pour entraîner ce modèle.",
    retention:
      "Aussi longtemps que le message reste dans Gmail. Les dérivés Notion durent tant que l'espace de travail personnel reste actif.",
    suppression:
      "L'utilisateur unique gère ses emails dans Gmail. Pour les dérivés Notion : demande à sebchvl@gmail.com (archivage manuel — NEDEN n'a pas d'outil de suppression réelle automatique)."
  },
  {
    nom: 'Google Calendar',
    pill: 'calendar',
    scopeUrl: 'https://www.googleapis.com/auth/calendar',
    acces:
      "NEDEN accède au Google Calendar du compte unique : lecture des événements existants et capacité d'en créer, modifier ou synchroniser. Le scope demandé est calendar (accès calendrier, pas seulement calendar.events).",
    usage:
      "Créer, lire et synchroniser des événements directement liés à l'organisation personnelle (entretiens, formations, rappels) de l'unique utilisateur.",
    stockage:
      "Les événements vivent dans le Google Calendar du compte. NEDEN n'en conserve pas une base parallèle. Un rappel de suivi peut exister dans Notion.",
    partage: 'Non partagé. Les événements restent dans le calendrier personnel du compte Google.',
    retention: "Aussi longtemps que l'événement reste dans Google Calendar.",
    suppression:
      "L'utilisateur unique peut supprimer ou modifier l'événement dans Google Calendar. Révocation OAuth : myaccount.google.com/permissions."
  },
  {
    nom: 'Google Drive',
    pill: 'drive',
    scopeUrl: 'https://www.googleapis.com/auth/drive',
    acces:
      "NEDEN accède au Google Drive du compte unique. Le scope demandé est drive (accès Drive, pas seulement drive.file / drive.readonly). NEDEN s'en sert pour stocker et indexer les documents qu'elle génère (CV, comptes rendus) dans ce Drive personnel.",
    usage:
      "Déposer et retrouver des documents générés par l'application (CV, comptes rendus) dans le Drive personnel de l'unique utilisateur.",
    stockage: 'Les fichiers restent dans le Google Drive du compte. Pas de copie vendeur hors de ce Drive et de Notion.',
    partage: 'Non partagé publiquement, non vendu, non transféré à un courtier.',
    retention: "Aussi longtemps que le fichier reste dans Google Drive.",
    suppression: "L'utilisateur unique gère ses fichiers dans Drive. Révocation OAuth via le compte Google."
  },
  {
    nom: 'Identité Google',
    pill: 'userinfo.email / userinfo.profile',
    scopeUrl: 'https://www.googleapis.com/auth/userinfo.email',
    acces:
      "NEDEN accède à l'adresse e-mail et au profil de base du compte Google unique (scopes userinfo.email et userinfo.profile) afin de reconnaître le seul compte autorisé.",
    usage: "Identifier le compte Google unique autorisé à s'authentifier auprès de l'application. Aucun autre compte n'est accepté.",
    stockage: "L'identité reste celle du compte Google. NEDEN ne constitue pas un annuaire d'identités.",
    partage: 'Non partagé.',
    retention: "Tant que l'autorisation OAuth reste accordée.",
    suppression: "Révocation de l'accès NEDEN depuis les permissions du compte Google."
  },
  {
    nom: 'Apps Script — application et déclencheurs',
    pill: 'script.scriptapp',
    scopeUrl: 'https://www.googleapis.com/auth/script.scriptapp',
    acces:
      "Scope technique de Google Apps Script : NEDEN n'y « accède » pas à une boîte mail ou un Drive supplémentaire. Il autorise le projet à gérer l'application de script elle-même, notamment l'installation et la maintenance de déclencheurs horaires (ScriptApp).",
    usage:
      "Exécuter les automatisations personnelles de l'unique utilisateur selon des déclencheurs (par exemple un passage périodique sur les emails à classer).",
    stockage: 'Pas de jeu de données utilisateur distinct. Configuration du script dans Apps Script / Script Properties.',
    partage: 'Non applicable — ce n’est pas un export de données Gmail/Calendar/Drive.',
    retention: 'Tant que le projet Apps Script et ses déclencheurs existent.',
    suppression: "Le concepteur peut retirer les déclencheurs ; l'utilisateur unique peut révoquer l'application."
  },
  {
    nom: 'Apps Script — requêtes HTTP externes',
    pill: 'script.external_request',
    scopeUrl: 'https://www.googleapis.com/auth/script.external_request',
    acces:
      "Scope technique de Google Apps Script : il autorise NEDEN à effectuer des appels HTTP depuis le script (UrlFetchApp) vers les services déjà listés sur cette page (Notion, modèles d'IA) et vers les APIs Google correspondant aux scopes ci-dessus. Il ne constitue pas un accès à des données Google au-delà de ces appels.",
    usage: "Écrire dans l'espace Notion personnel et, ponctuellement, appeler une API de modèle d'IA pour analyser un texte déjà présent dans l'espace de travail.",
    stockage: 'Le contenu transite vers Notion (espace personnel) ou, ponctuellement, vers le fournisseur du modèle pour la durée de la requête.',
    partage: 'Uniquement vers Notion (compte personnel du concepteur) et, ponctuellement, vers le fournisseur du modèle d’IA — voir section Partage.',
    retention: 'Selon le service destinataire (Notion : tant que l’espace existe ; modèle d’IA : pas de conservation opérée par NEDEN au-delà de la requête).',
    suppression: 'Demande à sebchvl@gmail.com pour l’archivage Notion ; révocation OAuth pour couper les appels.'
  }
];

const SYNTHESE_LIGNES = [
  {
    theme: 'Collecte',
    texte:
      'NEDEN accède uniquement aux données Google correspondant aux scopes listés (gmail.modify, calendar, drive, userinfo.email, userinfo.profile, script.scriptapp, script.external_request). Pas de Contacts, Photos, YouTube ni d’autres API non déclarées ici.'
  },
  {
    theme: 'Usage',
    texte:
      "Orchestration personnelle de la recherche d'emploi : classer des emails, poser des événements d'agenda, déposer des documents générés, identifier le compte autorisé, exécuter le script et appeler Notion / un modèle d'IA."
  },
  {
    theme: 'Stockage',
    texte:
      'Gmail, Calendar et Drive restent dans le compte Google. Jetons OAuth et clés dans les Script Properties Apps Script. Dérivés (résumés, suivi de candidatures, tâches) dans l’espace Notion personnel. Cloudflare ne conserve pas de charge utile persistante.'
  },
  {
    theme: 'Partage',
    texte:
      'Pas de revente, pas de publicité, pas d’autre utilisateur. Tiers opérationnels : Notion (espace perso), Cloudflare (TLS / routage), modèles d’IA ponctuels (Google Gemini, en secours d’autres fournisseurs).'
  },
  {
    theme: 'Rétention',
    texte:
      'Données Google : durée de vie dans le compte Google. Dérivés Notion : tant que l’espace personnel reste actif. Jetons : jusqu’à révocation.'
  },
  {
    theme: 'Suppression',
    texte:
      'Révoquer NEDEN sur myaccount.google.com/permissions. Écrire à sebchvl@gmail.com pour l’archivage des pages Notion (archivage, pas de purge automatique). Gérer Gmail / Calendar / Drive dans le compte Google.'
  }
];

const ENGAGEMENTS = [
  {
    titre: 'Aucune revente ni location',
    detail: "NEDEN ne vend, ne loue, n'échange ni ne cède aucune donnée à un tiers ou courtier de données."
  },
  {
    titre: 'Zéro monétisation publicitaire',
    detail: "Aucun profilage marketing, pixel publicitaire ni SDK d'analyse commerciale n'est incorporé au système."
  },
  {
    titre: "Pas d'exposition publique",
    detail: "Aucune donnée personnelle issue des APIs Google ne fait l'objet d'un affichage ou d'une diffusion publique."
  },
  {
    titre: "Pas de ré-entraînement IA public",
    detail: "Les données Google ne sont jamais utilisées pour entraîner un modèle d'IA tiers ou accessible publiquement."
  }
];

const SERVICES_TIERS = [
  {
    nom: 'Google (APIs et Apps Script)',
    role: "Les données Gmail, Calendar, Drive et l'identité restent chez Google, dans le compte de l'utilisateur unique. Apps Script exécute NEDEN. Google n'est pas un « destinataire commercial » choisi par NEDEN : c'est la plateforme du compte."
  },
  {
    nom: 'Notion',
    role: "Espace de travail personnel du concepteur. NEDEN y structure candidatures, tâches, projets et certains dérivés (résumés, étiquettes de suivi). Ce n'est pas un espace d'équipe public ni un produit revendable."
  },
  {
    nom: 'Cloudflare (Workers / zone neden.fr)',
    role: "Terminaison TLS et routage HTTPS pour le site public neden.fr et l'espace app.neden.fr. Cloudflare n'est pas utilisé comme base de données des emails, agendas ou fichiers. Pas de conservation de charge utile persistante opérable par NEDEN."
  },
  {
    nom: "Modèles d'IA (Google Gemini, en secours d'autres fournisseurs)",
    role: "Analyse ponctuelle de texte déjà présent dans l'espace de travail — pour produire un résumé ou une aide à la rédaction. Jamais pour entraîner un modèle tiers avec ces données, jamais pour de la publicité."
  }
];

function SectionCard({
  numero,
  titre,
  children
}: {
  numero: number;
  titre: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card border border-edge rounded-xl p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-secondary font-mono text-xs bg-cardAlt border border-edge rounded-full w-6 h-6 flex items-center justify-center shrink-0">
          {numero}
        </span>
        <h2 className="text-ink font-semibold text-lg">{titre}</h2>
      </div>
      <div className="text-dim text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function Confidentialite() {
  useDocumentMeta(
    'Politique de confidentialité — NEDEN',
    "NEDEN accède à Gmail (gmail.modify), Calendar, Drive, l'identité Google et deux scopes techniques Apps Script, uniquement pour l'orchestration personnelle d'un unique utilisateur. Collecte, usage, stockage, partage, rétention, suppression et Limited Use sont décrits sur cette page.",
    '/confidentialite/'
  );
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="inline-flex items-center gap-2 bg-cardAlt px-3 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          <span className="text-secondary text-xs font-semibold tracking-wide">
            Google OAuth · Document de conformité
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1 text-ink">
          Politique de confidentialité — NEDEN
        </h1>
        <div className="text-dim text-xs mb-4">
          Dernière mise à jour : 17 septembre 2026 · URL canonique :{' '}
          <a href={PRIVACY_URL} className="text-secondary hover:underline">
            {PRIVACY_URL}
          </a>
        </div>

        <p className="text-dim text-sm leading-relaxed mb-6">
          NEDEN est une application <strong className="text-ink">personnelle et à usage unique</strong>,
          conçue, administrée et opérée par Sébastien Cheval pour assister son propre travail
          d&rsquo;organisation (recherche d&rsquo;emploi et activité professionnelle). Elle n&rsquo;est
          pas distribuée, pas vendue, pas proposée à d&rsquo;autres utilisateurs. Cette page décrit{' '}
          <strong className="text-ink">quelles données Google sont accédées</strong>,{' '}
          <strong className="text-ink">comment elles sont utilisées</strong>,{' '}
          <strong className="text-ink">où elles sont stockées</strong>,{' '}
          <strong className="text-ink">avec qui elles sont partagées ou non</strong>,{' '}
          <strong className="text-ink">comment elles sont protégées</strong>,{' '}
          <strong className="text-ink">combien de temps elles sont retenues</strong> et{' '}
          <strong className="text-ink">comment demander une suppression</strong>.
        </p>

        <p className="text-dim text-sm leading-relaxed mb-8">
          Page d&rsquo;accueil publique (OAuth Branding) :{' '}
          <a href={HOME_URL} className="text-secondary hover:underline">
            {HOME_URL}
          </a>
          . Conditions d&rsquo;utilisation :{' '}
          <a href={CGU_URL} className="text-secondary hover:underline">
            {CGU_URL}
          </a>
          . L&rsquo;adresse{' '}
          <a href={APP_LOGIN_URL} className="text-secondary hover:underline">
            {APP_LOGIN_URL}
          </a>{' '}
          est l&rsquo;écran de connexion / l&rsquo;espace privé — ce n&rsquo;est{' '}
          <strong className="text-ink">pas</strong> la homepage Branding.
        </p>

        <div className="grid sm:grid-cols-3 gap-3 mb-10">
          <div className="bg-cardAlt border border-edge rounded-xl p-4">
            <div className="text-xs uppercase tracking-wide text-secondary mb-1">Usage de la plateforme</div>
            <div className="text-ink text-sm font-semibold">Mono-utilisateur</div>
          </div>
          <div className="bg-cardAlt border border-edge rounded-xl p-4">
            <div className="text-xs uppercase tracking-wide text-secondary mb-1">Gouvernance des données</div>
            <div className="text-ink text-sm font-semibold">Zéro revente de données</div>
          </div>
          <div className="bg-cardAlt border border-edge rounded-xl p-4">
            <div className="text-xs uppercase tracking-wide text-secondary mb-1">Garantie chiffrement</div>
            <div className="text-ink text-sm font-semibold">TLS en transit</div>
          </div>
        </div>

        <div className="space-y-6">
          <SectionCard numero={1} titre="Présentation générale et nature de l'application">
            <p>
              NEDEN est un orchestrateur personnel de recherche d&rsquo;emploi et d&rsquo;organisation
              professionnelle. Il centralise candidatures, tâches, formations et emails liés à
              l&rsquo;emploi dans un tableau de bord unique, opéré exclusivement par Sébastien Cheval.
            </p>
            <p>
              Le site public <strong className="text-ink">neden.fr</strong> explique l&rsquo;application
              sans compte et sans login : c&rsquo;est la homepage déclarée pour Google OAuth Branding.
              L&rsquo;application authentifiée vit derrière {APP_LOGIN_URL} (écran de connexion). Un
              robot ou un relecteur qui ouvrirait uniquement app.neden.fr verrait une page de connexion
              — ce n&rsquo;est pas le bon URL d&rsquo;accueil.
            </p>
            <p>
              NEDEN n&rsquo;est pas un produit grand public, pas un SaaS multi-tenant, pas une
              marketplace de données. Il n&rsquo;existe pas de formule d&rsquo;abonnement tierce, pas
              de compte « équipe », pas de formulaire d&rsquo;inscription.
            </p>
          </SectionCard>

          <SectionCard numero={2} titre="Utilisateur unique et exclusion de tiers">
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong className="text-ink">Usage exclusif</strong> — un seul compte Google autorisé,
                celui du concepteur, Sébastien Cheval.
              </li>
              <li>
                <strong className="text-ink">Absence d&rsquo;inscriptions publiques</strong> — aucun
                formulaire de création de compte n&rsquo;est exposé.
              </li>
              <li>
                <strong className="text-ink">Isolement total</strong> — aucune donnée d&rsquo;un autre
                utilisateur ne transite jamais par l&rsquo;application, puisqu&rsquo;il n&rsquo;y en a
                pas d&rsquo;autre.
              </li>
            </ul>
          </SectionCard>

          <SectionCard numero={3} titre="Synthèse — collecte, usage, stockage, partage, rétention, suppression">
            <p>
              Les six thèmes que Google demande de pouvoir lire sans ambiguïté. Le détail scope par
              scope suit aux sections 4 à 9.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-edge">
                    <th className="py-2 pr-3 text-ink font-semibold">Thème</th>
                    <th className="py-2 text-ink font-semibold">Ce que NEDEN fait réellement</th>
                  </tr>
                </thead>
                <tbody>
                  {SYNTHESE_LIGNES.map((l) => (
                    <tr key={l.theme} className="border-b border-edge/60 align-top">
                      <td className="py-3 pr-3 text-secondary font-semibold whitespace-nowrap">{l.theme}</td>
                      <td className="py-3 text-dim">{l.texte}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>

          <SectionCard numero={4} titre="Collecte — quelles données Google NEDEN accède">
            <p>
              Conformément à la Politique relative aux données utilisateur des services d&rsquo;API
              Google, la demande d&rsquo;accès aux scopes est limitée aux fonctionnalités d&rsquo;orchestration
              personnelle. Les quatre premiers scopes portent sur des données du compte Google de
              l&rsquo;utilisateur unique ; les deux derniers sont des scopes techniques d&rsquo;exécution
              Apps Script, présents dans le manifeste réel (<span className="font-mono text-xs">appsscript.json</span>).
            </p>
            <p>
              Phrase explicite, pour un extracteur qui cherche le verbe « accéder » :{' '}
              <strong className="text-ink">
                NEDEN accède à Gmail (gmail.modify), à Google Calendar (calendar), à Google Drive
                (drive), à l&rsquo;adresse e-mail et au profil de base (userinfo.email,
                userinfo.profile), et aux capacités techniques Apps Script script.scriptapp et
                script.external_request.
              </strong>
            </p>
            <div className="space-y-4">
              {SCOPES_GOOGLE.map((s) => (
                <div key={s.nom} className="bg-cardAlt rounded-lg p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <span className="text-ink text-sm font-semibold">{s.nom}</span>
                    <span className="text-secondary text-xs font-mono bg-bg/60 border border-edge rounded px-2 py-0.5">
                      {s.pill}
                    </span>
                  </div>
                  <div className="text-dim text-xs font-mono break-all mb-2">{s.scopeUrl}</div>
                  <p className="text-dim text-sm">{s.acces}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard numero={5} titre="Usage — comment ces données sont utilisées (finalités)">
            <p>
              Chaque accès n&rsquo;existe que pour une finalité d&rsquo;orchestration personnelle, pour
              un unique utilisateur. NEDEN n&rsquo;utilise pas ces données pour de la publicité, du
              scoring commercial, de la revente, ni pour entraîner un modèle d&rsquo;IA public.
            </p>
            <ul className="space-y-3 list-disc pl-5">
              {SCOPES_GOOGLE.map((s) => (
                <li key={s.nom}>
                  <strong className="text-ink">{s.nom}</strong> — {s.usage}
                </li>
              ))}
            </ul>
            <p>
              En pratique, NEDEN sert à : centraliser la recherche d&rsquo;emploi (candidatures,
              relances, formations) ; classer les emails Gmail qui s&rsquo;y rapportent ; poser les
              entretiens et rappels dans Google Calendar ; ranger les documents générés (CV, comptes
              rendus) dans Google Drive ; tenir le suivi structuré dans Notion ; répondre en langage
              naturel via l&rsquo;assistant JARVIS (agents spécialisés selon la tâche, déjà décrits
              sur la page d&rsquo;accueil) ; et, lorsque c&rsquo;est utile, transcrire ou résumer une
              réunion. Ces finalités sont celles déjà publiées sur {HOME_URL} ; cette page ne les
              élargit pas.
            </p>
          </SectionCard>

          <SectionCard numero={6} titre="Stockage — où les données vivent">
            <p>
              NEDEN ne construit pas une copie miroir secrète de Gmail, Calendar ou Drive. Le principe
              est : la donnée Google reste dans le compte Google ; les dérivés utiles à l&rsquo;organisation
              vivent dans l&rsquo;espace Notion personnel ; les secrets d&rsquo;accès vivent dans Apps
              Script, pas dans le code source.
            </p>
            <ul className="space-y-2 list-disc pl-5">
              {SCOPES_GOOGLE.map((s) => (
                <li key={s.nom}>
                  <strong className="text-ink">{s.nom}</strong> — {s.stockage}
                </li>
              ))}
            </ul>
            <p>
              <strong className="text-ink">Jetons OAuth et clés d&rsquo;API</strong> — stockés
              exclusivement dans les Script Properties de Google Apps Script (environnement géré par
              Google), jamais dans le dépôt public neden-pages, jamais dans un fichier client.
            </p>
          </SectionCard>

          <SectionCard numero={7} titre="Partage — avec qui, et avec qui pas">
            <p>
              NEDEN ne partage, ne vend, ni ne loue les données Google à un tiers commercial. Les seuls
              destinataires opérationnels sont listés ci-dessous. Aucun autre utilisateur n&rsquo;a de
              compte. Aucun réseau public n&rsquo;affiche le contenu Gmail, Calendar ou Drive.
            </p>
            <div className="space-y-4">
              {SERVICES_TIERS.map((s) => (
                <div key={s.nom} className="bg-cardAlt rounded-lg p-4">
                  <div className="text-ink text-sm font-semibold mb-1">{s.nom}</div>
                  <div className="text-dim text-sm">{s.role}</div>
                </div>
              ))}
            </div>
            <p>
              Transfert « vers une autre application » au sens Google : le seul transfert structuré
              hors des APIs Google elles-mêmes est l&rsquo;écriture dans Notion (espace personnel du
              même individu) et, ponctuellement, l&rsquo;envoi d&rsquo;un texte déjà détenu vers un
              modèle d&rsquo;IA pour une analyse. Ces transferts restent soumis à Limited Use (section
              11).
            </p>
            <ul className="space-y-2 list-disc pl-5">
              {SCOPES_GOOGLE.map((s) => (
                <li key={s.nom}>
                  <strong className="text-ink">{s.nom}</strong> — {s.partage}
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard numero={8} titre="Protection — TLS, Script Properties, révocation">
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong className="text-ink">Chiffrement en transit</strong> — les échanges entre le
                navigateur, les serveurs d&rsquo;API Google et Cloudflare passent par HTTPS/TLS. Le
                site public neden.fr force HTTPS (HSTS). NEDEN ne revendique pas un chiffrement de
                bout en bout des données pendant leur traitement côté Apps Script : le script lit les
                APIs pour agir, ce qui n&rsquo;est pas du E2E.
              </li>
              <li>
                <strong className="text-ink">Secrets au repos</strong> — jetons de rafraîchissement
                OAuth et clés d&rsquo;API exclusivement dans les Script Properties de Google Apps
                Script, jamais dans le code source du site ni d&rsquo;un dépôt public.
              </li>
              <li>
                <strong className="text-ink">Périmètre d&rsquo;accès</strong> — un seul compte Google
                autorisé. Pas d&rsquo;API publique d&rsquo;inscription. L&rsquo;espace {APP_LOGIN_URL}{' '}
                n&rsquo;est pas une homepage ouverte.
              </li>
              <li>
                <strong className="text-ink">Révocation</strong> — l&rsquo;utilisateur unique peut à
                tout moment révoquer NEDEN depuis{' '}
                <a href={GOOGLE_PERMISSIONS_URL} target="_blank" rel="noreferrer" className="text-secondary hover:underline">
                  {GOOGLE_PERMISSIONS_URL.replace('https://', '')}
                </a>
                . Après révocation, NEDEN ne peut plus appeler Gmail, Calendar ni Drive avec ce jeton.
              </li>
              <li>
                <strong className="text-ink">Dépôt public</strong> — neden-pages ne contient pas de
                secrets (constitution du site). Les pages OAuth sont du HTML statique.
              </li>
            </ul>
          </SectionCard>

          <SectionCard numero={9} titre="Rétention — durée de conservation">
            <p>
              NEDEN ne conserve aucune copie séparée des données Google au-delà de leur usage direct.
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong className="text-ink">Emails</strong> — restent dans Gmail. NEDEN y applique
                des étiquettes ; elle ne les duplique pas dans un autre magasin d&rsquo;emails.
              </li>
              <li>
                <strong className="text-ink">Événements</strong> — créés et tenus dans Google Calendar.
              </li>
              <li>
                <strong className="text-ink">Documents</strong> — restent dans Google Drive.
              </li>
              <li>
                <strong className="text-ink">Dérivés</strong> — un résumé, une étiquette de suivi, une
                fiche candidature : dans l&rsquo;espace Notion personnel, aussi longtemps que cet
                espace reste actif.
              </li>
              <li>
                <strong className="text-ink">Jetons OAuth</strong> — dans les Script Properties jusqu&rsquo;à
                révocation ou rotation par le concepteur.
              </li>
            </ul>
            <ul className="space-y-2 list-disc pl-5">
              {SCOPES_GOOGLE.map((s) => (
                <li key={s.nom}>
                  <strong className="text-ink">{s.nom}</strong> — {s.retention}
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard numero={10} titre="Suppression — comment demander l'effacement">
            <p>
              Il n&rsquo;existe pas d&rsquo;autre personne concernée que le concepteur. Les voies
              suivantes suffisent, et sont les seules réellement disponibles :
            </p>
            <ol className="space-y-2 list-decimal pl-5">
              <li>
                <strong className="text-ink">Révoquer l&rsquo;accès OAuth</strong> —{' '}
                <a href={GOOGLE_PERMISSIONS_URL} target="_blank" rel="noreferrer" className="text-secondary hover:underline">
                  {GOOGLE_PERMISSIONS_URL}
                </a>
                . Coupe Gmail, Calendar, Drive, userinfo et les appels Apps Script qui en dépendent.
              </li>
              <li>
                <strong className="text-ink">Agir dans le compte Google</strong> — supprimer ou
                modifier un email, un événement, un fichier se fait dans Gmail, Calendar et Drive,
                qui restent la source.
              </li>
              <li>
                <strong className="text-ink">Données Notion</strong> — écrire à{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-secondary hover:underline">
                  {CONTACT_EMAIL}
                </a>
                . Le concepteur archive manuellement. Une « suppression » Notion est un archivage,
                pas une purge physique automatique : NEDEN n&rsquo;a pas d&rsquo;outil de suppression
                réelle automatique (règle interne du backend).
              </li>
            </ol>
            <ul className="space-y-2 list-disc pl-5">
              {SCOPES_GOOGLE.map((s) => (
                <li key={s.nom}>
                  <strong className="text-ink">{s.nom}</strong> — {s.suppression}
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard numero={11} titre="Ce que NEDEN ne fait jamais">
            <div className="grid sm:grid-cols-2 gap-3">
              {ENGAGEMENTS.map((e) => (
                <div key={e.titre} className="bg-cardAlt rounded-lg p-4">
                  <div className="text-danger text-sm font-semibold mb-1">{e.titre}</div>
                  <div className="text-dim text-sm">{e.detail}</div>
                </div>
              ))}
            </div>
            <p>
              Ne conserve pas de copie des données Google en dehors du compte Google de
              l&rsquo;utilisateur unique et de son espace Notion personnel. N&rsquo;utilise pas les
              données Google pour servir des publicités. Ne permet pas à un humain tiers de lire le
              contenu Gmail, Calendar ou Drive via NEDEN. Ne crée pas de base de données destinée à
              un autre produit.
            </p>
          </SectionCard>

          <SectionCard numero={12} titre="Limited Use — Google API Services User Data Policy">
            <p>
              <strong className="text-ink">Français.</strong> L&rsquo;utilisation et le transfert, par
              NEDEN, d&rsquo;informations reçues des API Google vers toute autre application
              respectent la{' '}
              <a
                href={GOOGLE_USER_DATA_POLICY_URL}
                target="_blank"
                rel="noreferrer"
                className="text-secondary hover:underline"
              >
                Google API Services User Data Policy
              </a>
              , y compris les exigences de <em>Limited Use</em> (usage limité) applicables aux scopes
              restreints tels que gmail.modify et drive.
            </p>
            <p>
              En particulier, NEDEN : (1) n&rsquo;utilise ces données que pour fournir et améliorer
              les fonctionnalités visibles décrites sur cette page et sur {HOME_URL} ; (2) ne les
              transfère pas à un tiers sauf pour opérer ces fonctionnalités (Notion personnel,
              appel ponctuel à un modèle d&rsquo;IA) ou pour des raisons de conformité / sécurité ;
              (3) ne les utilise pas pour servir des publicités ; (4) ne les emploie pas pour
              entraîner un modèle d&rsquo;IA généralisé ; (5) ne permet pas à des humains tiers de
              lire ces données, hors les cas étroits prévus par la politique Google (sécurité,
              conformité, agrégats).
            </p>
            <p className="pt-2 border-t border-edge text-ink text-sm">
              <strong>English (verbatim Limited Use disclosure).</strong>
            </p>
            <blockquote
              className="border-l-2 border-secondary pl-4 text-ink text-sm not-italic"
              dangerouslySetInnerHTML={{ __html: LIMITED_USE_EN }}
            />
            <p>
              Policy URL:{' '}
              <a
                href={GOOGLE_USER_DATA_POLICY_URL}
                target="_blank"
                rel="noreferrer"
                className="text-secondary hover:underline"
              >
                {GOOGLE_USER_DATA_POLICY_URL}
              </a>
            </p>
          </SectionCard>

          <SectionCard numero={13} titre="Contact, représentant et protection des données">
            <p>
              Responsable du traitement : Sébastien Cheval. Homepage publique :{' '}
              <a href={HOME_URL} className="text-secondary hover:underline">
                {HOME_URL}
              </a>
              . Espace privé / connexion :{' '}
              <a href={APP_LOGIN_URL} target="_blank" rel="noreferrer" className="text-secondary hover:underline">
                {APP_LOGIN_URL}
              </a>
              .
            </p>
            <p>
              Pour toute question sur cette politique, sur les audits OAuth Google, ou pour une
              demande relative aux informations (y compris l&rsquo;archivage Notion) :{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-secondary hover:underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </SectionCard>
        </div>

        <div className="mt-12 pt-6 border-t border-edge text-sm">
          <a href={HOME_URL} className="text-secondary hover:underline">
            ← Retour à l&rsquo;accueil
          </a>
        </div>
      </div>
    </>
  );
}
