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
      border: 1px solid rgba(77,194,232,0.15);
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

    /* Suggestions — sits ABOVE the input row */
    #ce-suggestions {
      padding: 8px 12px;
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      flex-shrink: 0;
      border-top: 1px solid rgba(77,194,232,0.12);
      background: rgba(4,8,15,0.3);
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
      padding: 16px 14px 10px;
      display: flex;
      flex-direction: column;
      gap: 14px;
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
      padding: 13px 16px;
      border-radius: 16px;
      font-size: 13.5px;
      line-height: 1.7;
      max-width: 100%;
      word-break: break-word;
    }
    .ce-msg.ce-user .ce-bubble {
      background: linear-gradient(135deg, #4dc2e8 0%, #2fa8d4 100%);
      color: #fff;
      border-bottom-right-radius: 4px;
    }
    .ce-msg.ce-bot .ce-bubble {
      background: rgba(13,30,46,0.88);
      color: #e8f4f8;
      border: 1px solid rgba(77,194,232,0.2);
      border-bottom-left-radius: 4px;
    }

    /* Action CTA Cards */
    .ce-cta-row {
      display: flex;
      flex-direction: column;
      gap: 7px;
      margin-top: 10px;
      padding-left: 38px;
    }
    .ce-cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 14px;
      border-radius: 10px;
      background: rgba(77,194,232,0.12);
      border: 1px solid rgba(77,194,232,0.35);
      color: #4dc2e8;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      transition: background .18s, border-color .18s, transform .15s;
      animation: ce-msg-in 0.22s ease;
    }
    .ce-cta-btn:hover {
      background: rgba(77,194,232,0.22);
      border-color: #4dc2e8;
      transform: translateX(3px);
    }
    .ce-cta-btn.ce-cta-primary {
      background: linear-gradient(135deg,#4dc2e8,#2fa8d4);
      border-color: transparent;
      color: #fff;
    }
    .ce-cta-btn.ce-cta-primary:hover {
      background: linear-gradient(135deg,#5dd2f8,#3fb8e4);
      transform: translateX(3px);
    }
    .ce-cta-icon { font-size: 15px; flex-shrink: 0; }
    .ce-cta-arrow { margin-left: auto; opacity: .6; font-size: 12px; }

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
      answer: 'To book a room at Casa Escondida Anilao:\n📞 +63 977 837 2272\n💬 Facebook: CasaEscondidaAnilao\n\nWe recommend booking in advance (peak: Dec–May). We\'ll confirm your reservation right away!',
      cta: [
        { label: 'Book Your Stay', url: '/#booking', icon: '📅', primary: true },
        { label: 'View Room Types', url: 'rooms.html', icon: '🛏️' }
      ]
    },
    {
      keywords: ['rate', 'rates', 'price', 'pricing', 'cost', 'fee', 'how much', 'budget'],
      answer: 'Room rates vary by type and season — all include breakfast for two. We also have dive+stay packages. Contact us for the latest rates:\n📞 +63 977 837 2272\n💬 Facebook: CasaEscondidaAnilao',
      cta: [
        { label: 'See Room Options', url: 'rooms.html', icon: '🛏️', primary: true },
        { label: 'Book & Check Rates', url: '/#booking', icon: '📅' }
      ]
    },
    {
      keywords: ['room', 'rooms', 'accommodation', 'suite', 'deluxe', 'standard', 'type', 'types', 'sea view', 'seaview'],
      answer: 'We offer sea-view rooms and suites with views of Balayan Bay:\n\n🛏️ Standard Double/Twin\n🌊 Deluxe Sea View\n✨ Suite with Sea View\n🍳 Breakfast for two included\n❄️ A/C, hot shower, free WiFi',
      cta: [
        { label: 'Explore All Rooms', url: 'rooms.html', icon: '🛏️', primary: true },
        { label: 'Book Now', url: '/#booking', icon: '📅' }
      ]
    },
    {
      keywords: ['breakfast', 'meal', 'food', 'include', 'included', 'dining', 'eat'],
      answer: 'Yes! Breakfast for two guests is included in all room rates at Casa Escondida Anilao. 🍽️\n\nOur restaurant also serves lunch and dinner featuring Filipino and international cuisine. Don\'t miss our famous island BBQ experience where we grill fresh seafood on a nearby island!'
    },
    {
      keywords: ['padi', 'dive', 'diving', 'course', 'courses', 'certification', 'certify', 'learn', 'divemaster', 'open water', 'advanced', 'rescue', 'scuba'],
      answer: 'As a PADI 5-Star Dive Center, we offer:\n\n🎓 Open Water Diver · Advanced OW\n🎓 Rescue Diver · Divemaster\n🎓 Specialty courses\n🤿 Fun dives for certified divers\n\nAnilao is the birthplace of Philippine scuba diving!',
      cta: [
        { label: 'Explore Dive Center', url: 'dive.html', icon: '🤿', primary: true },
        { label: 'Book a Dive Package', url: '/#booking', icon: '📅' }
      ]
    },
    {
      keywords: ['dive site', 'dive sites', 'sites', 'spot', 'spots', 'where dive', 'anilao dive'],
      answer: 'Anilao has 30+ world-class dive sites! 🐠\n\n• Beatrice Rock – nudibranchs\n• Kirby\'s Rock – coral formations\n• Cathedral Rock – swim-throughs\n• Twin Rocks – macro photography\n• Arthur\'s Rock, Sepoc & more!\n\nRenowned globally for macro photography.',
      cta: [
        { label: 'See All Dive Sites', url: 'dive.html#sites', icon: '🗺️', primary: true },
        { label: 'Book Dive Package', url: '/#booking', icon: '📅' }
      ]
    },
    {
      keywords: ['equipment', 'gear', 'rent', 'rental', 'bcd', 'regulator', 'wetsuit', 'fins', 'mask'],
      answer: 'Yes! Full dive gear rental available:\n\n🤿 BCD, regulator, wetsuit, fins, mask\n📷 Underwater camera rentals\n\nAll equipment is well-maintained. You can also bring your own gear.',
      cta: [
        { label: 'View Dive Packages', url: 'dive.html#packages', icon: '🤿', primary: true }
      ]
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
      answer: 'Casa Escondida is in Mabini, Batangas — the heart of Anilao, birthplace of Philippine diving! 📍\n\nBrgy. Ligaya, Mabini, Batangas 4202, Philippines',
      cta: [
        { label: 'View Map & Directions', url: 'location.html', icon: '📍', primary: true },
        { label: 'Get Directions', url: 'https://www.google.com/maps/dir/?api=1&destination=Casa+Escondida+Anilao', icon: '🗺️' }
      ]
    },
    {
      keywords: ['manila', 'far', 'distance', 'km', 'kilometers', 'hour', 'hours', 'drive', 'how long', 'travel time'],
      answer: '~140 km south of Manila 🚗\n\n⏱️ 2–3 hours by car\n🛣️ SLEX → Star Tollway → Batangas → Mabini\n\nLeave early to beat Metro traffic!',
      cta: [
        { label: 'Full Directions Guide', url: 'location.html', icon: '🗺️', primary: true },
        { label: 'Open Google Maps', url: 'https://www.google.com/maps/dir/?api=1&destination=Casa+Escondida+Anilao', icon: '📍' }
      ]
    },
    {
      keywords: ['transport', 'transportation', 'van', 'bus', 'tricycle', 'jeepney', 'get there', 'how to get', 'directions', 'shuttle'],
      answer: 'How to get here:\n\n🚐 Private van (recommended) — we can arrange from Manila\n🚌 Bus + Tricycle:\n1. JAM/DLTB bus → Batangas City\n2. Bus/van → Mabini (Anilao)\n3. Tricycle to the resort',
      cta: [
        { label: 'Full Transport Guide', url: 'location.html', icon: '🚐', primary: true },
        { label: 'Contact for Transfer', url: 'location.html#contact', icon: '📞' }
      ]
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
      answer: 'Highly rated by guests! ⭐\n\n⭐ TripAdvisor: 4.5 / 5 (81 reviews)\n⭐ Google: 4.7 / 5 (230+ reviews)\n\nGuests love our diving, staff, food, and stunning location!',
      cta: [
        { label: 'Read TripAdvisor Reviews', url: 'https://www.tripadvisor.com.ph/Hotel_Review-g1587920-d10086753', icon: '⭐', primary: true },
        { label: 'Google Reviews', url: 'https://www.google.com/maps/place/Casa+Escondida+Anilao', icon: '🌟' }
      ]
    },
    {
      keywords: ['package', 'packages', 'deal', 'deals', 'all inclusive', 'promo', 'special', 'bundle'],
      answer: 'We offer various packages:\n\n🤿 Dive + Stay (unlimited boat dives)\n🎓 PADI Course + Accommodation\n🏝️ Island BBQ packages\n💑 Couple & group rates\n\nPackages change seasonally — contact us for current deals!',
      cta: [
        { label: 'View Dive Packages', url: 'dive.html#packages', icon: '🤿', primary: true },
        { label: 'Book a Package', url: '/#booking', icon: '📅' }
      ]
    },
    {
      keywords: ['contact', 'call', 'phone', 'number', 'facebook', 'email', 'message', 'reach', 'inquire', 'inquiry'],
      answer: 'Get in touch:\n\n📞 +63 977 837 2272\n💬 fb.com/CasaEscondidaAnilao\n🌐 casaescondida-anilao.com\n\nWe reply within a few hours. Facebook Messenger is fastest!',
      cta: [
        { label: 'Contact Page', url: 'location.html#contact', icon: '✉️', primary: true },
        { label: 'Message on Facebook', url: 'https://www.facebook.com/CasaEscondidaAnilao', icon: '💬' }
      ]
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
    'How to book a room?',
    'PADI courses available?',
    'Distance from Manila?',
    "What's in the room rate?",
    'Dive gear for rent?',
    'Check-in / check-out time?',
    'Best dive sites?',
    'Night diving available?',
    'What are the reviews?',
    'Island BBQ experience?',
    'Transfer from Manila?',
    'How many rooms?'
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

        <div id="ce-messages" role="log" aria-live="polite"></div>

        <div id="ce-suggestions"></div>

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
    var suggPool     = [];   // shuffled queue
    var suggUsed     = [];   // used this cycle
    var answeredQs   = [];   // questions already answered — never show again

    // ── Fisher-Yates shuffle ──
    function shuffle(arr) {
      var a = arr.slice();
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = a[i]; a[i] = a[j]; a[j] = t;
      }
      return a;
    }

    // ── Get next 3 unique suggestions (never show answered ones again) ──
    function nextBatch() {
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

    // ── Render CTA action cards ──
    function appendCTA(ctaList) {
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
          '<span class="ce-cta-icon">' + (c.icon || '→') + '</span>'
          + '<span>' + c.label + '</span>'
          + '<span class="ce-cta-arrow">→</span>';
        row.appendChild(a);
      });
      messages.appendChild(row);
      messages.scrollTop = messages.scrollHeight;
    }

    // ── Find KB entry (returns entry object, not just answer string) ──
    function findEntry(query) {
      var q = query.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
      var words = q.split(/\s+/).filter(Boolean);
      if (!words.length) return null;
      var best = null, bestScore = 0;
      KB.forEach(function(entry) {
        var matching = 0;
        words.forEach(function(w) {
          if (entry.keywords.some(function(k) {
            return k.toLowerCase().includes(w) || w.includes(k.toLowerCase());
          })) matching++;
        });
        var score = matching / words.length;
        if (score > bestScore) { bestScore = score; best = entry; }
      });
      if (best && bestScore >= 0.3) return best;
      var qFlat = q; var secondBest = null; var secondScore = 0;
      KB.forEach(function(entry) {
        var hits = 0;
        entry.keywords.forEach(function(k) { if (qFlat.includes(k.toLowerCase())) hits++; });
        if (hits > secondScore) { secondScore = hits; secondBest = entry; }
      });
      return (secondBest && secondScore > 0) ? secondBest : null;
    }

    // ── Send message ──
    function sendMessage(text) {
      var q = (text || input.value).trim();
      if (!q) return;
      input.value = '';
      // Mark as answered if it was a suggestion question
      if (SUGGESTIONS.indexOf(q) !== -1 && answeredQs.indexOf(q) === -1) {
        answeredQs.push(q);
      }
      appendMessage(q, 'ce-user');
      showTyping();
      var delay = 600 + Math.random() * 400;
      setTimeout(function () {
        removeTyping();
        var entry = findEntry(q);
        var answer = entry ? entry.answer : FALLBACK;
        appendMessage(answer, 'ce-bot');
        // Render CTA action cards if entry has them
        if (entry && entry.cta) appendCTA(entry.cta);
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

    // close on backdrop click
    document.addEventListener('click', function (e) {
      if (isOpen && !window_.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
        closeChat();
      }
    });

    // ── Theme awareness (day / night) ──
    function applyTheme() {
      var isDark = document.documentElement.getAttribute('data-theme') !== 'day';
      // Window
      window_.style.background  = isDark ? '#0d1e2e' : '#f8fafc';
      window_.style.borderColor = isDark ? 'rgba(77,194,232,0.18)' : 'rgba(0,0,0,0.1)';
      window_.style.boxShadow   = isDark ? '0 12px 48px rgba(0,0,0,0.5)' : '0 8px 32px rgba(0,0,0,0.18)';
      // Header
      var header = document.getElementById('ce-chat-header');
      if (header) {
        header.style.background  = isDark ? 'linear-gradient(135deg,#0d1e2e,#122839)' : 'linear-gradient(135deg,#0d1e2e,#1a3050)';
        header.style.borderColor = 'rgba(77,194,232,0.2)';
      }
      // Messages area
      var msgs = document.getElementById('ce-messages');
      if (msgs) msgs.style.background = isDark ? 'transparent' : '#f0f4f8';
      // Bot bubbles — fix invisible text in day mode
      msgs && msgs.querySelectorAll('.ce-msg.ce-bot .ce-bubble').forEach(function(b) {
        b.style.background = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(13,30,46,0.92)';
        b.style.color      = '#e8f4f8';  /* always light — bubble is always dark */
      });
      // Input row
      var inputRow = document.getElementById('ce-input-row');
      if (inputRow) {
        inputRow.style.borderColor = isDark ? 'rgba(77,194,232,0.15)' : 'rgba(0,0,0,0.1)';
        inputRow.style.background  = isDark ? '#0d1e2e' : '#ffffff';
      }
      var inp = document.getElementById('ce-input');
      if (inp) { inp.style.color = isDark ? '#e8f4f8' : '#0d1e2e'; }
      // Suggestions
      var sugg = document.getElementById('ce-suggestions');
      if (sugg) sugg.style.background = isDark ? 'rgba(4,8,15,0.3)' : 'rgba(13,30,46,0.04)';
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
