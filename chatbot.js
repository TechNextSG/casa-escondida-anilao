(function () {
  'use strict';

  /* ============================================================
     CASA ESCONDIDA ANILAO - Resort Chatbot
     PADI 5-Star Dive Resort | Mabini, Batangas, Philippines
  ============================================================ */

  // ── Styles ──────────────────────────────────────────────────
  const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

    #ce-chatbot-wrap * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
    }

    /* Floating Button */
    #ce-chat-btn {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9998;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #4dc2e8 0%, #2fa8d4 100%);
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(77,194,232,0.45);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      outline: none;
    }
    #ce-chat-btn:hover {
      transform: scale(1.08);
      box-shadow: 0 6px 28px rgba(77,194,232,0.6);
    }
    #ce-chat-btn svg {
      width: 28px;
      height: 28px;
      fill: #fff;
    }
    #ce-chat-btn .ce-badge {
      position: absolute;
      top: 2px;
      right: 2px;
      width: 14px;
      height: 14px;
      background: #e8c56a;
      border-radius: 50%;
      border: 2px solid #fff;
    }

    /* Chat Window */
    #ce-chat-window {
      position: fixed;
      bottom: 96px;
      right: 24px;
      z-index: 9999;
      width: 370px;
      max-width: calc(100vw - 32px);
      height: 560px;
      max-height: calc(100vh - 120px);
      background: #0d1e2e;
      border-radius: 20px;
      box-shadow: 0 12px 48px rgba(0,0,0,0.45);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transform-origin: bottom right;
      animation: ce-pop-in 0.22s cubic-bezier(0.34,1.56,0.64,1);
    }
    @keyframes ce-pop-in {
      from { transform: scale(0.7); opacity: 0; }
      to   { transform: scale(1);   opacity: 1; }
    }
    #ce-chat-window.ce-hidden {
      display: none;
    }

    /* Header */
    #ce-chat-header {
      background: linear-gradient(135deg, #0d1e2e 0%, #122839 100%);
      border-bottom: 1px solid rgba(77,194,232,0.2);
      padding: 14px 16px;
      display: flex;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
    }
    .ce-header-avatar {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: linear-gradient(135deg, #4dc2e8, #2fa8d4);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 20px;
    }
    .ce-header-text {
      flex: 1;
    }
    .ce-header-title {
      color: #4dc2e8;
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 0.01em;
      line-height: 1.2;
    }
    .ce-header-sub {
      color: rgba(255,255,255,0.55);
      font-size: 11.5px;
      font-weight: 400;
      margin-top: 1px;
    }
    .ce-online-dot {
      width: 8px;
      height: 8px;
      background: #4ade80;
      border-radius: 50%;
      flex-shrink: 0;
      box-shadow: 0 0 6px rgba(74,222,128,0.6);
    }
    #ce-close-btn {
      background: rgba(255,255,255,0.08);
      border: none;
      color: #aab;
      cursor: pointer;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      transition: background 0.15s;
      flex-shrink: 0;
    }
    #ce-close-btn:hover {
      background: rgba(255,255,255,0.15);
      color: #fff;
    }

    /* Suggestions */
    #ce-suggestions {
      padding: 10px 12px 6px;
      display: flex;
      gap: 7px;
      overflow-x: auto;
      flex-shrink: 0;
      scrollbar-width: none;
      border-bottom: 1px solid rgba(77,194,232,0.1);
    }
    #ce-suggestions::-webkit-scrollbar { display: none; }
    .ce-suggest-btn {
      flex-shrink: 0;
      background: rgba(77,194,232,0.1);
      border: 1px solid rgba(77,194,232,0.3);
      color: #4dc2e8;
      border-radius: 20px;
      padding: 5px 12px;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      white-space: nowrap;
      transition: background 0.15s, border-color 0.15s;
    }
    .ce-suggest-btn:hover {
      background: rgba(77,194,232,0.2);
      border-color: #4dc2e8;
    }

    /* Messages Area */
    #ce-messages {
      flex: 1;
      overflow-y: auto;
      padding: 14px 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      scrollbar-width: thin;
      scrollbar-color: rgba(77,194,232,0.3) transparent;
    }
    #ce-messages::-webkit-scrollbar { width: 4px; }
    #ce-messages::-webkit-scrollbar-thumb {
      background: rgba(77,194,232,0.3);
      border-radius: 4px;
    }

    /* Message Bubbles */
    .ce-msg {
      display: flex;
      gap: 8px;
      max-width: 92%;
      animation: ce-msg-in 0.18s ease;
    }
    @keyframes ce-msg-in {
      from { opacity: 0; transform: translateY(6px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .ce-msg.ce-user {
      align-self: flex-end;
      flex-direction: row-reverse;
    }
    .ce-msg.ce-bot {
      align-self: flex-start;
    }
    .ce-msg-avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: linear-gradient(135deg, #4dc2e8, #2fa8d4);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .ce-bubble {
      padding: 10px 14px;
      border-radius: 16px;
      font-size: 13.5px;
      line-height: 1.55;
      max-width: 100%;
    }
    .ce-msg.ce-user .ce-bubble {
      background: linear-gradient(135deg, #4dc2e8 0%, #2fa8d4 100%);
      color: #fff;
      border-bottom-right-radius: 4px;
    }
    .ce-msg.ce-bot .ce-bubble {
      background: rgba(255,255,255,0.07);
      color: rgba(255,255,255,0.9);
      border: 1px solid rgba(77,194,232,0.15);
      border-bottom-left-radius: 4px;
    }

    /* Typing Indicator */
    .ce-typing {
      display: flex;
      gap: 4px;
      align-items: center;
      padding: 10px 14px;
    }
    .ce-typing span {
      width: 7px;
      height: 7px;
      background: #4dc2e8;
      border-radius: 50%;
      animation: ce-bounce 1.2s infinite;
      opacity: 0.7;
    }
    .ce-typing span:nth-child(2) { animation-delay: 0.2s; }
    .ce-typing span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes ce-bounce {
      0%, 60%, 100% { transform: translateY(0); }
      30%           { transform: translateY(-6px); }
    }

    /* Input Row */
    #ce-input-row {
      display: flex;
      gap: 8px;
      padding: 12px;
      border-top: 1px solid rgba(77,194,232,0.15);
      background: rgba(255,255,255,0.03);
      flex-shrink: 0;
    }
    #ce-input {
      flex: 1;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(77,194,232,0.25);
      border-radius: 12px;
      padding: 9px 14px;
      color: #fff;
      font-size: 13.5px;
      font-family: 'DM Sans', system-ui, sans-serif;
      outline: none;
      transition: border-color 0.15s;
      resize: none;
    }
    #ce-input::placeholder { color: rgba(255,255,255,0.3); }
    #ce-input:focus { border-color: #4dc2e8; }
    #ce-send-btn {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: linear-gradient(135deg, #4dc2e8, #2fa8d4);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: opacity 0.15s, transform 0.15s;
    }
    #ce-send-btn:hover { opacity: 0.88; transform: scale(1.05); }
    #ce-send-btn svg { width: 18px; height: 18px; fill: #fff; }

    /* Footer */
    #ce-footer {
      text-align: center;
      padding: 6px 12px 10px;
      font-size: 10.5px;
      color: rgba(255,255,255,0.2);
      flex-shrink: 0;
    }
    #ce-footer a {
      color: rgba(77,194,232,0.4);
      text-decoration: none;
    }

    /* Mobile adjustments */
    @media (max-width: 420px) {
      #ce-chat-window {
        bottom: 84px;
        right: 12px;
        width: calc(100vw - 24px);
        height: calc(100vh - 100px);
        border-radius: 16px;
      }
      #ce-chat-btn { bottom: 16px; right: 16px; }
    }
  `;

  // ── Knowledge Base ───────────────────────────────────────────
  const KB = [
    {
      keywords: ['book', 'booking', 'reservation', 'reserve', 'availability', 'available', 'stay', 'visit'],
      answer: 'To book a room at Casa Escondida Anilao, you can:\n📞 Call us at +63 977 837 2272\n💬 Message us on Facebook: fb.com/CasaEscondidaAnilao\n🌐 Visit casaescondida-anilao.com\n\nWe recommend booking in advance, especially during peak season (Dec–May). We\'ll check availability and confirm your reservation right away!'
    },
    {
      keywords: ['rate', 'rates', 'price', 'pricing', 'cost', 'fee', 'how much', 'budget'],
      answer: 'Room rates at Casa Escondida Anilao vary by room type and season. We offer competitive pricing that includes breakfast for two. For the most accurate rates and package deals, please contact us directly:\n📞 +63 977 837 2272\n💬 Facebook: CasaEscondidaAnilao\n\nWe also have special dive packages that bundle accommodation with diving!'
    },
    {
      keywords: ['room', 'rooms', 'accommodation', 'suite', 'deluxe', 'standard', 'type', 'types', 'sea view', 'seaview'],
      answer: 'Casa Escondida Anilao offers comfortable sea-view rooms and suites with stunning views of Balayan Bay. Features include:\n\n🛏️ Multiple room types from standard to deluxe suites\n🌊 Most rooms with sea views\n🍳 Breakfast for two included\n❄️ Air-conditioning & hot shower\n📶 Free WiFi\n\nCapacity varies by room type. Contact us for specific room details and availability!'
    },
    {
      keywords: ['breakfast', 'meal', 'food', 'include', 'included', 'dining', 'eat'],
      answer: 'Yes! Breakfast for two guests is included in all room rates at Casa Escondida Anilao. 🍽️\n\nOur restaurant also serves lunch and dinner featuring Filipino and international cuisine. Don\'t miss our famous island BBQ experience where we grill fresh seafood on a nearby island!'
    },
    {
      keywords: ['padi', 'dive', 'diving', 'course', 'courses', 'certification', 'certify', 'learn', 'divemaster', 'open water', 'advanced', 'rescue', 'scuba'],
      answer: 'As a PADI 5-Star Dive Resort, we offer a full range of PADI courses:\n\n🎓 Open Water Diver (beginner)\n🎓 Advanced Open Water Diver\n🎓 Rescue Diver\n🎓 Divemaster\n🎓 Various specialty courses\n🤿 Fun dives for certified divers\n\nAnilao is the birthplace of scuba diving in the Philippines with world-class macro diving. Contact us to enroll!'
    },
    {
      keywords: ['dive site', 'dive sites', 'sites', 'spot', 'spots', 'where dive', 'anilao dive'],
      answer: 'Anilao boasts 30+ world-class dive sites accessible from Casa Escondida! 🐠\n\nHighlights include:\n• Beatrice Rock – famous for nudibranch\n• Kirby\'s Rock – stunning coral formations\n• Cathedral Rock – swim-throughs & pelagics\n• Twin Rocks – macro photography heaven\n• Arthur\'s Rock, Sepoc, Maricaban Island and many more!\n\nAnilao is renowned globally for macro photography and rich marine biodiversity.'
    },
    {
      keywords: ['equipment', 'gear', 'rent', 'rental', 'bcd', 'regulator', 'wetsuit', 'fins', 'mask'],
      answer: 'Yes! We offer complete dive equipment rental at Casa Escondida Anilao:\n\n🤿 BCD, regulator, wetsuit, fins, mask & booties\n📷 Underwater camera rentals available\n\nAll equipment is well-maintained and regularly serviced. Bring your own gear if you prefer — we have secure storage. Contact us for rental rates!'
    },
    {
      keywords: ['night dive', 'night diving', 'night'],
      answer: 'Yes, we organize night dives at Casa Escondida Anilao! 🌙\n\nNight diving in Anilao is spectacular — you\'ll encounter mandarin fish, crabs, octopus, and other nocturnal marine life. Night dives are available for certified divers and are usually conducted at nearby sites. Ask us about scheduling when you book!'
    },
    {
      keywords: ['nitrox', 'enriched air', 'eanx'],
      answer: 'Yes! Nitrox (Enriched Air) is available at Casa Escondida Anilao. 🧪\n\nNitrox allows longer bottom times and shorter surface intervals — perfect for multiple-dive days. You\'ll need a valid PADI Enriched Air Diver certification (or we can certify you here!). Contact us for nitrox fill pricing.'
    },
    {
      keywords: ['location', 'where', 'address', 'mabini', 'batangas', 'anilao', 'place', 'find'],
      answer: 'Casa Escondida Anilao is located in Mabini, Batangas, Philippines — in the heart of Anilao, the birthplace of Philippine diving! 📍\n\nMabini, Batangas\nPhilippines\n\nAnilao is a barangay in the municipality of Mabini, along the western coast of Batangas facing Balayan Bay.'
    },
    {
      keywords: ['manila', 'far', 'distance', 'km', 'kilometers', 'hour', 'hours', 'drive', 'how long', 'travel time'],
      answer: 'Casa Escondida Anilao is approximately 140 km south of Manila. 🚗\n\n⏱️ Travel time: 2–3 hours from Manila (depending on traffic)\n🛣️ Route: SLEX → Star Tollway → Batangas → Mabini (Anilao)\n\nWe recommend leaving early morning to avoid Metro Manila traffic. The scenic coastal drive is part of the experience!'
    },
    {
      keywords: ['transport', 'transportation', 'van', 'bus', 'tricycle', 'jeepney', 'get there', 'how to get', 'directions', 'shuttle'],
      answer: 'How to get to Casa Escondida Anilao:\n\n🚐 Private Van (recommended): We can arrange a private transfer from Manila. Contact us for rates.\n\n🚌 Bus + Tricycle:\n1. Take a JAM/DLTB bus from Buendia/Cubao to Batangas City\n2. Take a bus or van to Mabini (Anilao)\n3. Ride a tricycle to the resort\n\nPlease contact us for exact directions and van transfer arrangements!'
    },
    {
      keywords: ['pool', 'swimming pool', 'swim'],
      answer: 'Yes! Casa Escondida Anilao has a swimming pool for guests to enjoy. 🏊\n\nRelax by the pool with views of Balayan Bay between dives. Perfect for a refreshing dip when you\'re not exploring the underwater world!'
    },
    {
      keywords: ['restaurant', 'bar', 'drinks', 'snack', 'coffee', 'beverage'],
      answer: 'Our on-site restaurant serves delicious Filipino and international dishes throughout the day. 🍽️\n\n☕ Breakfast (included in room rate)\n🍜 Lunch & dinner available\n🍹 Refreshments and beverages\n🏝️ Island BBQ — a signature Casa Escondida experience with fresh grilled seafood!\n\nAsk us about the island BBQ when you book your stay!'
    },
    {
      keywords: ['bbq', 'barbecue', 'island bbq', 'island', 'picnic'],
      answer: 'Our Island BBQ is one of the most loved experiences at Casa Escondida Anilao! 🏝️🔥\n\nWe take guests to a nearby island for a fresh seafood BBQ experience — grilled fish, squid, and more while surrounded by beautiful scenery. Ask us about availability and inclusions when you book!'
    },
    {
      keywords: ['beach', 'beachfront', 'shoreline', 'sand', 'coast', 'waterfront'],
      answer: 'Casa Escondida Anilao enjoys beautiful waterfront access along Balayan Bay. 🌊\n\nWhile Anilao is better known for its incredible diving than sandy beaches, guests enjoy stunning coastal scenery, boat access to dive sites, and relaxing sea views from the resort. The real magic is below the surface!'
    },
    {
      keywords: ['wifi', 'wi-fi', 'internet', 'connection', 'signal'],
      answer: 'Yes! Free WiFi is available for all guests at Casa Escondida Anilao. 📶\n\nStay connected to share your amazing underwater photos with the world! Signal strength may vary in some areas of the resort.'
    },
    {
      keywords: ['check in', 'check-in', 'checkin', 'check out', 'check-out', 'checkout', 'arrival', 'departure', 'time', 'early', 'late'],
      answer: 'Casa Escondida Anilao check-in/out times:\n\n🕑 Check-in: 2:00 PM\n🕛 Check-out: 12:00 PM (noon)\n\nEarly check-in and late check-out may be available depending on room availability — please request in advance when booking. We\'ll do our best to accommodate you!'
    },
    {
      keywords: ['policy', 'policies', 'cancellation', 'refund', 'children', 'kids', 'pet', 'pets', 'smoking'],
      answer: 'For our current policies on cancellations, children, pets, and other house rules, please contact us directly:\n\n📞 +63 977 837 2272\n💬 Facebook: CasaEscondidaAnilao\n🌐 casaescondida-anilao.com\n\nOur team will provide full details and ensure your stay meets all your needs!'
    },
    {
      keywords: ['review', 'reviews', 'rating', 'tripadvisor', 'google', 'feedback', 'testimonial', 'star', 'stars'],
      answer: 'Casa Escondida Anilao is highly rated by guests! ⭐\n\n⭐ TripAdvisor: 4.5 / 5\n⭐ Google: 4.7 / 5\n\nGuests consistently praise our dive operations, friendly staff, delicious food, and stunning location. We\'re proud to be one of Anilao\'s top-rated dive resorts!'
    },
    {
      keywords: ['package', 'packages', 'deal', 'deals', 'all inclusive', 'promo', 'special', 'bundle'],
      answer: 'Casa Escondida Anilao offers various dive and accommodation packages:\n\n🤿 Dive packages bundling stays with unlimited boat dives\n🎓 Course packages (PADI certification + accommodation)\n🏝️ Island BBQ packages\n💑 Couple and group rates\n\nPackages and promos change seasonally. Contact us for the latest deals:\n📞 +63 977 837 2272 | 💬 CasaEscondidaAnilao on Facebook'
    },
    {
      keywords: ['contact', 'call', 'phone', 'number', 'facebook', 'email', 'message', 'reach', 'inquire', 'inquiry'],
      answer: 'Get in touch with Casa Escondida Anilao:\n\n📞 Phone/Viber/WhatsApp: +63 977 837 2272\n💬 Facebook: fb.com/CasaEscondidaAnilao\n🌐 Website: casaescondida-anilao.com\n\nWe typically respond within a few hours. You can also message us directly on Facebook Messenger for quick replies!'
    },
    {
      keywords: ['group', 'groups', 'corporate', 'team building', 'event', 'party', 'birthday', 'anniversary'],
      answer: 'Casa Escondida Anilao is a great destination for group getaways, team-building, and special occasions! 🥳\n\nWe can accommodate dive groups, non-diving guests, corporate events, and celebrations. Ask us about group rates and exclusive use arrangements:\n📞 +63 977 837 2272\n💬 CasaEscondidaAnilao on Facebook'
    },
    {
      keywords: ['weather', 'season', 'best time', 'when visit', 'monsoon', 'typhoon', 'summer'],
      answer: 'Best time to visit Casa Escondida Anilao:\n\n☀️ Peak season: December to May (dry season, calm seas, excellent visibility)\n🌧️ Wet season: June to November (some typhoon risk, but diving still possible most days)\n\n✨ Pro tip: Visibility is often best from November to May, with water temperatures around 27–30°C year-round. Anilao is a year-round destination!'
    },
    {
      keywords: ['certification', 'certified', 'non diver', 'beginner', 'first time', 'try', 'discover', 'dsd'],
      answer: 'Never dived before? No problem! 🤿\n\nAt Casa Escondida Anilao you can:\n\n🌊 Try a Discover Scuba Diving (DSD) experience — no prior experience needed!\n🎓 Enroll in the PADI Open Water Diver course — get fully certified in 3–4 days\n\nOur experienced PADI instructors will guide you every step of the way. Anilao\'s calm, clear waters are perfect for beginners!'
    }
  ];

  // ── Suggested Questions ──────────────────────────────────────
  const SUGGESTIONS = [
    'How do I book a room?',
    'What PADI courses do you offer?',
    'How far is Anilao from Manila?',
    "What's included in the room rate?",
    'Do you have dive equipment for rent?',
    'What are your check-in times?',
    'Tell me about your dive sites',
    'Do you have night diving?',
    'What are your guest reviews?'
  ];

  const GREETING = "Hi! 👋 Welcome to Casa Escondida Anilao. I'm your resort assistant — ask me anything about diving, rooms, or how to get here!";
  const FALLBACK  = "I'd be happy to help! For this question, please contact us directly:\n📞 +63 977 837 2272\n💬 Facebook: CasaEscondidaAnilao\n🌐 casaescondida-anilao.com";

  // ── Fuzzy Matching ───────────────────────────────────────────
  function findAnswer(query) {
    const q = query.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
    const words = q.split(/\s+/).filter(Boolean);
    if (!words.length) return FALLBACK;

    let best = null;
    let bestScore = 0;

    KB.forEach(function (entry) {
      var matching = 0;
      words.forEach(function (w) {
        if (entry.keywords.some(function (k) {
          return k.toLowerCase().includes(w) || w.includes(k.toLowerCase());
        })) {
          matching++;
        }
      });
      var score = matching / words.length;
      if (score > bestScore) {
        bestScore = score;
        best = entry;
      }
    });

    if (best && bestScore >= 0.3) return best.answer;

    // secondary: check if any keyword substring matches
    var qFlat = q;
    var secondBest = null;
    var secondScore = 0;
    KB.forEach(function (entry) {
      var hits = 0;
      entry.keywords.forEach(function (k) {
        if (qFlat.includes(k.toLowerCase())) hits++;
      });
      if (hits > secondScore) {
        secondScore = hits;
        secondBest = entry;
      }
    });
    if (secondBest && secondScore > 0) return secondBest.answer;

    return FALLBACK;
  }

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
      <button id="ce-chat-btn" aria-label="Open Casa Escondida resort chat">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
        <span class="ce-badge"></span>
      </button>

      <div id="ce-chat-window" class="ce-hidden" role="dialog" aria-label="Casa Escondida Resort Chat">
        <div id="ce-chat-header">
          <div class="ce-header-avatar">🤿</div>
          <div class="ce-header-text">
            <div class="ce-header-title">Casa Escondida Anilao</div>
            <div class="ce-header-sub">Resort Assistant · Usually replies instantly</div>
          </div>
          <div class="ce-online-dot" title="Online"></div>
          <button id="ce-close-btn" aria-label="Close chat">&#x2715;</button>
        </div>

        <div id="ce-suggestions"></div>

        <div id="ce-messages" role="log" aria-live="polite"></div>

        <div id="ce-input-row">
          <input id="ce-input" type="text" placeholder="Ask about diving, rooms, or how to get here…" maxlength="300" autocomplete="off" />
          <button id="ce-send-btn" aria-label="Send message">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
        <div id="ce-footer">Powered by <a href="https://casaescondida-anilao.com" target="_blank">casaescondida-anilao.com</a></div>
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
    var suggRotateIdx = 0;
    var suggTimer    = null;

    // ── Suggestions rotation ──
    function renderSuggestions(start) {
      suggestEl.innerHTML = '';
      var count = Math.min(3, SUGGESTIONS.length);
      for (var i = 0; i < count; i++) {
        var idx = (start + i) % SUGGESTIONS.length;
        (function (text) {
          var b = document.createElement('button');
          b.className = 'ce-suggest-btn';
          b.textContent = text;
          b.addEventListener('click', function () { sendMessage(text); });
          suggestEl.appendChild(b);
        })(SUGGESTIONS[idx]);
      }
    }

    function startSuggRotation() {
      renderSuggestions(suggRotateIdx);
      suggTimer = setInterval(function () {
        suggRotateIdx = (suggRotateIdx + 3) % SUGGESTIONS.length;
        renderSuggestions(suggRotateIdx);
      }, 8000);
    }

    function stopSuggRotation() {
      if (suggTimer) { clearInterval(suggTimer); suggTimer = null; }
    }

    // ── Message helpers ──
    function appendMessage(text, role) {
      var msg = document.createElement('div');
      msg.className = 'ce-msg ' + role;

      if (role === 'ce-bot') {
        var av = document.createElement('div');
        av.className = 'ce-msg-avatar';
        av.textContent = '🤿';
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
      av.textContent = '🤿';
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

    // ── Send message ──
    function sendMessage(text) {
      var q = (text || input.value).trim();
      if (!q) return;
      input.value = '';
      appendMessage(q, 'ce-user');
      showTyping();
      var delay = 600 + Math.random() * 400;
      setTimeout(function () {
        removeTyping();
        var answer = findAnswer(q);
        appendMessage(answer, 'ce-bot');
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
      btn.querySelector('.ce-badge').style.display = 'none';
      startSuggRotation();
      if (!greeted) {
        greeted = true;
        setTimeout(function () { appendMessage(GREETING, 'ce-bot'); }, 300);
      }
      setTimeout(function () { input.focus(); }, 350);
    }

    function closeChat() {
      window_.classList.add('ce-hidden');
      isOpen = false;
      stopSuggRotation();
    }

    btn.addEventListener('click', function () { isOpen ? closeChat() : openChat(); });
    closeBtn.addEventListener('click', closeChat);

    // close on backdrop click (outside window)
    document.addEventListener('click', function (e) {
      if (isOpen && !window_.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
        closeChat();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
