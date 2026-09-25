// Swiss Electrical Academy — Vue d'un Module et Vue Parcours RS 734.2 (V2.0)
// Détail du module, progression spécifique et liste ordonnée des leçons/chapitres

import { StorageService } from '../services/storage.js';
import { ProgressionService } from '../services/progression.js';
import { ACADEMY_MODULES, PYRAMIDE_LOIS_INFO, RS_734_0_INFO, RS_734_2_INFO, RS_734_27_INFO, RS_814_710_INFO, ESTI_221_INFO, ESTI_407_INFO, SECURITE_ELECTRIQUE_INFO } from '../data/academy-data.js';

export function renderModuleView(container, moduleId) {
  const mod = ACADEMY_MODULES.find(m => m.id === moduleId);

  if (!mod) {
    container.innerHTML = `
      <div style="text-align:center; padding:3rem 1rem;">
        <h2>Module introuvable</h2>
        <p style="color:var(--text-muted); margin-top:0.5rem;">Le module demandé n'existe pas dans le référentiel officiel.</p>
        <button class="btn-continue" style="margin-top:1.5rem;" onclick="location.hash='#/'">← Retour à l'accueil</button>
      </div>
    `;
    return;
  }

  const modProgress = ProgressionService.getModuleProgress(moduleId);
  const pyramideProgress = ProgressionService.getParcoursProgress('pyramide-lois');
  const lieProgress = ProgressionService.getParcoursProgress('rs-734-0');
  const ocfoProgress = ProgressionService.getParcoursProgress('rs-734-2');
  const oibtProgress = ProgressionService.getParcoursProgress('rs-734-27');
  const orniProgress = ProgressionService.getParcoursProgress('rs-814-710');
  const esti221Progress = ProgressionService.getParcoursProgress('esti-221');
  const esti407Progress = ProgressionService.getParcoursProgress('esti-407');
  const securiteProgress = ProgressionService.getParcoursProgress('securite-electrique');
  const completed = StorageService.getCompletedLessons();

  container.innerHTML = `
    <nav class="breadcrumb-nav" aria-label="Fil d'ariane">
      <a href="#/" class="breadcrumb-link">Accueil</a>
      <span>/</span>
      <a href="#/formations" class="breadcrumb-link">Formations</a>
      <span>/</span>
      <span>Module ${mod.id}</span>
    </nav>

    <header class="module-view-header">
      <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
        <div class="module-code-badge badge-${mod.id}" style="width:48px; height:48px; font-size:1.4rem;">
          ${mod.code}
        </div>
        <div>
          <div style="font-size:0.75rem; font-weight:700; color:var(--electric-blue); text-transform:uppercase; letter-spacing:0.08em;">
            Module ${mod.id}
          </div>
          <h1 style="font-size:1.6rem; font-weight:800; color:var(--text-primary);">${mod.title}</h1>
        </div>
      </div>

      <p style="color:var(--text-secondary); max-width:700px; line-height:1.5; margin-bottom:1.5rem;">
        ${mod.description}
      </p>

      <div style="max-width:480px;">
        <div class="progress-labels">
          <span>Progression du module</span>
          <span>${modProgress.percentageFormatted} (${modProgress.completedCount} sur ${modProgress.totalAvailable} validés)</span>
        </div>
        <div class="progress-bar-bg" style="height:8px;">
          <div class="progress-bar-fill" style="width: ${modProgress.percentage}%;"></div>
        </div>
      </div>
    </header>

    ${moduleId === 'A' ? `
      <!-- Carte Parcours Structuré Pyramide des lois (Cadre normatif fédéral) -->
      <section class="pyramide-featured-parcours-box" aria-labelledby="pyramideFeaturedTitle">
        <div class="pyramide-featured-top">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span class="pyramide-featured-badge">CADRE NORMATIF FÉDÉRAL</span>
            <span class="pyramide-featured-code">PYRAMIDE DES LOIS</span>
          </div>
          <span class="pyramide-featured-stats">${pyramideProgress.lessonsCompleted} / ${pyramideProgress.lessonsTotal} leçons · ${pyramideProgress.percentageFormatted}</span>
        </div>
        <h2 id="pyramideFeaturedTitle" class="pyramide-featured-title">Cadre légal et hiérarchie normative suisse (Pyramide des lois)</h2>
        <p class="pyramide-featured-desc">
          Parcours structuré en 4 leçons officielles (Histoire 1888-1902, Hiérarchie juridique & références RS, Règles techniques & Organismes, Typologie des normes [SN]/[SNR]/[SNG]) et 1 évaluation finale certifiante de 8 questions.
        </p>
        <div class="progress-bar-bg" style="height:6px; margin-bottom:1rem;">
          <div class="progress-bar-fill" style="width: ${pyramideProgress.percentage}%; background:#ec4899;"></div>
        </div>
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
          <button class="btn-continue" id="btnOpenPyramideHub" onclick="location.hash='#/formations/A/pyramide-lois'" style="display:inline-flex; align-items:center; gap:0.5rem; background:#ec4899; color:#ffffff; font-weight:700; cursor:pointer;">
            <span>Explorer les ${pyramideProgress.lessonsTotal} leçons</span>
            <span>→</span>
          </button>
        </div>
      </section>

      <!-- Carte Parcours Structuré RS 734.0 — LIE (Loi fédérale) -->
      <section class="lie-featured-parcours-box" aria-labelledby="lieFeaturedTitle">
        <div class="lie-featured-top">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span class="lie-featured-badge">LOI FÉDÉRALE</span>
            <span class="lie-featured-code">RS 734.0 — LIE</span>
          </div>
          <span class="lie-featured-stats">${lieProgress.lessonsCompleted} / ${lieProgress.lessonsTotal} leçons · ${lieProgress.percentageFormatted}</span>
        </div>
        <h2 id="lieFeaturedTitle" class="lie-featured-title">Loi fédérale concernant les installations électriques à faible et à fort courant (LIE)</h2>
        <p class="lie-featured-desc">
          Parcours structuré en 11 leçons officielles fidèles aux 11 parties du texte légal (du 24 juin 1902, état au 1er avril 2026, Art. 1 à 64) et 1 évaluation finale certifiante de 16 questions.
        </p>
        <div class="progress-bar-bg" style="height:6px; margin-bottom:1rem;">
          <div class="progress-bar-fill" style="width: ${lieProgress.percentage}%; background:#f59e0b;"></div>
        </div>
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
          <button class="btn-continue" id="btnOpenLieHub" onclick="location.hash='#/formations/A/rs-734-0'" style="display:inline-flex; align-items:center; gap:0.5rem; background:#f59e0b; color:#000; font-weight:700; cursor:pointer;">
            <span>Explorer les ${lieProgress.lessonsTotal} leçons</span>
            <span>→</span>
          </button>
        </div>
      </section>

      <!-- Carte Parcours Structuré RS 734.2 — OCFo (Section 7) -->
      <section class="ocfo-featured-parcours-box" aria-labelledby="ocfoFeaturedTitle">
        <div class="ocfo-featured-top">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span class="ocfo-featured-badge">ORDONNANCE</span>
            <span class="ocfo-featured-code">RS 734.2 — OCFo</span>
          </div>
          <span class="ocfo-featured-stats">${ocfoProgress.lessonsCompleted} / ${ocfoProgress.lessonsTotal} leçons · ${ocfoProgress.percentageFormatted}</span>
        </div>
        <h2 id="ocfoFeaturedTitle" class="ocfo-featured-title">Ordonnance sur les installations électriques à courant fort (OCFo)</h2>
        <p class="ocfo-featured-desc">
          Parcours complet restructuré fidèlement en 8 leçons (les 7 chapitres légaux et la Leçon 8 regroupant les Annexes 1 à 4 · État au 1er juin 2019).
          Des définitions fondamentales aux 5 règles vitales d'intervention, avec la visualisation interactive de l'Annexe 4.
        </p>
        <div class="progress-bar-bg" style="height:6px; margin-bottom:1rem;">
          <div class="progress-bar-fill" style="width: ${ocfoProgress.percentage}%; background:#0284c7;"></div>
        </div>
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
          <button class="btn-continue" id="btnOpenOcfoHub" onclick="location.hash='#/formations/A/rs-734-2'" style="display:inline-flex; align-items:center; gap:0.5rem; cursor:pointer;">
            <span>Explorer les ${ocfoProgress.lessonsTotal} leçons</span>
            <span>→</span>
          </button>
        </div>
      </section>

      <!-- Carte Parcours Structuré RS 734.27 — OIBT (Ordonnance basse tension) -->
      <section class="oibt-featured-parcours-box" aria-labelledby="oibtFeaturedTitle">
        <div class="oibt-featured-top">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span class="oibt-featured-badge">ORDONNANCE</span>
            <span class="oibt-featured-code">RS 734.27 — OIBT</span>
          </div>
          <span class="oibt-featured-stats">${oibtProgress.lessonsCompleted} / ${oibtProgress.lessonsTotal} leçons · ${oibtProgress.percentageFormatted}</span>
        </div>
        <h2 id="oibtFeaturedTitle" class="oibt-featured-title">Ordonnance sur les installations électriques à basse tension (OIBT)</h2>
        <p class="oibt-featured-desc">
          Parcours complet restructuré en 7 leçons officielles (les 6 chapitres réglementaires et la Leçon 7 dédiée à l'Annexe des contrôles périodiques · Art. 1 à 45 et Annexe) et 1 évaluation finale certifiante de 16 questions.
        </p>
        <div class="progress-bar-bg" style="height:6px; margin-bottom:1rem;">
          <div class="progress-bar-fill" style="width: ${oibtProgress.percentage}%; background:#10b981;"></div>
        </div>
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
          <button class="btn-continue" id="btnOpenOibtHub" onclick="location.hash='#/formations/A/rs-734-27'" style="display:inline-flex; align-items:center; gap:0.5rem; background:#10b981; color:#042f2e; font-weight:700; cursor:pointer;">
            <span>Explorer les ${oibtProgress.lessonsTotal} leçons</span>
            <span>→</span>
          </button>
        </div>
      </section>

      <!-- Carte Parcours Structuré RS 814.710 — ORNI (Ordonnance rayonnement non ionisant) -->
      <section class="orni-featured-parcours-box" aria-labelledby="orniFeaturedTitle">
        <div class="orni-featured-top">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span class="orni-featured-badge">ORDONNANCE</span>
            <span class="orni-featured-code">RS 814.710 — ORNI</span>
          </div>
          <span class="orni-featured-stats">${orniProgress.lessonsCompleted} / ${orniProgress.lessonsTotal} leçons · ${orniProgress.percentageFormatted}</span>
        </div>
        <h2 id="orniFeaturedTitle" class="orni-featured-title">Ordonnance sur la protection contre le rayonnement non ionisant (ORNI)</h2>
        <p class="orni-featured-desc">
          Parcours officiel structuré en 7 leçons conformes au texte légal (champs de 0 Hz à 300 GHz, LAUS, VLI préventive à 1 µT, courants déterminants, NIBT, téléphonie mobile) et 1 évaluation finale certifiante de 16 questions.
        </p>
        <div class="progress-bar-bg" style="height:6px; margin-bottom:1rem;">
          <div class="progress-bar-fill" style="width: ${orniProgress.percentage}%; background:#8b5cf6;"></div>
        </div>
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
          <button class="btn-continue" id="btnOpenOrniHub" onclick="location.hash='#/formations/A/rs-814-710'" style="display:inline-flex; align-items:center; gap:0.5rem; background:#8b5cf6; color:#ffffff; font-weight:700; cursor:pointer;">
            <span>Explorer les ${orniProgress.lessonsTotal} leçons</span>
            <span>→</span>
          </button>
        </div>
      </section>
    ` : ''}

    ${moduleId === 'E' ? `
      <!-- Carte Parcours Structuré Directive ESTI n° 221 (Version 0621) -->
      <section class="esti-featured-parcours-box" aria-labelledby="esti221FeaturedTitle" style="margin-bottom:1rem;">
        <div class="esti-featured-top">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span class="esti-featured-badge">DIRECTIVE ESTI · VERSION 0621</span>
            <span class="esti-featured-code">ESTI 221</span>
          </div>
          <span class="esti-featured-stats">${esti221Progress.lessonsCompleted} / ${esti221Progress.lessonsTotal} leçons · ${esti221Progress.percentageFormatted}</span>
        </div>
        <h2 id="esti221FeaturedTitle" class="esti-featured-title">Directive ESTI n° 221 — Obligations d'annoncer</h2>
        <p class="esti-featured-desc">
          Parcours officiel structuré en 4 leçons conformes à la directive ESTI 221 (Cadre légal OIBT, Les 13 cas d'annonce obligatoire, Première vérification & dispense de RaSi, Droit transitoire & notification) et 1 évaluation finale certifiante de 10 questions.
        </p>
        <div class="progress-bar-bg" style="height:6px; margin-bottom:1rem;">
          <div class="progress-bar-fill" style="width: ${esti221Progress.percentage}%; background:#10b981;"></div>
        </div>
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
          <button class="btn-continue" id="btnOpenEsti221Hub" onclick="location.hash='#/formations/E/esti-221'" style="display:inline-flex; align-items:center; gap:0.5rem; background:#10b981; color:#042f2e; font-weight:700; cursor:pointer;">
            <span>Explorer les ${esti221Progress.lessonsTotal} leçons</span>
            <span>→</span>
          </button>
        </div>
      </section>

      <!-- Carte Parcours Structuré Directive ESTI n° 407 (Version 0526) -->
      <section class="esti407-featured-parcours-box" aria-labelledby="esti407FeaturedTitle">
        <div class="esti-featured-top">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span class="esti407-featured-badge">DIRECTIVE ESTI · VERSION 0526</span>
            <span class="esti407-featured-code">ESTI 407</span>
          </div>
          <span class="esti-featured-stats">${esti407Progress.lessonsCompleted} / ${esti407Progress.lessonsTotal} leçons · ${esti407Progress.percentageFormatted}</span>
        </div>
        <h2 id="esti407FeaturedTitle" class="esti-featured-title">Directive ESTI n° 407 — Activités sur ou à proximité des installations électriques</h2>
        <p class="esti-featured-desc">
          Parcours officiel structuré en 13 leçons calquées 1:1 sur les 13 chapitres de la Directive ESTI n° 407 (Champ d'application, But, Bases légales, Ouvrages de référence, 3 Objectifs de protection, Obligations, Définitions, Principes généraux & S-T-O-P, Mesurage & essais, 4 Procédures de travail & TST, Courant continu, EPI & Niveaux anti-arc, Études de cas BT/HT) et 1 évaluation finale certifiante de 10 questions.
        </p>
        <div class="progress-bar-bg" style="height:6px; margin-bottom:1rem;">
          <div class="progress-bar-fill" style="width: ${esti407Progress.percentage}%; background:#f97316;"></div>
        </div>
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
          <button class="btn-continue" id="btnOpenEsti407Hub" onclick="location.hash='#/formations/E/esti-407'" style="display:inline-flex; align-items:center; gap:0.5rem; background:#f97316; color:#ffffff; font-weight:700; cursor:pointer;" onmouseover="this.style.background='#ea580c'" onmouseout="this.style.background='#f97316'">
            <span>Explorer les ${esti407Progress.lessonsTotal} leçons</span>
            <span>→</span>
          </button>
        </div>
      </section>
    ` : ''}

    ${moduleId === 'B' ? `
      <!-- Carte Parcours Structuré Sécurité électrique (Module B) -->
      <section class="securite-featured-parcours-box" aria-labelledby="securiteFeaturedTitle">
        <div class="securite-featured-top">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span class="securite-featured-badge">PUBLICATION SPÉCIALISÉE</span>
            <span class="securite-featured-code">SÉCURITÉ ÉLECTRIQUE</span>
          </div>
          <span class="securite-featured-stats">${securiteProgress.lessonsCompleted} / ${securiteProgress.lessonsTotal} leçons · ${securiteProgress.percentageFormatted}</span>
        </div>
        <h2 id="securiteFeaturedTitle" class="securite-featured-title">Sécurité électrique — Dangers de l'électricité et prévention</h2>
        <p class="securite-featured-desc">
          ${SECURITE_ELECTRIQUE_INFO.description}
        </p>
        <div class="progress-bar-bg" style="height:6px; margin-bottom:1rem;">
          <div class="progress-bar-fill" style="width: ${securiteProgress.percentage}%; background:#ef4444;"></div>
        </div>
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
          <button class="btn-continue" id="btnOpenSecuriteHub" onclick="location.hash='#/formations/B/securite-electrique'" style="display:inline-flex; align-items:center; gap:0.5rem; background:#ef4444; color:#ffffff; font-weight:700; cursor:pointer;" onmouseover="this.style.background='#dc2626'" onmouseout="this.style.background='#ef4444'">
            <span>Explorer les ${securiteProgress.lessonsTotal} leçons</span>
            <span>→</span>
          </button>
        </div>
      </section>
    ` : ''}

    <section aria-label="Liste des formations du module">
      <div class="section-heading">
        <span>📑</span> Contenu de la formation (${mod.countLabel})
      </div>
      <div class="formations-list">
        ${mod.formations.map(formation => {
          const isDone = completed.includes(formation.id);
          const isAvailable = formation.status === "Disponible";
          const isPyramide = formation.id.startsWith('pyr-');
          const isLie = formation.id.startsWith('rs-734-0-');
          const isOcfo = formation.id.startsWith('rs-734-2-') && !formation.id.startsWith('rs-734-27-');
          const isOibt = formation.id.startsWith('rs-734-27-');
          const isOrni = formation.id.startsWith('rs-814-710-');
          const isEsti221 = formation.id.startsWith('esti-221-');
          const isEsti407 = formation.id.startsWith('esti-407-');
          const isSecurite = formation.id.startsWith('sec-');

          return `
            <article class="formation-item-card ${isPyramide ? 'pyramide-card-accent' : (isLie ? 'lie-card-accent' : (isOcfo ? 'ocfo-card-accent' : (isOibt ? 'oibt-card-accent' : (isOrni ? 'orni-card-accent' : (isEsti221 ? 'esti221-card-accent' : (isEsti407 ? 'esti407-card-accent' : (isSecurite ? 'securite-card-accent' : '')))))))}" data-formation-id="${formation.id}">
              <div class="formation-code-col">
                <span class="formation-code-tag">${formation.code}</span>
              </div>

              <div class="formation-title-col">
                <div class="formation-item-title">
                  ${formation.title} ${isDone ? '✓' : ''}
                </div>
                <div class="formation-item-subtitle">${formation.subtitle || ''}</div>
              </div>

              <div style="display:flex; align-items:center; gap:0.85rem;">
                <span style="font-size:0.75rem; color:var(--text-muted);">${formation.duration}</span>
                <span class="status-badge ${isAvailable ? (isDone ? 'status-available' : 'status-available') : 'status-dev'}">
                  ${isDone ? '✓ Validé' : formation.status}
                </span>
                <span style="color:var(--electric-blue); font-size:1.1rem;">→</span>
              </div>
            </article>
          `;
        }).join('')}
      </div>
    </section>
  `;

  // Clic sur le bouton du parcours Pyramide des lois
  const btnOpenPyramideHub = container.querySelector('#btnOpenPyramideHub');
  if (btnOpenPyramideHub) {
    btnOpenPyramideHub.addEventListener('click', () => {
      location.hash = '#/formations/A/pyramide-lois';
    });
  }

  // Clic sur le bouton du parcours Sécurité électrique
  const btnOpenSecuriteHub = container.querySelector('#btnOpenSecuriteHub');
  if (btnOpenSecuriteHub) {
    btnOpenSecuriteHub.addEventListener('click', () => {
      location.hash = '#/formations/B/securite-electrique';
    });
  }

  // Clic sur le bouton du parcours LIE
  const btnOpenLieHub = container.querySelector('#btnOpenLieHub');
  if (btnOpenLieHub) {
    btnOpenLieHub.addEventListener('click', () => {
      location.hash = '#/formations/A/rs-734-0';
    });
  }

  // Clic sur le bouton du parcours OCFo
  const btnOpenOcfoHub = container.querySelector('#btnOpenOcfoHub');
  if (btnOpenOcfoHub) {
    btnOpenOcfoHub.addEventListener('click', () => {
      location.hash = '#/formations/A/rs-734-2';
    });
  }

  // Clic sur le bouton du parcours OIBT
  const btnOpenOibtHub = container.querySelector('#btnOpenOibtHub');
  if (btnOpenOibtHub) {
    btnOpenOibtHub.addEventListener('click', () => {
      location.hash = '#/formations/A/rs-734-27';
    });
  }

  // Clic sur le bouton du parcours ORNI
  const btnOpenOrniHub = container.querySelector('#btnOpenOrniHub');
  if (btnOpenOrniHub) {
    btnOpenOrniHub.addEventListener('click', () => {
      location.hash = '#/formations/A/rs-814-710';
    });
  }

  // Clic sur le bouton du parcours ESTI 221
  const btnOpenEsti221Hub = container.querySelector('#btnOpenEsti221Hub');
  if (btnOpenEsti221Hub) {
    btnOpenEsti221Hub.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      location.hash = '#/formations/E/esti-221';
    });
  }

  // Clic sur le bouton du parcours ESTI 407
  const btnOpenEsti407Hub = container.querySelector('#btnOpenEsti407Hub');
  if (btnOpenEsti407Hub) {
    btnOpenEsti407Hub.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      location.hash = '#/formations/E/esti-407';
    });
  }

  // Événements de clic sur chaque formation
  container.querySelectorAll('.formation-item-card').forEach(card => {
    card.addEventListener('click', () => {
      const formationId = card.getAttribute('data-formation-id');
      if (formationId.startsWith('pyr-0')) {
        location.hash = `#/formations/A/pyramide-lois/${formationId}`;
      } else if (formationId === 'pyr-evaluation-finale') {
        location.hash = `#/formations/A/pyramide-lois/evaluation-finale`;
      } else if (formationId.startsWith('sec-0')) {
        const leconNum = formationId.replace('sec-0', '');
        location.hash = `#/formations/B/securite-electrique/lecon-${leconNum}`;
      } else if (formationId === 'sec-evaluation-finale') {
        location.hash = `#/formations/B/securite-electrique/evaluation-finale`;
      } else if (formationId.startsWith('rs-734-0-lecon-')) {
        const leconNum = formationId.replace('rs-734-0-lecon-', '');
        location.hash = `#/formations/A/rs-734-0/lecon-${leconNum}`;
      } else if (formationId === 'rs-734-0-evaluation-finale') {
        location.hash = `#/formations/A/rs-734-0/evaluation-finale`;
      } else if (formationId.startsWith('rs-734-27-lecon-')) {
        const leconNum = formationId.replace('rs-734-27-lecon-', '');
        location.hash = `#/formations/A/rs-734-27/lecon-${leconNum}`;
      } else if (formationId === 'rs-734-27-evaluation-finale') {
        location.hash = `#/formations/A/rs-734-27/evaluation-finale`;
      } else if (formationId.startsWith('rs-814-710-lecon-')) {
        const leconNum = formationId.replace('rs-814-710-lecon-', '');
        location.hash = `#/formations/A/rs-814-710/lecon-${leconNum}`;
      } else if (formationId === 'rs-814-710-evaluation-finale') {
        location.hash = `#/formations/A/rs-814-710/evaluation-finale`;
      } else if (formationId.startsWith('rs-734-2-chapitre-')) {
        const chapNum = formationId.replace('rs-734-2-chapitre-', '');
        location.hash = `#/formations/A/rs-734-2/chapitre-${chapNum}`;
      } else if (formationId.startsWith('rs-734-2-evaluation-finale')) {
        location.hash = `#/formations/A/rs-734-2/evaluation-finale`;
      } else if (formationId.startsWith('esti-221-lecon-')) {
        const leconNum = formationId.replace('esti-221-lecon-', '');
        location.hash = `#/formations/E/esti-221/lecon-${leconNum}`;
      } else if (formationId === 'esti-221-evaluation-finale') {
        location.hash = `#/formations/E/esti-221/evaluation-finale`;
      } else if (formationId.startsWith('esti-407-lecon-')) {
        const leconNum = formationId.replace('esti-407-lecon-', '');
        location.hash = `#/formations/E/esti-407/lecon-${leconNum}`;
      } else if (formationId === 'esti-407-evaluation-finale') {
        location.hash = `#/formations/E/esti-407/evaluation-finale`;
      } else {
        location.hash = `#/formations/${mod.id}/${formationId}`;
      }
    });
  });
}

// ----------------------------------------------------------------------------
// Vue Hub Dédiée : RS 734.2 — OCFo (7 Chapitres officiels)
// Conforme au design de la Section 7 du prompt utilisateur
// ----------------------------------------------------------------------------
export function renderOcfoParcoursView(container) {
  const parcoursProgress = ProgressionService.getParcoursProgress('rs-734-2');
  const chapters = RS_734_2_INFO.chapters;
  const isFinalDone = parcoursProgress.isFinalDone;
  const completedCount = parcoursProgress.lessonsCompleted;
  const totalLessons = parcoursProgress.lessonsTotal;

  // Trouver le premier chapitre non validé pour le bouton "Continuer"
  let nextChapterSlug = 'chapitre-1';
  const completed = StorageService.getCompletedLessons();
  for (const c of chapters) {
    if (!completed.includes(c.id)) {
      nextChapterSlug = c.slug;
      break;
    }
  }
  if (completedCount === totalLessons && !isFinalDone) {
    nextChapterSlug = 'evaluation-finale';
  }

  container.innerHTML = `
    <nav class="breadcrumb-nav" aria-label="Fil d'ariane">
      <a href="#/" class="breadcrumb-link">Accueil</a>
      <span>/</span>
      <a href="#/formations" class="breadcrumb-link">Formations</a>
      <span>/</span>
      <a href="#/formations/A" class="breadcrumb-link">Module A — Dispositions légales</a>
      <span>/</span>
      <span>RS 734.2 — OCFo</span>
    </nav>

    <!-- Header Hero Card OCFo (Section 7) -->
    <header class="ocfo-hub-hero" role="region" aria-label="En-tête du parcours RS 734.2">
      <div class="ocfo-hub-badge-row">
        <span class="ocfo-hub-tag">DROIT FÉDÉRAL SUISSE · COURANT FORT</span>
        <span class="ocfo-hub-ref">RS 734.2</span>
      </div>

      <div class="ocfo-hub-title-row">
        <div>
          <div class="ocfo-hub-short">OCFo (du 30 mars 1994 · État au 1er juin 2019)</div>
          <h1 class="ocfo-hub-title">Ordonnance sur les installations électriques à courant fort</h1>
        </div>
      </div>

      <p class="ocfo-hub-desc">
        ${RS_734_2_INFO.description}
      </p>

      <div class="ocfo-hub-progress-card">
        <div class="progress-labels">
          <span style="font-weight:700; color:var(--text-primary);">Progression du parcours OCFo</span>
          <span style="font-weight:800; color:var(--electric-blue); font-size:1rem;">
            ${parcoursProgress.percentageFormatted} · ${completedCount} / ${totalLessons} leçons
          </span>
        </div>
        <div class="progress-bar-bg" style="height:10px; margin-top:0.5rem;">
          <div class="progress-bar-fill" style="width: ${parcoursProgress.percentage}%;"></div>
        </div>

        <div style="margin-top:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
          <button class="btn-continue" id="btnResumeOcfo" style="display:inline-flex; align-items:center; gap:0.5rem;">
            <span>${completedCount === 0 ? 'Commencer la Leçon 1' : (completedCount === 8 ? 'Accéder à l\'évaluation finale' : 'Reprendre le parcours')}</span>
            <span>→</span>
          </button>
          <button class="btn-continue" onclick="location.hash='#/formations/A'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
            ← Retour au Module A
          </button>
        </div>
      </div>
    </header>

    <!-- Liste des 8 Leçons officielles (7 Chapitres + Leçon 8 Annexes) -->
    <section class="ocfo-chapters-section" aria-label="Liste ordonnée des 8 leçons OCFo">
      <div class="section-heading">
        <span>📚</span> Les 8 leçons du parcours (7 chapitres légaux & Annexes 1 à 4)
      </div>

      <div class="ocfo-chapters-list">
        ${chapters.map((chap, idx) => {
          const isDone = completed.includes(chap.id);
          const isCurrent = !isDone && (idx === 0 || completed.includes(chapters[idx - 1].id));

          return `
            <article class="ocfo-chapter-card ${isCurrent ? 'chapter-in-progress' : ''} ${isDone ? 'chapter-completed' : ''}" data-chapter-slug="${chap.slug}">
              <div class="ocfo-card-left">
                <span class="ocfo-chap-number">${chap.number}</span>
                <span class="ocfo-status-box ${isDone ? 'box-done' : (isCurrent ? 'box-current' : 'box-pending')}">
                  ${isDone ? '[✓]' : (isCurrent ? '[●]' : '[  ]')}
                </span>
              </div>

              <div class="ocfo-card-center">
                <div class="ocfo-chap-title-row">
                  <h2 class="ocfo-chap-title">${chap.title}</h2>
                  ${isDone ? '<span class="ocfo-badge-done">✓ Validé</span>' : (isCurrent ? '<span class="ocfo-badge-current">En cours</span>' : '')}
                </div>
                <div class="ocfo-chap-articles">
                  <span class="legal-tag">${chap.articles}</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${chap.duration}</span>
                </div>
                <p class="ocfo-chap-summary">${chap.summary}</p>
              </div>

              <div class="ocfo-card-right">
                <button class="ocfo-btn-open" aria-label="Ouvrir le ${chap.title}">
                  <span>${isDone ? 'Revoir' : (isCurrent ? 'Continuer' : 'Commencer')}</span>
                  <span>→</span>
                </button>
              </div>
            </article>
          `;
        }).join('')}

        <!-- Évaluation Finale (Section 11) -->
        <article class="ocfo-chapter-card ocfo-final-card ${isFinalDone ? 'chapter-completed' : ''}" data-chapter-slug="evaluation-finale">
          <div class="ocfo-card-left">
            <span class="ocfo-chap-number" style="background:rgba(239,68,68,0.15); color:var(--accent-red);">🏁</span>
            <span class="ocfo-status-box ${isFinalDone ? 'box-done' : 'box-pending'}">
              ${isFinalDone ? '[✓]' : '[  ]'}
            </span>
          </div>

          <div class="ocfo-card-center">
            <div class="ocfo-chap-title-row">
              <h2 class="ocfo-chap-title" style="color:var(--text-primary);">${RS_734_2_INFO.finalEvaluation.title}</h2>
              ${isFinalDone ? '<span class="ocfo-badge-done">✓ Certifié</span>' : '<span class="ocfo-badge-eval">Examen final</span>'}
            </div>
            <div class="ocfo-chap-articles">
              <span class="legal-tag">Art. 1 à 86</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${RS_734_2_INFO.finalEvaluation.duration}</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 50 XP</span>
            </div>
            <p class="ocfo-chap-summary">${RS_734_2_INFO.finalEvaluation.summary}</p>
          </div>

          <div class="ocfo-card-right">
            <button class="ocfo-btn-open" style="background:var(--accent-red); color:#fff; border-color:var(--accent-red);" aria-label="Ouvrir l'évaluation finale">
              <span>${isFinalDone ? 'Revoir' : 'Passer l\'examen'}</span>
              <span>→</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  `;

  // Clic sur bouton Continuer
  const btnResume = container.querySelector('#btnResumeOcfo');
  if (btnResume) {
    btnResume.addEventListener('click', () => {
      location.hash = `#/formations/A/rs-734-2/${nextChapterSlug}`;
    });
  }

  // Clics sur les cartes de chapitres
  container.querySelectorAll('.ocfo-chapter-card').forEach(card => {
    card.addEventListener('click', () => {
      const slug = card.getAttribute('data-chapter-slug');
      location.hash = `#/formations/A/rs-734-2/${slug}`;
    });
  });
}

// ----------------------------------------------------------------------------
// Vue Hub Dédiée : Pyramide des lois (4 Leçons officielles + Évaluation finale)
// Source de vérité : Infographie synthétique & Recueil systématique RS
// ----------------------------------------------------------------------------
export function renderPyramideParcoursView(container) {
  const parcoursProgress = ProgressionService.getParcoursProgress('pyramide-lois');
  const lessons = PYRAMIDE_LOIS_INFO ? PYRAMIDE_LOIS_INFO.lessons : [];
  const isFinalDone = parcoursProgress.isFinalDone;
  const completedCount = parcoursProgress.lessonsCompleted;
  const totalLessons = parcoursProgress.lessonsTotal;

  // Trouver la première leçon non validée
  let nextLessonSlug = 'pyr-01';
  const completed = StorageService.getCompletedLessons();
  for (const l of lessons) {
    if (!completed.includes(l.id)) {
      nextLessonSlug = l.id;
      break;
    }
  }
  if (completedCount === totalLessons && !isFinalDone) {
    nextLessonSlug = 'evaluation-finale';
  }

  container.innerHTML = `
    <nav class="breadcrumb-nav" aria-label="Fil d'ariane">
      <a href="#/" class="breadcrumb-link">Accueil</a>
      <span>/</span>
      <a href="#/formations" class="breadcrumb-link">Formations</a>
      <span>/</span>
      <a href="#/formations/A" class="breadcrumb-link">Module A — Dispositions légales</a>
      <span>/</span>
      <span>Pyramide des lois</span>
    </nav>

    <!-- Header Hero Card Pyramide -->
    <header class="ocfo-hub-hero" style="border-left: 4px solid #ec4899;" role="region" aria-label="En-tête du parcours Pyramide des lois">
      <div class="ocfo-hub-badge-row">
        <span class="ocfo-hub-tag">CADRE NORMATIF FÉDÉRAL · HIÉRARCHIE DES NORMES</span>
        <span class="ocfo-hub-ref" style="border-color:rgba(236,72,153,0.4); color:#f472b6; background:rgba(236,72,153,0.12);">PYRAMIDE DES LOIS</span>
      </div>

      <div class="ocfo-hub-title-row">
        <div>
          <div class="ocfo-hub-short" style="color:#ec4899;">HIÉRARCHIE DU DROIT ÉLECTRIQUE SUISSE</div>
          <h1 class="ocfo-hub-title">Cadre légal et hiérarchie normative suisse (Pyramide des lois)</h1>
        </div>
      </div>

      <p class="ocfo-hub-desc">
        ${PYRAMIDE_LOIS_INFO.description}
      </p>

      <div class="ocfo-hub-progress-card">
        <div class="progress-labels">
          <span style="font-weight:700; color:var(--text-primary);">Progression du parcours Pyramide</span>
          <span style="font-weight:800; color:#ec4899; font-size:1rem;">
            ${parcoursProgress.percentageFormatted} · ${completedCount} / ${totalLessons} leçons
          </span>
        </div>
        <div class="progress-bar-bg" style="height:10px; margin-top:0.5rem;">
          <div class="progress-bar-fill" style="width: ${parcoursProgress.percentage}%; background:#ec4899;"></div>
        </div>

        <div style="margin-top:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
          <button class="btn-continue" id="btnResumePyramide" style="display:inline-flex; align-items:center; gap:0.5rem; background:#ec4899; color:#ffffff; font-weight:700; cursor:pointer;">
            <span>${completedCount === 0 ? 'Commencer la Leçon 1' : (completedCount === totalLessons && !isFinalDone ? 'Accéder à l\'évaluation finale' : (isFinalDone ? 'Revoir le parcours' : 'Reprendre le parcours'))}</span>
            <span>→</span>
          </button>
          <button class="btn-continue" onclick="location.hash='#/formations/A'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium); cursor:pointer;">
            ← Retour au Module A
          </button>
        </div>
      </div>
    </header>

    <!-- Liste des 4 Leçons officielles -->
    <section class="ocfo-chapters-section" aria-label="Liste ordonnée des 4 leçons de la Pyramide des lois">
      <div class="section-heading">
        <span>📚</span> Les 4 leçons du parcours (fidèles aux 4 volets de la pyramide)
      </div>

      <div class="ocfo-chapters-list">
        ${lessons.map((les, idx) => {
          const isDone = completed.includes(les.id);
          const isCurrent = !isDone && (idx === 0 || completed.includes(lessons[idx - 1].id));

          return `
            <article class="ocfo-chapter-card ${isCurrent ? 'chapter-in-progress' : ''} ${isDone ? 'chapter-completed' : ''}" data-lesson-id="${les.id}" style="${isCurrent ? 'border-color:#ec4899;' : ''}">
              <div class="ocfo-card-left">
                <span class="ocfo-chap-number" style="border-color:rgba(236,72,153,0.3); color:#ec4899;">${les.number}</span>
                <span class="ocfo-status-box ${isDone ? 'box-done' : (isCurrent ? 'box-current' : 'box-pending')}">
                  ${isDone ? '[✓]' : (isCurrent ? '[●]' : '[  ]')}
                </span>
              </div>

              <div class="ocfo-card-center">
                <div class="ocfo-chap-title-row">
                  <h2 class="ocfo-chap-title">${les.title}</h2>
                  ${isDone ? '<span class="ocfo-badge-done">✓ Validé</span>' : (isCurrent ? '<span class="ocfo-badge-current" style="background:rgba(236,72,153,0.15); color:#f472b6; border-color:rgba(236,72,153,0.3);">En cours</span>' : '')}
                </div>
                <div class="ocfo-chap-articles">
                  <span class="legal-tag" style="border-color:rgba(236,72,153,0.3); color:#ec4899; background:rgba(236,72,153,0.08);">${les.code}</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${les.duration}</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                  <span style="color:#ec4899; font-size:0.8rem; font-weight:700;">⚡ ${les.xpReward} XP</span>
                </div>
                <p class="ocfo-chap-summary">${les.summary}</p>
              </div>

              <div class="ocfo-card-right">
                <button class="ocfo-btn-open" aria-label="Ouvrir la leçon ${les.title}">
                  <span>${isDone ? 'Revoir' : (isCurrent ? 'Continuer' : 'Commencer')}</span>
                  <span>→</span>
                </button>
              </div>
            </article>
          `;
        }).join('')}

        <!-- Évaluation Finale (8 questions) -->
        <article class="ocfo-chapter-card ocfo-final-card ${isFinalDone ? 'chapter-completed' : ''}" data-lesson-id="pyr-evaluation-finale">
          <div class="ocfo-card-left">
            <span class="ocfo-chap-number" style="background:rgba(239,68,68,0.15); color:var(--accent-red);">🏁</span>
            <span class="ocfo-status-box ${isFinalDone ? 'box-done' : 'box-pending'}">
              ${isFinalDone ? '[✓]' : '[  ]'}
            </span>
          </div>

          <div class="ocfo-card-center">
            <div class="ocfo-chap-title-row">
              <h2 class="ocfo-chap-title" style="color:var(--text-primary);">${PYRAMIDE_LOIS_INFO.finalEvaluation.title}</h2>
              ${isFinalDone ? '<span class="ocfo-badge-done">✓ Certifié</span>' : '<span class="ocfo-badge-eval">Examen final</span>'}
            </div>
            <div class="ocfo-chap-articles">
              <span class="legal-tag">PYR-FINAL</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${PYRAMIDE_LOIS_INFO.finalEvaluation.duration}</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ ${PYRAMIDE_LOIS_INFO.finalEvaluation.xpReward} XP</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">8 questions</span>
            </div>
            <p class="ocfo-chap-summary">${PYRAMIDE_LOIS_INFO.finalEvaluation.summary}</p>
          </div>

          <div class="ocfo-card-right">
            <button class="ocfo-btn-open" style="background:var(--accent-red); color:#fff; border-color:var(--accent-red);" aria-label="Ouvrir l'évaluation finale">
              <span>${isFinalDone ? 'Revoir' : 'Passer l\'examen'}</span>
              <span>→</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  `;

  // Clic sur bouton Continuer
  const btnResume = container.querySelector('#btnResumePyramide');
  if (btnResume) {
    btnResume.addEventListener('click', () => {
      location.hash = `#/formations/A/pyramide-lois/${nextLessonSlug}`;
    });
  }

  // Clics sur les cartes de leçons
  container.querySelectorAll('.ocfo-chapter-card').forEach(card => {
    card.addEventListener('click', () => {
      const lessonId = card.getAttribute('data-lesson-id');
      if (lessonId) {
        location.hash = `#/formations/A/pyramide-lois/${lessonId}`;
      }
    });
  });
}

// ----------------------------------------------------------------------------
// Vue Hub Dédiée : RS 734.0 — LIE (11 Leçons officielles · Art. 1 à 64)
// Source de vérité : 734.0_LIE.pdf (24 juin 1902, état au 1er avril 2026)
// ----------------------------------------------------------------------------
export function renderLieParcoursView(container) {
  const parcoursProgress = ProgressionService.getParcoursProgress('rs-734-0');
  const lessons = RS_734_0_INFO ? RS_734_0_INFO.lessons : [];
  const isFinalDone = parcoursProgress.isFinalDone;
  const completedCount = parcoursProgress.lessonsCompleted;
  const totalLessons = parcoursProgress.lessonsTotal;

  // Trouver la première leçon non validée
  let nextLessonSlug = 'lecon-1';
  const completed = StorageService.getCompletedLessons();
  for (const l of lessons) {
    if (!completed.includes(l.id)) {
      nextLessonSlug = l.slug;
      break;
    }
  }
  if (completedCount === totalLessons && !isFinalDone) {
    nextLessonSlug = 'evaluation-finale';
  }

  container.innerHTML = `
    <nav class="breadcrumb-nav" aria-label="Fil d'ariane">
      <a href="#/" class="breadcrumb-link">Accueil</a>
      <span>/</span>
      <a href="#/formations" class="breadcrumb-link">Formations</a>
      <span>/</span>
      <a href="#/formations/A" class="breadcrumb-link">Module A — Dispositions légales</a>
      <span>/</span>
      <span>RS 734.0 — LIE</span>
    </nav>

    <!-- Header Hero Card LIE -->
    <header class="ocfo-hub-hero" style="border-left: 4px solid #f59e0b;" role="region" aria-label="En-tête du parcours RS 734.0">
      <div class="ocfo-hub-badge-row">
        <span class="ocfo-hub-tag">DROIT FÉDÉRAL SUISSE · LOI-CADRE FONDAMENTALE</span>
        <span class="ocfo-hub-ref" style="border-color:rgba(245,158,11,0.4); color:#f59e0b; background:rgba(245,158,11,0.12);">RS 734.0</span>
      </div>

      <div class="ocfo-hub-title-row">
        <div>
          <div class="ocfo-hub-short" style="color:#f59e0b;">LIE (du 24 juin 1902 · État au 1er avril 2026)</div>
          <h1 class="ocfo-hub-title">Loi fédérale concernant les installations électriques à faible et à fort courant</h1>
        </div>
      </div>

      <p class="ocfo-hub-desc">
        ${RS_734_0_INFO.description}
      </p>

      <div class="ocfo-hub-progress-card">
        <div class="progress-labels">
          <span style="font-weight:700; color:var(--text-primary);">Progression du parcours LIE</span>
          <span style="font-weight:800; color:#f59e0b; font-size:1rem;">
            ${parcoursProgress.percentageFormatted} · ${completedCount} / ${totalLessons} leçons
          </span>
        </div>
        <div class="progress-bar-bg" style="height:10px; margin-top:0.5rem;">
          <div class="progress-bar-fill" style="width: ${parcoursProgress.percentage}%; background:#f59e0b;"></div>
        </div>

        <div style="margin-top:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
          <button class="btn-continue" id="btnResumeLie" style="display:inline-flex; align-items:center; gap:0.5rem; background:#f59e0b; color:#000; font-weight:700;">
            <span>${completedCount === 0 ? 'Commencer la Leçon 1' : (completedCount === 11 ? 'Accéder à l\'évaluation finale' : 'Reprendre le parcours')}</span>
            <span>→</span>
          </button>
          <button class="btn-continue" onclick="location.hash='#/formations/A'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
            ← Retour au Module A
          </button>
        </div>
      </div>
    </header>

    <!-- Liste des 11 Leçons officielles (Parties I à VIII) -->
    <section class="ocfo-chapters-section" aria-label="Liste ordonnée des 11 leçons LIE">
      <div class="section-heading">
        <span>📚</span> Les 11 leçons du parcours (fidèles aux 11 parties de la LIE · Art. 1 à 64)
      </div>

      <div class="ocfo-chapters-list">
        ${lessons.map((les, idx) => {
          const isDone = completed.includes(les.id);
          const isCurrent = !isDone && (idx === 0 || completed.includes(lessons[idx - 1].id));

          return `
            <article class="ocfo-chapter-card ${isCurrent ? 'chapter-in-progress' : ''} ${isDone ? 'chapter-completed' : ''}" data-lesson-slug="${les.slug}" style="${isCurrent ? 'border-color:#f59e0b;' : ''}">
              <div class="ocfo-card-left">
                <span class="ocfo-chap-number" style="border-color:rgba(245,158,11,0.3); color:#f59e0b;">${les.number}</span>
                <span class="ocfo-status-box ${isDone ? 'box-done' : (isCurrent ? 'box-current' : 'box-pending')}">
                  ${isDone ? '[✓]' : (isCurrent ? '[●]' : '[  ]')}
                </span>
              </div>

              <div class="ocfo-card-center">
                <div class="ocfo-chap-title-row">
                  <h2 class="ocfo-chap-title">${les.title}</h2>
                  ${isDone ? '<span class="ocfo-badge-done">✓ Validé</span>' : (isCurrent ? '<span class="ocfo-badge-current" style="background:rgba(245,158,11,0.15); color:#f59e0b; border-color:rgba(245,158,11,0.3);">En cours</span>' : '')}
                </div>
                <div class="ocfo-chap-articles">
                  <span class="legal-tag" style="border-color:rgba(245,158,11,0.3); color:#f59e0b; background:rgba(245,158,11,0.08);">${les.articles}</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${les.duration}</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                  <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 30 XP</span>
                </div>
                <p class="ocfo-chap-summary">${les.summary}</p>
              </div>

              <div class="ocfo-card-right">
                <button class="ocfo-btn-open" aria-label="Ouvrir la ${les.title}">
                  <span>${isDone ? 'Revoir' : (isCurrent ? 'Continuer' : 'Commencer')}</span>
                  <span>→</span>
                </button>
              </div>
            </article>
          `;
        }).join('')}

        <!-- Évaluation Finale (16 questions) -->
        <article class="ocfo-chapter-card ocfo-final-card ${isFinalDone ? 'chapter-completed' : ''}" data-lesson-slug="evaluation-finale">
          <div class="ocfo-card-left">
            <span class="ocfo-chap-number" style="background:rgba(239,68,68,0.15); color:var(--accent-red);">🏁</span>
            <span class="ocfo-status-box ${isFinalDone ? 'box-done' : 'box-pending'}">
              ${isFinalDone ? '[✓]' : '[  ]'}
            </span>
          </div>

          <div class="ocfo-card-center">
            <div class="ocfo-chap-title-row">
              <h2 class="ocfo-chap-title" style="color:var(--text-primary);">${RS_734_0_INFO.finalEvaluation.title}</h2>
              ${isFinalDone ? '<span class="ocfo-badge-done">✓ Certifié</span>' : '<span class="ocfo-badge-eval">Examen final</span>'}
            </div>
            <div class="ocfo-chap-articles">
              <span class="legal-tag">Art. 1 à 64</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${RS_734_0_INFO.finalEvaluation.duration}</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 100 XP</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">16 questions</span>
            </div>
            <p class="ocfo-chap-summary">${RS_734_0_INFO.finalEvaluation.summary}</p>
          </div>

          <div class="ocfo-card-right">
            <button class="ocfo-btn-open" style="background:var(--accent-red); color:#fff; border-color:var(--accent-red);" aria-label="Ouvrir l'évaluation finale">
              <span>${isFinalDone ? 'Revoir' : 'Passer l\'examen'}</span>
              <span>→</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  `;

  // Clic sur bouton Continuer
  const btnResume = container.querySelector('#btnResumeLie');
  if (btnResume) {
    btnResume.addEventListener('click', () => {
      location.hash = `#/formations/A/rs-734-0/${nextLessonSlug}`;
    });
  }

  // Clics sur les cartes de leçons
  container.querySelectorAll('.ocfo-chapter-card').forEach(card => {
    card.addEventListener('click', () => {
      const slug = card.getAttribute('data-lesson-slug');
      if (slug) {
        location.hash = `#/formations/A/rs-734-0/${slug}`;
      }
    });
  });
}

// ----------------------------------------------------------------------------
// Vue Hub Dédiée : RS 734.27 — OIBT (7 Leçons officielles · Art. 1 à 45 + Annexe)
// Source de vérité : 734.27_OIBT.pdf (7 novembre 2001, état au 31 octobre 2025)
// ----------------------------------------------------------------------------
export function renderOibtParcoursView(container) {
  const parcoursProgress = ProgressionService.getParcoursProgress('rs-734-27');
  const lessons = RS_734_27_INFO ? RS_734_27_INFO.lessons : [];
  const isFinalDone = parcoursProgress.isFinalDone;
  const completedCount = parcoursProgress.lessonsCompleted;
  const totalLessons = parcoursProgress.lessonsTotal;

  // Trouver la première leçon non validée
  let nextLessonSlug = 'lecon-1';
  const completed = StorageService.getCompletedLessons();
  for (const l of lessons) {
    if (!completed.includes(l.id)) {
      nextLessonSlug = l.slug;
      break;
    }
  }
  if (completedCount === totalLessons && !isFinalDone) {
    nextLessonSlug = 'evaluation-finale';
  }

  container.innerHTML = `
    <nav class="breadcrumb-nav" aria-label="Fil d'ariane">
      <a href="#/" class="breadcrumb-link">Accueil</a>
      <span>/</span>
      <a href="#/formations" class="breadcrumb-link">Formations</a>
      <span>/</span>
      <a href="#/formations/A" class="breadcrumb-link">Module A — Dispositions légales</a>
      <span>/</span>
      <span>RS 734.27 — OIBT</span>
    </nav>

    <!-- Header Hero Card OIBT -->
    <header class="ocfo-hub-hero" style="border-left: 4px solid #10b981;" role="region" aria-label="En-tête du parcours RS 734.27">
      <div class="ocfo-hub-badge-row">
        <span class="ocfo-hub-tag" style="background:rgba(16,185,129,0.15); color:#10b981;">DROIT FÉDÉRAL SUISSE · BASSE TENSION</span>
        <span class="ocfo-hub-ref" style="border-color:rgba(16,185,129,0.4); color:#10b981; background:rgba(16,185,129,0.12);">RS 734.27</span>
      </div>

      <div class="ocfo-hub-title-row">
        <div>
          <div class="ocfo-hub-short" style="color:#10b981;">OIBT (du 7 novembre 2001 · État au 31 octobre 2025)</div>
          <h1 class="ocfo-hub-title">Ordonnance sur les installations électriques à basse tension</h1>
        </div>
      </div>

      <p class="ocfo-hub-desc">
        ${RS_734_27_INFO ? RS_734_27_INFO.description : ''}
      </p>

      <div class="ocfo-hub-progress-card">
        <div class="progress-labels">
          <span style="font-weight:700; color:var(--text-primary);">Progression du parcours OIBT</span>
          <span style="font-weight:800; color:#10b981; font-size:1rem;">
            ${parcoursProgress.percentageFormatted} · ${completedCount} / ${totalLessons} leçons
          </span>
        </div>
        <div class="progress-bar-bg" style="height:10px; margin-top:0.5rem;">
          <div class="progress-bar-fill" style="width: ${parcoursProgress.percentage}%; background:#10b981;"></div>
        </div>

        <div style="margin-top:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
          <button class="btn-continue" id="btnResumeOibt" style="display:inline-flex; align-items:center; gap:0.5rem; background:#10b981; color:#042f2e; font-weight:700;">
            <span>${completedCount === 0 ? 'Commencer la Leçon 1' : (completedCount === 7 ? 'Accéder à l\'évaluation finale' : 'Reprendre le parcours')}</span>
            <span>→</span>
          </button>
          <button class="btn-continue" onclick="location.hash='#/formations/A'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
            ← Retour au Module A
          </button>
        </div>
      </div>
    </header>

    <!-- Liste des 7 Leçons officielles (6 Chapitres + Leçon 7 Annexe) -->
    <section class="ocfo-chapters-section" aria-label="Liste ordonnée des 7 leçons OIBT">
      <div class="section-heading">
        <span>📚</span> Les 7 leçons du parcours (6 chapitres légaux & Annexe contrôles périodiques)
      </div>

      <div class="ocfo-chapters-list">
        ${lessons.map((les, idx) => {
          const isDone = completed.includes(les.id);
          const isCurrent = !isDone && (idx === 0 || completed.includes(lessons[idx - 1].id));

          return `
            <article class="ocfo-chapter-card ${isCurrent ? 'chapter-in-progress' : ''} ${isDone ? 'chapter-completed' : ''}" data-lesson-slug="${les.slug}" style="${isCurrent ? 'border-color:#10b981;' : ''}">
              <div class="ocfo-card-left">
                <span class="ocfo-chap-number" style="border-color:rgba(16,185,129,0.3); color:#10b981;">${les.number}</span>
                <span class="ocfo-status-box ${isDone ? 'box-done' : (isCurrent ? 'box-current' : 'box-pending')}">
                  ${isDone ? '[✓]' : (isCurrent ? '[●]' : '[  ]')}
                </span>
              </div>

              <div class="ocfo-card-center">
                <div class="ocfo-chap-title-row">
                  <h2 class="ocfo-chap-title">${les.title}</h2>
                  ${isDone ? '<span class="ocfo-badge-done">✓ Validé</span>' : (isCurrent ? '<span class="ocfo-badge-current" style="background:rgba(16,185,129,0.15); color:#10b981; border-color:rgba(16,185,129,0.3);">En cours</span>' : '')}
                </div>
                <div class="ocfo-chap-articles">
                  <span class="legal-tag" style="border-color:rgba(16,185,129,0.3); color:#10b981; background:rgba(16,185,129,0.08);">${les.articles}</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${les.duration}</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                  <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 30 XP</span>
                </div>
                <p class="ocfo-chap-summary">${les.summary}</p>
              </div>

              <div class="ocfo-card-right">
                <button class="ocfo-btn-open" aria-label="Ouvrir la ${les.title}">
                  <span>${isDone ? 'Revoir' : (isCurrent ? 'Continuer' : 'Commencer')}</span>
                  <span>→</span>
                </button>
              </div>
            </article>
          `;
        }).join('')}

        <!-- Évaluation Finale (16 questions) -->
        <article class="ocfo-chapter-card ocfo-final-card ${isFinalDone ? 'chapter-completed' : ''}" data-lesson-slug="evaluation-finale">
          <div class="ocfo-card-left">
            <span class="ocfo-chap-number" style="background:rgba(239,68,68,0.15); color:var(--accent-red);">🏁</span>
            <span class="ocfo-status-box ${isFinalDone ? 'box-done' : 'box-pending'}">
              ${isFinalDone ? '[✓]' : '[  ]'}
            </span>
          </div>

          <div class="ocfo-card-center">
            <div class="ocfo-chap-title-row">
              <h2 class="ocfo-chap-title" style="color:var(--text-primary);">${RS_734_27_INFO ? RS_734_27_INFO.finalEvaluation.title : 'Évaluation Finale Certifiante'}</h2>
              ${isFinalDone ? '<span class="ocfo-badge-done">✓ Certifié</span>' : '<span class="ocfo-badge-eval">Examen final</span>'}
            </div>
            <div class="ocfo-chap-articles">
              <span class="legal-tag">Art. 1 à 45 & Annexe</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${RS_734_27_INFO ? RS_734_27_INFO.finalEvaluation.duration : '30 min'}</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 100 XP</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">16 questions</span>
            </div>
            <p class="ocfo-chap-summary">${RS_734_27_INFO ? RS_734_27_INFO.finalEvaluation.summary : ''}</p>
          </div>

          <div class="ocfo-card-right">
            <button class="ocfo-btn-open" style="background:var(--accent-red); color:#fff; border-color:var(--accent-red);" aria-label="Ouvrir l'évaluation finale">
              <span>${isFinalDone ? 'Revoir' : 'Passer l\'examen'}</span>
              <span>→</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  `;

  // Clic sur bouton Continuer
  const btnResume = container.querySelector('#btnResumeOibt');
  if (btnResume) {
    btnResume.addEventListener('click', () => {
      location.hash = `#/formations/A/rs-734-27/${nextLessonSlug}`;
    });
  }

  // Clics sur les cartes de leçons
  container.querySelectorAll('.ocfo-chapter-card').forEach(card => {
    card.addEventListener('click', () => {
      const slug = card.getAttribute('data-lesson-slug');
      if (slug) {
        location.hash = `#/formations/A/rs-734-27/${slug}`;
      }
    });
  });
}

// ----------------------------------------------------------------------------
// Vue Hub Dédiée : RS 814.710 — ORNI (7 Leçons officielles · Art. 1 à 21 + Annexes 1-2)
// Source de vérité : 814.710_ORNI.pdf (23 décembre 1999, état au 1er novembre 2023)
// ----------------------------------------------------------------------------
export function renderOrniParcoursView(container) {
  const parcoursProgress = ProgressionService.getParcoursProgress('rs-814-710');
  const lessons = RS_814_710_INFO ? RS_814_710_INFO.lessons : [];
  const isFinalDone = parcoursProgress.isFinalDone;
  const completedCount = parcoursProgress.lessonsCompleted;
  const totalLessons = parcoursProgress.lessonsTotal;

  // Trouver la première leçon non validée
  let nextLessonSlug = 'lecon-1';
  const completed = StorageService.getCompletedLessons();
  for (const l of lessons) {
    if (!completed.includes(l.id)) {
      nextLessonSlug = l.slug;
      break;
    }
  }
  if (completedCount === totalLessons && !isFinalDone) {
    nextLessonSlug = 'evaluation-finale';
  }

  container.innerHTML = `
    <nav class="breadcrumb-nav" aria-label="Fil d'ariane">
      <a href="#/" class="breadcrumb-link">Accueil</a>
      <span>/</span>
      <a href="#/formations" class="breadcrumb-link">Formations</a>
      <span>/</span>
      <a href="#/formations/A" class="breadcrumb-link">Module A — Dispositions légales</a>
      <span>/</span>
      <span>RS 814.710 — ORNI</span>
    </nav>

    <!-- Header Hero Card ORNI -->
    <header class="ocfo-hub-hero" style="border-left: 4px solid #8b5cf6;" role="region" aria-label="En-tête du parcours RS 814.710">
      <div class="ocfo-hub-badge-row">
        <span class="ocfo-hub-tag" style="background:rgba(139,92,246,0.15); color:#a78bfa;">DROIT FÉDÉRAL SUISSE · ENVIRONNEMENT & RNI</span>
        <span class="ocfo-hub-ref" style="border-color:rgba(139,92,246,0.4); color:#a78bfa; background:rgba(139,92,246,0.12);">RS 814.710</span>
      </div>

      <div class="ocfo-hub-title-row">
        <div>
          <div class="ocfo-hub-short" style="color:#a78bfa;">ORNI (du 23 décembre 1999 · État au 1er novembre 2023)</div>
          <h1 class="ocfo-hub-title">Ordonnance sur la protection contre le rayonnement non ionisant</h1>
        </div>
      </div>

      <p class="ocfo-hub-desc">
        ${RS_814_710_INFO ? RS_814_710_INFO.description : ''}
      </p>

      <div class="ocfo-hub-progress-card">
        <div class="progress-labels">
          <span style="font-weight:700; color:var(--text-primary);">Progression du parcours ORNI</span>
          <span style="font-weight:800; color:#a78bfa; font-size:1rem;">
            ${parcoursProgress.percentageFormatted} · ${completedCount} / ${totalLessons} leçons
          </span>
        </div>
        <div class="progress-bar-bg" style="height:10px; margin-top:0.5rem;">
          <div class="progress-bar-fill" style="width: ${parcoursProgress.percentage}%; background:#8b5cf6;"></div>
        </div>

        <div style="margin-top:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
          <button class="btn-continue" id="btnResumeOrni" style="display:inline-flex; align-items:center; gap:0.5rem; background:#8b5cf6; color:#ffffff; font-weight:700; cursor:pointer;">
            <span>${completedCount === 0 ? 'Commencer la Leçon 1' : (completedCount === 7 ? 'Accéder à l\'évaluation finale' : 'Reprendre le parcours')}</span>
            <span>→</span>
          </button>
          <button class="btn-continue" onclick="location.hash='#/formations/A'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
            ← Retour au Module A
          </button>
        </div>
      </div>
    </header>

    <!-- Liste des 7 Leçons officielles -->
    <section class="ocfo-chapters-section" aria-label="Liste ordonnée des 7 leçons ORNI">
      <div class="section-heading">
        <span>📚</span> Les 7 leçons du parcours (Art. 1 à 21 & Annexes 1 et 2)
      </div>

      <div class="ocfo-chapters-list">
        ${lessons.map((les, idx) => {
          const isDone = completed.includes(les.id);
          const isCurrent = !isDone && (idx === 0 || completed.includes(lessons[idx - 1].id));

          return `
            <article class="ocfo-chapter-card ${isCurrent ? 'chapter-in-progress' : ''} ${isDone ? 'chapter-completed' : ''}" data-lesson-slug="${les.slug}" style="${isCurrent ? 'border-color:#8b5cf6;' : ''}">
              <div class="ocfo-card-left">
                <span class="ocfo-chap-number" style="border-color:rgba(139,92,246,0.3); color:#a78bfa;">${les.number}</span>
                <span class="ocfo-status-box ${isDone ? 'box-done' : (isCurrent ? 'box-current' : 'box-pending')}">
                  ${isDone ? '[✓]' : (isCurrent ? '[●]' : '[  ]')}
                </span>
              </div>

              <div class="ocfo-card-center">
                <div class="ocfo-chap-title-row">
                  <h2 class="ocfo-chap-title">${les.title}</h2>
                  ${isDone ? '<span class="ocfo-badge-done">✓ Validé</span>' : (isCurrent ? '<span class="ocfo-badge-current" style="background:rgba(139,92,246,0.15); color:#a78bfa; border-color:rgba(139,92,246,0.3);">En cours</span>' : '')}
                </div>
                <div class="ocfo-chap-articles">
                  <span class="legal-tag" style="border-color:rgba(139,92,246,0.3); color:#a78bfa; background:rgba(139,92,246,0.08);">${les.articles}</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${les.duration}</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                  <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 30 XP</span>
                </div>
                <p class="ocfo-chap-summary">${les.summary}</p>
              </div>

              <div class="ocfo-card-right">
                <button class="ocfo-btn-open" aria-label="Ouvrir la ${les.title}">
                  <span>${isDone ? 'Revoir' : (isCurrent ? 'Continuer' : 'Commencer')}</span>
                  <span>→</span>
                </button>
              </div>
            </article>
          `;
        }).join('')}

        <!-- Évaluation Finale (16 questions) -->
        <article class="ocfo-chapter-card ocfo-final-card ${isFinalDone ? 'chapter-completed' : ''}" data-lesson-slug="evaluation-finale">
          <div class="ocfo-card-left">
            <span class="ocfo-chap-number" style="background:rgba(239,68,68,0.15); color:var(--accent-red);">🏁</span>
            <span class="ocfo-status-box ${isFinalDone ? 'box-done' : 'box-pending'}">
              ${isFinalDone ? '[✓]' : '[  ]'}
            </span>
          </div>

          <div class="ocfo-card-center">
            <div class="ocfo-chap-title-row">
              <h2 class="ocfo-chap-title" style="color:var(--text-primary);">${RS_814_710_INFO ? RS_814_710_INFO.finalEvaluation.title : 'Évaluation Finale Certifiante'}</h2>
              ${isFinalDone ? '<span class="ocfo-badge-done">✓ Certifié</span>' : '<span class="ocfo-badge-eval">Examen final</span>'}
            </div>
            <div class="ocfo-chap-articles">
              <span class="legal-tag">Art. 1 à 21 & Annexes 1-2</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${RS_814_710_INFO ? RS_814_710_INFO.finalEvaluation.duration : '20 min'}</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 100 XP</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">16 questions</span>
            </div>
            <p class="ocfo-chap-summary">${RS_814_710_INFO ? RS_814_710_INFO.finalEvaluation.summary : ''}</p>
          </div>

          <div class="ocfo-card-right">
            <button class="ocfo-btn-open" style="background:var(--accent-red); color:#fff; border-color:var(--accent-red);" aria-label="Ouvrir l'évaluation finale">
              <span>${isFinalDone ? 'Revoir' : 'Passer l\'examen'}</span>
              <span>→</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  `;

  // Clic sur bouton Continuer
  const btnResume = container.querySelector('#btnResumeOrni');
  if (btnResume) {
    btnResume.addEventListener('click', () => {
      location.hash = `#/formations/A/rs-814-710/${nextLessonSlug}`;
    });
  }

  // Clics sur les cartes de leçons
  container.querySelectorAll('.ocfo-chapter-card').forEach(card => {
    card.addEventListener('click', () => {
      const slug = card.getAttribute('data-lesson-slug');
      if (slug) {
        location.hash = `#/formations/A/rs-814-710/${slug}`;
      }
    });
  });
}

// ----------------------------------------------------------------------------
// Vue Hub Dédiée : Directive ESTI n° 221 (4 Leçons officielles · Version 0621)
// Source de vérité : ESTI directive n° 221 / Version 0621 (valable dès le 01.07.2021)
// Modèle de référence : RS 734.0 — LIE
// ----------------------------------------------------------------------------
export function renderEsti221ParcoursView(container) {
  const parcoursProgress = ProgressionService.getParcoursProgress('esti-221');
  const lessons = ESTI_221_INFO ? ESTI_221_INFO.lessons : [];
  const isFinalDone = parcoursProgress.isFinalDone;
  const completedCount = parcoursProgress.lessonsCompleted;
  const totalLessons = parcoursProgress.lessonsTotal;

  // Trouver la première leçon non validée
  let nextLessonSlug = 'lecon-1';
  const completed = StorageService.getCompletedLessons();
  for (const l of lessons) {
    if (!completed.includes(l.id)) {
      nextLessonSlug = l.slug;
      break;
    }
  }
  if (completedCount === totalLessons && !isFinalDone) {
    nextLessonSlug = 'evaluation-finale';
  }

  container.innerHTML = `
    <nav class="breadcrumb-nav" aria-label="Fil d'ariane">
      <a href="#/" class="breadcrumb-link">Accueil</a>
      <span>/</span>
      <a href="#/formations" class="breadcrumb-link">Formations</a>
      <span>/</span>
      <a href="#/formations/E" class="breadcrumb-link">Module E — ESTI directives</a>
      <span>/</span>
      <span>Directive ESTI 221</span>
    </nav>

    <!-- Header Hero Card ESTI 221 -->
    <header class="ocfo-hub-hero" style="border-left: 4px solid #10b981;" role="region" aria-label="En-tête du parcours ESTI 221">
      <div class="ocfo-hub-badge-row">
        <span class="ocfo-hub-tag">DIRECTIVE OFFICIELLE ESTI · VERSION 0621</span>
        <span class="ocfo-hub-ref" style="border-color:rgba(16,185,129,0.4); color:#10b981; background:rgba(16,185,129,0.12);">ESTI n° 221</span>
      </div>

      <div class="ocfo-hub-title-row">
        <div>
          <div class="ocfo-hub-short" style="color:#10b981;">ESTI directive n° 221 (Valable dès le 1er juillet 2021)</div>
          <h1 class="ocfo-hub-title">Obligations d'annoncer en cas d'autorisation générale ou limitée d'installer</h1>
        </div>
      </div>

      <p class="ocfo-hub-desc">
        ${ESTI_221_INFO ? ESTI_221_INFO.description : ''}
      </p>

      <div class="ocfo-hub-progress-card">
        <div class="progress-labels">
          <span style="font-weight:700; color:var(--text-primary);">Progression du parcours ESTI 221</span>
          <span style="font-weight:800; color:#10b981; font-size:1rem;">
            ${parcoursProgress.percentageFormatted} · ${completedCount} / ${totalLessons} leçons
          </span>
        </div>
        <div class="progress-bar-bg" style="height:10px; margin-top:0.5rem;">
          <div class="progress-bar-fill" style="width: ${parcoursProgress.percentage}%; background:#10b981;"></div>
        </div>

        <div style="margin-top:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
          <button class="btn-continue" id="btnResumeEsti221" style="display:inline-flex; align-items:center; gap:0.5rem; background:#10b981; color:#042f2e; font-weight:700;">
            <span>${completedCount === 0 ? 'Commencer la Leçon 1' : (completedCount === totalLessons ? 'Accéder à l\'évaluation finale' : 'Reprendre le parcours')}</span>
            <span>→</span>
          </button>
          <button class="btn-continue" onclick="location.hash='#/formations/E'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
            ← Retour au Module E
          </button>
        </div>
      </div>
    </header>

    <!-- Liste des 4 Leçons officielles -->
    <section class="ocfo-chapters-section" aria-label="Liste ordonnée des 4 leçons ESTI 221">
      <div class="section-heading">
        <span>📚</span> Les 4 leçons du parcours (fidèles aux 6 sections de la directive ESTI 221)
      </div>

      <div class="ocfo-chapters-list">
        ${lessons.map((les, idx) => {
          const isDone = completed.includes(les.id);
          const isCurrent = !isDone && (idx === 0 || completed.includes(lessons[idx - 1].id));

          return `
            <article class="ocfo-chapter-card ${isCurrent ? 'chapter-in-progress' : ''} ${isDone ? 'chapter-completed' : ''}" data-lesson-slug="${les.slug}" style="${isCurrent ? 'border-color:#10b981;' : ''}">
              <div class="ocfo-card-left">
                <span class="ocfo-chap-number" style="border-color:rgba(16,185,129,0.3); color:#10b981;">${les.number}</span>
                <span class="ocfo-status-box ${isDone ? 'box-done' : (isCurrent ? 'box-current' : 'box-pending')}">
                  ${isDone ? '[✓]' : (isCurrent ? '[●]' : '[  ]')}
                </span>
              </div>

              <div class="ocfo-card-center">
                <div class="ocfo-chap-title-row">
                  <h2 class="ocfo-chap-title">${les.title}</h2>
                  ${isDone ? '<span class="ocfo-badge-done">✓ Validé</span>' : (isCurrent ? '<span class="ocfo-badge-current" style="background:rgba(16,185,129,0.15); color:#10b981; border-color:rgba(16,185,129,0.3);">En cours</span>' : '')}
                </div>
                <div class="ocfo-chap-articles">
                  <span class="legal-tag" style="border-color:rgba(16,185,129,0.3); color:#10b981; background:rgba(16,185,129,0.08);">${les.sectionsRange}</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${les.duration}</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                  <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 30 XP</span>
                </div>
                <p class="ocfo-chap-summary">${les.summary}</p>
              </div>

              <div class="ocfo-card-right">
                <button class="ocfo-btn-open" aria-label="Ouvrir la ${les.title}">
                  <span>${isDone ? 'Revoir' : (isCurrent ? 'Continuer' : 'Commencer')}</span>
                  <span>→</span>
                </button>
              </div>
            </article>
          `;
        }).join('')}

        <!-- Évaluation Finale (10 questions) -->
        <article class="ocfo-chapter-card ocfo-final-card ${isFinalDone ? 'chapter-completed' : ''}" data-lesson-slug="evaluation-finale">
          <div class="ocfo-card-left">
            <span class="ocfo-chap-number" style="background:rgba(239,68,68,0.15); color:var(--accent-red);">🏁</span>
            <span class="ocfo-status-box ${isFinalDone ? 'box-done' : 'box-pending'}">
              ${isFinalDone ? '[✓]' : '[  ]'}
            </span>
          </div>

          <div class="ocfo-card-center">
            <div class="ocfo-chap-title-row">
              <h2 class="ocfo-chap-title" style="color:var(--text-primary);">${ESTI_221_INFO ? ESTI_221_INFO.finalEvaluation.title : 'Évaluation Finale Certifiante'}</h2>
              ${isFinalDone ? '<span class="ocfo-badge-done">✓ Certifié</span>' : '<span class="ocfo-badge-eval">Examen final</span>'}
            </div>
            <div class="ocfo-chap-articles">
              <span class="legal-tag">Sections 1 à 6</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${ESTI_221_INFO ? ESTI_221_INFO.finalEvaluation.duration : '20 min'}</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 100 XP</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">10 questions</span>
            </div>
            <p class="ocfo-chap-summary">${ESTI_221_INFO ? ESTI_221_INFO.finalEvaluation.summary : ''}</p>
          </div>

          <div class="ocfo-card-right">
            <button class="ocfo-btn-open" style="background:var(--accent-red); color:#fff; border-color:var(--accent-red);" aria-label="Ouvrir l'évaluation finale">
              <span>${isFinalDone ? 'Revoir' : 'Passer l\'examen'}</span>
              <span>→</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  `;

  // Clic sur bouton Continuer
  const btnResume = container.querySelector('#btnResumeEsti221');
  if (btnResume) {
    btnResume.addEventListener('click', () => {
      location.hash = `#/formations/E/esti-221/${nextLessonSlug}`;
    });
  }

  // Clics sur les cartes de leçons
  container.querySelectorAll('.ocfo-chapter-card').forEach(card => {
    card.addEventListener('click', () => {
      const slug = card.getAttribute('data-lesson-slug');
      if (slug) {
        location.hash = `#/formations/E/esti-221/${slug}`;
      }
    });
  });
}

// ----------------------------------------------------------------------------
// Vue Hub Dédiée : Directive ESTI n° 407 (7 Leçons officielles + Examen final)
// Source de vérité : Directive ESTI n° 407 / Version 0526 (valable dès le 01.05.2026)
// Modèle de référence : RS 734.0 — LIE
// ----------------------------------------------------------------------------
export function renderEsti407ParcoursView(container) {
  const parcoursProgress = ProgressionService.getParcoursProgress('esti-407');
  const lessons = ESTI_407_INFO ? ESTI_407_INFO.lessons : [];
  const isFinalDone = parcoursProgress.isFinalDone;
  const completedCount = parcoursProgress.lessonsCompleted;
  const totalLessons = parcoursProgress.lessonsTotal;

  // Trouver la première leçon non validée
  let nextLessonSlug = 'lecon-1';
  const completed = StorageService.getCompletedLessons();
  for (const l of lessons) {
    if (!completed.includes(l.id)) {
      nextLessonSlug = l.slug;
      break;
    }
  }
  if (completedCount === totalLessons && !isFinalDone) {
    nextLessonSlug = 'evaluation-finale';
  }

  container.innerHTML = `
    <nav class="breadcrumb-nav" aria-label="Fil d'ariane">
      <a href="#/" class="breadcrumb-link">Accueil</a>
      <span>/</span>
      <a href="#/formations" class="breadcrumb-link">Formations</a>
      <span>/</span>
      <a href="#/formations/E" class="breadcrumb-link">Module E — ESTI directives</a>
      <span>/</span>
      <span>Directive ESTI 407</span>
    </nav>

    <!-- Header Hero Card ESTI 407 -->
    <header class="ocfo-hub-hero" style="border-left: 4px solid #f97316;" role="region" aria-label="En-tête du parcours ESTI 407">
      <div class="ocfo-hub-badge-row">
        <span class="ocfo-hub-tag">DIRECTIVE OFFICIELLE ESTI · VERSION 0526</span>
        <span class="ocfo-hub-ref" style="border-color:rgba(249,115,22,0.4); color:#f97316; background:rgba(249,115,22,0.12);">ESTI n° 407</span>
      </div>

      <div class="ocfo-hub-title-row">
        <div>
          <div class="ocfo-hub-short" style="color:#f97316;">ESTI directive n° 407 (Valable dès le 1er mai 2026)</div>
          <h1 class="ocfo-hub-title">Activités sur des installations électriques ou à proximité de celles-ci</h1>
        </div>
      </div>

      <p class="ocfo-hub-desc">
        ${ESTI_407_INFO ? ESTI_407_INFO.description : ''}
      </p>

      <div class="ocfo-hub-progress-card">
        <div class="progress-labels">
          <span style="font-weight:700; color:var(--text-primary);">Progression du parcours ESTI 407</span>
          <span style="font-weight:800; color:#f97316; font-size:1rem;">
            ${parcoursProgress.percentageFormatted} · ${completedCount} / ${totalLessons} leçons
          </span>
        </div>
        <div class="progress-bar-bg" style="height:10px; margin-top:0.5rem;">
          <div class="progress-bar-fill" style="width: ${parcoursProgress.percentage}%; background:#f97316;"></div>
        </div>

        <div style="margin-top:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
          <button class="btn-continue" id="btnResumeEsti407" style="display:inline-flex; align-items:center; gap:0.5rem; background:#f97316; color:#ffffff; font-weight:700;">
            <span>${completedCount === 0 ? 'Commencer la Leçon 1' : (completedCount === totalLessons ? 'Accéder à l\'évaluation finale' : 'Reprendre le parcours')}</span>
            <span>→</span>
          </button>
          <button class="btn-continue" onclick="location.hash='#/formations/E'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium);">
            ← Retour au Module E
          </button>
        </div>
      </div>
    </header>

    <!-- Liste des 13 Leçons officielles -->
    <section class="ocfo-chapters-section" aria-label="Liste ordonnée des 13 leçons ESTI 407">
      <div class="section-heading">
        <span>📚</span> Les 13 leçons officielles (calquées 1:1 sur les 13 chapitres de la Directive ESTI 407)
      </div>

      <div class="ocfo-chapters-list">
        ${lessons.map((les, idx) => {
          const isDone = completed.includes(les.id);
          const isCurrent = !isDone && (idx === 0 || completed.includes(lessons[idx - 1].id));

          return `
            <article class="ocfo-chapter-card ${isCurrent ? 'chapter-in-progress' : ''} ${isDone ? 'chapter-completed' : ''}" data-lesson-slug="${les.slug}" style="${isCurrent ? 'border-color:#f97316;' : ''}">
              <div class="ocfo-card-left">
                <span class="ocfo-chap-number" style="border-color:rgba(249,115,22,0.3); color:#f97316;">${les.number}</span>
                <span class="ocfo-status-box ${isDone ? 'box-done' : (isCurrent ? 'box-current' : 'box-pending')}">
                  ${isDone ? '[✓]' : (isCurrent ? '[●]' : '[  ]')}
                </span>
              </div>

              <div class="ocfo-card-center">
                <div class="ocfo-chap-title-row">
                  <h2 class="ocfo-chap-title">${les.title}</h2>
                  ${isDone ? '<span class="ocfo-badge-done">✓ Validé</span>' : (isCurrent ? '<span class="ocfo-badge-current" style="background:rgba(249,115,22,0.15); color:#f97316; border-color:rgba(249,115,22,0.3);">En cours</span>' : '')}
                </div>
                <div class="ocfo-chap-articles">
                  <span class="legal-tag" style="border-color:rgba(249,115,22,0.3); color:#f97316; background:rgba(249,115,22,0.08);">${les.sectionsRange}</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${les.duration}</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                  <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 30 XP</span>
                </div>
                <p class="ocfo-chap-summary">${les.summary}</p>
              </div>

              <div class="ocfo-card-right">
                <button class="ocfo-btn-open" aria-label="Ouvrir la ${les.title}">
                  <span>${isDone ? 'Revoir' : (isCurrent ? 'Continuer' : 'Commencer')}</span>
                  <span>→</span>
                </button>
              </div>
            </article>
          `;
        }).join('')}

        <!-- Évaluation Finale (10 questions) -->
        <article class="ocfo-chapter-card ocfo-final-card ${isFinalDone ? 'chapter-completed' : ''}" data-lesson-slug="evaluation-finale">
          <div class="ocfo-card-left">
            <span class="ocfo-chap-number" style="background:rgba(239,68,68,0.15); color:var(--accent-red);">🏁</span>
            <span class="ocfo-status-box ${isFinalDone ? 'box-done' : 'box-pending'}">
              ${isFinalDone ? '[✓]' : '[  ]'}
            </span>
          </div>

          <div class="ocfo-card-center">
            <div class="ocfo-chap-title-row">
              <h2 class="ocfo-chap-title" style="color:var(--text-primary);">${(ESTI_407_INFO && ESTI_407_INFO.finalEvaluation && ESTI_407_INFO.finalEvaluation.title) || 'Évaluation finale certifiante — Directive ESTI n° 407'}</h2>
              ${isFinalDone ? '<span class="ocfo-badge-done">✓ Certifié</span>' : '<span class="ocfo-badge-eval">Examen final</span>'}
            </div>
            <div class="ocfo-chap-articles">
              <span class="legal-tag">Chapitres 1 à 13</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${(ESTI_407_INFO && ESTI_407_INFO.finalEvaluation && ESTI_407_INFO.finalEvaluation.duration) || '20 min'}</span>
              <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 100 XP</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">10 questions</span>
            </div>
            <p class="ocfo-chap-summary">${(ESTI_407_INFO && ESTI_407_INFO.finalEvaluation && ESTI_407_INFO.finalEvaluation.summary) || 'Examen final officiel de certification de 10 questions sur les 13 chapitres de la Directive ESTI n° 407.'}</p>
          </div>

          <div class="ocfo-card-right">
            <button class="ocfo-btn-open" style="background:var(--accent-red); color:#fff; border-color:var(--accent-red);" aria-label="Ouvrir l'évaluation finale">
              <span>${isFinalDone ? 'Revoir' : 'Passer l\'examen'}</span>
              <span>→</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  `;

  // Clic sur bouton Continuer
  const btnResume = container.querySelector('#btnResumeEsti407');
  if (btnResume) {
    btnResume.addEventListener('click', () => {
      location.hash = `#/formations/E/esti-407/${nextLessonSlug}`;
    });
  }

  // Clics sur les cartes de leçons
  container.querySelectorAll('.ocfo-chapter-card').forEach(card => {
    card.addEventListener('click', () => {
      const slug = card.getAttribute('data-lesson-slug');
      if (slug) {
        location.hash = `#/formations/E/esti-407/${slug}`;
      }
    });
  });
}

// ----------------------------------------------------------------------------
// Vue Hub Dédiée : Sécurité électrique — Module B (7 Leçons officielles)
// Source de vérité : DOC_20260924_danger_electricite.pdf (18 pages, 7 chapitres)
// Structure de référence : Calquée sur RS 734.0 — LIE
// ----------------------------------------------------------------------------
export function renderSecuriteParcoursView(container) {
  const parcoursProgress = ProgressionService.getParcoursProgress('securite-electrique');
  const lessons = SECURITE_ELECTRIQUE_INFO ? SECURITE_ELECTRIQUE_INFO.lessons : [];
  const isFinalDone = parcoursProgress.isFinalDone;
  const completedCount = parcoursProgress.lessonsCompleted;
  const totalLessons = parcoursProgress.lessonsTotal;

  // Trouver la première leçon non validée
  let nextLessonSlug = 'lecon-1';
  const completed = StorageService.getCompletedLessons();
  for (const l of lessons) {
    if (!completed.includes(l.id)) {
      nextLessonSlug = l.slug;
      break;
    }
  }
  if (completedCount === totalLessons && !isFinalDone) {
    nextLessonSlug = 'evaluation-finale';
  }

  container.innerHTML = `
    <nav class="breadcrumb-nav" aria-label="Fil d'ariane">
      <a href="#/" class="breadcrumb-link">Accueil</a>
      <span>/</span>
      <a href="#/formations" class="breadcrumb-link">Formations</a>
      <span>/</span>
      <a href="#/formations/B" class="breadcrumb-link">Module B — Dangers de l’électricité</a>
      <span>/</span>
      <span>Sécurité électrique</span>
    </nav>

    <!-- Header Hero Card Sécurité électrique -->
    <header class="ocfo-hub-hero" style="border-left: 4px solid #ef4444;" role="region" aria-label="En-tête du parcours Sécurité électrique">
      <div class="ocfo-hub-badge-row">
        <span class="ocfo-hub-tag" style="background:#ef4444; color:#fff;">PUBLICATION SPÉCIALISÉE</span>
        <span class="ocfo-hub-ref" style="border-color:rgba(239,68,68,0.4); color:#ef4444; background:rgba(239,68,68,0.12);">Sécurité électrique</span>
      </div>

      <div class="ocfo-hub-title-row">
        <div>
          <div class="ocfo-hub-short" style="color:#ef4444;">Sécurité électrique (7 chapitres · Référentiel officiel)</div>
          <h1 class="ocfo-hub-title">Dangers de l’électricité, grandeurs de contact, protections et cadre réglementaire</h1>
        </div>
      </div>

      <p class="ocfo-hub-desc">
        ${SECURITE_ELECTRIQUE_INFO.description}
      </p>

      <div class="ocfo-hub-progress-card">
        <div class="progress-labels">
          <span style="font-weight:700; color:var(--text-primary);">Progression du parcours Sécurité électrique</span>
          <span style="font-weight:800; color:#ef4444; font-size:1rem;">
            ${parcoursProgress.percentageFormatted} · ${completedCount} / ${totalLessons} leçons
          </span>
        </div>
        <div class="progress-bar-bg" style="height:10px; margin-top:0.5rem;">
          <div class="progress-bar-fill" style="width: ${parcoursProgress.percentage}%; background:#ef4444;"></div>
        </div>

        <div style="margin-top:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
          <button class="btn-continue" id="btnResumeSecurite" style="display:inline-flex; align-items:center; gap:0.5rem; background:#ef4444; color:#ffffff; font-weight:700; cursor:pointer;" onmouseover="this.style.background='#dc2626'" onmouseout="this.style.background='#ef4444'">
            <span>${completedCount === 0 ? 'Commencer la Leçon 1' : (completedCount === totalLessons ? 'Accéder à l\'évaluation finale' : 'Reprendre le parcours')}</span>
            <span>→</span>
          </button>
          <button class="btn-continue" onclick="location.hash='#/formations/B'" style="background:var(--bg-surface-elevated); color:var(--text-primary); border:1px solid var(--border-medium); cursor:pointer;">
            ← Retour au Module B
          </button>
        </div>
      </div>
    </header>

    <!-- Liste des 7 Leçons officielles -->
    <section class="ocfo-chapters-section" aria-label="Liste ordonnée des 7 leçons de sécurité électrique">
      <div class="section-heading">
        <span>📚</span> Les 7 leçons du parcours (fidèles aux 7 chapitres du guide officiel)
      </div>

      <div class="ocfo-chapters-list">
        ${lessons.map((les, idx) => {
          const isDone = completed.includes(les.id);
          const isCurrent = !isDone && (idx === 0 || completed.includes(lessons[idx - 1].id));

          return `
            <article class="ocfo-chapter-card ${isCurrent ? 'chapter-in-progress' : ''} ${isDone ? 'chapter-completed' : ''}" data-lesson-slug="${les.slug}" style="${isCurrent ? 'border-color:#ef4444;' : ''}">
              <div class="ocfo-card-left">
                <span class="ocfo-chap-number" style="border-color:rgba(239,68,68,0.3); color:#ef4444;">${les.number}</span>
                <span class="ocfo-status-box ${isDone ? 'box-done' : (isCurrent ? 'box-current' : 'box-pending')}">
                  ${isDone ? '[✓]' : (isCurrent ? '[●]' : '[  ]')}
                </span>
              </div>

              <div class="ocfo-card-center">
                <div class="ocfo-chap-title-row">
                  <h2 class="ocfo-chap-title">${les.title}</h2>
                  ${isDone ? '<span class="ocfo-badge-done">✓ Validé</span>' : (isCurrent ? '<span class="ocfo-badge-current" style="background:rgba(239,68,68,0.15); color:#ef4444; border-color:rgba(239,68,68,0.3);">En cours</span>' : '')}
                </div>
                <div class="ocfo-chap-articles">
                  <span class="legal-tag" style="border-color:rgba(239,68,68,0.3); color:#ef4444; background:rgba(239,68,68,0.08);">${les.code || ('SEC-0' + les.number)}</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${les.duration}</span>
                  <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
                  <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 30 XP</span>
                </div>
                <p class="ocfo-chap-summary">${les.summary}</p>
              </div>

              <div class="ocfo-card-right">
                <button class="ocfo-btn-open" aria-label="Ouvrir la ${les.title}">
                  <span>${isDone ? 'Revoir' : (isCurrent ? 'Continuer' : 'Commencer')}</span>
                  <span>→</span>
                </button>
              </div>
            </article>
          `;
        }).join('')}

        <!-- Évaluation Finale (10 questions) -->
        <article class="ocfo-chapter-card ocfo-final-card ${isFinalDone ? 'chapter-completed' : ''}" data-lesson-slug="evaluation-finale">
          <div class="ocfo-card-left">
            <span class="ocfo-chap-number" style="background:rgba(239,68,68,0.15); color:var(--accent-red);">🏁</span>
            <span class="ocfo-status-box ${isFinalDone ? 'box-done' : 'box-pending'}">
              ${isFinalDone ? '[✓]' : '[  ]'}
            </span>
          </div>

          <div class="ocfo-card-center">
            <div class="ocfo-chap-title-row">
              <h2 class="ocfo-chap-title" style="color:var(--text-primary);">${SECURITE_ELECTRIQUE_INFO.finalEvaluation.title}</h2>
              ${isFinalDone ? '<span class="ocfo-badge-done">✓ Certifié</span>' : '<span class="ocfo-badge-eval">Examen final</span>'}
            </div>
            <div class="ocfo-chap-articles">
              <span class="legal-tag" style="border-color:rgba(239,68,68,0.3); color:#ef4444; background:rgba(239,68,68,0.08);">Chapitres 1 à 7</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">⏱️ ${SECURITE_ELECTRIQUE_INFO.finalEvaluation.duration}</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--warning); font-size:0.8rem; font-weight:700;">⚡ 100 XP</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">•</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">10 questions</span>
            </div>
            <p class="ocfo-chap-summary">${SECURITE_ELECTRIQUE_INFO.finalEvaluation.summary}</p>
          </div>

          <div class="ocfo-card-right">
            <button class="ocfo-btn-open" style="background:var(--accent-red); color:#fff; border-color:var(--accent-red);" aria-label="Ouvrir l'évaluation finale">
              <span>${isFinalDone ? 'Revoir' : 'Passer l\'examen'}</span>
              <span>→</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  `;

  // Clic sur bouton Continuer
  const btnResume = container.querySelector('#btnResumeSecurite');
  if (btnResume) {
    btnResume.addEventListener('click', () => {
      location.hash = `#/formations/B/securite-electrique/${nextLessonSlug}`;
    });
  }

  // Clics sur les cartes de leçons
  container.querySelectorAll('.ocfo-chapter-card').forEach(card => {
    card.addEventListener('click', () => {
      const slug = card.getAttribute('data-lesson-slug');
      if (slug) {
        location.hash = `#/formations/B/securite-electrique/${slug}`;
      }
    });
  });
}




