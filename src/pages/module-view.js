// Swiss Electrical Academy — Vue d'un Module et Vue Parcours RS 734.2 (V2.0)
// Détail du module, progression spécifique et liste ordonnée des leçons/chapitres

import { StorageService } from '../services/storage.js';
import { ACADEMY_MODULES, RS_734_2_INFO } from '../data/academy-data.js';

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

  const completed = StorageService.getCompletedLessons();
  const completedCount = mod.formations.filter(f => completed.includes(f.id)).length;
  const modPercentage = mod.formations.length > 0 ? Math.round((completedCount / mod.formations.length) * 100) : 0;

  // Si c'est le Module A, calculer les statistiques spécifiques au parcours RS 734.2
  const ocfoChapters = RS_734_2_INFO.chapters;
  const ocfoCompletedCount = ocfoChapters.filter(c => completed.includes(c.id)).length;
  const ocfoPercentage = Math.round((ocfoCompletedCount / ocfoChapters.length) * 100);

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
          <span>${modPercentage}% (${completedCount} sur ${mod.formations.length} validés)</span>
        </div>
        <div class="progress-bar-bg" style="height:8px;">
          <div class="progress-bar-fill" style="width: ${modPercentage}%;"></div>
        </div>
      </div>
    </header>

    ${moduleId === 'A' ? `
      <!-- Carte Parcours Structuré RS 734.2 — OCFo (Section 7) -->
      <section class="ocfo-featured-parcours-box" aria-labelledby="ocfoFeaturedTitle">
        <div class="ocfo-featured-top">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span class="ocfo-featured-badge">PARCOURS OFFICIEL</span>
            <span class="ocfo-featured-code">RS 734.2 — OCFo</span>
          </div>
          <span class="ocfo-featured-stats">${ocfoCompletedCount} / 8 leçons · ${ocfoPercentage}%</span>
        </div>
        <h2 id="ocfoFeaturedTitle" class="ocfo-featured-title">Ordonnance sur les installations électriques à courant fort</h2>
        <p class="ocfo-featured-desc">
          Parcours complet restructuré fidèlement en 8 leçons (les 7 chapitres légaux et la Leçon 8 regroupant les Annexes 1 à 4).
          Des définitions fondamentales aux 5 règles vitales d'intervention, avec la visualisation interactive de l'Annexe 4.
        </p>
        <div class="progress-bar-bg" style="height:6px; margin-bottom:1rem;">
          <div class="progress-bar-fill" style="width: ${ocfoPercentage}%;"></div>
        </div>
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
          <button class="btn-continue" id="btnOpenOcfoHub" style="display:inline-flex; align-items:center; gap:0.5rem;">
            <span>Explorer les 8 leçons (0/8 → 8/8)</span>
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
          const isOcfo = formation.id.startsWith('rs-734-2-');

          return `
            <article class="formation-item-card ${isOcfo ? 'ocfo-card-accent' : ''}" data-formation-id="${formation.id}">
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

  // Clic sur le bouton du parcours OCFo
  const btnOpenOcfoHub = container.querySelector('#btnOpenOcfoHub');
  if (btnOpenOcfoHub) {
    btnOpenOcfoHub.addEventListener('click', () => {
      location.hash = '#/formations/A/rs-734-2';
    });
  }

  // Événements de clic sur chaque formation
  container.querySelectorAll('.formation-item-card').forEach(card => {
    card.addEventListener('click', () => {
      const formationId = card.getAttribute('data-formation-id');
      if (formationId.startsWith('rs-734-2-chapitre-')) {
        const chapNum = formationId.replace('rs-734-2-chapitre-', '');
        location.hash = `#/formations/A/rs-734-2/chapitre-${chapNum}`;
      } else if (formationId === 'rs-734-2-evaluation-finale') {
        location.hash = `#/formations/A/rs-734-2/evaluation-finale`;
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
  const completed = StorageService.getCompletedLessons();
  const chapters = RS_734_2_INFO.chapters;
  const completedCount = chapters.filter(c => completed.includes(c.id)).length;
  const percentage = Math.round((completedCount / chapters.length) * 100);
  const isFinalDone = completed.includes(RS_734_2_INFO.finalEvaluation.id);

  // Trouver le premier chapitre non validé pour le bouton "Continuer"
  let nextChapterSlug = 'chapitre-1';
  for (const c of chapters) {
    if (!completed.includes(c.id)) {
      nextChapterSlug = c.slug;
      break;
    }
  }
  if (completedCount === chapters.length && !isFinalDone) {
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
        <span class="ocfo-hub-tag">DROIT FÉDÉRAL SUISSE</span>
        <span class="ocfo-hub-ref">RS 734.2</span>
      </div>

      <div class="ocfo-hub-title-row">
        <div>
          <div class="ocfo-hub-short">OCFo</div>
          <h1 class="ocfo-hub-title">Ordonnance sur les installations électriques à courant fort</h1>
        </div>
      </div>

      <p class="ocfo-hub-desc">
        ${RS_734_2_INFO.description}
      </p>

      <div class="ocfo-hub-progress-card">
        <div class="progress-labels">
          <span style="font-weight:700; color:var(--text-primary);">Progression du parcours</span>
          <span style="font-weight:800; color:var(--electric-blue); font-size:1rem;">
            ${percentage} % · ${completedCount} / 8 leçons
          </span>
        </div>
        <div class="progress-bar-bg" style="height:10px; margin-top:0.5rem;">
          <div class="progress-bar-fill" style="width: ${percentage}%;"></div>
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
