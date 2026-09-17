// Swiss Electrical Academy — Composant de Navigation (V1.1)
// Sidebar permanente desktop, bottom-nav mobile, bandeau supérieur avec XP, réseau & PWA

import { StorageService } from '../services/storage.js';
import { ACADEMY_MODULES } from '../data/academy-data.js';

export function setupNavigation(container, onNavigate) {
  let deferredPrompt = null;

  // Créer le shell HTML de base
  container.innerHTML = `
    <!-- Sidebar Desktop Permanente -->
    <aside class="sidebar" id="appSidebar" role="navigation" aria-label="Navigation principale">
      <div class="sidebar-header">
        <div class="brand-icon" aria-hidden="true">
          <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="256,76 396,156 396,316 256,396 116,316 116,156" stroke="#38BDF8" stroke-width="20" fill="none"/>
            <path d="M256,120 L360,180 L360,290 C360,350 256,400 256,400 C256,400 152,350 152,290 L152,180 Z" fill="#172033" stroke="#38BDF8" stroke-width="8"/>
            <path d="M272,185 L196,285 L248,285 L236,365 L316,265 L264,265 Z" fill="#38BDF8"/>
          </svg>
        </div>
        <div class="brand-title">
          <span>Swiss Electrical</span>
          <span class="brand-subtitle">Academy</span>
        </div>
      </div>

      <nav class="sidebar-nav">
        <div>
          <div class="nav-group-title">Navigation</div>
          <ul class="nav-links">
            <li>
              <a href="#/" class="nav-link" data-route="home">
                <span class="nav-link-icon">🏠</span>
                <span>Accueil</span>
              </a>
            </li>
            <li>
              <a href="#/formations" class="nav-link" data-route="formations">
                <span class="nav-link-icon">📚</span>
                <span>Formations</span>
              </a>
            </li>
            <li>
              <a href="#/progression" class="nav-link" data-route="progression">
                <span class="nav-link-icon">📊</span>
                <span>Progression</span>
              </a>
            </li>
            <li>
              <a href="#/formateur" class="nav-link" data-route="formateur">
                <span class="nav-link-icon">👨‍🏫</span>
                <span>Espace Formateur</span>
              </a>
            </li>
            <li>
              <a href="#/profil" class="nav-link" data-route="profil">
                <span class="nav-link-icon">👤</span>
                <span>Profil</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div class="nav-group-title">Les Cinq Modules Officiels</div>
          <ul class="nav-links">
            ${ACADEMY_MODULES.map(mod => `
              <li>
                <a href="#/formations/${mod.id}" class="nav-link" data-route="module-${mod.id}">
                  <span class="nav-link-icon">${mod.id}</span>
                  <span>${mod.title}</span>
                  <span class="module-nav-badge">${mod.formations.length}</span>
                </a>
              </li>
            `).join('')}
          </ul>
        </div>
      </nav>

      <div class="sidebar-footer">
        <div style="font-weight:600; color:var(--text-secondary); margin-bottom:0.2rem;">Édition V1.1 — Suisse</div>
        <div>« Apprendre les règles. Comprendre les risques. Maîtriser la pratique. »</div>
      </div>
    </aside>

    <!-- Corps Principal (Main Wrapper) -->
    <div class="main-wrapper">
      <!-- En-tête supérieur -->
      <header class="app-header" role="banner">
        <div class="header-left">
          <button class="mobile-menu-toggle" id="btnToggleSidebar" aria-label="Ouvrir le menu de navigation">
            ☰
          </button>
          <div class="header-tagline">
            Plateforme e-learning officielle des règles techniques électriques en Suisse
          </div>
        </div>

        <div class="header-right">
          <!-- Indicateur d'état réseau -->
          <div class="network-pill" id="networkPill">
            <span class="network-dot"></span>
            <span id="networkLabel">En ligne</span>
          </div>

          <!-- Bouton installation PWA -->
          <button class="btn-install-pwa" id="btnInstallPwa" style="display:none;" aria-label="Installer l'application sur votre appareil">
            📲 <span>Installer</span>
          </button>

          <!-- Indicateur XP -->
          <div class="header-xp-badge" id="headerXpBadge" title="Points d'expérience acquis">
            ⚡ <span id="headerXpVal">${StorageService.getXp()}</span> <span>XP</span>
          </div>

          <!-- Bouton de sélection de Thème basé sur une icône (🌙 → ☀️ → 🖥️ → 🌙) -->
          <button class="theme-toggle-btn" id="themeToggleBtn" type="button" aria-label="Thème sombre" title="Thème sombre" data-tooltip="Thème sombre">
            <span class="theme-toggle-icon" id="themeToggleIcon" aria-hidden="true">🌙</span>
          </button>

          <!-- Avatar Profil -->
          <div class="user-avatar-pill" id="headerProfileBtn" role="button" tabindex="0" aria-label="Accéder à votre profil">
            <div class="user-avatar-circle">👨‍🔧</div>
            <span class="user-name-label">Alex</span>
          </div>
        </div>
      </header>

      <!-- Conteneur de page dynamique -->
      <main class="main-content" id="pageContainer" role="main"></main>
    </div>

    <!-- Navigation Inférieure Mobile (Section 7) -->
    <nav class="bottom-nav" role="navigation" aria-label="Navigation mobile">
      <a href="#/" class="bottom-nav-item" data-route="home">
        <span class="bottom-nav-icon">🏠</span>
        <span>Accueil</span>
      </a>
      <a href="#/formations" class="bottom-nav-item" data-route="formations">
        <span class="bottom-nav-icon">📚</span>
        <span>Formations</span>
      </a>
      <a href="#/progression" class="bottom-nav-item" data-route="progression">
        <span class="bottom-nav-icon">📊</span>
        <span>Progrès</span>
      </a>
      <a href="#/profil" class="bottom-nav-item" data-route="profil">
        <span class="bottom-nav-icon">👤</span>
        <span>Profil</span>
      </a>
    </nav>
  `;

  // Gestion du réseau (En ligne / Hors ligne)
  const networkPill = container.querySelector('#networkPill');
  const networkLabel = container.querySelector('#networkLabel');

  function updateNetworkStatus() {
    if (navigator.onLine) {
      networkPill.classList.remove('offline');
      networkLabel.textContent = 'En ligne';
    } else {
      networkPill.classList.add('offline');
      networkLabel.textContent = 'Mode hors-ligne';
    }
  }

  window.addEventListener('online', updateNetworkStatus);
  window.addEventListener('offline', updateNetworkStatus);
  updateNetworkStatus();

  // Gestion du bouton PWA d'installation
  const btnInstall = container.querySelector('#btnInstallPwa');
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    btnInstall.style.display = 'inline-flex';
  });

  btnInstall.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log('[PWA] Choix utilisateur :', outcome);
    deferredPrompt = null;
    btnInstall.style.display = 'none';
  });

  // Gestion du Thème cyclique basé sur une icône (Sombre 🌙 → Clair ☀️ → Système 🖥️ → Sombre 🌙)
  const THEME_MODES = {
    dark: {
      next: 'light',
      icon: '🌙',
      label: 'Thème sombre'
    },
    light: {
      next: 'system',
      icon: '☀️',
      label: 'Thème clair'
    },
    system: {
      next: 'dark',
      icon: '🖥️',
      label: 'Thème système'
    }
  };

  const themeBtn = container.querySelector('#themeToggleBtn');
  const themeIcon = container.querySelector('#themeToggleIcon');

  function applyTheme(theme, animate = false) {
    const validTheme = THEME_MODES[theme] ? theme : 'dark';
    const config = THEME_MODES[validTheme];

    // 1. Appliquer data-theme sur documentElement
    if (validTheme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-theme', validTheme);
    }

    // 2. Mettre à jour l'icône, aria-label et tooltip du bouton
    if (themeBtn && themeIcon) {
      themeBtn.setAttribute('aria-label', config.label);
      themeBtn.setAttribute('title', config.label);
      themeBtn.setAttribute('data-tooltip', config.label);
      themeBtn.setAttribute('data-theme-mode', validTheme);

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (animate && !reduceMotion) {
        themeIcon.style.transform = 'scale(0.7) rotate(15deg)';
        themeIcon.style.opacity = '0.5';
        setTimeout(() => {
          themeIcon.textContent = config.icon;
          themeIcon.style.transform = 'scale(1) rotate(0deg)';
          themeIcon.style.opacity = '1';
        }, 120);
      } else {
        themeIcon.textContent = config.icon;
        themeIcon.style.transform = 'none';
        themeIcon.style.opacity = '1';
      }
    }
  }

  // Initialiser avec le thème sauvegardé (défaut: dark)
  const savedTheme = StorageService.getTheme();
  applyTheme(savedTheme, false);

  // Clic sur le bouton : cycler vers le mode suivant
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = StorageService.getTheme() || 'dark';
      const next = THEME_MODES[current] ? THEME_MODES[current].next : 'light';
      StorageService.setTheme(next);
      applyTheme(next, true);

      // Synchroniser la page profil si elle est ouverte
      const profileButtons = document.getElementById('profileThemeButtons');
      if (profileButtons) {
        profileButtons.querySelectorAll('button').forEach(b => {
          if (b.getAttribute('data-theme-val') === next) {
            b.classList.remove('inactive-theme');
          } else {
            b.classList.add('inactive-theme');
          }
        });
      }
    });
  }

  // Écouteur de changement de préférence système de l'OS (quand mode Système actif)
  const systemSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  systemSchemeQuery.addEventListener('change', (e) => {
    if (StorageService.getTheme() === 'system') {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });

  // Exposer globalement pour la vue profil
  window.applyAppTheme = function(theme, animate = false) {
    applyTheme(theme, animate);
  };

  // Toggle Sidebar sur mobile
  const sidebar = container.querySelector('#appSidebar');
  const btnToggleSidebar = container.querySelector('#btnToggleSidebar');
  btnToggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Profil click
  container.querySelector('#headerProfileBtn').addEventListener('click', () => {
    location.hash = '#/profil';
  });

  // Mise à jour de l'indicateur XP
  window.updateHeaderXp = function() {
    const xpVal = container.querySelector('#headerXpVal');
    if (xpVal) {
      xpVal.textContent = StorageService.getXp();
    }
  };

  // Fermer la sidebar mobile lors d'un clic sur un lien
  container.querySelectorAll('.nav-link, .bottom-nav-item').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
    });
  });
}

// Mise en surbrillance du lien actif
export function updateActiveNav(route) {
  document.querySelectorAll('.nav-link, .bottom-nav-item').forEach(el => {
    el.classList.remove('active');
  });

  if (route === '/' || route === '') {
    document.querySelectorAll('[data-route="home"]').forEach(el => el.classList.add('active'));
  } else if (route.startsWith('/formations')) {
    document.querySelectorAll('[data-route="formations"]').forEach(el => el.classList.add('active'));
  } else if (route === '/progression') {
    document.querySelectorAll('[data-route="progression"]').forEach(el => el.classList.add('active'));
  } else if (route === '/formateur') {
    document.querySelectorAll('[data-route="formateur"]').forEach(el => el.classList.add('active'));
  } else if (route === '/profil') {
    document.querySelectorAll('[data-route="profil"]').forEach(el => el.classList.add('active'));
  }
}
