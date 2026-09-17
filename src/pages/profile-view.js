// Swiss Electrical Academy — Page Profil Apprenant (V1.1)
// Identité, avatar, statistiques personnelles, gestion du thème et persistance

import { StorageService } from '../services/storage.js';
import { DEFAULT_USER } from '../data/academy-data.js';

export function renderProfileView(container) {
  const stats = StorageService.getProgressStats();
  const currentTheme = StorageService.getTheme();

  container.innerHTML = `
    <div class="profile-card">
      <div class="profile-user-header">
        <div class="profile-large-avatar">${DEFAULT_USER.avatar}</div>
        <div>
          <h1 style="font-size:1.4rem; font-weight:800; color:var(--text-primary); margin-bottom:0.2rem;">
            ${DEFAULT_USER.name}
          </h1>
          <div style="font-size:0.85rem; color:var(--electric-blue); font-weight:600;">
            ${DEFAULT_USER.role}
          </div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.2rem;">
            ${DEFAULT_USER.level}
          </div>
        </div>
      </div>

      <!-- Métriques Apprenant -->
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.75rem; background:var(--bg-app); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1rem; text-align:center;">
        <div>
          <div style="font-size:1.4rem; font-weight:800; color:var(--electric-blue);">${stats.globalPercentage}%</div>
          <div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase;">Progression</div>
        </div>
        <div>
          <div style="font-size:1.4rem; font-weight:800; color:var(--warning);">⚡ ${stats.xp}</div>
          <div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase;">XP Total</div>
        </div>
        <div>
          <div style="font-size:1.4rem; font-weight:800; color:var(--success);">🏆 ${stats.badgesCount}</div>
          <div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase;">Badges</div>
        </div>
      </div>

      <!-- Préférences d'affichage & Thème (Sections 29, 30, 50) -->
      <div>
        <h2 style="font-size:0.95rem; font-weight:700; color:var(--text-primary); margin-bottom:0.65rem;">
          Thème visuel (Par défaut : Sombre natif)
        </h2>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.65rem;" id="profileThemeButtons">
          <button class="btn-quiz-action ${currentTheme === 'dark' ? '' : 'inactive-theme'}" style="padding:0.65rem; font-size:0.82rem;" data-theme-val="dark">
            🌙 Sombre
          </button>
          <button class="btn-quiz-action ${currentTheme === 'light' ? '' : 'inactive-theme'}" style="padding:0.65rem; font-size:0.82rem;" data-theme-val="light">
            ☀️ Clair
          </button>
          <button class="btn-quiz-action ${currentTheme === 'system' ? '' : 'inactive-theme'}" style="padding:0.65rem; font-size:0.82rem;" data-theme-val="system">
            💻 Système
          </button>
        </div>
      </div>

      <!-- Réinitialisation des données locales pour tests -->
      <div style="border-top:1px solid var(--border-subtle); padding-top:1.25rem;">
        <h3 style="font-size:0.85rem; font-weight:700; color:var(--text-muted); margin-bottom:0.5rem; text-transform:uppercase;">
          Données locales (localStorage)
        </h3>
        <p style="font-size:0.78rem; color:var(--text-muted); line-height:1.45; margin-bottom:0.85rem;">
          Toutes vos données (progrès, quiz, XP, badges) sont stockées localement dans votre navigateur sans cookie publicitaire.
        </p>
        <button class="btn-quiz-action" style="background:var(--danger-bg); color:var(--danger); border:1px solid rgba(239, 68, 68, 0.3); width:100%;" id="btnResetProgress">
          🗑️ Réinitialiser ma progression locale
        </button>
      </div>
    </div>
  `;

  // Gestion des boutons de thème
  container.querySelectorAll('#profileThemeButtons button').forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-theme-val');
      StorageService.setTheme(selected);

      // Appliquer au DOM et synchroniser le bouton d'en-tête
      if (typeof window.applyAppTheme === 'function') {
        window.applyAppTheme(selected, true);
      } else {
        if (selected === 'system') {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        } else {
          document.documentElement.setAttribute('data-theme', selected);
        }
      }

      // Re-render la vue profil pour refléter le bouton actif
      renderProfileView(container);
    });
  });

  // Réinitialiser
  container.querySelector('#btnResetProgress').addEventListener('click', () => {
    if (confirm('Voulez-vous vraiment réinitialiser l\'ensemble de votre progression locale et vos XP ?')) {
      localStorage.clear();
      StorageService.setTheme(currentTheme);
      alert('Progression réinitialisée.');
      if (window.updateHeaderXp) window.updateHeaderXp();
      location.hash = '#/';
    }
  });
}
