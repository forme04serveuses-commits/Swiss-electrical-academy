// ELECBOOK | EBOOK — Service Worker V2.1
// Mode hors-ligne et mise en cache des actifs essentiels

const CACHE_NAME = 'elecbook-v2.7.8-cache';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './src/main.js',
  './src/bundle.js',
  './src/data/academy-data.js',
  './src/styles/theme.css',
  './src/styles/base.css',
  './src/services/storage.js',
  './src/services/progression.js',
  './src/components/navigation.js',
  './src/components/interactive-widgets.js',
  './src/components/video-player.js',
  './src/components/quiz.js',
  './src/pages/dashboard.js',
  './src/pages/module-view.js',
  './src/pages/lesson-view.js',
  './src/pages/progress-view.js',
  './src/pages/trainer-view.js',
  './src/pages/profile-view.js',
  './public/icons/icon.svg',
  './public/icons/icon-192.png',
  './public/icons/icon-512.png',
  './public/icons/icon-maskable-512.png',
  './public/icons/apple-touch-icon.png',
  './public/icons/favicon-32x32.png',
  './public/icons/favicon-16x16.png',
  './public/icons/favicon.png',
  './public/fonts/goodly/Goodly-Bold.woff',
  './public/fonts/goodly/Goodly-Semibold.woff',
  './public/fonts/goodly/Goodly-Regular.woff',
  './public/fonts/goodly/Goodly-Bold.ttf',
  './public/fonts/goodly/Goodly-Semibold.ttf',
  './public/fonts/goodly/Goodly-Regular.ttf',
  './public/media/branding/logo-full.png',
  './public/media/branding/logo-short.png',
  './public/media/images/module-a/infographie_pyramide_lois.png',
  './public/media/images/module-a/infographie_lie_art1_15.jpg'
];

// Installation : pré-chargement des ressources critiques
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pré-mise en cache des actifs essentiels ELECBOOK...');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activation : nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Suppression ancien cache :', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Stratégie Réseau avec fallback sur Cache (Network First avec mise à jour du Cache)
// Garantit que les mises à jour GitHub Pages sont reçues immédiatement dès rafraîchissement
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Bypasser les fichiers médias volumineux (vidéos) pour préserver le cache offline et supporter les Range headers (206)
  if (url.pathname.endsWith('.mp4') || url.pathname.endsWith('.webm') || url.pathname.includes('/media/videos/')) {
    return;
  }

  // Pour les requêtes locales : Network First avec fallback sur Cache
  if (url.origin === location.origin) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
          }
          return networkResponse;
        })
        .catch(() => {
          // Hors ligne : servir depuis le cache
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;
            if (event.request.headers.get('accept')?.includes('text/html')) {
              return caches.match('./index.html');
            }
          });
        })
    );
  } else {
    // Requêtes externes (ex: polices Google Fonts) : Network First avec cache
    event.respondWith(
      fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
        }
        return networkResponse;
      }).catch(() => caches.match(event.request))
    );
  }
});
