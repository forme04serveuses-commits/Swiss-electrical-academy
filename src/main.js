// Swiss Electrical Academy — Point d'entrée applicatif (V2.0)
// Initialisation du Shell, Enregistrement PWA Service Worker et Routeur Hash sans rechargement

import { setupNavigation, updateActiveNav } from './components/navigation.js';
import { ProgressionService } from './services/progression.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderModuleView, renderPyramideParcoursView, renderOcfoParcoursView, renderLieParcoursView, renderOibtParcoursView, renderOrniParcoursView } from './pages/module-view.js';
import { renderLessonView } from './pages/lesson-view.js';
import { renderProgressView } from './pages/progress-view.js';
import { renderTrainerView } from './pages/trainer-view.js';
import { renderProfileView } from './pages/profile-view.js';
import { initOcfoAnnexe4Visual } from './components/interactive-widgets.js';

// Désactiver la restauration automatique de défilement du navigateur pour les navigations SPA
if (typeof history !== 'undefined' && 'scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

export function scrollToTop(container) {
  const target = container || document.getElementById('pageContainer') || document.querySelector('.main-content');
  if (target) {
    target.scrollTop = 0;
    if (typeof target.scrollTo === 'function') {
      try {
        target.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } catch (e) {
        target.scrollTop = 0;
      }
    }
  }
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
  if (typeof document !== 'undefined') {
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }
}
if (typeof window !== 'undefined') {
  window.scrollToTop = scrollToTop;
}

function initSEA() {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;
  if (appRoot.children.length > 0) return; // Déjà initialisé

  // Migration et déduplication automatique des données de progression
  try {
    ProgressionService.migrateProgressionData();
  } catch (e) {
    console.warn('[SEA] Erreur migration progression :', e);
  }

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
        .then((reg) => {
          console.log('[SEA] Service Worker enregistré avec succès :', reg.scope);
          reg.update();
        })
        .catch((err) => console.warn('[SEA] Échec enregistrement Service Worker :', err));
    });

    let isRefreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!isRefreshing) {
        isRefreshing = true;
        window.location.reload();
      }
    });
  }

  // Routeur Hash sans rechargement
  function handleRouting() {
    // Normaliser le hash (ex: "#/formations/A/rs-734-2/chapitre-1" -> "/formations/A/rs-734-2/chapitre-1")
    const hash = window.location.hash.slice(1) || '/';
    const cleanPath = hash.split('?')[0];
    const segments = cleanPath.split('/').filter(Boolean);

    // Faire défiler immédiatement la page vers le haut à chaque changement de route
    scrollToTop(pageContainer);
    requestAnimationFrame(() => scrollToTop(pageContainer));

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

    // 3bis. Parcours dédié Pyramide des lois (Hub des 4 leçons) : /formations/A/pyramide-lois ou /formations/A/pyramide
    if (segments[0] === 'formations' && segments.length === 3 && (segments[2].toLowerCase() === 'pyramide-lois' || segments[2].toLowerCase() === 'pyramide' || segments[2].toLowerCase() === 'a00')) {
      renderPyramideParcoursView(pageContainer);
      return;
    }

    // 4. Parcours dédié RS 734.0 (Hub des 11 leçons LIE) : /formations/A/rs-734-0 ou /formations/A/lie
    if (segments[0] === 'formations' && segments.length === 3 && (segments[2].toLowerCase() === 'rs-734-0' || segments[2].toLowerCase() === 'lie')) {
      renderLieParcoursView(pageContainer);
      return;
    }

    // 4ter. Parcours dédié RS 734.27 (Hub des 7 leçons OIBT) : /formations/A/rs-734-27 ou /formations/A/oibt
    if (segments[0] === 'formations' && segments.length === 3 && (segments[2].toLowerCase() === 'rs-734-27' || segments[2].toLowerCase() === 'oibt' || segments[2].toLowerCase() === 'rs-734-27-oibt')) {
      renderOibtParcoursView(pageContainer);
      return;
    }

    // 4quater. Parcours dédié RS 814.710 (Hub des 7 leçons ORNI) : /formations/A/rs-814-710 ou /formations/A/orni
    if (segments[0] === 'formations' && segments.length === 3 && (segments[2].toLowerCase() === 'rs-814-710' || segments[2].toLowerCase() === 'orni' || segments[2].toLowerCase() === 'rs-814-710-orni')) {
      renderOrniParcoursView(pageContainer);
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

      // Sous-routes pour le parcours Pyramide des lois (ex: /formations/A/pyramide-lois/pyr-01 ou /lecon-1)
      if (segments.length >= 4 && (segments[2].toLowerCase() === 'pyramide-lois' || segments[2].toLowerCase() === 'pyramide' || segments[2].toLowerCase() === 'a00')) {
        const slug = segments[3].toLowerCase();
        let targetId = slug;
        if (slug === 'evaluation-finale' || slug === 'examen' || slug === 'final') {
          targetId = 'pyr-evaluation-finale';
        } else if (slug === 'lecon-1' || slug === 'pyr-1' || slug === 'pyr-01' || slug === 'chapitre-1') {
          targetId = 'pyr-01';
        } else if (slug === 'lecon-2' || slug === 'pyr-2' || slug === 'pyr-02' || slug === 'chapitre-2') {
          targetId = 'pyr-02';
        } else if (slug === 'lecon-3' || slug === 'pyr-3' || slug === 'pyr-03' || slug === 'chapitre-3') {
          targetId = 'pyr-03';
        } else if (slug === 'lecon-4' || slug === 'pyr-4' || slug === 'pyr-04' || slug === 'chapitre-4') {
          targetId = 'pyr-04';
        }
        renderLessonView(pageContainer, moduleId, targetId);
        return;
      }

      // Sous-routes pour le parcours RS 734.0 (ex: /formations/A/rs-734-0/chapitre-1 ou /lecon-1)
      if (segments.length >= 4 && (segments[2].toLowerCase() === 'rs-734-0' || segments[2].toLowerCase() === 'lie')) {
        const slug = segments[3].toLowerCase();
        let targetId = slug.startsWith('rs-734-0-') ? slug : `rs-734-0-${slug}`;
        if (slug === 'evaluation-finale' || slug === 'examen') {
          targetId = 'rs-734-0-evaluation-finale';
        } else if (slug.startsWith('chapitre-')) {
          const chapPart = slug.replace('chapitre-', '');
          const romanMap = { 'i': '1', 'ii': '2', 'iii': '3', 'iiia': '4', 'iiib': '5', 'iiic': '6', 'iv': '7', 'v': '8', 'vi': '9', 'vii': '10', 'viii': '11' };
          const mappedNum = romanMap[chapPart] || chapPart;
          targetId = `rs-734-0-lecon-${mappedNum}`;
        }
        renderLessonView(pageContainer, moduleId, targetId);
        return;
      }

      // Sous-routes pour le parcours RS 734.2 (ex: /formations/A/rs-734-2/chapitre-1)
      if (segments.length >= 4 && (segments[2].toLowerCase() === 'rs-734-2' || segments[2].toLowerCase() === 'ocfo')) {
        const slug = segments[3].toLowerCase();
        let targetId = slug.startsWith('rs-734-2-') ? slug : `rs-734-2-${slug}`;
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

      // Sous-routes pour le parcours RS 734.27 (ex: /formations/A/rs-734-27/lecon-1 ou /lecon-2)
      if (segments.length >= 4 && (segments[2].toLowerCase() === 'rs-734-27' || segments[2].toLowerCase() === 'oibt' || segments[2].toLowerCase() === 'rs-734-27-oibt')) {
        const slug = segments[3].toLowerCase();
        let targetId = slug.startsWith('rs-734-27-') ? slug : `rs-734-27-${slug}`;
        if (slug === 'evaluation-finale' || slug === 'examen') {
          targetId = 'rs-734-27-evaluation-finale';
        } else if (slug.startsWith('chapitre-')) {
          const chapPart = slug.replace('chapitre-', '');
          targetId = `rs-734-27-lecon-${chapPart}`;
        } else if (slug === 'annexe' || slug === 'annexes') {
          targetId = 'rs-734-27-lecon-7';
        }
        renderLessonView(pageContainer, moduleId, targetId);
        return;
      }

      // Sous-routes pour le parcours RS 814.710 (ex: /formations/A/rs-814-710/lecon-1 ou /lecon-2)
      if (segments.length >= 4 && (segments[2].toLowerCase() === 'rs-814-710' || segments[2].toLowerCase() === 'orni' || segments[2].toLowerCase() === 'rs-814-710-orni')) {
        const slug = segments[3].toLowerCase();
        let targetId = slug.startsWith('rs-814-710-') ? slug : `rs-814-710-${slug}`;
        if (slug === 'evaluation-finale' || slug === 'examen') {
          targetId = 'rs-814-710-evaluation-finale';
        } else if (slug.startsWith('chapitre-')) {
          const chapPart = slug.replace('chapitre-', '');
          targetId = `rs-814-710-lecon-${chapPart}`;
        }
        renderLessonView(pageContainer, moduleId, targetId);
        return;
      }

      const formationId = segments.length >= 4 ? segments[segments.length - 1] : segments[2];
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

  window.addEventListener('hashchange', () => {
    handleRouting();
    scrollToTop(pageContainer);
    requestAnimationFrame(() => scrollToTop(pageContainer));
  });
  handleRouting();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSEA);
} else {
  initSEA();
}
