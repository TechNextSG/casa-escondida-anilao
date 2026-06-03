(function () {
  'use strict';

  /* ============================================================
     CASA ESCONDIDA ANILAO - Resort Chatbot
     PADI 5-Star Dive Resort | Mabini, Batangas, Philippines
  ============================================================ */

  // ── Styles ──────────────────────────────────────────────────
  const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

    /* ── Reset — scoped to chatbot wrapper ── */
    #ce-chatbot-wrap,
    #ce-chatbot-wrap * {
      box-sizing: border-box !important;
      font-family: 'DM Sans', system-ui, -apple-system, sans-serif !important;
    }
    #ce-chatbot-wrap *:not(style):not(script) {
      margin: 0 !important;
      padding: 0 !important;
    }

    /* ── Floating Button ── */
    #ce-chatbot-wrap #ce-chat-btn {
      position: fixed !important;
      bottom: 24px !important;
      right: 24px !important;
      z-index: 9998 !important;
      width: 56px !important;
      height: 56px !important;
      border-radius: 50% !important;
      background: linear-gradient(135deg, #4dc2e8 0%, #1a8fb5 100%) !important;
      border: none !important;
      cursor: pointer !important;
      box-shadow: 0 4px 20px rgba(77,194,232,0.5), 0 2px 8px rgba(0,0,0,0.2) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s ease !important;
      outline: none !important;
      text-decoration: none !important;
    }
    #ce-chatbot-wrap #ce-chat-btn:hover {
      transform: scale(1.1) !important;
      box-shadow: 0 8px 32px rgba(77,194,232,0.7), 0 4px 12px rgba(0,0,0,0.25) !important;
    }
    #ce-chatbot-wrap #ce-chat-btn svg {
      width: 26px !important;
      height: 26px !important;
      fill: #fff !important;
      display: block !important;
    }
    #ce-chatbot-wrap #ce-chat-btn .ce-badge {
      position: absolute !important;
      top: 2px !important;
      right: 2px !important;
      width: 13px !important;
      height: 13px !important;
      background: #e8c56a !important;
      border-radius: 50% !important;
      border: 2px solid #fff !important;
      animation: ce-badge-pulse 2s ease-in-out infinite !important;
      margin: 0 !important;
      padding: 0 !important;
    }
    @keyframes ce-badge-pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(232,197,106,0.6); }
      50%       { box-shadow: 0 0 0 5px rgba(232,197,106,0); }
    }

    /* ── Chat Window ── */
    #ce-chatbot-wrap #ce-chat-window {
      position: fixed !important;
      bottom: 92px !important;
      right: 24px !important;
      z-index: 9999 !important;
      width: 380px !important;
      max-width: calc(100vw - 24px) !important;
      height: 570px !important;
      max-height: calc(100vh - 110px) !important;
      background: #0d1e2e !important;
      border-radius: 20px !important;
      box-shadow: 0 20px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(77,194,232,0.1) !important;
      border: 1px solid rgba(77,194,232,0.2) !important;
      display: flex !important;
      flex-direction: column !important;
      overflow: hidden !important;
      transform-origin: bottom right !important;
      animation: ce-pop-in 0.25s cubic-bezier(0.34,1.56,0.64,1) both !important;
    }
    @keyframes ce-pop-in {
      from { transform: scale(0.85); opacity: 0; }
      to   { transform: scale(1);    opacity: 1; }
    }
    #ce-chatbot-wrap #ce-chat-window.ce-hidden {
      display: none !important;
    }

    /* ── Header — always dark regardless of theme ── */
    #ce-chatbot-wrap #ce-chat-header {
      background: linear-gradient(135deg, #0a1628 0%, #0d1e2e 100%) !important;
      border-bottom: 1px solid rgba(77,194,232,0.2) !important;
      padding: 14px 16px !important;
      display: flex !important;
      align-items: center !important;
      gap: 10px !important;
      flex-shrink: 0 !important;
    }
    #ce-chatbot-wrap .ce-header-avatar {
      width: 42px !important;
      height: 42px !important;
      border-radius: 50% !important;
      background: linear-gradient(135deg, #4dc2e8 0%, #1a8fb5 100%) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      flex-shrink: 0 !important;
      font-size: 20px !important;
      box-shadow: 0 2px 10px rgba(77,194,232,0.35) !important;
    }
    #ce-chatbot-wrap .ce-header-text {
      flex: 1 !important;
      min-width: 0 !important;
    }
    #ce-chatbot-wrap .ce-header-title {
      color: #ffffff !important;
      font-size: 15px !important;
      font-weight: 700 !important;
      letter-spacing: 0.01em !important;
      line-height: 1.25 !important;
      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
    }
    #ce-chatbot-wrap .ce-header-sub {
      color: rgba(255,255,255,0.5) !important;
      font-size: 11px !important;
      font-weight: 400 !important;
      margin-top: 2px !important;
      display: flex !important;
      align-items: center !important;
      gap: 5px !important;
    }
    #ce-chatbot-wrap .ce-online-dot {
      width: 7px !important;
      height: 7px !important;
      background: #4ade80 !important;
      border-radius: 50% !important;
      flex-shrink: 0 !important;
      box-shadow: 0 0 0 0 rgba(74,222,128,0.5) !important;
      animation: ce-online-pulse 2s ease-in-out infinite !important;
      padding: 0 !important;
    }
    @keyframes ce-online-pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.5); }
      50%       { box-shadow: 0 0 0 5px rgba(74,222,128,0); }
    }
    #ce-chatbot-wrap #ce-close-btn {
      background: rgba(255,255,255,0.07) !important;
      border: 1px solid rgba(255,255,255,0.08) !important;
      color: rgba(255,255,255,0.55) !important;
      cursor: pointer !important;
      width: 32px !important;
      height: 32px !important;
      border-radius: 50% !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      font-size: 16px !important;
      line-height: 1 !important;
      transition: background 0.15s, color 0.15s, border-color 0.15s !important;
      flex-shrink: 0 !important;
      padding: 0 !important;
    }
    #ce-chatbot-wrap #ce-close-btn:hover {
      background: rgba(255,255,255,0.15) !important;
      color: #fff !important;
      border-color: rgba(255,255,255,0.2) !important;
    }

    /* ── Messages Area ── */
    #ce-chatbot-wrap #ce-messages {
      flex: 1 !important;
      overflow-y: auto !important;
      padding: 16px 14px 10px !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 14px !important;
      scrollbar-width: thin !important;
      scrollbar-color: rgba(77,194,232,0.25) transparent !important;
      background: transparent !important;
    }
    #ce-chatbot-wrap #ce-messages::-webkit-scrollbar { width: 3px !important; }
    #ce-chatbot-wrap #ce-messages::-webkit-scrollbar-track { background: transparent !important; }
    #ce-chatbot-wrap #ce-messages::-webkit-scrollbar-thumb {
      background: rgba(77,194,232,0.25) !important;
      border-radius: 4px !important;
    }
    #ce-chatbot-wrap #ce-messages::-webkit-scrollbar-thumb:hover {
      background: rgba(77,194,232,0.45) !important;
    }

    /* ── Message rows ── */
    #ce-chatbot-wrap .ce-msg {
      display: flex !important;
      gap: 8px !important;
      max-width: 92% !important;
      animation: ce-msg-in 0.2s ease both !important;
    }
    @keyframes ce-msg-in {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    #ce-chatbot-wrap .ce-msg.ce-user {
      align-self: flex-end !important;
      flex-direction: row-reverse !important;
      max-width: 85% !important;
    }
    #ce-chatbot-wrap .ce-msg.ce-bot {
      align-self: flex-start !important;
    }

    /* ── Avatars ── */
    #ce-chatbot-wrap .ce-msg-avatar {
      width: 32px !important;
      height: 32px !important;
      border-radius: 50% !important;
      background: linear-gradient(135deg, #4dc2e8 0%, #1a8fb5 100%) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      font-size: 15px !important;
      flex-shrink: 0 !important;
      margin-top: 2px !important;
      box-shadow: 0 2px 8px rgba(77,194,232,0.3) !important;
      padding: 0 !important;
    }

    /* ── Bubbles — base ── */
    #ce-chatbot-wrap .ce-bubble {
      padding: 13px 16px !important;
      border-radius: 16px !important;
      font-size: 14px !important;
      line-height: 1.75 !important;
      max-width: 100% !important;
      word-break: break-word !important;
    }

    /* ── User bubble: teal gradient + white text ── */
    #ce-chatbot-wrap .ce-msg.ce-user .ce-bubble {
      background: linear-gradient(135deg, #4dc2e8 0%, #1a8fb5 100%) !important;
      color: #ffffff !important;
      border: none !important;
      border-bottom-right-radius: 4px !important;
      box-shadow: 0 2px 12px rgba(77,194,232,0.3) !important;
    }

    /* ── Bot bubble: ALWAYS dark navy + light text — never overridden ── */
    #ce-chatbot-wrap .ce-msg.ce-bot .ce-bubble {
      background: #0a1929 !important;
      color: #e8f4f8 !important;
      border: 1px solid rgba(77,194,232,0.2) !important;
      border-bottom-left-radius: 4px !important;
      box-shadow: 0 1px 6px rgba(0,0,0,0.25) !important;
    }

    /* ── Typing Indicator ── */
    #ce-chatbot-wrap .ce-typing {
      display: flex !important;
      gap: 5px !important;
      align-items: center !important;
      padding: 4px 2px !important;
    }
    #ce-chatbot-wrap .ce-typing span {
      width: 7px !important;
      height: 7px !important;
      background: #4dc2e8 !important;
      border-radius: 50% !important;
      animation: ce-bounce 1.3s ease-in-out infinite !important;
      opacity: 0.75 !important;
      display: inline-block !important;
      padding: 0 !important;
      margin: 0 !important;
    }
    #ce-chatbot-wrap .ce-typing span:nth-child(2) { animation-delay: 0.18s !important; }
    #ce-chatbot-wrap .ce-typing span:nth-child(3) { animation-delay: 0.36s !important; }
    @keyframes ce-bounce {
      0%, 55%, 100% { transform: translateY(0);    opacity: 0.6; }
      27%            { transform: translateY(-7px); opacity: 1;   }
    }

    /* ── Suggestion Chips — flex-wrap pills above input ── */
    #ce-chatbot-wrap #ce-suggestions {
      padding: 10px 12px 8px !important;
      display: flex !important;
      gap: 6px !important;
      flex-wrap: wrap !important;
      flex-shrink: 0 !important;
      border-top: 1px solid rgba(77,194,232,0.12) !important;
      background: rgba(4,8,15,0.3) !important;
    }
    #ce-chatbot-wrap #ce-suggestions::-webkit-scrollbar { display: none !important; }
    #ce-chatbot-wrap .ce-suggest-btn {
      flex-shrink: 0 !important;
      background: rgba(77,194,232,0.1) !important;
      border: 1px solid rgba(77,194,232,0.3) !important;
      color: #4dc2e8 !important;
      border-radius: 999px !important;
      padding: 6px 12px !important;
      font-size: 12px !important;
      font-weight: 500 !important;
      cursor: pointer !important;
      white-space: nowrap !important;
      transition: background 0.15s, border-color 0.15s, color 0.15s !important;
      line-height: 1.4 !important;
      display: inline-flex !important;
      align-items: center !important;
      text-decoration: none !important;
    }
    #ce-chatbot-wrap .ce-suggest-btn:hover {
      background: rgba(77,194,232,0.22) !important;
      border-color: #4dc2e8 !important;
      color: #7dd8f5 !important;
    }

    /* ── CTA Action Cards ── */
    #ce-chatbot-wrap .ce-cta-row {
      display: flex !important;
      flex-direction: column !important;
      gap: 7px !important;
      margin-top: 10px !important;
      padding-left: 40px !important;
      padding-right: 0 !important;
      animation: ce-msg-in 0.22s ease 0.06s both !important;
    }
    #ce-chatbot-wrap .ce-cta-btn {
      display: inline-flex !important;
      align-items: center !important;
      gap: 8px !important;
      padding: 10px 14px !important;
      border-radius: 10px !important;
      background: rgba(77,194,232,0.08) !important;
      border: 1px solid rgba(77,194,232,0.35) !important;
      color: #4dc2e8 !important;
      font-size: 13px !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      text-decoration: none !important;
      transition: background 0.18s, border-color 0.18s, transform 0.15s, filter 0.15s !important;
      line-height: 1.3 !important;
    }
    #ce-chatbot-wrap .ce-cta-btn:hover {
      background: rgba(77,194,232,0.2) !important;
      border-color: #4dc2e8 !important;
      transform: translateY(-1px) translateX(2px) !important;
      filter: brightness(1.1) !important;
      color: #7dd8f5 !important;
    }
    #ce-chatbot-wrap .ce-cta-btn.ce-cta-primary {
      background: linear-gradient(135deg, #4dc2e8 0%, #1a8fb5 100%) !important;
      border-color: transparent !important;
      color: #ffffff !important;
      box-shadow: 0 3px 12px rgba(77,194,232,0.3) !important;
    }
    #ce-chatbot-wrap .ce-cta-btn.ce-cta-primary:hover {
      background: linear-gradient(135deg, #62cff0 0%, #22a0cc 100%) !important;
      filter: brightness(1.08) !important;
      transform: translateY(-1px) translateX(2px) !important;
      color: #ffffff !important;
    }
    #ce-chatbot-wrap .ce-cta-icon {
      font-size: 15px !important;
      flex-shrink: 0 !important;
      padding: 0 !important;
      margin: 0 !important;
    }
    #ce-chatbot-wrap .ce-cta-arrow {
      margin-left: auto !important;
      opacity: 0.55 !important;
      font-size: 13px !important;
      font-weight: 700 !important;
      padding: 0 !important;
    }

    /* ── Input Row ── */
    #ce-chatbot-wrap #ce-input-row {
      display: flex !important;
      gap: 8px !important;
      align-items: center !important;
      padding: 10px 12px !important;
      border-top: 1px solid rgba(77,194,232,0.12) !important;
      background: rgba(255,255,255,0.02) !important;
      flex-shrink: 0 !important;
    }
    #ce-chatbot-wrap #ce-input {
      flex: 1 !important;
      background: rgba(255,255,255,0.07) !important;
      border: 1px solid rgba(77,194,232,0.2) !important;
      border-radius: 24px !important;
      padding: 9px 16px !important;
      color: #e8f4f8 !important;
      font-size: 13.5px !important;
      outline: none !important;
      transition: border-color 0.15s, background 0.15s, box-shadow 0.15s !important;
      resize: none !important;
      line-height: 1.4 !important;
      min-height: unset !important;
      box-shadow: none !important;
    }
    #ce-chatbot-wrap #ce-input::placeholder { color: rgba(255,255,255,0.28) !important; }
    #ce-chatbot-wrap #ce-input:focus {
      border-color: rgba(77,194,232,0.6) !important;
      background: rgba(255,255,255,0.1) !important;
      box-shadow: 0 0 0 3px rgba(77,194,232,0.08) !important;
    }
    #ce-chatbot-wrap #ce-send-btn {
      width: 40px !important;
      height: 40px !important;
      border-radius: 50% !important;
      background: linear-gradient(135deg, #4dc2e8 0%, #1a8fb5 100%) !important;
      border: none !important;
      cursor: pointer !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      flex-shrink: 0 !important;
      transition: filter 0.15s, transform 0.15s, box-shadow 0.15s !important;
      box-shadow: 0 2px 10px rgba(77,194,232,0.35) !important;
      padding: 0 !important;
    }
    #ce-chatbot-wrap #ce-send-btn:hover {
      filter: brightness(1.15) !important;
      transform: scale(1.07) !important;
      box-shadow: 0 4px 16px rgba(77,194,232,0.5) !important;
    }
    #ce-chatbot-wrap #ce-send-btn svg {
      width: 17px !important;
      height: 17px !important;
      fill: #fff !important;
      display: block !important;
    }

    /* ── Footer ── */
    #ce-chatbot-wrap #ce-footer {
      text-align: center !important;
      padding: 5px 12px 9px !important;
      font-size: 9px !important;
      color: rgba(255,255,255,0.2) !important;
      flex-shrink: 0 !important;
      letter-spacing: 0.02em !important;
      background: transparent !important;
    }
    #ce-chatbot-wrap #ce-footer a {
      color: rgba(77,194,232,0.38) !important;
      text-decoration: none !important;
      transition: color 0.15s !important;
    }
    #ce-chatbot-wrap #ce-footer a:hover { color: rgba(77,194,232,0.65) !important; }

    /* ── Day mode overrides — bot bubbles STAY dark navy ── */
    #ce-chatbot-wrap[data-ce-theme="day"] #ce-chat-window {
      background: #f8fafc !important;
      border-color: rgba(77,194,232,0.15) !important;
      box-shadow: 0 20px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(77,194,232,0.08) !important;
    }
    #ce-chatbot-wrap[data-ce-theme="day"] #ce-messages {
      background: #f8fafc !important;
    }
    #ce-chatbot-wrap[data-ce-theme="day"] .ce-msg.ce-bot .ce-bubble {
      background: #0a1929 !important;
      color: #e8f4f8 !important;
      border-color: rgba(77,194,232,0.2) !important;
    }
    #ce-chatbot-wrap[data-ce-theme="day"] #ce-suggestions {
      background: rgba(240,245,250,0.98) !important;
      border-top-color: rgba(77,194,232,0.12) !important;
    }
    #ce-chatbot-wrap[data-ce-theme="day"] .ce-suggest-btn {
      background: rgba(26,107,152,0.08) !important;
      border-color: rgba(26,107,152,0.25) !important;
      color: #1a6b98 !important;
    }
    #ce-chatbot-wrap[data-ce-theme="day"] .ce-suggest-btn:hover {
      background: rgba(26,107,152,0.18) !important;
      border-color: #1a6b98 !important;
      color: #135880 !important;
    }
    #ce-chatbot-wrap[data-ce-theme="day"] #ce-input-row {
      background: #ffffff !important;
      border-top-color: rgba(77,194,232,0.1) !important;
    }
    #ce-chatbot-wrap[data-ce-theme="day"] #ce-input {
      background: #f0f5fb !important;
      color: #0d1e2e !important;
      border-color: rgba(0,0,0,0.1) !important;
    }
    #ce-chatbot-wrap[data-ce-theme="day"] #ce-input::placeholder {
      color: rgba(13,30,46,0.35) !important;
    }
    #ce-chatbot-wrap[data-ce-theme="day"] #ce-input:focus {
      border-color: rgba(77,194,232,0.55) !important;
      background: #ffffff !important;
      box-shadow: 0 0 0 3px rgba(77,194,232,0.1) !important;
    }
    #ce-chatbot-wrap[data-ce-theme="day"] #ce-footer {
      color: rgba(0,0,0,0.25) !important;
    }
    #ce-chatbot-wrap[data-ce-theme="day"] #ce-footer a {
      color: rgba(26,107,152,0.6) !important;
    }
    #ce-chatbot-wrap[data-ce-theme="day"] #ce-footer a:hover {
      color: rgba(26,107,152,0.9) !important;
    }

    /* ── Night mode (default dark theme) ── */
    #ce-chatbot-wrap[data-ce-theme="night"] #ce-chat-window {
      background: #0d1e2e !important;
      border-color: rgba(77,194,232,0.2) !important;
      box-shadow: 0 20px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(77,194,232,0.1) !important;
    }
    #ce-chatbot-wrap[data-ce-theme="night"] #ce-messages {
      background: transparent !important;
    }
    #ce-chatbot-wrap[data-ce-theme="night"] #ce-suggestions {
      background: rgba(4,8,15,0.3) !important;
    }
    #ce-chatbot-wrap[data-ce-theme="night"] #ce-input-row {
      background: rgba(255,255,255,0.02) !important;
    }
    #ce-chatbot-wrap[data-ce-theme="night"] #ce-input {
      background: rgba(255,255,255,0.07) !important;
      color: #e8f4f8 !important;
      border-color: rgba(77,194,232,0.2) !important;
    }
    #ce-chatbot-wrap[data-ce-theme="night"] #ce-input::placeholder {
      color: rgba(255,255,255,0.28) !important;
    }

    /* ── Mobile ── */
    @media (max-width: 420px) {
      #ce-chatbot-wrap #ce-chat-window {
        bottom: 80px !important;
        right: 12px !important;
        width: calc(100vw - 24px) !important;
        height: calc(100svh - 100px) !important;
        max-height: none !important;
        border-radius: 18px !important;
      }
      #ce-chatbot-wrap #ce-chat-btn {
        bottom: 16px !important;
        right: 16px !important;
      }
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
  // Resolved at runtime via I18N — see I18N.en.suggestions / I18N.zh.suggestions
  function getSuggestions() { return t('suggestions'); }

  // ── Language helpers ─────────────────────────────────────────
  function getChatLang() {
    return localStorage.getItem('ce-lang') || 'en';
  }

  const I18N = {
    en: {
      headerSub:   'Resort Assistant · Usually replies instantly',
      placeholder: 'Ask about diving, rooms, or how to get here…',
      footer:      'Powered by <a href="https://casaescondida-anilao.com" target="_blank">casaescondida-anilao.com</a>',
      greeting:    "Hi! 👋 Welcome to Casa Escondida Anilao. I'm your resort assistant — ask me anything about diving, rooms, or how to get here!",
      fallback:    "I'd be happy to help! For this question, please contact us directly:\n📞 +63 977 837 2272\n💬 Facebook: CasaEscondidaAnilao\n🌐 casaescondida-anilao.com",
      suggestions: [
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
      ]
    },
    zh: {
      headerSub:   '度假村助手 · 通常即时回复',
      placeholder: '询问潜水、客房或如何到达...',
      footer:      '由 <a href="https://casaescondida-anilao.com" target="_blank">casaescondida-anilao.com</a> 提供技术支持',
      greeting:    '您好！👋 欢迎来到 Casa Escondida Anilao。我是您的度假村助手——欢迎询问潜水、客房或如何到达的任何问题！',
      fallback:    '很乐意为您提供帮助！对于这个问题，请直接联系我们：\n📞 +63 977 837 2272\n💬 Facebook: CasaEscondidaAnilao\n🌐 casaescondida-anilao.com',
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
        '马尼拉如何前往？',
        '共有多少间客房？'
      ]
    }
  };

  function t(key) {
    var lang = getChatLang();
    return (I18N[lang] || I18N.en)[key] || I18N.en[key];
  }

  const GREETING = I18N.en.greeting;
  const FALLBACK  = I18N.en.fallback;

  // ── Fuzzy Matching ───────────────────────────────────────────
  function findAnswer(query) {
    const q = query.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
    const words = q.split(/\s+/).filter(Boolean);
    if (!words.length) return t('fallback');

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

    return t('fallback');
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
            <div class="ce-header-sub" id="ce-header-sub"></div>
          </div>
          <div class="ce-online-dot" title="Online"></div>
          <button id="ce-close-btn" aria-label="Close chat">&#x2715;</button>
        </div>

        <div id="ce-messages" role="log" aria-live="polite"></div>

        <div id="ce-suggestions"></div>

        <div id="ce-input-row">
          <input id="ce-input" type="text" maxlength="300" autocomplete="off" />
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

    // Watch for language changes via localStorage (storage event from other tabs)
    // and also via a custom 'ce-lang-change' event dispatched by the language switcher
    window.addEventListener('storage', function(e) {
      if (e.key === 'ce-lang') applyLang();
    });
    document.addEventListener('ce-lang-change', function() { applyLang(); });

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
        var entry = findEntry(q);
        var answer = entry ? entry.answer : t('fallback');
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
        setTimeout(function () { appendMessage(t('greeting'), 'ce-bot'); }, 300);
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
