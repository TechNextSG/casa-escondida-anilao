/* ═════════════════════════════════════════════════════════
   LAZY IMAGE LOADING — Casa Escondida Anilao
   Smooth fade-in for all lazy-loaded images + fallback support
   ═════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Safety net: if a .webp fails to load, fall back to the original raster
     (.jpg / .jpeg / .png). All originals are retained on the server, so a
     broken image can never appear even if a .webp is missing. Capture phase
     because the img "error" event does not bubble. ─────────────────────────── */
  document.addEventListener('error', function (e) {
    var img = e.target;
    if (!img || img.tagName !== 'IMG') return;
    var src = img.getAttribute('src') || '';
    if (!/\.webp(\?|#|$)/i.test(src)) return;
    var tried = img.getAttribute('data-ce-fallback') || '';
    var exts = ['.jpg', '.jpeg', '.png'];
    for (var i = 0; i < exts.length; i++) {
      if (tried.indexOf(exts[i]) === -1) {
        img.setAttribute('data-ce-fallback', tried + exts[i]);
        img.src = src.replace(/\.webp(\?|#|$)/i, exts[i] + '$1');
        return;
      }
    }
  }, true);

  /* Helper: mark an image as visible */
  function reveal(img) {
    if (img.dataset.ceLazyDone === '1') return;
    img.dataset.ceLazyDone = '1';
    img.style.opacity = '1';
    img.style.filter = 'blur(0)';
  }

  /* Process a single <img> element */
  function process(img) {
    /* Skip eager-loaded and already-processed images */
    if (img.loading === 'eager') return;
    if (img.dataset.ceLazyInit === '1') return;
    img.dataset.ceLazyInit = '1';

    /* Initial pre-load styles (fade + slight blur for premium feel) */
    img.style.transition = 'opacity 0.5s ease, filter 0.6s ease';
    if (!img.complete || img.naturalHeight === 0) {
      img.style.opacity = '0';
      img.style.filter = 'blur(4px)';
    }

    /* Reveal once loaded */
    if (img.complete && img.naturalHeight > 0) {
      /* Already cached — reveal immediately, no flash */
      reveal(img);
    } else {
      img.addEventListener('load', function () { reveal(img); }, { once: true });
      img.addEventListener('error', function () { reveal(img); }, { once: true });
    }
  }

  /* Apply to all current lazy images */
  function init() {
    var imgs = document.querySelectorAll('img[loading="lazy"]');
    for (var i = 0; i < imgs.length; i++) process(imgs[i]);
  }

  /* Watch for late-injected images (dynamic galleries, modals, etc.) */
  function watchForNewImages() {
    if (!window.MutationObserver) return;
    var mo = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        m.addedNodes.forEach(function (node) {
          if (node.nodeType !== 1) return; /* element nodes only */
          if (node.tagName === 'IMG' && node.loading === 'lazy') {
            process(node);
          } else if (node.querySelectorAll) {
            var lazyInside = node.querySelectorAll('img[loading="lazy"]');
            for (var i = 0; i < lazyInside.length; i++) process(lazyInside[i]);
          }
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  /* Run after DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      init();
      watchForNewImages();
    });
  } else {
    init();
    watchForNewImages();
  }
})();
