/* ============================================================
   Service Worker — Casa Escondida Anilao
   Caches all pages + critical assets on first load so every
   subsequent page navigation is served instantly from cache.
   ============================================================ */

const CACHE_VERSION = 'ce-v4';

/* ── Resources to precache immediately on install ── */
const PRECACHE_URLS = [
  /* Pages */
  './',
  './index.html',
  './rooms.html',
  './dive.html',
  './gallery.html',
  './location.html',
  './blog.html',

  /* Shared scripts & styles */
  './style.css',
  './site.js',
  './translate.js',
  './chatbot.js',
  './footer-v3.css',
  './perf-overrides.css',

  /* Logos (needed on every page) */
  './images/Logo/Untitled_design__3_-removebg-preview.webp',
  './images/Logo/Untitled_design__2_-removebg-preview.webp',

  /* Hero poster / background images (used as video poster & preload) */
  './images/Hero%20Image/generate_different_angle_202604220023.webp',
  './images/background/594413266_1405022098297117_5892045775093709556_n.webp',
  './images/Nature%20Folder/sea%20fan%20coral.webp',
];

/* ── INSTALL: cache everything immediately ── */
self.addEventListener('install', function (event) {
  self.skipWaiting(); // activate right away, don't wait for old SW to die
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function (cache) {
      /* addAll fails silently per-item so one bad URL won't break everything */
      return Promise.allSettled(
        PRECACHE_URLS.map(function (url) {
          return cache.add(url).catch(function () {
            console.warn('[SW] Failed to precache:', url);
          });
        })
      );
    })
  );
});

/* ── ACTIVATE: delete old caches ── */
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) { return key !== CACHE_VERSION; })
          .map(function (key) { return caches.delete(key); })
      );
    }).then(function () {
      return self.clients.claim(); // take control of all open tabs
    })
  );
});

/* ── FETCH: serve from cache first, fallback to network ── */
self.addEventListener('fetch', function (event) {
  var req = event.request;

  /* Only intercept GET requests */
  if (req.method !== 'GET') return;

  /* Skip videos — too large to cache (let browser stream them normally) */
  var url = req.url;
  if (url.indexOf('.mp4') !== -1 || url.indexOf('.webm') !== -1) return;

  /* Skip Google Tag Manager, analytics, external APIs */
  if (url.indexOf('googletagmanager') !== -1 ||
      url.indexOf('google-analytics') !== -1 ||
      url.indexOf('facebook.net') !== -1) return;

  event.respondWith(
    caches.match(req).then(function (cached) {
      /* Stale-while-revalidate: return cached immediately, update in background */
      var networkFetch = fetch(req).then(function (response) {
        if (response.ok && response.type !== 'opaque') {
          var clone = response.clone();
          caches.open(CACHE_VERSION).then(function (cache) {
            cache.put(req, clone);
          });
        }
        return response;
      }).catch(function () {
        /* Offline fallback — return cached version if available */
        return cached;
      });

      return cached || networkFetch;
    })
  );
});
