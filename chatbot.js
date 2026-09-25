(function () {
  'use strict';

  /* ============================================================
     CASA ESCONDIDA ANILAO - Resort Chatbot
     PADI 5 Star IDC Resort | Mabini, Batangas, Philippines
  ============================================================ */

  // ── Styles ──────────────────────────────────────────────────
  const CSS = `
    /* ── Reset — scoped to chatbot wrapper ── */
    #ce-chatbot-wrap, #ce-chatbot-wrap * { box-sizing: border-box !important; font-family: 'DM Sans', system-ui, -apple-system, sans-serif !important; }
    #ce-chatbot-wrap *:not(style):not(script) { margin: 0 !important; padding: 0 !important; }
    #ce-chatbot-wrap { --ce-accent:#4dc2e8; --ce-accent-d:#2e9fc4; --ce-ink:#0d1e2e; --ce-win:#0b1826; --ce-line:rgba(77,194,232,.22); --ce-text:#e8f1f7; --ce-text2:#a9bccb; --ce-bot:#12233a; --ce-field:rgba(255,255,255,.06); --ce-on-accent:#06121c; }
    #ce-chatbot-wrap[data-ce-theme="day"] { --ce-accent:#1a6b98; --ce-accent-d:#155880; --ce-ink:#0d1e2e; --ce-win:#ffffff; --ce-line:rgba(13,30,46,.12); --ce-text:#1b2a36; --ce-text2:#55677a; --ce-bot:#f3f6f9; --ce-field:#f2f5f8; --ce-on-accent:#ffffff; }

    /* ── Floating button ── */
    #ce-chatbot-wrap #ce-chat-btn { position: fixed !important; bottom: 24px !important; right: 24px !important; z-index: 100000 !important; width: 54px !important; height: 54px !important; border-radius: 50% !important; background: var(--ce-accent) !important; border: none !important; cursor: pointer !important; box-shadow: 0 6px 18px rgba(0,0,0,.28) !important; display: flex !important; align-items: center !important; justify-content: center !important; transition: transform .18s cubic-bezier(.16,1,.3,1), background .18s !important; }
    #ce-chatbot-wrap #ce-chat-btn:hover { background: var(--ce-accent-d) !important; transform: translateY(-2px) !important; }
    #ce-chatbot-wrap #ce-chat-btn:active { transform: scale(.96) !important; }
    #ce-chatbot-wrap #ce-chat-btn svg { width: 24px !important; height: 24px !important; fill: var(--ce-on-accent) !important; display: block !important; }
    #ce-chatbot-wrap[data-ce-theme="night"] #ce-chat-btn svg { fill: #06121c !important; }

    /* ── Window ── */
    #ce-chatbot-wrap #ce-chat-window { position: fixed !important; bottom: 92px !important; right: 24px !important; z-index: 100001 !important; width: 380px !important; max-width: calc(100vw - 24px) !important; height: 580px !important; max-height: calc(100vh - 110px) !important; background: var(--ce-win) !important; border-radius: 10px !important; border: 1px solid var(--ce-line) !important; box-shadow: 0 24px 60px rgba(0,0,0,.35) !important; display: flex !important; flex-direction: column !important; overflow: hidden !important; transform-origin: bottom right !important; animation: ce-pop-in .22s cubic-bezier(.16,1,.3,1) both !important; }
    @keyframes ce-pop-in { from { transform: translateY(8px); opacity: 0; } to { transform: none; opacity: 1; } }
    #ce-chatbot-wrap #ce-chat-window.ce-hidden { display: none !important; }

    /* ── Header ── */
    #ce-chatbot-wrap #ce-chat-header { background: var(--ce-win) !important; border-bottom: 1px solid var(--ce-line) !important; padding: 14px 14px 12px 16px !important; display: flex !important; align-items: center !important; gap: 12px !important; flex-shrink: 0 !important; }
    #ce-chatbot-wrap .ce-header-avatar, #ce-chatbot-wrap .ce-msg-avatar { border-radius: 50% !important; background: var(--ce-accent) !important; color: var(--ce-on-accent) !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; font-family: 'Playfair Display', Georgia, serif !important; letter-spacing: .06em !important; line-height: 1 !important; }
    #ce-chatbot-wrap .ce-header-avatar { width: 40px !important; height: 40px !important; font-size: 14px !important; }
    #ce-chatbot-wrap .ce-msg-avatar { width: 28px !important; height: 28px !important; font-size: 10px !important; margin-top: 2px !important; }
    #ce-chatbot-wrap .ce-header-text { flex: 1 !important; min-width: 0 !important; }
    #ce-chatbot-wrap .ce-header-title { color: var(--ce-text) !important; font-size: 15px !important; font-weight: 600 !important; line-height: 1.25 !important; white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; }
    #ce-chatbot-wrap .ce-header-sub { color: var(--ce-text2) !important; font-size: 11.5px !important; margin-top: 2px !important; }
    #ce-chatbot-wrap #ce-close-btn { background: transparent !important; border: 1px solid var(--ce-line) !important; color: var(--ce-text2) !important; cursor: pointer !important; width: 34px !important; height: 34px !important; border-radius: 4px !important; display: flex !important; align-items: center !important; justify-content: center !important; transition: background .15s, color .15s, border-color .15s !important; flex-shrink: 0 !important; }
    #ce-chatbot-wrap #ce-close-btn:hover { color: var(--ce-text) !important; border-color: var(--ce-accent) !important; }
    #ce-chatbot-wrap #ce-close-btn svg { width: 15px !important; height: 15px !important; display: block !important; }

    /* ── Messages ── */
    #ce-chatbot-wrap #ce-messages { flex: 1 !important; overflow-y: auto !important; padding: 16px 14px 10px !important; display: flex !important; flex-direction: column !important; gap: 12px !important; scrollbar-width: thin !important; scrollbar-color: var(--ce-line) transparent !important; }
    #ce-chatbot-wrap #ce-messages::-webkit-scrollbar { width: 4px !important; }
    #ce-chatbot-wrap #ce-messages::-webkit-scrollbar-thumb { background: var(--ce-line) !important; border-radius: 2px !important; }
    #ce-chatbot-wrap .ce-msg { display: flex !important; gap: 8px !important; max-width: 92% !important; animation: ce-msg-in .2s cubic-bezier(.16,1,.3,1) both !important; }
    @keyframes ce-msg-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
    #ce-chatbot-wrap .ce-msg.ce-user { align-self: flex-end !important; flex-direction: row-reverse !important; max-width: 85% !important; }
    #ce-chatbot-wrap .ce-msg.ce-bot { align-self: flex-start !important; }
    #ce-chatbot-wrap .ce-bubble { padding: 11px 14px !important; border-radius: 8px !important; font-size: 14px !important; line-height: 1.6 !important; max-width: 100% !important; overflow-wrap: anywhere !important; }
    #ce-chatbot-wrap .ce-msg.ce-user .ce-bubble { background: var(--ce-accent) !important; color: var(--ce-on-accent) !important; border-bottom-right-radius: 2px !important; }
    #ce-chatbot-wrap .ce-msg.ce-bot .ce-bubble { background: var(--ce-bot) !important; color: var(--ce-text) !important; border: 1px solid var(--ce-line) !important; border-bottom-left-radius: 2px !important; }
    #ce-chatbot-wrap .ce-bubble a { color: var(--ce-accent) !important; text-decoration: underline !important; text-underline-offset: 2px !important; }

    /* ── Typing indicator (state feedback) ── */
    #ce-chatbot-wrap .ce-typing { display: flex !important; gap: 5px !important; align-items: center !important; padding: 4px 2px !important; }
    #ce-chatbot-wrap .ce-typing span { width: 6px !important; height: 6px !important; background: var(--ce-accent) !important; border-radius: 50% !important; animation: ce-bounce 1.2s ease-in-out infinite !important; display: inline-block !important; }
    #ce-chatbot-wrap .ce-typing span:nth-child(2) { animation-delay: .15s !important; }
    #ce-chatbot-wrap .ce-typing span:nth-child(3) { animation-delay: .3s !important; }
    @keyframes ce-bounce { 0%, 60%, 100% { transform: translateY(0); opacity: .45; } 30% { transform: translateY(-5px); opacity: 1; } }

    /* ── Suggested questions (the site's choice-pill pattern) ── */
    #ce-chatbot-wrap #ce-suggestions { padding: 10px 12px 8px !important; display: flex !important; gap: 6px !important; flex-wrap: wrap !important; flex-shrink: 0 !important; border-top: 1px solid var(--ce-line) !important; }
    #ce-chatbot-wrap .ce-suggest-btn { background: transparent !important; border: 1px solid var(--ce-line) !important; color: var(--ce-accent) !important; border-radius: 999px !important; padding: 7px 12px !important; font-size: 12.5px !important; font-weight: 500 !important; cursor: pointer !important; line-height: 1.3 !important; display: inline-flex !important; align-items: center !important; transition: background .15s, border-color .15s !important; }
    #ce-chatbot-wrap .ce-suggest-btn:hover { border-color: var(--ce-accent) !important; background: rgba(77,194,232,.08) !important; }

    /* ── Action buttons under an answer ── */
    #ce-chatbot-wrap .ce-cta-row { display: flex !important; flex-direction: column !important; gap: 6px !important; margin-top: -2px !important; padding-left: 36px !important; animation: ce-msg-in .22s cubic-bezier(.16,1,.3,1) .05s both !important; }
    #ce-chatbot-wrap .ce-cta-btn { display: inline-flex !important; align-items: center !important; gap: 8px !important; padding: 10px 12px !important; border-radius: 3px !important; background: transparent !important; border: 1px solid var(--ce-line) !important; color: var(--ce-text) !important; font-size: 13px !important; font-weight: 500 !important; text-decoration: none !important; line-height: 1.3 !important; transition: border-color .15s, background .15s !important; }
    #ce-chatbot-wrap .ce-cta-btn:hover { border-color: var(--ce-accent) !important; background: rgba(77,194,232,.06) !important; }
    #ce-chatbot-wrap .ce-cta-btn.ce-cta-primary { background: var(--ce-accent) !important; border-color: var(--ce-accent) !important; color: var(--ce-on-accent) !important; font-weight: 600 !important; }
    #ce-chatbot-wrap .ce-cta-btn.ce-cta-primary:hover { background: var(--ce-accent-d) !important; border-color: var(--ce-accent-d) !important; }
    #ce-chatbot-wrap .ce-cta-arrow { margin-left: auto !important; display: inline-flex !important; opacity: .8 !important; transition: transform .18s cubic-bezier(.16,1,.3,1) !important; }
    #ce-chatbot-wrap .ce-cta-btn:hover .ce-cta-arrow { transform: translateX(3px) !important; }

    /* ── Input ── */
    #ce-chatbot-wrap #ce-input-row { display: flex !important; gap: 8px !important; align-items: center !important; padding: 10px 12px !important; border-top: 1px solid var(--ce-line) !important; flex-shrink: 0 !important; }
    #ce-chatbot-wrap #ce-input { flex: 1 !important; min-width: 0 !important; background: var(--ce-field) !important; border: 1px solid var(--ce-line) !important; border-radius: 4px !important; padding: 10px 12px !important; color: var(--ce-text) !important; font-size: 15px !important; line-height: 1.4 !important; outline: none !important; transition: border-color .15s !important; caret-color: var(--ce-accent) !important; }
    #ce-chatbot-wrap #ce-input::placeholder { color: var(--ce-text2) !important; opacity: .8 !important; }
    #ce-chatbot-wrap #ce-input:focus { border-color: var(--ce-accent) !important; }
    #ce-chatbot-wrap #ce-send-btn { width: 42px !important; height: 42px !important; border-radius: 4px !important; background: var(--ce-accent) !important; border: none !important; cursor: pointer !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; transition: background .15s !important; }
    #ce-chatbot-wrap #ce-send-btn:hover { background: var(--ce-accent-d) !important; }
    #ce-chatbot-wrap #ce-send-btn svg { width: 17px !important; height: 17px !important; fill: var(--ce-on-accent) !important; display: block !important; }

    /* ── Footer note ── */
    #ce-chatbot-wrap #ce-footer { text-align: center !important; padding: 6px 12px 10px !important; font-size: 11px !important; color: var(--ce-text2) !important; flex-shrink: 0 !important; }
    #ce-chatbot-wrap #ce-footer a { color: var(--ce-accent) !important; text-decoration: none !important; border-bottom: 1px solid transparent !important; }
    #ce-chatbot-wrap #ce-footer a:hover { border-bottom-color: currentColor !important; }

    /* ── Keyboard focus ── */
    #ce-chatbot-wrap button:focus-visible, #ce-chatbot-wrap a:focus-visible, #ce-chatbot-wrap input:focus-visible { outline: 2px solid var(--ce-accent) !important; outline-offset: 2px !important; }

    /* ── Phones: a bottom sheet ── */
    @media (max-width: 560px) {
      #ce-chatbot-wrap #ce-chat-window { left: 10px !important; right: 10px !important; bottom: 76px !important; width: auto !important; max-width: none !important; height: calc(100svh - 92px) !important; max-height: none !important; border-radius: 10px !important; }
      #ce-chatbot-wrap #ce-chat-btn { bottom: 14px !important; right: 14px !important; width: 50px !important; height: 50px !important; }
      #ce-chatbot-wrap #ce-input { font-size: 16px !important; }
    }
    @media (prefers-reduced-motion: reduce) {
      #ce-chatbot-wrap #ce-chat-window, #ce-chatbot-wrap .ce-msg, #ce-chatbot-wrap .ce-cta-row { animation: none !important; }
      #ce-chatbot-wrap .ce-typing span { animation: none !important; opacity: .7 !important; }
      #ce-chatbot-wrap #ce-chat-btn:hover, #ce-chatbot-wrap .ce-cta-btn:hover .ce-cta-arrow { transform: none !important; }
    }
  `;

  // ── Knowledge Base ───────────────────────────────────────────
  const KB = [
    {
      keywords: ['book', 'booking', 'reservation', 'reserve', 'availability', 'available', 'stay', 'nights', 'quotation', 'quote', 'enquire', 'enquiry', 'inquire', 'inquiry'],
      keywordsZh: ['预订', '预定', '订房', '报价', '空房'],
      answer: 'The easiest way is our Book Now page: tell us your dates, rooms, meal plan, transfer and diving in one form and we reply by email with a quotation.\n\nPrefer to talk? Phone / Viber +63 977 837 2272, or message CasaEscondidaAnilao on Facebook. We typically reply within a few hours; peak season is December to May, so book early.',
      answerZh: '最简单的方式是使用"立即预订"页面：在一张表单中填写日期、客房、餐饮方案、接送和潜水需求，我们会通过电子邮件回复报价。\n\n想直接联系？电话 / Viber +63 977 837 2272，或在 Facebook 私信 CasaEscondidaAnilao。通常几小时内回复；12月至5月为旺季，建议尽早预订。',
      cta: [
        { label: 'Book Your Stay', labelZh: '预订住宿', url: '/book-now', primary: true },
        { label: 'View Room Types', labelZh: '查看房型', url: '/rooms' }
      ]
    },
    {
      keywords: ['rate', 'rates', 'price', 'prices', 'pricing', 'cost', 'costs', 'fee', 'fees', 'how much', 'budget', 'expensive', 'cheap'],
      keywordsZh: ['价格', '房价', '费用', '多少钱', '收费'],
      answer: 'Room rates depend on the room type and season, so we quote each stay individually. What to expect:\nRoom only, or full board at PHP 1,500 per person per night\nAirport van transfer PHP 14,000 per van, round trip (max 7 pax)\nDive & stay packages and courses on request\n\nSend a booking request and we reply with a full quotation.',
      answerZh: '房价视房型和季节而定，我们会为每次入住单独报价。参考：\n仅住宿，或全餐每人每晚 1,500 比索\n机场接送车每车往返 14,000 比索（最多7人）\n潜水住宿套餐及课程可按需安排\n\n提交预订请求后，我们会回复完整报价。',
      cta: [
        { label: 'See Room Options', labelZh: '查看房间选项', url: '/rooms', primary: true },
        { label: 'Book & Check Rates', labelZh: '预订并查询价格', url: '/book-now' }
      ]
    },
    {
      keywords: ['room', 'rooms', 'accommodation', 'suite', 'suites', 'deluxe', 'standard', 'room type', 'room types', 'sea view', 'seaview', 'bed', 'beds'],
      keywordsZh: ['客房', '房间', '房型', '套房', '住宿'],
      answer: 'We offer sea-view rooms and suites with views of Balayan Bay:\n\nStandard Double/Twin\nDeluxe Sea View\nSuite with Sea View\nBreakfast available (optional add-on)\nA/C, hot shower, free WiFi\nAll rooms non-smoking',
      answerZh: '我们提供可欣赏巴拉扬湾美景的海景客房和套房：\n\n标准双人间/双床间\n豪华海景客房\n海景套房\n早餐（可选附加）\n空调、热水淋浴、免费WiFi\n全部客房禁烟',
      cta: [
        { label: 'Explore All Rooms', labelZh: '浏览所有客房', url: '/rooms', primary: true },
        { label: 'Book Now', labelZh: '立即预订', url: '/book-now' }
      ]
    },
    {
      keywords: ['breakfast', 'meal', 'meals', 'meal plan', 'full board', 'board', 'food', 'included', 'inclusions', 'dining', 'eat', 'lunch', 'dinner'],
      keywordsZh: ['早餐', '餐饮', '全餐', '用餐', '吃', '包含'],
      answer: 'Meals are a choice you make when booking: room only, or full board (breakfast, lunch and dinner) at PHP 1,500 per person per night on top of the room rate.\n\nOur restaurant serves Filipino and international dishes, and the island BBQ — fresh seafood grilled on a nearby island — is the experience guests talk about most.',
      answerZh: '餐饮在预订时选择：仅住宿，或全餐（早、午、晚餐），每人每晚在房价基础上加收 1,500 比索。\n\n餐厅供应菲律宾及国际美食；岛屿烧烤——在附近小岛上现烤新鲜海鲜——是宾客最津津乐道的体验。'
    },
    {
      keywords: ['padi', 'dive', 'diving', 'dives', 'course', 'courses', 'certification', 'certify', 'learn', 'divemaster', 'open water', 'advanced', 'rescue', 'scuba', 'instructor', 'fun dive', 'fun dives'],
      keywordsZh: ['潜水', '课程', '考证', '教练', '水肺', 'padi'],
      answer: 'As a PADI dive resort, we offer:\n\nOpen Water Diver · Advanced OW\nRescue Diver · Divemaster\nSpecialty courses\nFun dives for certified divers\n\nAnilao is the birthplace of Philippine scuba diving!',
      answerZh: '作为PADI潜水度假村，我们提供：\n\n开放水域潜水员（初级）\n进阶开放水域潜水员\n救援潜水员 · 潜水长\n各类专长课程\n持证潜水员休闲潜水\n\n阿尼劳是菲律宾水肺潜水的发源地！',
      cta: [
        { label: 'Explore Dive Center', labelZh: '探索潜水中心', url: '/dive', primary: true },
        { label: 'Book a Dive Package', labelZh: '预订潜水套餐', url: '/book-now' }
      ]
    },
    {
      keywords: ['dive site', 'dive sites', 'sites', 'spot', 'spots', 'where dive', 'anilao dive', 'macro', 'reef', 'reefs', 'nudibranch', 'nudibranchs'],
      keywordsZh: ['潜点', '潜水点', '微距'],
      answer: 'Anilao has 30+ world-class dive sites! \n\nBeatrice Rock – nudibranchs\nKirby\'s Rock – coral formations\nCathedral Rock – swim-throughs\nTwin Rocks – macro photography\nArthur\'s Rock, Sepoc & more!\n\nRenowned globally for macro photography.',
      answerZh: '阿尼劳拥有30多个世界级潜水点！\n\n碧翠斯礁 – 裸鳃动物天堂\n科比礁 – 珊瑚奇观\n教堂礁 – 穿越岩洞\n双礁 – 微距摄影圣地\n亚瑟礁、塞波克等更多！',
      cta: [
        { label: 'See All Dive Sites', labelZh: '查看所有潜点', url: '/blog/best-dive-sites-anilao', primary: true },
        { label: 'Book Dive Package', labelZh: '预订潜水套餐', url: '/book-now' }
      ]
    },
    {
      keywords: ['equipment', 'gear', 'rent', 'rental', 'rentals', 'bcd', 'regulator', 'wetsuit', 'fins', 'mask', 'camera'],
      keywordsZh: ['装备', '租', '器材', '相机'],
      answer: 'Yes! Full dive gear rental available:\n\nBCD, regulator, wetsuit, fins, mask\nUnderwater camera rentals\n\nAll equipment is well-maintained. You can also bring your own gear.',
      answerZh: '是的！我们提供完整潜水装备租借：\n\n浮力调节装置、调节器、潜水衣、脚蹼、面镜\n水下相机租借\n\n所有设备均定期维护保养。',
      cta: [
        { label: 'View Dive Packages', labelZh: '查看潜水套餐', url: '/dive#packages', primary: true }
      ]
    },
    {
      keywords: ['night dive', 'night diving', 'night dives', 'dive at night', 'diving at night', 'nocturnal'],
      keywordsZh: ['夜潜', '夜间潜水'],
      answer: 'Yes, we organize night dives at Casa Escondida Anilao! \n\nNight diving in Anilao is spectacular — you\'ll encounter mandarin fish, crabs, octopus, and other nocturnal marine life. Night dives are available for certified divers and are usually conducted at nearby sites. Ask us about scheduling when you book!',
      answerZh: '是的，我们提供夜间潜水！\n\n阿尼劳夜潜令人叹为观止——您将遇到花斑连鳍鱼、螃蟹、章鱼等夜行海洋生物。夜潜适合持证潜水员，请预订时询问具体排期！'
    },
    {
      keywords: ['nitrox', 'enriched air', 'eanx'],
      keywordsZh: ['氮氧', '高氧', '富氧'],
      answer: 'Yes! Nitrox (Enriched Air) is available at Casa Escondida Anilao. \n\nNitrox allows longer bottom times and shorter surface intervals — perfect for multiple-dive days. You\'ll need a valid PADI Enriched Air Diver certification (or we can certify you here!). Contact us for nitrox fill pricing.',
      answerZh: '是的！我们提供氮氧混合气（富氧空气）。\n\n氮氧混合气可延长底部时间、缩短水面休息间隔，非常适合多次潜水日。需持有效PADI富氧空气潜水员认证（也可在此参加培训）。联系我们了解充气费用。'
    },
    {
      keywords: ['location', 'located', 'where', 'address', 'mabini', 'batangas', 'anilao', 'map', 'find'],
      keywordsZh: ['地址', '位置', '在哪', '地图'],
      answer: 'Casa Escondida is in Mabini, Batangas — the heart of Anilao, birthplace of Philippine diving! \n\nBrgy. Ligaya, Mabini, Batangas 4202, Philippines',
      answerZh: '卡萨埃斯孔迪达位于菲律宾八打雁省马比尼市——阿尼劳心脏地带，菲律宾潜水的发源地！\n\n八打雁省利加亚村，马比尼4202，菲律宾',
      cta: [
        { label: 'View Map & Directions', labelZh: '查看地图和路线', url: '/location', primary: true },
        { label: 'Get Directions', labelZh: '获取路线', url: 'https://www.google.com/maps/dir/?api=1&destination=Casa+Escondida+Anilao' }
      ]
    },
    {
      keywords: ['manila', 'far', 'distance', 'km', 'kilometers', 'kilometres', 'hour', 'hours', 'drive', 'driving', 'how long', 'travel time', 'naia', 'airport'],
      keywordsZh: ['多远', '马尼拉', '几小时', '距离', '机场'],
      answer: '~140 km south of Manila \n\n2–3 hours by car\nSLEX → Star Tollway → Batangas → Mabini\n\nLeave early to beat Metro traffic!',
      answerZh: '距马尼拉以南约140公里 \n\n自驾约2至3小时\n路线：南吕宋高速公路→星型收费公路→八打雁→马比尼',
      cta: [
        { label: 'Full Directions Guide', labelZh: '完整路线指南', url: '/location', primary: true },
        { label: 'Open Google Maps', labelZh: '打开谷歌地图', url: 'https://www.google.com/maps/dir/?api=1&destination=Casa+Escondida+Anilao' }
      ]
    },
    {
      keywords: ['transport', 'transportation', 'transfer', 'transfers', 'van', 'bus', 'tricycle', 'jeepney', 'get there', 'how to get', 'directions', 'shuttle', 'pick up', 'pickup', 'airport transfer'],
      keywordsZh: ['接送', '怎么去', '交通', '面包车', '巴士', '接机'],
      answer: 'How to get here:\n\nAirport / Manila van transfer — PHP 14,000 per van, round trip, max 7 pax with light luggage. Request it in your booking and we arrange it.\nBy public transport: JAM or DLTB bus to Batangas City, then a bus or van to Mabini (Anilao), then a tricycle to the resort.',
      answerZh: '前往方式：\n\n机场 / 马尼拉接送车——每车往返 14,000 比索，最多7人（轻便行李）。预订时提出需求，我们即可安排。\n公共交通：乘 JAM 或 DLTB 巴士至八打雁城，转乘巴士或面包车至马比尼（阿尼劳），再乘三轮车抵达度假村。',
      cta: [
        { label: 'Full Transport Guide', labelZh: '完整路线指南', url: '/location', primary: true },
        { label: 'Request a Transfer', labelZh: '预订接送', url: '/book-now' }
      ]
    },
    {
      keywords: ['pool', 'swimming pool', 'swim', 'swimming'],
      keywordsZh: ['泳池', '游泳'],
      answer: 'Yes! Casa Escondida Anilao has a swimming pool for guests to enjoy. \n\nRelax by the pool with views of Balayan Bay between dives. Perfect for a refreshing dip when you\'re not exploring the underwater world!',
      answerZh: '有的！卡萨埃斯孔迪达阿尼劳设有供宾客享用的游泳池。\n\n在潜水间隙，可在泳池边欣赏巴拉扬湾美景，放松身心。不探索水下世界时，清爽畅游正是最佳选择！'
    },
    {
      keywords: ['restaurant', 'bar', 'drinks', 'drink', 'snack', 'snacks', 'coffee', 'beverage', 'beverages', 'beer', 'cocktail'],
      keywordsZh: ['餐厅', '酒吧', '饮料', '咖啡'],
      answer: 'Our on-site restaurant serves delicious Filipino and international dishes throughout the day. \n\nBreakfast (optional add-on)\nLunch & dinner available\nRefreshments and beverages\nIsland BBQ — a signature Casa Escondida experience with fresh grilled seafood!\n\nAsk us about the island BBQ when you book your stay!',
      answerZh: '我们的餐厅全天供应美味菲律宾和国际美食。\n\n早餐（可选附加）\n午餐与晚餐\n饮料与小食\n岛屿烧烤——卡萨埃斯孔迪达的招牌体验，提供新鲜烤海鲜！\n\n预订时可咨询岛屿烧烤详情。'
    },
    {
      keywords: ['bbq', 'barbecue', 'island bbq', 'island', 'picnic', 'seafood'],
      keywordsZh: ['烧烤', '岛屿'],
      answer: 'Our Island BBQ is one of the most loved experiences at Casa Escondida Anilao! \n\nWe take guests to a nearby island for a fresh seafood BBQ experience — grilled fish, squid, and more while surrounded by beautiful scenery. Ask us about availability and inclusions when you book!',
      answerZh: '岛屿烧烤是卡萨埃斯孔迪达最受欢迎的体验之一！\n\n我们带宾客乘船前往附近小岛，享用新鲜海鲜烧烤——烤鱼、烤鱿鱼等，在绝美海景中尽享美食。预订时可咨询档期与套餐内容！'
    },
    {
      keywords: ['beach', 'beachfront', 'shoreline', 'sand', 'sandy', 'coast', 'waterfront', 'snorkel', 'snorkeling', 'snorkelling'],
      keywordsZh: ['海滩', '沙滩', '浮潜', '海边'],
      answer: 'Casa Escondida Anilao enjoys beautiful waterfront access along Balayan Bay. \n\nWhile Anilao is better known for its incredible diving than sandy beaches, guests enjoy stunning coastal scenery, boat access to dive sites, and relaxing sea views from the resort. The real magic is below the surface!',
      answerZh: '卡萨埃斯孔迪达阿尼劳坐拥巴拉扬湾的美丽海滨。\n\n阿尼劳以绝佳潜水而非沙滩著称，宾客可尽享壮丽海岸风光、乘船直达潜点，以及度假村的迷人海景。真正的魔法在水面之下！'
    },
    {
      keywords: ['wifi', 'wi-fi', 'internet', 'connection', 'signal', 'network'],
      keywordsZh: ['wifi', '网络', '上网', '信号'],
      answer: 'Yes! Free WiFi is available for all guests at Casa Escondida Anilao. \n\nStay connected to share your amazing underwater photos with the world! Signal strength may vary in some areas of the resort.',
      answerZh: '有的！卡萨埃斯孔迪达阿尼劳为全体宾客提供免费WiFi。\n\n保持网络连接，随时分享精彩水下照片！部分区域信号强度可能有所不同。'
    },
    {
      keywords: ['check in', 'check-in', 'checkin', 'check out', 'check-out', 'checkout', 'arrival', 'arrive', 'departure', 'early check', 'late check'],
      keywordsZh: ['入住', '退房', '几点'],
      answer: 'Casa Escondida Anilao check-in/out times:\n\nCheck-in: 2:00 PM\nCheck-out: 12:00 PM (noon)\n\nEarly check-in and late check-out may be available depending on room availability — please request in advance when booking. We\'ll do our best to accommodate you!',
      answerZh: '入住/退房时间：\n\n入住：下午2:00\n退房：中午12:00\n\n提前入住和延迟退房可根据房间情况安排，请预订时提前告知，我们将尽力配合！'
    },
    {
      keywords: ['policy', 'policies', 'cancellation', 'cancel', 'refund', 'deposit', 'children', 'child', 'kids', 'kid', 'pet', 'pets', 'dog', 'smoking', 'rules'],
      keywordsZh: ['政策', '取消', '退款', '儿童', '小孩', '宠物', '规定', '押金'],
      answer: 'For our current policies on cancellations, children, pets, and other house rules, please contact us directly:\n\n+63 977 837 2272\nFacebook: CasaEscondidaAnilao\ncasaescondida-anilao.com\n\nOur team will provide full details and ensure your stay meets all your needs!',
      answerZh: '如需了解取消政策、携童、宠物及其他规定，请直接联系我们：\n\n+63 977 837 2272\nFacebook：CasaEscondidaAnilao\ncasaescondida-anilao.com\n\n我们的团队将提供详细说明，确保您的入住体验完美顺畅！'
    },
    {
      keywords: ['review', 'reviews', 'rating', 'ratings', 'tripadvisor', 'google', 'feedback', 'testimonial', 'testimonials', 'stars'],
      keywordsZh: ['评价', '点评', '评分', '口碑'],
      answer: 'Highly rated by guests! \n\nTripAdvisor: 4.5 / 5 (81 reviews)\nGoogle: 4.7 / 5 (230+ reviews)\n\nGuests love our diving, staff, food, and stunning location!',
      answerZh: '深受宾客好评！\n\nTripAdvisor：4.5/5（81条点评）\n谷歌：4.7/5（230+条点评）\n\n宾客对潜水服务、员工、餐饮和美景赞不绝口！',
      cta: [
        { label: 'Read TripAdvisor Reviews', labelZh: '阅读TripAdvisor点评', url: 'https://www.tripadvisor.com.ph/Hotel_Review-g1587920-d10086753', primary: true },
        { label: 'Google Reviews', labelZh: '谷歌评价', url: 'https://www.google.com/maps/place/Casa+Escondida+Anilao' }
      ]
    },
    {
      keywords: ['package', 'packages', 'deal', 'deals', 'all inclusive', 'promo', 'promos', 'special', 'bundle', 'discount', 'dive stay', 'dive and stay', 'dive package', 'dive packages'],
      keywordsZh: ['套餐', '优惠', '折扣', '促销'],
      answer: 'We offer various packages:\n\nDive + Stay (unlimited boat dives)\nPADI Course + Accommodation\nIsland BBQ packages\nCouple & group rates\n\nPackages change seasonally — contact us for current deals!',
      answerZh: '我们提供多种套餐：\n\n潜水住宿套餐（含无限次船潜）\nPADI课程+住宿套餐\n岛屿烧烤套餐\n情侣及团体优惠',
      cta: [
        { label: 'View Dive Packages', labelZh: '查看潜水套餐', url: '/dive#packages', primary: true },
        { label: 'Book a Package', labelZh: '预订套餐', url: '/book-now' }
      ]
    },
    {
      keywords: ['contact', 'call', 'phone', 'number', 'facebook', 'email', 'mail', 'message', 'messenger', 'whatsapp', 'viber', 'reach', 'talk', 'human', 'staff'],
      keywordsZh: ['联系', '电话', '邮箱', '邮件', '人工', '客服'],
      answer: 'Get in touch with the team:\n\nPhone / Viber: +63 977 837 2272\nEmail: casaescondidaanilao@gmail.com\nFacebook: CasaEscondidaAnilao (fastest for quick questions)\n\nThe front desk is open until 9 PM and we typically reply within a few hours.',
      answerZh: '联系团队：\n\n电话 / Viber：+63 977 837 2272\n电子邮件：casaescondidaanilao@gmail.com\nFacebook：CasaEscondidaAnilao（简单问题回复最快）\n\n前台营业至晚上9点，通常几小时内回复。',
      cta: [
        { label: 'Contact Details', labelZh: '联系方式', url: '/location#contact', primary: true },
        { label: 'Message on Facebook', labelZh: 'Facebook发信息', url: 'https://www.facebook.com/CasaEscondidaAnilao' }
      ]
    },
    {
      keywords: ['group', 'groups', 'corporate', 'team building', 'event', 'events', 'party', 'birthday', 'anniversary', 'wedding', 'honeymoon', 'family'],
      keywordsZh: ['团体', '团建', '活动', '生日', '家庭'],
      answer: 'Casa Escondida Anilao is a great destination for group getaways, team-building, and special occasions! \n\nWe can accommodate dive groups, non-diving guests, corporate events, and celebrations. Ask us about group rates and exclusive use arrangements:\n+63 977 837 2272\nCasaEscondidaAnilao on Facebook'
    },
    {
      keywords: ['weather', 'season', 'seasons', 'best time', 'best month', 'when to visit', 'when visit', 'monsoon', 'typhoon', 'rain', 'rainy', 'summer', 'visibility', 'temperature'],
      keywordsZh: ['天气', '季节', '什么时候', '最佳时间', '台风', '能见度'],
      answer: 'Best time to visit Casa Escondida Anilao:\n\nPeak season: December to May (dry season, calm seas, excellent visibility)\nWet season: June to November (some typhoon risk, but diving still possible most days)\n\nPro tip: Visibility is often best from November to May, with water temperatures around 27–30°C year-round. Anilao is a year-round destination!',
      answerZh: '卡萨埃斯孔迪达阿尼劳最佳造访时间：\n\n旺季：12月至5月（旱季，海况平稳，能见度极佳）\n雨季：6月至11月（偶有台风，但大多数日子仍可潜水）\n\n专业建议：11月至5月能见度最佳，全年水温约27–30°C。阿尼劳是全年可游的潜水胜地！'
    },
    {
      keywords: ['certified', 'non diver', 'non-diver', 'beginner', 'beginners', 'first time', 'never dived', 'try dive', 'try diving', 'discover', 'dsd', 'intro', 'kids dive'],
      keywordsZh: ['初学', '新手', '体验潜水', '没潜过', '第一次'],
      answer: 'Never dived before? No problem! \n\nAt Casa Escondida Anilao you can:\n\nTry a Discover Scuba Diving (DSD) experience — no prior experience needed!\nEnroll in the PADI Open Water Diver course — get fully certified in 3–4 days\n\nOur experienced PADI instructors will guide you every step of the way. Anilao\'s calm, clear waters are perfect for beginners!',
      answerZh: '从未潜过水？没问题！\n\n在卡萨埃斯孔迪达阿尼劳，您可以：\n\n体验探索水肺潜水（DSD）——无需任何经验！\n参加PADI开放水域潜水员课程——3至4天即可完成认证\n\n我们经验丰富的PADI教练将全程陪伴引导。阿尼劳清澈平静的海水是初学者的理想之地！'
    },
    {
      keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'thanks', 'thank you', 'thank', 'bye', 'goodbye'],
      keywordsZh: ['你好', '您好', '谢谢', '再见', '早上好', '晚上好'],
      answer: 'Hello! I can answer questions about rooms, meals, diving and courses, transfers and how to get here. When you are ready, the Book Now page collects everything we need for a quotation.',
      answerZh: '您好！我可以回答有关客房、餐饮、潜水与课程、接送以及如何到达的问题。准备好后，"立即预订"页面会收集报价所需的全部信息。',
      cta: [
        { label: 'Book Now', labelZh: '立即预订', url: '/book-now', primary: true }
      ]
    }
  ];

  // ── Suggested Questions ──────────────────────────────────────
  // Resolved at runtime via I18N — see I18N.en.suggestions / I18N.zh.suggestions
  function getSuggestions() { return t('suggestions'); }

  // ── Language helpers ─────────────────────────────────────────
  function getChatLang() {
    return localStorage.getItem('ce-lang') || 'en';
  }

  const I18N = {
    en: {
      headerSub:   'Automated assistant · 24/7',
      placeholder: 'Ask about diving, rooms, or how to get here…',
      footer:      'Automated answers, not a live chat. To book, use <a href="/book-now">Book Now</a>.',
      greeting:    "Hi! I'm Casa Escondida's automated assistant. Ask me about rooms, diving, meals, transfers or how to get here — or tap a question below.",
      fallback:    "I don't have an answer for that one yet. The team can help directly:\nPhone / Viber: +63 977 837 2272\nFacebook: CasaEscondidaAnilao\nOr send a booking request and mention your question.",
      suggestions: [
        'How to book a room?',
        'PADI courses available?',
        'Distance from Manila?',
        "What's included in the rate?",
        'Dive gear for rent?',
        'Check-in / check-out time?',
        'Best dive sites?',
        'Night diving available?',
        'What are the reviews?',
        'Island BBQ experience?',
        'Airport transfer price?',
        'How many rooms?'
      ]
    },
    zh: {
      headerSub:   '自动助手 · 全天候即时回答',
      placeholder: '询问潜水、客房或如何到达...',
      footer:      '自动回答，非人工客服。如需预订，请前往<a href="/book-now">立即预订</a>。',
      greeting:    '您好！我是 Casa Escondida 的自动助手。欢迎询问客房、潜水、餐饮、接送或如何到达——也可以直接点击下方的问题。',
      fallback:    '这个问题我暂时无法回答。您可以直接联系我们的团队：\n电话 / Viber：+63 977 837 2272\nFacebook：CasaEscondidaAnilao\n或提交预订请求并注明您的问题。',
      suggestions: [
        '如何预订房间？',
        '有哪些PADI课程？',
        '距马尼拉多远？',
        '房价包含什么？',
        '可以租借潜水装备吗？',
        '入住/退房时间？',
        '最佳潜水点有哪些？',
        '可以夜潜吗？',
        '客人评价如何？',
        '岛屿烧烤体验？',
        '机场接送多少钱？',
        '共有多少间客房？'
      ]
    }
  };

  function t(key) {
    var lang = getChatLang();
    return (I18N[lang] || I18N.en)[key] || I18N.en[key];
  }

  // GREETING and FALLBACK are language-aware at runtime

  // ── Build DOM ────────────────────────────────────────────────
  function init() {
    if (document.getElementById('ce-chatbot-wrap')) return;

    // Inject styles
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    // Wrapper
    var wrap = document.createElement('div');
    wrap.id = 'ce-chatbot-wrap';
    document.body.appendChild(wrap);

    // Floating button
    wrap.innerHTML = `
      <button id="ce-chat-btn" aria-label="Open the Casa Escondida assistant" aria-expanded="false" aria-controls="ce-chat-window">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
              </button>

      <div id="ce-chat-window" class="ce-hidden" role="dialog" aria-label="Casa Escondida Resort Chat">
        <div id="ce-chat-header">
          <div class="ce-header-avatar" aria-hidden="true">CE</div>
          <div class="ce-header-text">
            <div class="ce-header-title">Casa Escondida Anilao</div>
            <div class="ce-header-sub" id="ce-header-sub"></div>
          </div>
          <button id="ce-close-btn" aria-label="Close chat"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>
        </div>

        <div id="ce-messages" role="log" aria-live="polite"></div>

        <div id="ce-suggestions"></div>

        <div id="ce-input-row">
          <input id="ce-input" type="text" maxlength="300" autocomplete="off" aria-label="Type your question" />
          <button id="ce-send-btn" aria-label="Send message">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
        <div id="ce-footer"></div>
      </div>
    `;

    var btn        = document.getElementById('ce-chat-btn');
    var window_    = document.getElementById('ce-chat-window');
    var closeBtn   = document.getElementById('ce-close-btn');
    var messages   = document.getElementById('ce-messages');
    var input      = document.getElementById('ce-input');
    var sendBtn    = document.getElementById('ce-send-btn');
    var suggestEl  = document.getElementById('ce-suggestions');

    var isOpen       = false;
    var greeted      = false;
    var suggPool     = [];   // shuffled queue
    var suggUsed     = [];   // used this cycle
    var answeredQs   = [];   // questions already answered — never show again

    // ── Apply current language to all translatable UI elements ──
    function applyLang() {
      var headerSub = document.getElementById('ce-header-sub');
      var footer    = document.getElementById('ce-footer');
      if (headerSub) headerSub.textContent = t('headerSub');
      if (input)     input.placeholder     = t('placeholder');
      if (footer)    footer.innerHTML      = t('footer');
      // Re-render suggestion chips in the new language (reset used cycle)
      suggUsed = [];
      if (isOpen) renderSuggestions();
    }

    // Watch for language changes — translate.js dispatches 'ce:langchange' on same tab
    document.addEventListener('ce:langchange', function() { applyLang(); });
    // Also catch changes from other tabs via storage event
    window.addEventListener('storage', function(e) {
      if (e.key === 'ce-lang') applyLang();
    });

    // Set initial translated text
    applyLang();

    // ── Fisher-Yates shuffle ──
    function shuffle(arr) {
      var a = arr.slice();
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
      }
      return a;
    }

    // ── Get next 3 unique suggestions (never show answered ones again) ──
    function nextBatch() {
      var SUGGESTIONS = getSuggestions();
      // Eligible = not answered AND not in current cycle
      var eligible = SUGGESTIONS.filter(function(s) {
        return answeredQs.indexOf(s) === -1;
      });
      // If all remaining are exhausted within this cycle, reset cycle (but keep answered filter)
      var pool = eligible.filter(function(s) { return suggUsed.indexOf(s) === -1; });
      if (pool.length < 3) {
        suggUsed = [];
        pool = eligible.slice();
      }
      if (pool.length === 0) return [];   // all questions answered
      var shuffled = shuffle(pool);
      var batch = shuffled.slice(0, 3);
      batch.forEach(function(s) { suggUsed.push(s); });
      return batch;
    }

    function renderSuggestions() {
      suggestEl.innerHTML = '';
      var batch = nextBatch();
      batch.forEach(function(text) {
        var b = document.createElement('button');
        b.className = 'ce-suggest-btn';
        b.textContent = text;
        b.addEventListener('click', function() {
          sendMessage(text);  // sendMessage now handles suggestion refresh
        });
        suggestEl.appendChild(b);
      });
    }

    function startSuggRotation() { renderSuggestions(); }
    function stopSuggRotation()  { /* no timer needed */ }

    // ── Message helpers ──
    function appendMessage(text, role) {
      var msg = document.createElement('div');
      msg.className = 'ce-msg ' + role;

      if (role === 'ce-bot') {
        var av = document.createElement('div');
        av.className = 'ce-msg-avatar';
        av.textContent = 'CE';
        msg.appendChild(av);
      }

      var bubble = document.createElement('div');
      bubble.className = 'ce-bubble';
      // convert newlines to <br>
      bubble.innerHTML = text.replace(/\n/g, '<br>');
      msg.appendChild(bubble);
      messages.appendChild(msg);
      messages.scrollTop = messages.scrollHeight;
    }

    function showTyping() {
      var t = document.createElement('div');
      t.className = 'ce-msg ce-bot';
      t.id = 'ce-typing-indicator';

      var av = document.createElement('div');
      av.className = 'ce-msg-avatar';
      av.textContent = 'CE';
      t.appendChild(av);

      var bubble = document.createElement('div');
      bubble.className = 'ce-bubble';
      var typing = document.createElement('div');
      typing.className = 'ce-typing';
      typing.innerHTML = '<span></span><span></span><span></span>';
      bubble.appendChild(typing);
      t.appendChild(bubble);
      messages.appendChild(t);
      messages.scrollTop = messages.scrollHeight;
    }

    function removeTyping() {
      var t = document.getElementById('ce-typing-indicator');
      if (t) t.remove();
    }

    // ── Render CTA action cards ──
    function appendCTA(ctaList, lang) { lang = lang || getChatLang();
      if (!ctaList || !ctaList.length) return;
      var row = document.createElement('div');
      row.className = 'ce-cta-row';
      ctaList.forEach(function(c) {
        var a = document.createElement('a');
        a.className = 'ce-cta-btn' + (c.primary ? ' ce-cta-primary' : '');
        a.href = c.url;
        a.target = c.url.startsWith('http') ? '_blank' : '_self';
        a.rel = 'noopener noreferrer';
        a.innerHTML =
          '<span>' + ((lang === 'zh' && c.labelZh) ? c.labelZh : c.label) + '</span>'
          + '<span class="ce-cta-arrow"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>';
        row.appendChild(a);
      });
      messages.appendChild(row);
      messages.scrollTop = messages.scrollHeight;
    }

    // Chinese suggestion chips bridge
    var SUGG_MAP = {};
    function buildSuggMap() {
      var en = I18N.en.suggestions; var zh = I18N.zh.suggestions;
      for (var i = 0; i < zh.length && i < en.length; i++) { SUGG_MAP[zh[i]] = en[i]; }
    }
    function findEntryBySuggestion(q) { var eq = SUGG_MAP[q]; return eq ? findEntry(eq) : null; }
    buildSuggMap(); // must be called AFTER var SUGG_MAP = {} above

    // ── Find the best KB entry: whole-word / plural / long-prefix matches only (no 'eat' in 'great'),
    //    phrases count double, Chinese questions match keywordsZh by substring ──
    function scoreEntry(entry, q, words, isCJK) {
      var s = 0;
      if (isCJK) {
        (entry.keywordsZh || []).forEach(function (k) { if (q.indexOf(k.toLowerCase()) !== -1) s += 2; });
        return s;
      }
      entry.keywords.forEach(function (k) {
        k = k.toLowerCase();
        if (k.indexOf(' ') !== -1 || k.indexOf('-') !== -1) { if (q.indexOf(k) !== -1) s += 2; return; }
        for (var i = 0; i < words.length; i++) {
          var w = words[i];
          if (w === k || w === k + 's' || k === w + 's' || w === k + 'es' ||
              (w.length >= 5 && k.length >= 5 && (w.indexOf(k) === 0 || k.indexOf(w) === 0))) { s += 1; break; }
        }
      });
      return s;
    }
    function findEntry(query) {
      var raw = String(query || '').toLowerCase();
      var isCJK = /[\u3400-\u9fff]/.test(raw);
      var q = isCJK ? raw : raw.replace(/[^a-z0-9\s-]/g, ' ').replace(/\s+/g, ' ').trim();
      var words = q.split(' ').filter(Boolean);
      if (!isCJK && !words.length) return null;
      var best = null, bestScore = 0;
      KB.forEach(function (entry) { var s = scoreEntry(entry, q, words, isCJK); if (s > bestScore) { bestScore = s; best = entry; } });
      return bestScore > 0 ? best : null;
    }

    // ── Send message ──
    function sendMessage(text) {
      var q = (text || input.value).trim();
      if (!q) return;
      input.value = '';
      // Mark as answered if it was a suggestion chip (any language)
      var allSugg = getSuggestions();
      if (allSugg.indexOf(q) !== -1 && answeredQs.indexOf(q) === -1) {
        answeredQs.push(q);
      }
      appendMessage(q, 'ce-user');
      showTyping();
      var delay = 600 + Math.random() * 400;
      setTimeout(function () {
        removeTyping();
        var entry = findEntry(q) || findEntryBySuggestion(q);
        var lang = getChatLang();
        var answer = entry
          ? (lang === 'zh' && entry.answerZh ? entry.answerZh : entry.answer)
          : t('fallback');
        appendMessage(answer, 'ce-bot');
        if (entry && entry.cta) appendCTA(entry.cta, lang);
        if (!entry) appendCTA([
          { label: 'Send a booking request', labelZh: '提交预订请求', url: '/book-now', primary: true },
          { label: 'Contact details', labelZh: '联系方式', url: '/location#contact' }
        ], lang);
        // Show fresh suggestions
        setTimeout(renderSuggestions, 300);
      }, delay);
    }

    sendBtn.addEventListener('click', function () { sendMessage(); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    });

    // ── Toggle ──
    function openChat() {
      window_.classList.remove('ce-hidden');
      isOpen = true;
      btn.setAttribute('aria-expanded', 'true');
      startSuggRotation();
      if (!greeted) {
        greeted = true;
        setTimeout(function () { appendMessage(t('greeting'), 'ce-bot'); }, 300);
      }
      setTimeout(function () { input.focus(); }, 350);
    }

    function closeChat() {
      window_.classList.add('ce-hidden');
      isOpen = false;
      btn.setAttribute('aria-expanded', 'false');
      stopSuggRotation();
    }

    btn.addEventListener('click', function (e) { e.stopPropagation(); isOpen ? closeChat() : openChat(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && isOpen) { closeChat(); btn.focus(); } });
    closeBtn.addEventListener('click', closeChat);

    // close on backdrop click
    document.addEventListener('click', function (e) {
      if (isOpen && !window_.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
        closeChat();
      }
    });

    // ── Theme awareness (day / night) ──
    // CSS handles all visual changes via #ce-chatbot-wrap[data-ce-theme="..."] selectors.
    // This function just sets the attribute on the wrapper so CSS takes over.
    function applyTheme() {
      var isDark = document.documentElement.getAttribute('data-theme') !== 'day';
      wrap.setAttribute('data-ce-theme', isDark ? 'night' : 'day');
    }
    applyTheme();

    // Watch for theme changes
    var themeObserver = new MutationObserver(applyTheme);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
