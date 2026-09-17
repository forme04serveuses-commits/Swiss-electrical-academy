// Swiss Electrical Academy — Vue d'un Module (V1.1)
// Détail du module, progression spécifique et liste ordonnée des leçons/chapitres

import { StorageService } from '../services/storage.js';
import { ACADEMY_MODULES } from '../data/academy-data.js';

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
          <span>${modPercentage}% (${completedCount} sur ${mod.formations.length} terminés)</span>
        </div>
        <div class="progress-bar-bg" style="height:8px;">
          <div class="progress-bar-fill" style="width: ${modPercentage}%;"></div>
        </div>
      </div>
    </header>

    <section aria-label="Liste des formations du module">
      <div class="section-heading">
        <span>📑</span> Contenu de la formation (${mod.countLabel})
      </div>
      <div class="formations-list">
        ${mod.formations.map(formation => {
          const isDone = completed.includes(formation.id);
          const isAvailable = formation.status === "Disponible";

          return `
            <article class="formation-item-card" data-formation-id="${formation.id}">
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
                <span class="status-badge ${isAvailable ? 'status-available' : 'status-dev'}">
                  ${formation.status}
                </span>
                <span style="color:var(--electric-blue); font-size:1.1rem;">→</span>
              </div>
            </article>
          `;
        }).join('')}
      </div>
    </section>
  `;

  // Événements de clic sur chaque formation
  container.querySelectorAll('.formation-item-card').forEach(card => {
    card.addEventListener('click', () => {
      const formationId = card.getAttribute('data-formation-id');
      location.hash = `#/formations/${mod.id}/${formationId}`;
    });
  });
}
