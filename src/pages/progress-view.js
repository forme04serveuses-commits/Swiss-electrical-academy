// Swiss Electrical Academy — Page Progression & Gamification (V1.1)
// Progression globale, progression par module (A, B, N, E, F), XP et badges déblocables

import { StorageService } from '../services/storage.js';
import { ProgressionService } from '../services/progression.js';
import { OFFICIAL_BADGES, ACADEMY_MODULES } from '../data/academy-data.js';

export function renderProgressView(container) {
  const stats = ProgressionService.getGlobalProgress();
  const unlockedBadges = StorageService.getUnlockedBadges();

  container.innerHTML = `
    <header style="margin-bottom:2rem;">
      <h1 style="font-size:1.7rem; font-weight:800; color:var(--text-primary); margin-bottom:0.4rem;">
        Tableau de bord de votre progression
      </h1>
      <p style="color:var(--text-secondary); font-size:0.92rem;">
        Suivi de vos acquis, validation des chapitres normatifs et badges de compétences professionnelles.
      </p>
    </header>

    <!-- Cartes résumé -->
    <div class="progress-grid">
      <div class="metric-card" style="padding:1.25rem;">
        <span class="metric-label">Progression globale</span>
        <span class="metric-value" style="color:var(--electric-blue); font-size:2rem; margin:0.35rem 0;">
          ${stats.globalPercentageFormatted}
        </span>
        <div class="progress-bar-bg" style="height:6px;">
          <div class="progress-bar-fill" style="width:${stats.globalPercentage}%;"></div>
        </div>
      </div>

      <div class="metric-card" style="padding:1.25rem;">
        <span class="metric-label">Points d'expérience cumulés</span>
        <span class="metric-value" style="color:var(--warning); font-size:2rem; margin:0.35rem 0;">
          ⚡ ${stats.xp} XP
        </span>
        <span style="font-size:0.75rem; color:var(--text-muted);">Acquis par validation des quiz techniques</span>
      </div>

      <div class="metric-card" style="padding:1.25rem;">
        <span class="metric-label">Formations validées</span>
        <span class="metric-value" style="font-size:2rem; margin:0.35rem 0;">
          ${stats.completedFormations} / ${stats.totalFormations}
        </span>
        <span style="font-size:0.75rem; color:var(--text-muted);">Sur les formations actuellement disponibles</span>
      </div>
    </div>

    <!-- Détail par Module (A, B, N, E, F) (Section 23) -->
    <section style="margin-bottom:2.5rem;" aria-labelledby="modulesProgressHeading">
      <div class="section-heading" id="modulesProgressHeading">
        <span>📊</span> Progression détaillée par module officiel
      </div>
      <div style="display:flex; flex-direction:column; gap:0.85rem;">
        ${ACADEMY_MODULES.map(mod => {
          const modStats = ProgressionService.getModuleProgress(mod.id);
          const countLabelDetail = modStats.isInDevelopment
            ? `En préparation (0 sur ${modStats.catalogTotal})`
            : `${modStats.completedCount} sur ${modStats.totalAvailable}`;
          const percentLabel = modStats.isInDevelopment
            ? `0 %`
            : modStats.percentageFormatted;

          return `
            <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.25rem; display:flex; flex-direction:column; gap:0.6rem;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; align-items:center; gap:0.75rem;">
                  <span class="module-code-badge badge-${mod.id}" style="width:32px; height:32px; font-size:0.95rem;">
                    ${mod.code}
                  </span>
                  <div>
                    <strong style="color:var(--text-primary); font-size:0.95rem;">Module ${mod.id} — ${mod.title}</strong>
                    <div style="font-size:0.75rem; color:var(--text-muted);">${mod.countLabel} ${modStats.isModuleCompleted ? '· <span style="color:#10b981; font-weight:700;">✓ Terminé</span>' : ''}</div>
                  </div>
                </div>
                <div style="text-align:right;">
                  <span style="font-weight:700; font-size:1.05rem; color:var(--text-primary);">${percentLabel}</span>
                  <div style="font-size:0.72rem; color:var(--text-muted);">${countLabelDetail}</div>
                </div>
              </div>
              <div class="progress-bar-bg" style="height:6px;">
                <div class="progress-bar-fill" style="width:${modStats.percentage}%;"></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </section>

    <!-- Référentiel des Badges (Section 25) -->
    <section aria-labelledby="badgesHeading">
      <div class="section-heading" id="badgesHeading">
        <span>🏆</span> Badges de compétences (${stats.badgesCount} débloqués sur ${stats.totalBadgesCount})
      </div>
      <div class="badges-grid">
        ${OFFICIAL_BADGES.map(badge => {
          const isUnlocked = unlockedBadges.includes(badge.id);
          return `
            <div class="badge-card ${isUnlocked ? 'unlocked' : 'locked'}">
              <div class="badge-icon-box">${badge.icon}</div>
              <div>
                <div class="badge-name">${badge.name}</div>
                <div class="badge-desc">${badge.description}</div>
                <div style="margin-top:0.4rem; font-size:0.7rem; font-weight:700; color:${isUnlocked ? 'var(--success)' : 'var(--text-muted)'};">
                  ${isUnlocked ? '✓ Débloqué' : '🔒 À débloquer'}
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </section>
  `;
}
