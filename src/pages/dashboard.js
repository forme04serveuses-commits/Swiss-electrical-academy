// Swiss Electrical Academy — Page Dashboard (V1.1)
// Accueil, progression globale, continuer la formation, et les 5 modules officiels (A, B, N, E, F)

import { StorageService } from '../services/storage.js';
import { ACADEMY_INFO, ACADEMY_MODULES } from '../data/academy-data.js';

export function renderDashboard(container) {
  const stats = StorageService.getProgressStats();
  const lastActivity = StorageService.getLastActivity() || {
    moduleId: "A",
    formationId: "pyramide-lois",
    title: "Pyramide des lois",
    code: "Pyramide des lois",
    subtitle: "1.2 Base : Hiérarchie des lois et prescriptions suisses"
  };

  container.innerHTML = `
    <!-- Hero Banner (Section 8) -->
    <section class="dashboard-hero" aria-labelledby="heroTitle">
      <div style="font-size:0.8rem; font-weight:700; color:var(--electric-blue); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:0.4rem;">
        ${ACADEMY_INFO.institution}
      </div>
      <h1 class="hero-greeting" id="heroTitle">Bienvenue dans Swiss Electrical Academy 👋</h1>
      <div class="hero-tagline">« ${ACADEMY_INFO.baseline} »</div>

      <!-- Métriques de progression globale -->
      <div class="hero-metrics-grid">
        <div class="metric-card">
          <span class="metric-value" style="color:var(--electric-blue);">${stats.globalPercentage}%</span>
          <span class="metric-label">Progression globale</span>
        </div>
        <div class="metric-card">
          <span class="metric-value" style="color:var(--warning);">⚡ ${stats.xp}</span>
          <span class="metric-label">Points d'expérience (XP)</span>
        </div>
        <div class="metric-card">
          <span class="metric-value">${stats.completedFormations} / ${stats.totalFormations}</span>
          <span class="metric-label">Formations validées</span>
        </div>
        <div class="metric-card">
          <span class="metric-value" style="color:var(--success);">🏆 ${stats.badgesCount} / ${stats.totalBadgesCount}</span>
          <span class="metric-label">Badges débloqués</span>
        </div>
      </div>
    </section>

    <!-- Continuer la formation (Section 8) -->
    <section class="continue-section" aria-labelledby="continueHeading">
      <div class="section-heading" id="continueHeading">
        <span>⚡</span> Continuer votre apprentissage
      </div>
      <div class="continue-card">
        <div class="continue-info">
          <span class="continue-badge">Dernière activité • Module ${lastActivity.moduleId}</span>
          <div class="continue-title">${lastActivity.code} — ${lastActivity.title}</div>
          <div class="continue-desc">${lastActivity.subtitle || 'Reprendre là où vous vous étiez arrêté.'}</div>
        </div>
        <button class="btn-continue" id="btnResumeLearning">
          <span>Reprendre la leçon</span>
          <span>→</span>
        </button>
      </div>
    </section>

    <!-- Les Cinq Modules Officiels (Section 6 & 9) -->
    <section aria-labelledby="modulesHeading">
      <div class="section-heading" id="modulesHeading">
        <span>📚</span> Les 5 modules de formation
      </div>
      <div class="modules-grid">
        ${ACADEMY_MODULES.map(mod => {
          const modStats = stats.moduleStats[mod.id] || { percentage: 0, completed: 0, total: mod.formations.length };
          return `
            <article class="module-card" data-module-id="${mod.id}">
              <div>
                <div class="module-card-top">
                  <div class="module-code-badge badge-${mod.id}">
                    ${mod.code}
                  </div>
                  <span class="module-count-tag">${mod.countLabel}</span>
                </div>
                <h2 class="module-title">${mod.title}</h2>
                <p class="module-desc">${mod.description}</p>
              </div>

              <div>
                <div class="module-progress-wrapper">
                  <div class="progress-labels">
                    <span>Progression</span>
                    <span>${modStats.percentage}% (${modStats.completed}/${modStats.total})</span>
                  </div>
                  <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${modStats.percentage}%;"></div>
                  </div>
                </div>

                <button class="btn-module-open" data-module-id="${mod.id}">
                  <span>Explorer le module</span>
                  <span>→</span>
                </button>
              </div>
            </article>
          `;
        }).join('')}
      </div>
    </section>
  `;

  // Gestion du bouton Reprendre
  container.querySelector('#btnResumeLearning').addEventListener('click', () => {
    location.hash = `#/formations/${lastActivity.moduleId}/${lastActivity.formationId}`;
  });

  // Gestion des clics sur cartes modules
  container.querySelectorAll('.btn-module-open, .module-card').forEach(el => {
    el.addEventListener('click', (e) => {
      // Éviter double déclenchement si clic sur bouton interne
      const moduleId = el.getAttribute('data-module-id') || el.closest('.module-card')?.getAttribute('data-module-id');
      if (moduleId) {
        location.hash = `#/formations/${moduleId}`;
      }
    });
  });
}
