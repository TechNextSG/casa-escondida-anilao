# CLAUDE.md — Casa Escondida Anilao website

Guidance for working on this site (design system, architecture, conventions, and known gotchas). Read this before editing.

## What this is
Marketing website for **Casa Escondida Anilao** — a PADI dive resort in Mabini, Batangas, Philippines.

- **Live:** https://www.casaescondida-anilao.com
- **Repo:** `TechNextSG/casa-escondida-anilao`, branch `main`
- **Hosting:** GitHub Pages (deploys automatically on push to `main`; ~1–2 min build + CDN refresh)
- **Stack:** hand-written static HTML/CSS/JS. No framework, no build step — edit files directly.
- **Bilingual:** English + 中文 (Simplified), toggled client-side.

## Golden rules
1. **Be truthful.** This is a real business. Never invent facts, credentials, dates, prices, competitor claims, or people's roles/certifications. If a fact isn't verified, leave it out or flag it. (Known unverified claim to confirm before repeating: the "PADI 5 Star IDC" line and the "24 rooms" count.)
2. **Apply changes everywhere.** A wording/policy change usually appears in the HTML **and** in `translate.js` (EN **and** ZH), and sometimes in JSON-LD schema, `og:`/`twitter:` meta, and `sitemap.xml`. Grep the whole site and prove zero old values remain before calling it done.
3. **Verify live.** After pushing, confirm the change is actually live at the URL (GitHub Pages + CDN lag ~1 min). A page isn't done until it's live.
4. **Optimize images to `.webp`** (see Images below), keep `alt` text on every `<img>`.

## Design system

Two themes via `data-theme` on `<html>`: **`night`** (default, dark) and **`day`** (light). User choice persists in `localStorage` key **`ce-theme`**. Tokens are CSS variables defined in `index.html`'s `:root` (dark) and a light override.

**Colours**
| Token | Night (default) | Day |
|---|---|---|
| `--accent` (primary cyan/blue) | `#4dc2e8` | `#1a6b98` |
| `--accent-d` / `--accent-dark` | `#2e9fc4` | `#155880` |
| `--gold` (accent/badges) | `#e8c56a` | `#b8862a` |
| `--bg` (page) | `rgba(4,8,15,.85)` | `#f5f0ea` (warm off-white) |
| `--bg2` (sections) | `rgba(7,14,26,.88)` | `#eae3d8` |
| `--card` | `rgba(255,255,255,.04)` | `rgba(255,255,255,.75)` |
| `--border` | `rgba(255,255,255,.09)` | `rgba(0,0,0,.08)` |
| `--text` / `--text2` / `--text3` | light on dark | dark on light |

Always use the tokens, never hard-coded colours, so both themes stay correct.

**Typography** (Google Fonts)
- **Playfair Display** (serif) — headings / display.
- **DM Sans** (sans-serif) — body, UI, labels.
- **Cormorant** (italic serif) — occasional accent text.
- Labels/eyebrows: uppercase, letter-spaced, small, often `--accent` or `--gold`.

## Architecture

**Pages (root):** `index.html`, `rooms.html`, `dive.html`, `gallery.html`, `location.html`, `book-now.html` (the site's single booking / quotation page — every "Book Now" link, the homepage CTA and the Location CTA point here; it holds the only inquiry form, wired to the Odoo estimate-api), `blog.html`, plus `terms-of-service.html`, `privacy-policy.html`, `my-data.html`, `404.html` (intentional noindex redirect to `/`), `blog-post.html` (dormant template, noindex). Blog articles live in **`blog/`** (each a full standalone HTML page).

**Shared CSS:** `style.css` (main), `perf-overrides.css`, `footer-v3.css`, `article.css` (blog posts). Page-specific styles are inline `<style>` in each page's `<head>`.

**Shared JS (all `defer`):**
- `translate.js` — i18n dictionary + language switcher (see below).
- `lazy-images.js` — blur-up fade-in for `loading="lazy"` images **and** a safety net that falls back a broken `.webp` to `.jpg/.jpeg/.png`. ⚠️ see Gotchas.
- `site.js` — shared UI behaviour.
- `cookie-consent.js`, `visitor-tracking.js`, `chatbot.js`, `sw.js` (service worker).
- Analytics: Google Tag Manager `GTM-5V7GR783` + gtag `G-BHGE4494ZY` (inline in each page head).

**SEO:** every content page has `<title>`, `<meta name="description">`, canonical, `og:`/`twitter:` tags, and JSON-LD schema. `sitemap.xml` + `robots.txt` at root — **keep the sitemap in sync** when adding/removing/retiring pages.

## Internationalization (i18n)
- Text carries `data-i18n="key"`; `translate.js` swaps it. Language persists in `localStorage` **`ce-lang`** (`en` | `zh`).
- `translate.js` has **two dictionaries** (an English block and a Chinese block). **Every user-facing string change must be made in the HTML fallback AND both dictionary entries.** Proper nouns (names, brand terms) stay the same in both.
- The switcher is a dropdown injected by JS: `.lang-btn` opens it, `li[data-lang="en"|"zh"]` selects.

## Blog
- `blog.html` renders cards from a JS `POSTS` array + a `SLUG_MAP` (id → filename in `blog/`). Pagination is **15 per page** (`PER_PAGE`), so older posts sit on page 2 — that's normal, not an orphan.
- A card's `title`/`titleZh` in `POSTS` should match the destination post's own `<title>`/H1.
- To retire a post: make it a noindex + redirect stub (see `blog/batangas-coral-restoration-2025.html`) and remove it from `sitemap.xml`.

## Instructor / dive-team cards (`dive.html`)
The "Dive with the Masters" section is one responsive grid (`.instr-grid`, 4-up desktop → 2 → 1) of `.instr-card`s. Each card = a visual header (photo `<img>` **or** `.instr-visual-init` initials), a `.instr-padi-badge`, name, role, short bio, and a `<template class="instr-detail">` holding the modal content (facts + gallery). Clicking any `.instr-card` opens a shared modal (wired in `dive.html`'s script by `querySelectorAll('.instr-card')`), which clones the visual and reads the template — so new cards get the modal for free. Team-member photos live in `images/instructors/`.

## Images
- Convert new photos to **`.webp`** (ImageMagick: `magick in.jpg -auto-orient -resize 1600x1600\> -quality 82 out.webp`). Keep the original raster too when practical — `lazy-images.js` auto-falls-back `.webp`→`.jpg/.png` on load error.
- Every `<img>` needs a descriptive `alt`.
- Instructor card photos: `images/instructors/`; use `style="object-position:center NN%"` to frame the face.
- ⚠️ **Google Drive sync hazard:** this working copy lives on `G:\` (Google Drive). Drive can silently revert/lock/corrupt large binaries. Build/convert binaries in a local temp dir, copy in, and **byte-verify** (compare `stat -c %s`) before committing.

## Gotchas (learned the hard way)
- **`lazy-images.js` vs opacity:** it writes an inline `opacity:1`/`filter:blur(0)` on load. This inline style **beats CSS classes**, which breaks:
  - opacity-based carousels/sliders (slides stack visible) — fix: `!important` on the slide opacity rules (see `.rm-slide` in `rooms.html`).
  - below-the-fold static images that can get stuck at `opacity:0` if the load event is missed — fix: force the image class visible with `!important` (see `.instr-visual img` in `dive.html`).
  - When probing opacity with `getComputedStyle`, wait >0.6s (the inline `transition:opacity .5s` gives misleading mid-fade reads).
- **GitHub Pages CDN cache:** static assets are cached (~10 min) and the CDN ignores `?cb=`/query strings on them. After a push, the origin updates fast but the edge/your browser may serve stale — hard-refresh to confirm, and tell the client the same.
- The site is often viewed in the **Facebook in-app browser**, which caches aggressively — "it didn't change" is usually stale cache.

## Deploy & verify workflow
1. Edit HTML + `translate.js` (EN & ZH) + any schema/meta/sitemap.
2. `git fetch origin main` (someone else may be editing), then `git add … && git commit && git push origin main`.
3. Poll the live URL until the new string/asset appears (build + CDN ~1 min); confirm old values are gone.
4. For visual/layout changes, screenshot or DOM-probe the live page to confirm.

Commit messages: end with the project's co-author trailer.
