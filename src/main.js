// Swiss Electrical Academy — Point d'entrée applicatif (V2.0)
// Initialisation du Shell, Enregistrement PWA Service Worker et Routeur Hash sans rechargement

import { setupNavigation, updateActiveNav } from './components/navigation.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderModuleView, renderOcfoParcoursView, renderLieParcoursView } from './pages/module-view.js';
import { renderLessonView } from './pages/lesson-view.js';
import { renderProgressView } from './pages/progress-view.js';
import { renderTrainerView } from './pages/trainer-view.js';
import { renderProfileView } from './pages/profile-view.js';
import { initOcfoAnnexe4Visual } from './components/interactive-widgets.js';

function initSEA() {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;
  if (appRoot.children.length > 0) return; // Déjà initialisé

  // Création du shell de navigation
  const appContainer = document.createElement('div');
  appContainer.className = 'app-container';
  appRoot.appendChild(appContainer);

  setupNavigation(appContainer, (route) => {
    location.hash = `#${route}`;
  });

  const pageContainer = document.getElementById('pageContainer');

  // Enregistrement du Service Worker PWA (uniquement sur http/https, évite les erreurs sur file://)
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log('[SEA] Service Worker enregistré avec succès :', reg.scope))
        .catch((err) => console.warn('[SEA] Échec enregistrement Service Worker :', err));
    });
  }

  // Routeur Hash sans rechargement
  function handleRouting() {
    // Normaliser le hash (ex: "#/formations/A/rs-734-2/chapitre-1" -> "/formations/A/rs-734-2/chapitre-1")
    const hash = window.location.hash.slice(1) || '/';
    const cleanPath = hash.split('?')[0];
    const segments = cleanPath.split('/').filter(Boolean);

    // Faire défiler la page vers le haut à chaque changement de route
    if (pageContainer) {
      pageContainer.scrollTop = 0;
    }

    // Mise à jour de la surbrillance dans les barres de menu
    updateActiveNav(cleanPath);

    // Règle absolue (Section 39) : Interdiction absolue des anciennes routes basées sur C
    if (segments[0] === 'formations' && segments[1] === 'C') {
      console.warn('[Router] Route Module C interdite. Redirection vers Module N (NIBT).');
      location.hash = '#/formations/N';
      return;
    }

    // 1. Accueil
    if (segments.length === 0 || cleanPath === '/') {
      renderDashboard(pageContainer);
      return;
    }

    // 2. Formations (liste globale)
    if (segments[0] === 'formations' && segments.length === 1) {
      renderDashboard(pageContainer);
      return;
    }

    // 3. Vue Module (ex: /formations/A, /formations/B, /formations/N, /formations/E, /formations/F)
    if (segments[0] === 'formations' && segments.length === 2) {
      const moduleId = segments[1].toUpperCase();
      renderModuleView(pageContainer, moduleId);
      return;
    }

    // 4. Parcours dédié RS 734.0 (Hub des 11 leçons LIE) : /formations/A/rs-734-0 ou /formations/A/lie
    if (segments[0] === 'formations' && segments.length === 3 && (segments[2].toLowerCase() === 'rs-734-0' || segments[2].toLowerCase() === 'lie')) {
      renderLieParcoursView(pageContainer);
      return;
    }

    // 4bis. Parcours dédié RS 734.2 (Hub des 7 chapitres OCFo) : /formations/A/RS-734-2 ou /formations/A/rs-734-2
    if (segments[0] === 'formations' && segments.length === 3 && (segments[2].toLowerCase() === 'rs-734-2' || segments[2].toLowerCase() === 'ocfo')) {
      renderOcfoParcoursView(pageContainer);
      return;
    }

    // 5. Vue Chapitre ou Leçon
    if (segments[0] === 'formations' && segments.length >= 3) {
      const moduleId = segments[1].toUpperCase();

      // Sous-routes pour le parcours RS 734.0 (ex: /formations/A/rs-734-0/lecon-1)
      if (segments.length >= 4 && (segments[2].toLowerCase() === 'rs-734-0' || segments[2].toLowerCase() === 'lie')) {
        const slug = segments[3].toLowerCase();
        let targetId = `rs-734-0-${slug}`;
        if (slug === 'evaluation-finale' || slug === 'examen') {
          targetId = 'rs-734-0-evaluation-finale';
        }
        renderLessonView(pageContainer, moduleId, targetId);
        return;
      }

      // Sous-routes pour le parcours RS 734.2 (ex: /formations/A/rs-734-2/chapitre-1)
      if (segments.length >= 4 && (segments[2].toLowerCase() === 'rs-734-2' || segments[2].toLowerCase() === 'ocfo')) {
        const slug = segments[3].toLowerCase();
        let targetId = `rs-734-2-${slug}`;
        if (slug === 'evaluation-finale' || slug === 'examen') {
          targetId = 'rs-734-2-evaluation-finale';
        } else if (slug === 'annexes' || slug === 'annexes-1-4' || slug === 'chapitre-8' || slug === 'lecon-8') {
          targetId = 'rs-734-2-annexes';
        }
        renderLessonView(pageContainer, moduleId, targetId);
        setTimeout(() => {
          initOcfoAnnexe4Visual(pageContainer);
        }, 50);
        return;
      }

      const formationId = segments[2];
      renderLessonView(pageContainer, moduleId, formationId);
      setTimeout(() => {
        initOcfoAnnexe4Visual(pageContainer);
      }, 50);
      return;
    }

    // 6. Progression
    if (segments[0] === 'progression') {
      renderProgressView(pageContainer);
      return;
    }

    // 7. Espace Formateur
    if (segments[0] === 'formateur') {
      renderTrainerView(pageContainer);
      return;
    }

    // 8. Profil
    if (segments[0] === 'profil') {
      renderProfileView(pageContainer);
      return;
    }

    // Fallback : Redirection Accueil
    renderDashboard(pageContainer);
  }

  window.addEventListener('hashchange', handleRouting);
  handleRouting();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSEA);
} else {
  initSEA();
}
