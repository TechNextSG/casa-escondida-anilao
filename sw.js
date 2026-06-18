/* ============================================================
   Service Worker — Casa Escondida Anilao
   Strategy:
   - HTML pages  → Network FIRST (always fresh content)
   - CSS / JS    → Network FIRST (always fresh)
   - Images      → Cache first (fast, rarely change)
   - Videos      → Bypass (too large, browser handles streaming)
   ============================================================ */

const CACHE_VERSION = 'ce-v13';

/* Assets to cache on install (images / logos only) */
const PRECACHE_IMAGES = [
  './images/Logo/Untitled_design__3_-removebg-preview.webp',
  './images/Logo/Untitled_design__2_-removebg-preview.webp',
  './images/Hero%20Image/generate_different_angle_202604220023.webp',
  './images/background/594413266_1405022098297117_5892045775093709556_n.webp',
  './images/Nature%20Folder/sea%20fan%20coral.webp',
];

/* ── Message: force skip waiting when site.js asks ── */
self.addEventListener('message', function (event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/* ── INSTALL ── */
self.addEventListener('install', function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function (cache) {
      return Promise.allSettled(
        PRECACHE_IMAGES.map(function (url) {
          return cache.add(url).catch(function () {});
        })
      );
    })
  );
});

/* ── ACTIVATE: wipe ALL old caches ── */
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (key) {
          /* Delete every cache that isn't the current version */
          if (key !== CACHE_VERSION) {
            return caches.delete(key);
          }
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

/* ── FETCH ── */
self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;

  var url = req.url;

  /* Always bypass: videos, analytics, external fonts */
  if (url.indexOf('.mp4') !== -1 || url.indexOf('.webm') !== -1) return;
  if (url.indexOf('googletagmanager') !== -1 ||
      url.indexOf('google-analytics') !== -1 ||
      url.indexOf('googleapis.com') !== -1 ||
      url.indexOf('gstatic.com') !== -1 ||
      url.indexOf('facebook.net') !== -1) return;

  var isHTML = url.indexOf('.html') !== -1 || url.endsWith('/') ||
               (!url.split('/').pop().includes('.'));
  var isAsset = url.indexOf('.css') !== -1 || url.indexOf('.js') !== -1;
  var isImage = url.indexOf('.webp') !== -1 || url.indexOf('.jpg') !== -1 ||
                url.indexOf('.jpeg') !== -1 || url.indexOf('.png') !== -1 ||
                url.indexOf('.svg') !== -1 || url.indexOf('.gif') !== -1;

  if (isHTML || isAsset) {
    /* ── Network first: always get the latest HTML / CSS / JS ── */
    event.respondWith(
      fetch(req).then(function (response) {
        if (response.ok) {
          var clone = response.clone();
          caches.open(CACHE_VERSION).then(function (cache) {
            cache.put(req, clone);
          });
        }
        return response;
      }).catch(function () {
        /* Offline fallback: serve cached copy if network fails */
        return caches.match(req);
      })
    );
  } else if (isImage) {
    /* ── Cache first: images rarely change, serve fast ── */
    event.respondWith(
      caches.match(req).then(function (cached) {
        if (cached) return cached;
        return fetch(req).then(function (response) {
          if (response.ok) {
            var clone = response.clone();
            caches.open(CACHE_VERSION).then(function (cache) {
              cache.put(req, clone);
            });
          }
          return response;
        }).catch(function () { return cached; });
      })
    );
  }
  /* All other requests (fonts, etc.) fall through to browser default */
});
