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

    /* ── Selector-based translation (no data-i18n attributes needed) ── */
    var SEL = {
      /* Nav links */
      '.nav-links a[href="#about"],.nav-links a[href="/"]':      { en:'About',    zh:'关于我们' },
      '.nav-links a[href="rooms.html"]':                         { en:'Rooms',    zh:'客房' },
      '.nav-links a[href="dive.html"]':                          { en:'Dive',     zh:'潜水' },
      '.nav-links a[href="gallery.html"]':                       { en:'Gallery',  zh:'图库' },
      '.nav-links a[href="location.html"]':                      { en:'Location', zh:'位置' },
      '.nav-links a[href="blog.html"]':                          { en:'Blog',     zh:'博客' },
      /* Mobile nav */
      '.mob-link[href="#about"]':   { en:'About',    zh:'关于我们' },
      '.mob-link[href="rooms.html"]':  { en:'Rooms',    zh:'客房' },
      '.mob-link[href="dive.html"]':   { en:'Dive',     zh:'潜水' },
      '.mob-link[href="gallery.html"]':{ en:'Gallery',  zh:'图库' },
      '.mob-link[href="location.html"]':{ en:'Location', zh:'位置' },
      '.mob-link[href="blog.html"]':   { en:'Blog',     zh:'博客' },
      /* Book Now / CTA buttons */
      '.btn-book,.btn-nav-cta,#navBookNow': { en:'Book Now', zh:'立即预订' },
      '.mobile-nav-cta':    { en:'Book Now', zh:'立即预订' },
      /* Homepage hero */
      '.hero-tag':          { en:'Anilao · Mabini · Batangas', zh:'阿尼劳 · 马比尼 · 八打雁' },
      '.hero-sub':          { en:'Where the Ocean Becomes Home', zh:'海洋即是家园' },
      '.btn-hero-primary#openBookingModal,.hero-btns .btn-hero-primary':
                            { en:'Reserve Your Stay', zh:'预订住宿' },
      '.hero-btns .btn-hero-ghost,.btn-hero-ghost[href="#dive"]':
                            { en:'Explore Diving', zh:'探索潜水' },
      /* Rooms hero */
      '.r-eyebrow':         { en:'Accommodation', zh:'住宿' },
      '.r-sub':             { en:'24 ocean-side rooms designed for the diving traveler — fall asleep to the sound of waves, wake up ready to dive.',
                              zh:'24间海景客房专为潜水旅行者设计——伴着海浪声入眠，醒来即可投身大海。' },
      /* Dive hero */
      '.dv-eyebrow':        { en:'PADI 5-Star Dive Center · Anilao, Batangas', zh:'PADI五星潜水中心 · 阿尼劳，八打雁' },
      '.dv-sub':            { en:'One of the world\'s top macro-diving destinations — fun dives, PADI courses, and night dives right from our private jetty.',
                              zh:'世界顶级微距潜水胜地之一——趣味潜水、PADI课程，以及从我们私人码头出发的夜间潜水。' },
      /* Gallery hero */
      '.g-eyebrow':         { en:'Photo & Video Gallery', zh:'照片与视频图库' },
      '.g-sub':             { en:'Real photos and videos from our Facebook and Instagram — dive life, resort moments, and the underwater world of Anilao.',
                              zh:'来自我们Facebook和Instagram的真实照片和视频——潜水生活、度假时光和阿尼劳水下世界。' },
      /* Location hero */
      '.loc-eyebrow':       { en:'Find Us', zh:'找到我们' },
      '.loc-sub':           { en:'Tucked between jungle-clad hills and coral-rich waters in Brgy. Ligaya, Mabini — just two hours south of Manila.',
                              zh:'坐落在利加亚村马比尼的丛林山丘与珊瑚丰富海域之间——距马尼拉以南仅两小时车程。' },
      '.loc-stat-l:nth-child(1)': { en:'From Manila', zh:'距马尼拉' },
      /* Blog hero */
      '.blog-eyebrow':      { en:'Casa Escondida · Anilao, Batangas', zh:'卡萨埃斯孔迪达 · 八打雁阿尼劳' },
      '.blog-sub':          { en:'Dive guides, marine life spotting tips, resort stories, and travel advice from Anilao — the macro diving capital of the Philippines.',
                              zh:'来自阿尼劳（菲律宾微距潜水之都）的潜水指南、海洋生物观察技巧、度假故事和旅行建议。' },
      /* Common CTA */
      '.hero-cta-primary[href="/#booking"],.hero-cta-primary[href="/"]':
                            { en:'Book Your Stay', zh:'预订住宿' },
      '.loc-btn-primary':   { en:'Get Directions →', zh:'获取路线 →' },
      '.loc-btn-ghost':     { en:'Contact Us', zh:'联系我们' },
      /* Theme toggle label */
      '#themeLabel':        { en:'', zh:'' },  /* keep as-is */

      /* ── HOMEPAGE — About section ── */
      '.about-grid .eyebrow':                 { en:'Our Story', zh:'我们的故事' },
      '.about-tags ~ .eyebrow':               { en:'Our Story', zh:'我们的故事' },
      '.about-title, #about h2.sec-title':    { en:'A Hidden Paradise, Discovered', zh:'发现隐秘天堂' },
      '#about .sec-sub, .about-sub':          { en:'Nestled along the shores of Anilao — the birthplace of Philippine diving — Casa Escondida offers an intimate escape for divers and dreamers alike.', zh:'卡萨艾斯孔迪达坐落于阿尼劳海岸——菲律宾潜水发源地，为潜水爱好者与度假旅客提供私密惬意的避世体验。' },

      /* ── HOMEPAGE — Services section ── */
      '#services .eyebrow, .services-eyebrow': { en:'Amenities & Services', zh:'设施与服务' },
      '#services h2.sec-title':               { en:'Everything You Need', zh:'一应俱全' },
      '#services .sec-sub':                   { en:'From thrilling dives to relaxed beachside afternoons — Casa Escondida is your complete destination.', zh:'从刺激的潜水体验到悠闲的海滩时光——卡萨艾斯孔迪达是您的全能度假目的地。' },

      /* ── HOMEPAGE — Rooms section ── */
      '#rooms .eyebrow':                      { en:'Accommodation', zh:'住宿' },
      '#rooms h2.sec-title':                  { en:'Our Rooms', zh:'客房介绍' },
      '#rooms .sec-sub':                      { en:'Comfortable, air-conditioned retreats designed to rest and recharge after a day of adventure.', zh:'舒适宜人的空调客房，专为冒险一天后的休憩与恢复精心设计。' },

      /* ── HOMEPAGE — Gallery section ── */
      '#gallery .eyebrow':                    { en:'Gallery', zh:'图库' },
      '#gallery h2.sec-title':                { en:'Life at Casa Escondida', zh:'卡萨艾斯孔迪达的生活' },
      '#gallery .sec-sub':                    { en:'A glimpse of life at Casa Escondida — above and below the water.', zh:'水上水下，感受卡萨艾斯孔迪达的精彩生活。' },

      /* ── HOMEPAGE — Reviews section ── */
      '#reviews .eyebrow':                    { en:'What Our Guests Say', zh:'宾客点评' },
      '#reviews h2.sec-title':                { en:'Loved by Divers', zh:'深受潜水爱好者喜爱' },

      /* ── HOMEPAGE — Booking CTA section ── */
      '#booking .eyebrow, .booking-eyebrow':  { en:'Reserve Your Stay', zh:'预订住宿' },
      '#booking h2.sec-title':                { en:'Book Your Stay', zh:'预订您的住宿' },
      '#booking .sec-sub':                    { en:'Fill in your details and we will get back to you within 24 hours.', zh:'请填写您的信息，我们将在24小时内与您联系。' },

      /* ── HOMEPAGE — Stats strip ── */
      '.stat-label, .stats-label':            { en:'', zh:'' },  /* handled per-stat below */
      '.stat-item:nth-child(1) .stat-label':  { en:'Dive Sites', zh:'潜点数量' },
      '.stat-item:nth-child(2) .stat-label':  { en:'Years Experience', zh:'从业年限' },
      '.stat-item:nth-child(3) .stat-label':  { en:'Happy Guests', zh:'满意宾客' },
      '.stat-item:nth-child(4) .stat-label':  { en:'Star Rating', zh:'星级评分' },

      /* ── FOOTER — all pages ── */
      '.foot-h':                              { en:'', zh:'' },  /* handled per-column below */
      '.foot-col:nth-child(1) .foot-h':       { en:'Explore', zh:'探索' },
      '.foot-col:nth-child(2) .foot-h':       { en:'Dive & Stay', zh:'潜水与住宿' },
      '.foot-col:nth-child(3) .foot-h':       { en:'Reviews', zh:'宾客评价' },
      '.foot-col:nth-child(4) .foot-h, .foot-col.foot-contact .foot-h': { en:'Contact', zh:'联系我们' },
      '.foot-copy':                           { en:'All rights reserved.', zh:'版权所有。' },
      '.foot-tagline, .foot-desc':            { en:'Your hidden paradise in Anilao.', zh:'您在阿尼劳的世外桃源。' },
      '.foot-legal a[href*="privacy"]':       { en:'Privacy Policy', zh:'隐私政策' },
      '.foot-legal a[href*="terms"]':         { en:'Terms of Service', zh:'服务条款' },

      /* ── ROOMS.HTML — Room names & descriptions ── */
      '.rv-card:nth-of-type(1) .rv-name, .room-card:nth-of-type(1) .room-name':
                                              { en:'Standard Double / Twin', zh:'标准双人/双床房' },
      '.rv-card:nth-of-type(1) .rv-desc, .room-card:nth-of-type(1) .room-desc':
                                              { en:'Comfortable and cosy with garden or partial sea views. Perfect for solo travellers or couples seeking value.', zh:'温馨舒适，享花园景或局部海景，是独行旅客或情侣的理想之选。' },
      '.rv-card:nth-of-type(2) .rv-name, .room-card:nth-of-type(2) .room-name':
                                              { en:'Deluxe Room', zh:'豪华客房' },
      '.rv-card:nth-of-type(2) .rv-desc, .room-card:nth-of-type(2) .room-desc':
                                              { en:'Spacious sea-view room with a private balcony. Wake up to the ocean every morning.', zh:'宽敞的海景客房配备私人阳台，每天清晨伴着海景醒来。' },
      '.rv-card:nth-of-type(3) .rv-name, .room-card:nth-of-type(3) .room-name':
                                              { en:'Suite with Sea View', zh:'海景套房' },
      '.rv-card:nth-of-type(3) .rv-desc, .room-card:nth-of-type(3) .room-desc':
                                              { en:'Our most premium room — wide ocean views, enhanced amenities, and extra space to unwind.', zh:'我们最尊贵的房型——宽阔无垠的海景、高端配置，以及充裕的休闲空间。' },

      /* Rooms page — inclusions strip ── */
      '.incl-item:nth-child(1), .inclusion-item:nth-child(1)': { en:'Daily Breakfast', zh:'每日早餐' },
      '.incl-item:nth-child(2), .inclusion-item:nth-child(2)': { en:'Free Wi-Fi', zh:'免费无线网络' },
      '.incl-item:nth-child(3), .inclusion-item:nth-child(3)': { en:'Air Conditioning', zh:'空调' },
      '.incl-item:nth-child(4), .inclusion-item:nth-child(4)': { en:'Private Bathroom', zh:'独立卫浴' },
      '.incl-item:nth-child(5), .inclusion-item:nth-child(5)': { en:'Sea or Garden View', zh:'海景或花园景' },
      '.incl-item:nth-child(6), .inclusion-item:nth-child(6)': { en:'Beach Access', zh:'海滩使用权' },

      /* Rooms page — policy section ── */
      '.policy-title, .room-policy h3':       { en:'Booking Policy', zh:'预订须知' },
      '.policy-item:nth-child(1), .policy-row:nth-child(1)': { en:'Check-in: 2:00 PM', zh:'入住时间：下午2时' },
      '.policy-item:nth-child(2), .policy-row:nth-child(2)': { en:'Check-out: 12:00 PM', zh:'退房时间：中午12时' },
      '.policy-item:nth-child(3), .policy-row:nth-child(3)': { en:'Cancellation: 48 hours notice required', zh:'取消政策：须提前48小时通知' },

      /* ── DIVE.HTML — Course names & descriptions ── */
      '.course-card:nth-of-type(1) .course-name, .dive-course:nth-of-type(1) .course-title':
                                              { en:'Open Water Diver', zh:'开放水域潜水员' },
      '.course-card:nth-of-type(1) .course-desc':
                                              { en:'The world\'s most popular scuba certification. Learn to dive in 3–4 days with our PADI instructors.', zh:'全球最受欢迎的水肺潜水认证。跟随我们的PADI教练，3至4天即可完成学习。' },
      '.course-card:nth-of-type(2) .course-name, .dive-course:nth-of-type(2) .course-title':
                                              { en:'Advanced Open Water', zh:'高级开放水域潜水员' },
      '.course-card:nth-of-type(2) .course-desc':
                                              { en:'Expand your skills with 5 adventure dives including deep and navigation.', zh:'通过5次探险潜水（含深潜与导航）提升您的潜水技能。' },
      '.course-card:nth-of-type(3) .course-name, .dive-course:nth-of-type(3) .course-title':
                                              { en:'Rescue Diver', zh:'救援潜水员' },
      '.course-card:nth-of-type(3) .course-desc':
                                              { en:'Develop problem-solving skills and learn to prevent and manage dive emergencies.', zh:'培养应急处理能力，学习预防与处理潜水紧急情况。' },
      '.course-card:nth-of-type(4) .course-name, .dive-course:nth-of-type(4) .course-title':
                                              { en:'Divemaster', zh:'潜水长' },
      '.course-card:nth-of-type(4) .course-desc':
                                              { en:'Turn your passion into a profession. The first level of PADI professional training.', zh:'将热情转化为职业。PADI专业资格培训的第一阶段。' },

      /* Dive page — package names ── */
      '.pkg-name:nth-of-type(1), .package-title:nth-of-type(1)': { en:'Fun Dive Package', zh:'休闲潜水套餐' },
      '.pkg-name:nth-of-type(2), .package-title:nth-of-type(2)': { en:'Night Dive Add-on', zh:'夜潜附加选项' },
      '.pkg-name:nth-of-type(3), .package-title:nth-of-type(3)': { en:'Discover Scuba Diving', zh:'体验水肺潜水' },

      /* Dive page — equipment list items ── */
      '.equip-item:nth-child(1)':             { en:'BCD', zh:'浮力补偿装置（BCD）' },
      '.equip-item:nth-child(2)':             { en:'Regulator', zh:'调节器' },
      '.equip-item:nth-child(3)':             { en:'Wetsuit', zh:'潜水服' },
      '.equip-item:nth-child(4)':             { en:'Fins', zh:'脚蹼' },
      '.equip-item:nth-child(5)':             { en:'Mask & Snorkel', zh:'潜水镜与通气管' },
      '.equip-item:nth-child(6)':             { en:'Tank & Weights', zh:'气瓶与配重' },
      '.equip-item:nth-child(7)':             { en:'Dive Computer', zh:'潜水电脑表' },
      '.equip-item:nth-child(8)':             { en:'Underwater Torch', zh:'水下手电筒' },

      /* Dive page — FAQ questions ── */
      '.faq-q:nth-of-type(1), .faq-question:nth-of-type(1)': { en:'Do I need experience to dive in Anilao?', zh:'在阿尼劳潜水需要有经验吗？' },
      '.faq-q:nth-of-type(2), .faq-question:nth-of-type(2)': { en:'What is the best time to dive in Anilao?', zh:'阿尼劳最佳潜水季节是什么时候？' },
      '.faq-q:nth-of-type(3), .faq-question:nth-of-type(3)': { en:'What equipment do you provide?', zh:'你们提供哪些潜水装备？' },
      '.faq-q:nth-of-type(4), .faq-question:nth-of-type(4)': { en:'How many dive sites are accessible from the resort?', zh:'度假村可前往多少个潜点？' },

      /* ── LOCATION.HTML — Section headings ── */
      '#getting-here .sec-eyebrow, .loc-section:nth-of-type(1) .eyebrow': { en:'Getting Here', zh:'如何抵达' },
      '#transport .sec-eyebrow, .loc-section:nth-of-type(2) .eyebrow':    { en:'Transport Options', zh:'交通方式' },
      '#contact .sec-eyebrow, .loc-contact .eyebrow':                     { en:'Contact', zh:'联系我们' },

      /* Location page — route names ── */
      '.route-name:nth-of-type(1), .transport-option:nth-of-type(1) .route-title':
                                              { en:'By Private Car', zh:'自驾前往' },
      '.route-name:nth-of-type(2), .transport-option:nth-of-type(2) .route-title':
                                              { en:'By Bus', zh:'乘坐巴士' },
      '.route-name:nth-of-type(3), .transport-option:nth-of-type(3) .route-title':
                                              { en:'By Shuttle', zh:'乘坐班车' },

      /* Location page — FAQ ── */
      '.loc-faq .faq-q:nth-of-type(1)':      { en:'How far is Anilao from Manila?', zh:'阿尼劳距马尼拉有多远？' },
      '.loc-faq .faq-q:nth-of-type(2)':      { en:'Is there a direct bus to Mabini?', zh:'有直达马比尼的巴士吗？' },
      '.loc-faq .faq-q:nth-of-type(3)':      { en:'Can you arrange airport transfers?', zh:'你们可以安排机场接送吗？' },

      /* Location page — contact form labels & placeholders ── */
      'label[for="loc-name"]':                { en:'Your Name', zh:'您的姓名' },
      'label[for="loc-email"]':               { en:'Email Address', zh:'电子邮箱' },
      'label[for="loc-phone"]':               { en:'Phone Number', zh:'联系电话' },
      'label[for="loc-message"]':             { en:'Message', zh:'留言内容' },
      'input#loc-name':                       { en:'', zh:'' },  /* placeholder via data-i18n-placeholder */
      '.contact-form-submit, .loc-form-btn':  { en:'Send Message', zh:'发送留言' },

      /* Location page — quick contact strip ── */
      '.quick-contact-item:nth-child(1) .qc-label': { en:'Phone', zh:'电话' },
      '.quick-contact-item:nth-child(2) .qc-label': { en:'Email', zh:'邮箱' },
      '.quick-contact-item:nth-child(3) .qc-label': { en:'Address', zh:'地址' },
      '.quick-contact-item:nth-child(4) .qc-label': { en:'Hours', zh:'营业时间' },

      /* ── GALLERY.HTML — Tab labels ── */
      '.gallery-tab[data-tab="underwater"], .tab-btn[data-filter="underwater"]':
                                              { en:'Underwater', zh:'水下摄影' },
      '.gallery-tab[data-tab="facebook"], .tab-btn[data-filter="facebook"]':
                                              { en:'Facebook', zh:'脸书精选' },
      '.gallery-tab[data-tab="instagram"], .tab-btn[data-filter="instagram"]':
                                              { en:'Instagram', zh:'Instagram' },
      '.gallery-tab[data-tab="videos"], .tab-btn[data-filter="videos"]':
                                              { en:'Videos', zh:'视频' },
      '.gallery-tab[data-tab="all"], .tab-btn[data-filter="all"]':
                                              { en:'All', zh:'全部' },

      /* Gallery page — section headings ── */
      '#gallery-hero .eyebrow, .gallery-eyebrow':   { en:'Photo & Video Gallery', zh:'照片与视频图库' },
      '#gallery-hero h1, .g-hero-title':            { en:'Gallery', zh:'图库' },
      '.gallery-section .eyebrow':                  { en:'Our World', zh:'我们的世界' },
      '.gallery-section h2.sec-title':              { en:'Life at Casa Escondida', zh:'卡萨艾斯孔迪达的生活' },

      /* ── BLOG.HTML — Filter buttons & controls ── */
      '.filter-btn[data-cat="all"], .blog-filter[data-filter="all"]':
                                              { en:'All Posts', zh:'全部文章' },
      '.filter-btn[data-cat="diving"], .blog-filter[data-filter="diving"]':
                                              { en:'Diving', zh:'潜水' },
      '.filter-btn[data-cat="travel"], .blog-filter[data-filter="travel"]':
                                              { en:'Travel', zh:'旅行' },
      '.filter-btn[data-cat="marine"], .blog-filter[data-filter="marine"]':
                                              { en:'Marine Life', zh:'海洋生物' },
      '.filter-btn[data-cat="resort"], .blog-filter[data-filter="resort"]':
                                              { en:'Resort', zh:'度假村' },
      '.filter-btn[data-cat="tips"], .blog-filter[data-filter="tips"]':
                                              { en:'Tips & Guides', zh:'攻略指南' },

      /* Blog sort options ── */
      '.sort-select option[value="newest"], .blog-sort option[value="newest"]':
                                              { en:'Newest First', zh:'最新优先' },
      '.sort-select option[value="oldest"], .blog-sort option[value="oldest"]':
                                              { en:'Oldest First', zh:'最旧优先' },
      '.sort-select option[value="popular"], .blog-sort option[value="popular"]':
                                              { en:'Most Popular', zh:'最受欢迎' },

      /* Blog section heading ── */
      '.blog-section .eyebrow':              { en:'From the Blog', zh:'博客精选' },
      '.blog-section h2.sec-title':          { en:'Stories & Guides', zh:'故事与指南' },
      '.blog-read-more, .post-read-more':    { en:'Read More', zh:'阅读更多' },

      /* ── COMMON — Booking form labels ── */
      'label[for="checkin"], label[for="check-in"], label[for="checkIn"]':
                                              { en:'Check-in', zh:'入住日期' },
      'label[for="checkout"], label[for="check-out"], label[for="checkOut"]':
                                              { en:'Check-out', zh:'退房日期' },
      'label[for="guests"], label[for="num-guests"]':
                                              { en:'Guests', zh:'入住人数' },
      'label[for="name"], label[for="full-name"], label[for="guestName"]':
                                              { en:'Your Name', zh:'您的姓名' },
      'label[for="email"], label[for="guestEmail"]':
                                              { en:'Email Address', zh:'电子邮箱' },
      'label[for="phone"], label[for="guestPhone"]':
                                              { en:'Phone Number', zh:'联系电话' },
      'label[for="message"], label[for="guestMessage"]':
                                              { en:'Message', zh:'留言内容' },

      /* Booking form button ── */
      '.booking-form .btn-submit, .booking-form button[type="submit"], #bookingForm .btn-primary':
                                              { en:'Check Availability', zh:'查询空房' },
      '.modal-submit, #bookingModal .btn-submit':
                                              { en:'Check Availability', zh:'查询空房' },

      /* Modal titles and close button ── */
      '#bookingModal .modal-title, .booking-modal .modal-title':
                                              { en:'Reserve Your Stay', zh:'预订住宿' },
      '#bookingModal .modal-sub, .booking-modal .modal-sub':
                                              { en:'Fill in your details and we will get back to you within 24 hours.', zh:'请填写您的信息，我们将在24小时内与您联系。' },
      '.modal-close, .btn-modal-close, button.close-modal':
                                              { en:'Close', zh:'关闭' },
      '.modal-overlay .modal-title':          { en:'Reserve Your Stay', zh:'预订住宿' }
    };

    var zh = validLang === 'zh';
    Object.keys(SEL).forEach(function(sel) {
      try {
        var els = document.querySelectorAll(sel);
        els.forEach(function(el) {
          var txt = zh ? SEL[sel].zh : SEL[sel].en;
          if (txt && el.textContent.trim() !== '') {
            /* Only replace leaf nodes with simple text */
            if (!el.querySelector('em,strong,span,svg,img')) {
              el.textContent = txt;
            }
          }
        });
      } catch(e) {}
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
      + 'style="display:flex;align-items:center;gap:5px;'
      + 'background:rgba(255,255,255,0.07);'
      + 'border:1px solid rgba(255,255,255,0.25);border-radius:20px;'
      + 'padding:4px 10px 4px 8px;cursor:pointer;color:rgba(255,255,255,0.85);font-size:0.72rem;'
      + 'letter-spacing:0.08em;white-space:nowrap;line-height:1;font-family:inherit;'
      + 'transition:border-color .3s,background .3s,color .3s;">'
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

    /* ----- 3c. Insert BEFORE theme toggle (swap order: lang | theme | book) ----- */
    var navRight = document.querySelector('.nav-right');
    if (navRight) {
      /* Try to insert before the theme toggle button */
      var themeToggle = navRight.querySelector('#themeBtn, .theme-toggle, [id*="theme"]');
      if (themeToggle) {
        navRight.insertBefore(wrapper, themeToggle);
      } else {
        /* fallback: before Book Now */
        var btnBook = navRight.querySelector('.btn-nav-cta, #navBookNow, .btn-book');
        if (btnBook) navRight.insertBefore(wrapper, btnBook);
        else navRight.appendChild(wrapper);
      }
    } else {
      document.body.appendChild(wrapper);
    }

    /* ----- 3c2. Theme-aware button styling ----- */
    function syncLangBtnTheme() {
      var isDark = document.documentElement.getAttribute('data-theme') !== 'day';
      var b = wrapper.querySelector('.lang-btn');
      if (!b) return;
      if (isDark) {
        b.style.background   = 'rgba(255,255,255,0.07)';
        b.style.borderColor  = 'rgba(255,255,255,0.25)';
        b.style.color        = 'rgba(255,255,255,0.85)';
      } else {
        b.style.background   = 'rgba(0,0,0,0.05)';
        b.style.borderColor  = 'var(--border,rgba(0,0,0,0.15))';
        b.style.color        = 'var(--text,#0d1e2e)';
      }
    }
    syncLangBtnTheme();
    var _nav = document.getElementById('nav');
    if (_nav) {
      new MutationObserver(syncLangBtnTheme)
        .observe(document.documentElement, { attributes:true, attributeFilter:['data-theme'] });
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
