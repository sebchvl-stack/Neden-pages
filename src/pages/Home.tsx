/**
 * Contenu source de vérité : memory/*
 * Ne pas inventer de faits — mettre à jour les mémoires d'abord.
 */
export default function Home() {
  return (
    <>
      {/* ——— HERO ——— */}
      <section className="hero">
        <div className="path" aria-hidden />
        <div className="hero-content">
          <p className="eyebrow">
            Direction de projets créatifs &amp; digitaux · Product Owner · Nantes
          </p>
          <h1>
            Je ne change pas de métier —
            <span className="accent"> j&apos;aligne le cadre.</span>
          </h1>
          <p className="lede">
            Stratégie × création × relation humaine. Un profil hybride pour structurer,
            créer et faire avancer — sans diluer le sens.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#parcours">
              Voir mon parcours
            </a>
            <a className="btn-ghost" href="#neden">
              Découvrir NEDEN
            </a>
          </div>
          <div className="kpis">
            <div>
              <strong>10+</strong>
              <span>années</span>
            </div>
            <div>
              <strong>50+</strong>
              <span>clients</span>
            </div>
            <div>
              <strong>150+</strong>
              <span>projets</span>
            </div>
            <div>
              <strong>200K€+</strong>
              <span>CA piloté</span>
            </div>
          </div>
        </div>
      </section>

      {/* ——— PROFIL ——— */}
      <section id="profil" className="section reveal">
        <p className="section-label">Profil</p>
        <h2>Hybride par construction</h2>
        <p>
          Interface métier ↔ équipes de réalisation. Product ownership &amp; delivery Agile,
          communication / marketing digital, relation client, automatisation no-code et IA.
        </p>
        <p>
          Je cherche un rôle clair, un cadre structuré mais flexible, un relationnel sain,
          une charge réaliste et un secteur qui a du sens. Valeurs : bienveillance,
          autonomie de pensée, utilité, tolérance.
        </p>
        <ul className="icon-row">
          <li className="icon-chip">Product Owner</li>
          <li className="icon-chip">Backlog &amp; roadmap</li>
          <li className="icon-chip">Scrum / Kanban</li>
          <li className="icon-chip">Delivery multi-projets</li>
          <li className="icon-chip">Storytelling</li>
          <li className="icon-chip">Relation client</li>
        </ul>
      </section>

      {/* ——— PARCOURS XYZ ——— */}
      <section id="parcours" className="section reveal">
        <p className="section-label">Parcours</p>
        <h2>Ce que j&apos;ai piloté</h2>
        <p>
          Des missions en X / Y / Z : contexte, actions, résultat — pour coller aux
          attentes produit, digital ou communication.
        </p>
        <div className="card-grid">
          <article className="card">
            <h3>Cyberscope</h3>
            <p className="card-meta">2018 → aujourd&apos;hui</p>
            <p>
              <strong>X</strong> Multi-clients digitaux · <strong>Y</strong> Pilotage
              produit &amp; delivery Agile, backlog, interface métiers / équipes, ateliers,
              priorisation valeur · <strong>Z</strong> Continuité multi-comptes, roadmaps
              tenues.
            </p>
            <p className="card-result">150+ projets · delivery Agile</p>
          </article>
          <article className="card">
            <h3>Animal &amp; Co</h3>
            <p className="card-meta">2017 — 2018</p>
            <p>
              <strong>X</strong> Visibilité marque en ligne · <strong>Y</strong> Projets
              web, réseaux sociaux, contenus · <strong>Z</strong> Présence digitale
              renforcée.
            </p>
            <p className="card-result">Présence digitale structurée</p>
          </article>
          <article className="card">
            <h3>Alterburo</h3>
            <p className="card-meta">2016 — 2017</p>
            <p>
              <strong>X</strong> Outils digitaux marketing · <strong>Y</strong> Supports
              et outils digitaux · <strong>Z</strong> Soutien communication &amp; présence
              en ligne.
            </p>
            <p className="card-result">Outils marketing opérationnels</p>
          </article>
          <article className="card">
            <h3>Ernest Soulard</h3>
            <p className="card-meta">2014 — 2016</p>
            <p>
              <strong>X</strong> Marque BtoC · <strong>Y</strong> Supports &amp; projets
              web · <strong>Z</strong> Image de marque et engagement.
            </p>
            <p className="card-result">Cohérence marque renforcée</p>
          </article>
        </div>
      </section>

      {/* ——— COMPÉTENCES ——— */}
      <section id="competences" className="section reveal">
        <p className="section-label">Compétences</p>
        <h2>Ce que j&apos;active</h2>
        <div className="card-grid card-grid--2">
          <article className="card">
            <h3>Produit &amp; Agile</h3>
            <p>
              Vision, roadmap, backlog (epics, user stories, critères d&apos;acceptation),
              priorisation valeur, cérémonies Scrum &amp; Kanban, ateliers métiers.
            </p>
          </article>
          <article className="card">
            <h3>Direction de projet</h3>
            <p>
              Conception et gestion de A à Z, coordination d&apos;équipe, suivi budgétaire,
              reporting, amélioration de la performance, multi-projets.
            </p>
          </article>
          <article className="card">
            <h3>Communication digitale</h3>
            <p>
              Stratégies digitales, storytelling, CMS (WordPress, Prestashop), SEO,
              e-mailing, tracking, cohérence d&apos;image multi-canaux.
            </p>
          </article>
          <article className="card">
            <h3>Automation &amp; IA</h3>
            <p>
              Google Apps Script, Notion API, Make, orchestration multi-IA, workflows
              e-mail → base → Discord, PWA.
            </p>
          </article>
        </div>
        <ul className="icon-row">
          <li className="icon-chip">Organisation 4/4</li>
          <li className="icon-chip">Autonomie 4/4</li>
          <li className="icon-chip">Sens du service</li>
          <li className="icon-chip">Curiosité</li>
          <li className="icon-chip">Relations humaines</li>
          <li className="icon-chip">Donner du sens</li>
        </ul>
      </section>

      {/* ——— OUTILS ——— */}
      <section id="outils" className="section reveal">
        <p className="section-label">Outils</p>
        <h2>Stack du quotidien</h2>
        <p>Design, product engineering, automation, IA — sélection pour le site et le CV.</p>
        <ul className="icon-row">
          <li className="icon-chip">Figma</li>
          <li className="icon-chip">Mobbin</li>
          <li className="icon-chip">Notion</li>
          <li className="icon-chip">Make</li>
          <li className="icon-chip">GitHub</li>
          <li className="icon-chip">Vercel</li>
          <li className="icon-chip">Cloudflare</li>
          <li className="icon-chip">Google AI Studio</li>
          <li className="icon-chip">Grok</li>
          <li className="icon-chip">Perplexity</li>
          <li className="icon-chip">HubSpot</li>
          <li className="icon-chip">Slack / Discord</li>
          <li className="icon-chip">Adobe</li>
          <li className="icon-chip">Google Workspace</li>
        </ul>
      </section>

      {/* ——— NEDEN PRODUIT ——— */}
      <section id="neden" className="section reveal">
        <p className="section-label">Produit</p>
        <h2>NEDEN — le cockpit</h2>
        <p>
          NEDEN (turc : « pourquoi », palindrome) est un outil personnel de suivi de
          candidatures, tâches, digests et automatisations. Objectif : rester aligné dans
          la recherche — et après.
        </p>
        <p>
          Stack : Google Apps Script, Notion, Make, Discord, PWA, sécurisation HMAC /
          tokens. Assistant JARVIS pour le dialogue et le vocal.
        </p>
        <ul className="feature-pills">
          <li>Candidatures</li>
          <li>Tâches</li>
          <li>Agenda</li>
          <li>Documents</li>
          <li>JARVIS</li>
          <li>CV adaptatif</li>
        </ul>
        <p className="content-note">
          L&apos;app est distincte du studio créatif « Au service du sens. » — même nom,
          deux surfaces.
        </p>
      </section>

      {/* ——— STUDIO (léger) ——— */}
      <section id="studio" className="section reveal">
        <p className="section-label">Studio</p>
        <h2>Au service du sens.</h2>
        <p>
          Avant l&apos;image, le sens. Photo corporate, direction artistique, design et
          gestion de projet créatif — BtoB premium, Nantes. Méthode : conversation →
          formulation → production → livraison.
        </p>
        <ul className="feature-pills">
          <li>Pourquoi avant la forme</li>
          <li>Une main pense et fait</li>
          <li>Peu et juste</li>
        </ul>
      </section>

      {/* ——— CONTACT ——— */}
      <section id="contact" className="section reveal">
        <p className="section-label">Contact</p>
        <h2>On en parle</h2>
        <p>
          Sébastien Cheval · Nantes · ouvert aux échanges sur des rôles produit, delivery
          Agile ou digital à fort sens.
        </p>
        <div className="hero-actions">
          <a className="btn-primary" href="mailto:sebchvl@gmail.com">
            sebchvl@gmail.com
          </a>
          <a
            className="btn-ghost"
            href="https://linkedin.com/in/sebastien-cheval-digital-explorateur"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <p className="content-note">06 12 36 07 50</p>
      </section>
    </>
  )
}
