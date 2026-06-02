/**
 * translate.js — EN / ZH language switcher for Casa Escondida Anilao
 * Storage key : localStorage 'ce-lang'  (values: 'en' | 'zh')
 * HTML hooks  : data-i18n, data-i18n-placeholder, data-i18n-title
 */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /*  1. TRANSLATIONS                                                     */
  /* ------------------------------------------------------------------ */

  const translations = {
    en: {
      /* Nav */
      home:               'Home',
      about:              'About',
      rooms:              'Rooms',
      dive:               'Dive',
      gallery:            'Gallery',
      location:           'Location',
      blog:               'Blog',
      book_now:           'Book Now',
      night:              'Night',
      day:                'Day',

      /* Hero */
      tagline:            'Your Hidden Paradise in Anilao',
      hero_sub:           'PADI dive resort & ocean-front retreat in Mabini, Batangas. 30+ world-class dive sites on your doorstep.',
      reserve_stay:       'Reserve Your Stay',
      explore_diving:     'Explore Diving',

      /* About */
      our_story:          'Our Story',
      about_title:        'A Hidden Paradise, Discovered',
      about_sub:          'Nestled along the shores of Anilao — the birthplace of Philippine diving — Casa Escondida offers an intimate escape for divers and dreamers alike.',
      about_p1:           'We are a boutique resort and PADI dive center dedicated to delivering world-class experiences in one of the most biodiverse marine environments on Earth.',

      /* Services */
      everything_you_need:  'Everything You Need',
      services_sub:         'From thrilling dives to relaxed beachside afternoons — Casa Escondida is your complete destination.',
      dive_center_name:     'PADI Dive Center',
      dive_center_desc:     'Certified instruction, fun dives, equipment rental, and access to 30+ premier dive sites.',
      pool_beach_name:      'Pool & Beach',
      pool_beach_desc:      'Relax by our freshwater pool or take in the stunning sea views from our private beachfront.',
      restaurant_name:      'Restaurant & Bar',
      restaurant_desc:      'Fresh Filipino cuisine, international favourites, and hand-crafted cocktails with ocean views.',
      rooms_name:           'Comfortable Rooms',
      rooms_desc:           'Air-conditioned rooms with private bathrooms, Wi-Fi, and breathtaking sea or garden views.',
      excursions_name:      'Island Excursions',
      excursions_desc:      'Day trips to nearby islands, snorkelling tours, and island BBQ experiences.',
      events_name:          'Events & Groups',
      events_desc:          'Tailored packages for dive groups, corporate retreats, and private celebrations.',

      /* Rooms */
      rooms_title:        'Our Rooms',
      rooms_sub:          'Comfortable, air-conditioned retreats designed to rest and recharge after a day of adventure.',
      standard_name:      'Standard Room',
      standard_desc:      'Comfortable and cosy with garden or partial sea views. Perfect for solo travellers or couples seeking value.',
      deluxe_name:        'Deluxe Room',
      deluxe_desc:        'Spacious sea-view room with a private balcony. Wake up to the ocean every morning.',
      suite_name:         'Suite',
      suite_desc:         'Our most premium room — wide ocean views, enhanced amenities, and extra space to unwind.',
      book_room:          'Book Room',
      view_room:          'View Room',
      incl_breakfast:     'Includes Breakfast',

      /* Dive */
      dive_title:         'World-Class Diving',
      dive_sub:           'Anilao is the birthplace of Philippine diving. Experience 30+ dive sites teeming with macro life, vibrant corals, and pelagic encounters.',
      fun_dives:          'Fun Dives',
      padi_courses:       'PADI Courses',
      night_dives:        'Night Dives',
      explore_courses:    'Explore Courses',
      view_packages:      'View Packages',

      /* Gallery */
      gallery_title:      'Gallery',
      gallery_sub:        'A glimpse of life at Casa Escondida — above and below the water.',
      photo_video_gallery: 'Photo & Video Gallery',
      follow_instagram:   'Follow Us on Instagram',
      book_stay:          'Book Your Stay',

      /* Location */
      location_title:     'Getting Here',
      location_sub:       'Casa Escondida is located in Brgy. Ligaya, Mabini, Batangas — a short drive from Manila.',
      get_directions:     'Get Directions',
      contact_us:         'Contact Us',
      from_manila:        'From Manila',
      drive_time:         'Approximately 2.5 – 3 hours by private car or bus to Mabini Pier, then a short boat ride.',

      /* Blog */
      blog_title:         'From the Blog',
      blog_sub:           'Stories, dive guides, and travel tips from Casa Escondida.',
      read_more:          'Read More',
      explore_diving_link: 'Explore Diving',

      /* Common / Shared */
      book_your_stay:     'Book Your Stay',
      read_all_reviews:   'Read All Reviews',
      close:              'Close',
      send:               'Send',
      name_label:         'Your Name',
      email_label:        'Email Address',
      message_label:      'Your Message',
      phone_label:        'Phone Number',
      guests_label:       'Number of Guests',
      checkin_label:      'Check-in Date',
      checkout_label:     'Check-out Date',
      submit:             'Submit',
      privacy_policy:     'Privacy Policy',
      terms:              'Terms of Service',

      /* Booking modal */
      booking_title:      'Reserve Your Stay',
      booking_sub:        'Fill in your details and we will get back to you within 24 hours.',
      check_availability: 'Check Availability',

      /* Exit popup */
      exit_title:         'Wait — Don\'t Go Yet!',
      exit_sub:           'Enjoy 10% off your first stay when you book directly with us.',
      stay_btn:           'Claim My Discount',
      leave_btn:          'No Thanks',

      /* Footer */
      all_rights:         'All rights reserved.',
      contact_info:       'Contact Information',
    },

    zh: {
      /* Nav */
      home:               '首页',
      about:              '关于我们',
      rooms:              '客房',
      dive:               '潜水',
      gallery:            '图库',
      location:           '位置',
      blog:               '博客',
      book_now:           '立即预订',
      night:              '夜晚',
      day:                '白天',

      /* Hero */
      tagline:            '您在阿尼劳的世外桃源',
      hero_sub:           'PADI潜水度假村及海滨休闲胜地，位于八打雁省马比尼。门前即有30余处世界级潜点。',
      reserve_stay:       '预订住宿',
      explore_diving:     '探索潜水',

      /* About */
      our_story:          '我们的故事',
      about_title:        '发现隐秘天堂',
      about_sub:          '卡萨艾斯孔迪达坐落于阿尼劳海岸——菲律宾潜水发源地，为潜水爱好者与度假旅客提供私密惬意的避世体验。',
      about_p1:           '我们是一家精品度假村兼PADI潜水中心，致力于在地球上生物多样性最丰富的海洋环境之一，为宾客带来世界级的卓越体验。',

      /* Services */
      everything_you_need:  '一应俱全',
      services_sub:         '从刺激的潜水体验到悠闲的海滩时光——卡萨艾斯孔迪达是您的全能度假目的地。',
      dive_center_name:     'PADI潜水中心',
      dive_center_desc:     '专业认证教学、休闲潜水、装备租借，尽享30余处顶级潜点。',
      pool_beach_name:      '泳池与海滩',
      pool_beach_desc:      '在淡水泳池畔放松身心，或在私人海滨欣赏壮阔海景。',
      restaurant_name:      '餐厅与酒吧',
      restaurant_desc:      '新鲜菲律宾美食、国际佳肴，以及面朝大海精心调制的特色鸡尾酒。',
      rooms_name:           '舒适客房',
      rooms_desc:           '配备空调与独立卫浴的客房，提供Wi-Fi及迷人海景或花园景观。',
      excursions_name:      '离岛游览',
      excursions_desc:      '附近岛屿一日游、浮潜之旅及海岛烧烤体验。',
      events_name:          '活动与团体',
      events_desc:          '专为潜水团队、企业度假及私人庆典量身定制的专属套餐。',

      /* Rooms */
      rooms_title:        '客房介绍',
      rooms_sub:          '舒适宜人的空调客房，专为冒险一天后的休憩与恢复精心设计。',
      standard_name:      '标准客房',
      standard_desc:      '温馨舒适，享花园景或局部海景，是独行旅客或情侣的理想之选。',
      deluxe_name:        '豪华客房',
      deluxe_desc:        '宽敞的海景客房配备私人阳台，每天清晨伴着海景醒来。',
      suite_name:         '套房',
      suite_desc:         '我们最尊贵的房型——宽阔无垠的海景、高端配置，以及充裕的休闲空间。',
      book_room:          '预订客房',
      view_room:          '查看客房',
      incl_breakfast:     '含早餐',

      /* Dive */
      dive_title:         '世界级潜水胜地',
      dive_sub:           '阿尼劳是菲律宾潜水的发源地。探索30余处潜点，邂逅丰富的微距生物、绚丽珊瑚礁与洄游鱼群。',
      fun_dives:          '休闲潜水',
      padi_courses:       'PADI课程',
      night_dives:        '夜潜',
      explore_courses:    '探索课程',
      view_packages:      '查看套餐',

      /* Gallery */
      gallery_title:      '图库',
      gallery_sub:        '水上水下，感受卡萨艾斯孔迪达的精彩生活。',
      photo_video_gallery: '图片与视频展览',
      follow_instagram:   '关注我们的Instagram',
      book_stay:          '预订住宿',

      /* Location */
      location_title:     '如何抵达',
      location_sub:       '卡萨艾斯孔迪达位于八打雁省马比尼Brgy. Ligaya村，距马尼拉仅数小时车程。',
      get_directions:     '获取路线',
      contact_us:         '联系我们',
      from_manila:        '从马尼拉出发',
      drive_time:         '乘私家车或巴士约2.5至3小时可抵达马比尼码头，再乘短途快艇即达。',

      /* Blog */
      blog_title:         '博客精选',
      blog_sub:           '来自卡萨艾斯孔迪达的故事、潜水指南与旅行攻略。',
      read_more:          '阅读更多',
      explore_diving_link: '探索潜水',

      /* Common / Shared */
      book_your_stay:     '预订您的住宿',
      read_all_reviews:   '查看全部评价',
      close:              '关闭',
      send:               '发送',
      name_label:         '您的姓名',
      email_label:        '电子邮箱',
      message_label:      '您的留言',
      phone_label:        '联系电话',
      guests_label:       '入住人数',
      checkin_label:      '入住日期',
      checkout_label:     '退房日期',
      submit:             '提交',
      privacy_policy:     '隐私政策',
      terms:              '服务条款',

      /* Booking modal */
      booking_title:      '预订您的住宿',
      booking_sub:        '请填写您的信息，我们将在24小时内与您联系。',
      check_availability: '查询空房',

      /* Exit popup */
      exit_title:         '稍等，先别离开！',
      exit_sub:           '直接通过我们预订，首次入住即享9折优惠。',
      stay_btn:           '领取我的优惠',
      leave_btn:          '不了，谢谢',

      /* Footer */
      all_rights:         '版权所有。',
      contact_info:       '联系方式',
    }
  };

  /* ------------------------------------------------------------------ */
  /*  2. applyTranslation(lang)                                          */
  /* ------------------------------------------------------------------ */

  /**
   * Apply the given language to every marked element in the document.
   * Falls back to English text when a key is missing in the target dict.
   *
   * @param {string} lang  'en' | 'zh'
   */
  function applyTranslation(lang) {
    const validLang = (lang === 'zh') ? 'zh' : 'en';
    const dict      = translations[validLang];
    const fallback  = translations.en;

    /* Set document language attribute */
    document.documentElement.lang = (validLang === 'zh') ? 'zh-CN' : 'en';

    /* Helper: get translation with English fallback */
    function t(key) {
      if (dict[key] !== undefined) return dict[key];
      /* Fuzzy / partial match — find closest key containing the search term */
      const lowerKey = key.toLowerCase();
      for (const k of Object.keys(dict)) {
        if (k.toLowerCase().includes(lowerKey) || lowerKey.includes(k.toLowerCase())) {
          return dict[k];
        }
      }
      /* Final fallback: English */
      return fallback[key] !== undefined ? fallback[key] : key;
    }

    /* data-i18n — text content */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });

    /* data-i18n-placeholder — placeholder attribute */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = t(key);
    });

    /* data-i18n-title — title attribute */
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-title');
      el.title = t(key);
    });

    /* data-i18n-aria-label — aria-label attribute */
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-aria-label');
      el.setAttribute('aria-label', t(key));
    });

    /* Body class for per-language CSS overrides (e.g. font stacks) */
    document.body.classList.toggle('lang-zh', validLang === 'zh');
    document.body.classList.toggle('lang-en', validLang === 'en');

    /* Persist */
    try { localStorage.setItem('ce-lang', validLang); } catch (_) {}

    /* Notify other scripts that may need to react */
    document.dispatchEvent(new CustomEvent('ce:langchange', { detail: { lang: validLang } }));
  }

  /* ------------------------------------------------------------------ */
  /*  3. initLanguageSwitcher()                                          */
  /* ------------------------------------------------------------------ */

  function initLanguageSwitcher() {

    /* ----- 3a. Read saved preference (default: 'en') ----- */
    var savedLang = 'en';
    try { savedLang = localStorage.getItem('ce-lang') || 'en'; } catch (_) {}
    if (savedLang !== 'zh') savedLang = 'en';

    /* ----- 3b. Build dropdown markup ----- */
    /*
     * Structure:
     *  <div class="lang-switcher">
     *    <button class="lang-btn" aria-haspopup="listbox" aria-expanded="false">
     *      <svg …/> <span class="lang-current">EN</span>
     *    </button>
     *    <ul class="lang-dropdown" role="listbox">
     *      <li data-lang="en"  role="option">EN — English</li>
     *      <li data-lang="zh"  role="option">中文</li>
     *    </ul>
     *  </div>
     */

    var globeSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" '
      + 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" '
      + 'style="width:15px;height:15px;display:block;flex-shrink:0" aria-hidden="true">'
      + '<circle cx="12" cy="12" r="10"/>'
      + '<line x1="2" y1="12" x2="22" y2="12"/>'
      + '<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'
      + '</svg>';

    var wrapper = document.createElement('div');
    wrapper.className = 'lang-switcher';
    wrapper.setAttribute('style',
      'position:relative;display:inline-flex;align-items:center;');

    var label = (savedLang === 'zh') ? '中文' : 'EN';

    wrapper.innerHTML =
      '<button class="lang-btn" aria-haspopup="listbox" aria-expanded="false" '
      + 'aria-label="Select language" '
      + 'style="display:flex;align-items:center;gap:5px;background:transparent;'
      + 'border:1px solid rgba(255,255,255,0.3);border-radius:20px;'
      + 'padding:4px 10px 4px 8px;cursor:pointer;color:inherit;font-size:0.7rem;'
      + 'letter-spacing:0.08em;text-transform:uppercase;line-height:1;'
      + 'transition:border-color .2s,background .2s;">'
      + globeSVG
      + '<span class="lang-current">' + label + '</span>'
      + '</button>'
      + '<ul class="lang-dropdown" role="listbox" '
      + 'style="display:none;position:absolute;top:calc(100% + 6px);right:0;'
      + 'min-width:130px;list-style:none;margin:0;padding:4px 0;'
      + 'background:var(--bg-card,#1a2535);border:1px solid var(--border,rgba(255,255,255,0.12));'
      + 'border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,0.35);z-index:9999;">'
      + '<li data-lang="en" role="option" tabindex="0" '
      + 'style="padding:9px 16px;cursor:pointer;font-size:0.78rem;letter-spacing:0.05em;'
      + 'display:flex;align-items:center;gap:8px;transition:background .15s;">'
      + '<span style="font-weight:600;min-width:24px">EN</span>'
      + '<span style="opacity:.75">English</span>'
      + '</li>'
      + '<li data-lang="zh" role="option" tabindex="0" '
      + 'style="padding:9px 16px;cursor:pointer;font-size:0.78rem;letter-spacing:0.05em;'
      + 'display:flex;align-items:center;gap:8px;transition:background .15s;">'
      + '<span style="font-weight:600;min-width:24px">中文</span>'
      + '<span style="opacity:.75">普通话</span>'
      + '</li>'
      + '</ul>';

    /* ----- 3c. Insert into .nav-right before .btn-book / #navBookNow ----- */
    var navRight = document.querySelector('.nav-right');
    if (navRight) {
      var btnBook = navRight.querySelector('.btn-nav-cta, #navBookNow, .btn-book');
      if (btnBook) {
        navRight.insertBefore(wrapper, btnBook);
      } else {
        navRight.appendChild(wrapper);
      }
    } else {
      /* Fallback: append to body if nav not found */
      document.body.appendChild(wrapper);
    }

    /* ----- 3d. References to interactive elements ----- */
    var btn      = wrapper.querySelector('.lang-btn');
    var dropdown = wrapper.querySelector('.lang-dropdown');
    var current  = wrapper.querySelector('.lang-current');
    var items    = wrapper.querySelectorAll('[data-lang]');

    /* ----- 3e. Mark active option ----- */
    function markActive(lang) {
      items.forEach(function (li) {
        var isActive = li.getAttribute('data-lang') === lang;
        li.setAttribute('aria-selected', isActive ? 'true' : 'false');
        li.style.color      = isActive ? 'var(--accent,#4dc2e8)' : '';
        li.style.background = '';
      });
    }
    markActive(savedLang);

    /* ----- 3f. Toggle dropdown ----- */
    function openDropdown() {
      dropdown.style.display = 'block';
      btn.setAttribute('aria-expanded', 'true');
      /* Animate in */
      dropdown.style.opacity  = '0';
      dropdown.style.transform = 'translateY(-6px)';
      dropdown.style.transition = 'opacity .18s ease, transform .18s ease';
      requestAnimationFrame(function () {
        dropdown.style.opacity  = '1';
        dropdown.style.transform = 'translateY(0)';
      });
    }

    function closeDropdown() {
      dropdown.style.opacity  = '0';
      dropdown.style.transform = 'translateY(-6px)';
      btn.setAttribute('aria-expanded', 'false');
      setTimeout(function () { dropdown.style.display = 'none'; }, 180);
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        openDropdown();
      } else {
        closeDropdown();
      }
    });

    /* Close on outside click */
    document.addEventListener('click', function () { closeDropdown(); });
    wrapper.addEventListener('click', function (e) { e.stopPropagation(); });

    /* ----- 3g. Handle language selection ----- */
    items.forEach(function (li) {
      function selectLang() {
        var lang = li.getAttribute('data-lang');
        current.textContent = (lang === 'zh') ? '中文' : 'EN';
        markActive(lang);
        closeDropdown();
        applyTranslation(lang);
      }

      li.addEventListener('click', selectLang);

      /* Keyboard: Enter / Space */
      li.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectLang();
        }
      });

      /* Hover highlight */
      li.addEventListener('mouseenter', function () {
        li.style.background = 'rgba(77,194,232,0.08)';
      });
      li.addEventListener('mouseleave', function () {
        li.style.background = li.getAttribute('aria-selected') === 'true'
          ? '' : '';
      });
    });

    /* ----- 3h. Apply saved language on load ----- */
    applyTranslation(savedLang);
  }

  /* ------------------------------------------------------------------ */
  /*  4. AUTO-INIT on DOMContentLoaded                                   */
  /* ------------------------------------------------------------------ */

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
  } else {
    /* DOM already ready (script loaded defer/async) */
    initLanguageSwitcher();
  }

  /* ------------------------------------------------------------------ */
  /*  5. PUBLIC API (optional — allows external scripts to call these)   */
  /* ------------------------------------------------------------------ */

  window.CETranslate = {
    apply:  applyTranslation,
    init:   initLanguageSwitcher,
    dict:   translations,
    getLang: function () {
      try { return localStorage.getItem('ce-lang') || 'en'; } catch (_) { return 'en'; }
    }
  };

}());
