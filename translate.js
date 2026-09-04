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

      /* Nav link keys (used on legal pages + any page with data-i18n on nav) */
      nav_about:    'About',    nav_rooms:    'Rooms',
      nav_dive:     'Dive',     nav_gallery:  'Gallery',
      nav_location: 'Location', nav_blog:     'Blog',
      nav_book:     'Book Now',

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
      incl_breakfast:     'Breakfast Available',

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
      booking_title:      'Ready to <em>Dive In?</em>',
      booking_sub:        'Fill in your details and we will get back to you within 24 hours.',
      check_availability: 'Check Availability',

      /* Exit popup */
      exit_title:         'Wait — <em>are you sure?</em>',
      exit_sub:           'Enjoy 10% off your first stay when you book directly with us.',
      stay_btn:           'Claim My Discount',
      leave_btn:          'No Thanks',

      /* Footer */
      all_rights:         'All rights reserved.',
      contact_info:       'Contact Information',

      /* ── NEW HOMEPAGE KEYS ── */
      hero_tag:           'Anilao · Mabini · Batangas',
      hero_sub_new:       'Where the Ocean Becomes Home',
      our_story:          'Our Story',
      about_title:        'A Hidden <em>Paradise</em><br>in Batangas',
      about_p1:           'We are a boutique PADI 5 Star IDC Resort nestled in the heart of Anilao — the birthplace of Philippine diving and one of the world\'s top macro-diving destinations.',
      about_p2:           'Whether you\'re here to earn your Open Water certification, chase nudibranch on a night dive, or simply unwind by the sea, Casa Escondida is your perfect base.',
      services_eyebrow:   'Amenities & Services',
      everything_you_need: 'Everything You <em>Need</em>',
      services_sub:       'From thrilling dives to relaxed beachside afternoons — Casa Escondida is your complete destination.',
      svc_name_1:         'PADI Dive Center',
      svc_name_2:         'Pool & Beach',
      svc_name_3:         'Restaurant & Bar',
      svc_name_4:         'Comfortable Rooms',
      svc_name_5:         'Island Excursions',
      svc_name_6:         'Events & Groups',
      svc_desc_1:         'Certified instruction, fun dives, equipment rental, and access to 30+ premier dive sites.',
      svc_desc_2:         'Relax by our freshwater pool or take in the stunning sea views from our private beachfront.',
      svc_desc_3:         'Fresh Filipino cuisine, international favourites, and hand-crafted cocktails with ocean views.',
      svc_desc_4:         'Air-conditioned rooms with private bathrooms, Wi-Fi, and breathtaking sea or garden views.',
      svc_desc_5:         'Day trips to nearby islands, snorkelling tours, and island BBQ experiences.',
      svc_desc_6:         'Tailored packages for dive groups, corporate retreats, and private celebrations.',
      rooms_eyebrow:      'Accommodation',
      rooms_heading:      'Rest &amp; <em>Recharge</em>',
      rooms_lead:         'Choose from 24 rooms — 8 with direct ocean views — designed for the diving traveler. Fall asleep to the sound of waves, wake up ready to dive.',
      rm_name_1:          'Standard <em>Room</em>',
      rm_name_2:          'Deluxe <em>Double or Twin</em> Room',
      rm_name_3:          'Suite <em>with Sea View</em>',
      reviews_eyebrow:    'What Our Guests Say',
      reviews_title:      'What Our <em>Guests</em> Say',
      gallery_eyebrow:    'Gallery',
      gallery_title:      'Life at <em>Casa<br>Escondida</em>',
      location_eyebrow_home: 'Find Your Way to Anilao',
      location_home_title: 'Find Your Way to <em>Anilao</em>',
      foot_h_1:           'Explore',
      foot_h_2:           'Dive & Stay',
      foot_h_3:           'Reviews',
      foot_h_4:           'Contact',
      copyright:          'All Rights Reserved',

      /* ── NEW ROOMS PAGE KEYS ── */
      rooms_page_eyebrow: 'Accommodation',
      rooms_h1:           'Rooms & Suites',
      rooms_page_sub:     '24 rooms in three types — 16 Standard, 4 Deluxe & 4 Suites — all designed for the diving traveler.',
      rm_card_name_1:     'Standard <em>Room</em>',
      rm_card_name_2:     'Deluxe <em>Room</em>',
      rm_card_name_3:     'Suite <em>Room</em>',
      rm_card_desc_1:     'A stone\'s throw away from our dining area; each standard room comes with your choice of 1 king-size bed or 2 single beds.',
      rm_card_desc_2:     'Our deluxe rooms offer true comfort and an ocean view from the balcony, 2 queen-size beds and a generous shower area.',
      rm_card_desc_3:     'Directly overlooking the pool and ocean beyond, each private suite comes with 2 queen beds or 1 king bed, double sink vanities, and a jacuzzi in the private bath.',

      /* ── NEW DIVE PAGE KEYS ── */
      dive_page_eyebrow:  'PADI 5 Star IDC Resort',
      dive_h1:            'Scuba Diving <em>Anilao, Batangas</em>',
      dive_page_sub:      'One of the world\'s top macro-diving destinations — fun dives, PADI courses, and night dives right from our private jetty.',
      dive_stat_1:        'Dive Sites',
      dive_stat_2:        'Depth Range',
      dive_stat_3:        'Certifications',
      dive_stat_4:        'Star Rating',

      /* ── NEW GALLERY PAGE KEYS ── */
      gallery_page_eyebrow: 'Photo & Video Gallery',
      gallery_h1:           'Life at <em>Casa Escondida</em>',
      gallery_page_sub:     'Real photos and videos from our Facebook and Instagram — dive life, resort moments, and the underwater world of Anilao.',
      tab_underwater:       'Underwater',
      tab_facebook:         'Facebook',
      tab_instagram:        'Instagram',
      tab_videos:           'Videos',
      gallery_stat_1:       'Instagram Posts',
      gallery_stat_2:       'Dive Sites',
      gallery_stat_3:       'TripAdvisor Reviews',
      gallery_stat_4:       'Overall Rating',
      gallery_hero_cta_ghost:   'Book Your Stay →',
      gallery_hero_cta_primary: 'Follow on Instagram',
      gallery_fb_eyebrow:   'Facebook',
      gallery_fb_h2:        'Live from Our <em>Facebook Page</em>',
      gallery_fb_sub:       'Real photos and posts direct from our official Facebook page — updated daily with dive conditions, guest shots, and resort news.',
      gallery_fb_cta_p:     'See more photos, dive updates, and resort moments on our official Facebook page.',
      gallery_fb_cta_btn:   'Follow Us on Facebook @CasaEscondidaAnilao',
      gallery_ig_eyebrow:   'Instagram',
      gallery_ig_h2:        'Follow Us on <em>Instagram</em>',
      gallery_ig_sub:       'Real diving life, macro critters, underwater photography, and resort moments from @casaescondidaanilao.',
      gallery_ig_cta_p:     'We have 802 posts on Instagram — follow us to see all the latest dives, critter spotting, and resort life.',
      gallery_ig_cta_btn:   'View All on Instagram @casaescondidaanilao',
      gallery_video_eyebrow:'Watch',
      gallery_video_h2:     'Casa Escondida <em>on Video</em>',
      gallery_video_sub:    "Real guest vlogs and official videos — see exactly what makes Casa Escondida Anilao's most-loved dive resort.",
      /* Gallery creature filter + modal */
      uw_filter_all:        'All Creatures',
      uw_filter_nudi:       'Nudibranchs',
      uw_filter_reef:       'Reef Fish',
      uw_filter_macro:      'Macro & Cephalopods',
      uw_filter_coral:      'Corals & Anemones',
      uw_filter_turtle:     'Turtles & Sponges',
      uw_species:           'SPECIES',
      uw_photos:            'PHOTOS',
      uw_spec_size:         'Size',
      uw_spec_depth:        'Depth',
      uw_spec_season:       'Best Season',
      uw_spec_rarity:       'Rarity',
      uw_spec_where:        'Where to Spot',
      gallery_cta_h2:       'Stay Connected',
      gallery_cta_p:        'Follow Casa Escondida for daily dive updates, guest stories, and special offers.',

      /* ── NEW LOCATION PAGE KEYS ── */
      location_eyebrow:   'Find Us',
      location_h1:        'How to Get to <em>Anilao, Batangas</em>',
      location_page_sub:  'Tucked between jungle-clad hills and coral-rich waters in Brgy. Ligaya, Mabini — just two hours south of Manila.',

      /* ── NEW BLOG PAGE KEYS ── */
      blog_page_eyebrow:  'Casa Escondida · Anilao, Batangas',
      blog_h1:            'Dive Blog &amp; <em>Marine Life Guides</em>',
      blog_page_sub:      'Dive guides, marine life spotting tips, resort stories, and travel advice from Anilao — the macro diving capital of the Philippines.',
      blog_stat_1:        'Articles',
      blog_stat_2:        'Categories',
      blog_stat_3:        'Dive Sites Covered',
      blog_hero_cta_ghost:    'Explore Diving →',
      blog_hero_cta_primary:  'Book Your Stay',
      cat_all:            'All',
      cat_dive:           'Dive Guide',
      cat_dive_guide:     'Dive Guide',
      cat_marine:         'Marine Life',
      cat_marine_life:    'Marine Life',
      cat_travel:         'Travel Tips',
      cat_travel_tips:    'Travel Tips',
      cat_resort:         'Resort Life',
      cat_resort_life:    'Resort Life',
      cat_conservation:   'Conservation',
      cat_dive_tips:      'Dive Tips',
      cat_news:           'News & Events',
      cat_photography:    'Photography',
      blog_sort_newest:   'Newest First',
      blog_sort_oldest:   'Oldest First',
      blog_sort_popular:  'Most Popular',
      blog_read_more:     'Read →',
      blog_search_placeholder: 'Search posts…',
      bf_featured_badge:  'Featured',
      bf_eyebrow:         'Dive Guide',
      bf_title:           'Best Dive Sites in Anilao, Batangas: The Complete 2026 Guide',
      bf_excerpt:         "Anilao hosts over 50 named dive sites packed inside a coastline barely 10 km long — from the seamount walls of Kirby's Rock to the silty macro heaven of Secret Bay. Whether you're chasing nudibranchs, frogfish, or open-water pelagics, this guide maps every must-dive and tells you exactly what to expect below the surface.",
      bf_date:            'April 20, 2026 · 8 min read',
      bf_read_more:       'Read Article →',

      /* ── MARQUEE ── */
      marquee_1:          'PADI 5 Star IDC Resort',
      marquee_2:          '30+ Dive Sites',
      marquee_3:          "Travelers' Choice Award",
      marquee_4:          'Breakfast Available',
      marquee_5:          'Island BBQ Experience',
      marquee_6:          'Rooms & Suites',
      marquee_7:          'Anilao, Batangas Philippines',
      marquee_8:          'TripAdvisor Recommended',
      marquee_9:          'Ocean-Front Resort',
      marquee_10:         'Private Jetty Access',
      marquee_11:         'Night Diving Available',
      marquee_12:         'Nitrox & Equipment Rental',
      marquee_13:         'Pool & Beach Access',
      marquee_14:         '4.5★ TripAdvisor Rating',

      /* ── REVIEW PLATFORM STRIP ── */
      platform_stars_ta:    '★★★★★',
      platform_score_ta:    '4.5 / 5',
      platform_label_ta:    "TripAdvisor · Travelers'\nChoice Award Winner",
      platform_count_ta:    '81 reviews',
      platform_stars_google:'★★★★★',
      platform_score_google:'4.7 / 5',
      platform_label_google:'Google Business\nHighly Rated',
      platform_count_google:'230+ reviews',
      platform_stars_fb:    '★★★★★',
      platform_score_fb:    '5.0 / 5',
      platform_label_fb:    'Facebook\nRecommended',
      platform_count_fb:    'See all reviews',

      /* ── ABOUT extra ── */
      about_p_short:      'Casa Escondida — "The Hidden House" — is an intimate resort & PADI dive center in Anilao, Batangas. World-class macro diving meets genuine Filipino warmth.',
      about_stars_label:  '4.5 · 81 TripAdvisor Reviews',
      about_cta:          'Book Your Stay',

      /* ── DIVE SECTION (homepage) ── */
      dive_eyebrow:       'Dive Center',
      dive_title:         "Dive Into <em>Anilao's</em><br>Legendary Depths",
      dive_sub:           "Anilao is where Philippine scuba diving was born — and remains one of the world's finest dive destinations for coral diversity and macro life. Our professional PADI dive center puts you at the epicenter.",
      dive_cta_primary:   'Book a Dive Package',
      dive_cta_secondary: 'Explore Dive Center →',

      /* ── SERVICES badges ── */
      svc_badge_1:        'Dive Center',
      svc_badge_2:        'Beach & Pool',
      svc_badge_3:        'Restaurant',
      svc_badge_4:        'Accommodation',
      svc_badge_5:        'Excursions',
      svc_badge_6:        'Events & WiFi',

      /* ── ROOMS (homepage cards) ── */
      rm_badge_1:         'Standard · 16 Rooms',
      rm_badge_2:         'Deluxe · 4 Rooms',
      rm_badge_3:         'Suite · 4 Rooms · Most Popular ★',
      rm_name_1:          'Standard <em>Room</em>',
      rm_name_2:          'Deluxe <em>Double or Twin</em> Room',
      rm_name_3:          'Suite <em>with Sea View</em>',
      rm_desc_1:          'Each standard room has a private bathroom with shower, air conditioning, and a flat-screen TV. Choose between 1 king-size bed or 2 single beds.',
      rm_desc_2:          'The spacious deluxe room features a terrace with sea views, a wardrobe, private bathroom with shower, air conditioning, and flat-screen TV. Includes 2 queen-size beds.',
      rm_desc_3:          'Overlooking the pool and sea, these suites feature a private jacuzzi, terrace with sea and pool views, air conditioning, and flat-screen TV. Three suites offer 2 queen-size beds; 1 suite has 1 king-size bed.',
      rm_feat_1_1:        '18 sqm',
      rm_feat_1_2:        'King or 2 Singles',
      rm_feat_1_3:        'Air Con',
      rm_feat_1_4:        'Private Bathroom',
      rm_feat_1_5:        'Free WiFi',
      rm_feat_2_1:        '40 sqm',
      rm_feat_2_2:        '2 Queen Beds',
      rm_feat_2_3:        'Sea View',
      rm_feat_2_4:        'Balcony',
      rm_feat_2_5:        'Free WiFi',
      rm_feat_3_1:        '50 sqm',
      rm_feat_3_2:        'Sea View',
      rm_feat_3_3:        'Jacuzzi',
      rm_feat_3_4:        '2 Queens or 1 King',
      rm_view_btn:        'View Room',
      rm_book_btn:        'Book Now',
      rooms_note:         'Breakfast available · All rooms non-smoking ·',

      /* ── GALLERY (homepage) ── */
      gallery_lead:       'Every corner of Casa Escondida tells a story — from the brilliant corals beneath the surface to the warm glow of a beach BBQ at sunset. This is Anilao at its finest.',
      gallery_fb_btn:     'More on Facebook →',
      gallery_cta:        'Book Your Stay',
      mo_cap_1:           'Casa Escondida',
      mo_cap_2:           'Beachfront Terrace',
      mo_cap_3:           'Pool & Lounge',
      mo_cap_4:           'Resort Restaurant',
      mo_cap_5:           'Dive Boat',
      mo_cap_6:           'Beach Deck',
      mo_cap_7:           'Dive Community',
      mo_cap_8:           'Ready to Dive',
      mo_cap_9:           'Dive Adventures',
      mo_cap_10:          'Dive Groups',
      mo_cap_11:          'Resort Life',
      mo_cap_12:          'Pool Training',
      mo_cap_13:          'Dive Training',

      /* ── REVIEWS ── */
      reviews_count:      '81 TripAdvisor Reviews',
      reviews_award:      "🏆 Travelers' Choice",
      rb_cleanliness:     'Cleanliness',
      rb_service:         'Service',
      rb_location:        'Location',
      rb_sleep_quality:   'Sleep Quality',
      rb_rooms:           'Rooms',
      rb_value:           'Value',
      rv_stars_1:         '★★★★★',
      rv_quote_1:         'Exceptional hospitality — the staff went above and beyond at every turn. The buffet was incredibly diverse and delicious. Woke up to an amazing view of the pool and the sea.',
      rv_name_1:          'Maria R.',
      rv_meta_1:          'March 2025',
      rv_source_1:        'TripAdvisor',
      rv_stars_2:         '★★★★★',
      rv_quote_2:         'The dive center is top-notch. Our divemaster was incredibly professional and knowledgeable. Hot showers at the dive shop were such a thoughtful touch after cold morning dives.',
      rv_name_2:          'James T.',
      rv_meta_2:          'February 2025',
      rv_source_2:        'TripAdvisor',
      rv_stars_3:         '★★★★★',
      rv_quote_3:         'The island BBQ dinner was the highlight of our whole trip. The food was amazing, the atmosphere magical. Dive sites around Anilao are absolutely world-class.',
      rv_name_3:          'Sarah L.',
      rv_meta_3:          'January 2025',
      rv_source_3:        'TripAdvisor',
      reviews_read_all:   'Read All 81 Reviews on TripAdvisor →',
      reviews_cta:        'Join Our Guests — Book Now',

      /* ── LOCATION (homepage) ── */
      loc_map_btn:        'View on Google Maps →',
      location_lead:      'Located in the heart of Anilao — the Philippines\' diving capital — Casa Escondida is easily reachable from Manila for a perfect weekend or week-long escape.',
      loc_lbl_address:    'Address',
      loc_val_address:    'Brgy. Ligaya, Mabini, Batangas Province, Philippines 4202',
      loc_lbl_manila:     'From Manila Airport',
      loc_val_manila:     '88.5 km · Approx. 2–3 hours by car via STAR Tollway → Batangas City → Mabini',
      loc_lbl_bus:        'By Bus',
      loc_val_bus:        'JAM Liner or Ceres from Buendia → Batangas, then tricycle or jeepney to Anilao',
      loc_lbl_contact:    'Contact & Reservations',

      /* ── BOOKING SECTION ── */
      booking_eyebrow:    'Reservations',
      form_label_name:    'Your Name',
      form_label_email:   'Email Address',
      form_label_checkin: 'Check-in Date',
      form_label_guests:  'Guests',
      form_placeholder_name:  'Your Name',
      form_placeholder_email: 'Email Address',
      form_submit_btn:    'Check Availability',
      form_success_title: 'Reservation Received!',
      form_success_sub:   "Thank you — we'll get back to you within 24 hours to confirm your stay.",
      booking_note:       'Or reach us on',

      /* ── FOOTER ── */
      foot_desc:          'A hidden paradise in Anilao, Batangas — where world-class Philippine diving meets exceptional hospitality on the shores of Batangas Bay.',
      foot_link_1_1:      'About the Resort',
      foot_link_1_2:      'Dive Center',
      foot_link_1_3:      'Rooms & Suites',
      foot_link_1_4:      'Photo Gallery',
      foot_link_1_5:      'Restaurant & Bar',
      foot_link_2_1:      'PADI Open Water',
      foot_link_2_2:      'Advanced OW Course',
      foot_link_2_3:      'Rescue Diver',
      foot_link_2_4:      'Guided Dive Trips',
      foot_link_2_5:      'Night Dives',
      foot_link_3_1:      'Best Dive Sites in Anilao',
      foot_link_3_2:      'Nudibranchs of Anilao',
      foot_link_3_3:      'Manila to Anilao Guide',
      foot_link_3_4:      'Pygmy Seahorses Guide',
      foot_link_3_5:      "Kirby's Rock Dive Site",
      foot_link_3_6:      'All Articles →',
      foot_link_4_1:      'Brgy. Ligaya, Mabini',
      foot_link_4_2:      'Batangas Province 4202',
      foot_link_4_3:      'Philippines',
      foot_link_4_4:      'Google Maps →',
      foot_link_4_5:      'Book Now',
      foot_privacy:       'Privacy Policy',
      foot_terms:         'Terms of Service',
      /* Legal pages */
      policy_contents:    'Contents',
      tos_h1:             'Terms of <em style="font-style:italic;color:var(--gold)">Service</em>',
      tos_sub:            'Please read these terms carefully before making a reservation or participating in dive activities at Casa Escondida Anilao.',
      tos_s1:  'Agreement to Terms',       tos_s2:  'Bookings & Reservations',
      tos_s3:  'Cancellation & Refund',    tos_s4:  'Diving Requirements',
      tos_s5:  'Resort Rules & Conduct',   tos_s6:  'Liability Waiver',
      tos_s7:  'Health & Medical',         tos_s8:  'Photography & Media',
      tos_s9:  'Intellectual Property',    tos_s10: 'Governing Law',
      tos_s11: 'Amendments',               tos_s12: 'Contact Us',
      pp_h1:   'Privacy <em style="font-style:italic;color:var(--gold)">Policy</em>',
      pp_sub:  'Your privacy matters to us. This policy explains how Casa Escondida Anilao Resort & Dive Center collects, uses, and protects your personal information.',
      pp_s1:  'Information We Collect',    pp_s2:  'How We Use Your Information',
      pp_s3:  'Cookies & Tracking',        pp_s4:  'Data Sharing',
      pp_s5:  'Data Retention',            pp_s6:  'Your Rights',
      pp_s7:  'Third-Party Links',         pp_s8:  "Children's Privacy",
      pp_s9:  'Changes to This Policy',    pp_s10: 'Contact Us',
      foot_copy:          '© 2026 Casa Escondida Anilao Resort & Dive Center · Mabini, Batangas',
      foot_powered:       'Powered by TechNext Asia',
      soc_aria_fb:        'Facebook',
      soc_aria_ig:        'Instagram',
      soc_aria_ta:        'TripAdvisor',

      /* ── ROOMS.HTML footer variant keys ── */
      foot_h_explore:     'Explore',
      foot_h_dive:        'Dive Programs',
      foot_h_articles:    'Latest Articles',
      foot_h_location:    'Location',
      foot_link_about:    'About the Resort',
      foot_link_dive:     'Dive Center',
      foot_link_rooms:    'Rooms & Suites',
      foot_link_gallery:  'Photo Gallery',
      foot_link_dining:   'Restaurant & Bar',
      foot_link_ow:       'PADI Open Water',
      foot_link_aow:      'Advanced OW Course',
      foot_link_rescue:   'Rescue Diver',
      foot_link_guided:   'Guided Dive Trips',
      foot_link_night:    'Night Dives',
      foot_link_blog_1:   'Best Dive Sites in Anilao',
      foot_link_blog_2:   'Nudibranchs of Anilao',
      foot_link_blog_3:   'Manila to Anilao Guide',
      foot_link_blog_4:   'Pygmy Seahorses Guide',
      foot_link_blog_5:   "Kirby's Rock Dive Site",
      foot_link_all_articles: 'All Articles →',
      foot_link_loc_1:    'Brgy. Ligaya, Mabini',
      foot_link_loc_2:    'Batangas Province 4202',
      foot_link_loc_3:    'Philippines',
      foot_link_maps:     'Google Maps →',
      foot_link_booknow:  'Book Now',

      /* ── MODAL ── */
      modal_eyebrow:      'Reservations',
      modal_title:        'Book Your <em>Stay</em>',
      modal_sub:          "Fill in your details and we'll confirm your reservation within 24 hours.",
      modal_label_name:   'Full Name',
      modal_label_phone:  'Contact Number',
      modal_label_email:  'Email Address',
      modal_label_checkin:'Check-in Date',
      modal_label_guests: 'Number of Guests',
      modal_placeholder_name:  'Your full name',
      modal_placeholder_phone: '+63 9XX XXX XXXX',
      modal_placeholder_email: 'your@email.com',
      modal_submit_btn:   'Send Reservation Request',
      modal_note:         'Or message us on Facebook · TripAdvisor',
      modal_success_title:'Reservation Received!',
      modal_success_sub:  "Thank you — we'll get back to you within 24 hours to confirm your stay at Casa Escondida.",
      modal_success_close:'Close',

      /* ── EXIT POPUP ── */
      exit_cta:           'Continue Booking',
      exit_dismiss:       'No thanks, go back to the site',

      /* ── ROOMS PAGE ── */
      rooms_h1_text:      'Rooms',
      rooms_h1_em:        '& Suites',
      rooms_stat_1_number:'24',
      rooms_stat_1_label: 'Total Rooms',
      rooms_stat_2_number:'3',
      rooms_stat_2_label: 'Room Types',
      rooms_stat_3_number:'100%',
      rooms_stat_3_label: 'Optional Breakfast',
      rooms_stat_4_number:'8',
      rooms_stat_4_label: 'Ocean View Rooms',
      rooms_hero_cta_ghost:   'Explore Rooms →',
      rooms_hero_cta_primary: 'Book Your Room',
      inc_breakfast_title:'Breakfast',
      inc_breakfast_desc: 'Breakfast is optional and available as an add-on. Full board is also available — from lunch on arrival to lunch on departure day.',
      inc_wifi_title:     'Free WiFi',
      inc_wifi_desc:      'High-speed Wi-Fi throughout the resort — including rooms and dive center.',
      inc_gear_title:     'Dive Gear Storage',
      inc_gear_desc:      'Dedicated rinse tanks and gear-drying racks included for all guests.',
      inc_frontdesk_title:'Front Desk',
      inc_frontdesk_desc: 'Our office is open until 9 PM. We\'re happy to assist with check-ins, dive bookings, and any queries during office hours.',
      rooms_sec_eyebrow:  'Choose Your Room',
      rooms_sec_h2:       'Find Your <em>Perfect Stay</em>',
      rooms_sec_sub:      'From cozy standard rooms to spacious ocean suites — steps from the water.',
      rm_badge_standard:  'Standard · 16 Rooms',
      rm_badge_deluxe:    'Deluxe · 4 Rooms',
      rm_badge_suite:     'Suite · 4 Rooms',
      rm_badge_popular:   'Most Popular ★',
      rm_meta_size_18:    '18 sqm',
      rm_meta_size_40:    '40 sqm',
      rm_meta_size_50:    '50 sqm',
      rm_meta_guests_2:   'Up to 2 guests',
      rm_meta_guests_4:   'Up to 4 guests',
      rm_meta_beds_2single:'2 Single Beds',
      rm_meta_beds_2double:'2 Double Beds',
      rm_meta_beds_standard:'King or 2 Singles',
      rm_meta_beds_deluxe:'2 Queen-size Beds',
      rm_meta_beds_suite:  '2 Queens or 1 King',
      rm_feats_label:     'Room Features',
      rm_feat_aircon:     'Air Conditioning',
      rm_feat_bathroom:   'Private Bathroom',
      rm_feat_shower:     'Bath or Shower',
      rm_feat_bidet:      'Bidet',
      rm_feat_toiletries: 'Free Toiletries',
      rm_feat_towels:     'Towels',
      rm_feat_tv:         'Flat-Screen TV',
      rm_feat_desk:       'Desk',
      rm_feat_floor:      'Tile/Marble Floor',
      rm_feat_linen:      'Linen',
      rm_feat_sanitiser:  'Hand Sanitiser',
      rm_feat_wifi:       'Free WiFi',
      rm_feat_nosmoking:  'No Smoking',
      rm_feat_seaview:    'Sea View',
      rm_feat_balcony:    'Balcony',
      rm_feat_terrace:    'Terrace',
      rm_feat_wardrobe:   'Wardrobe',
      rm_feat_poolview:   'Pool View',
      rm_feat_hottub:     'Jacuzzi',
      rm_feat_bathshower: 'Bath & Shower',
      rm_feat_fridge:     'Refrigerator',
      rm_btn_book:        'Book Now',
      rm_btn_inquire:     'Inquire',
      rooms_areas_eyebrow:'Explore the Property',
      rooms_areas_h2:     'Resort <em>Areas</em>',
      rooms_areas_sub:    'Beyond your room — the spaces that complete the Casa Escondida experience.',
      area_bar_label:     'Bar & Lounge',
      area_bar_name_prefix:'The',
      area_bar_name_em:   'Bar & Lounge',
      area_bar_desc:      'Unwind after a dive at our open-air bar overlooking Batangas Bay. Enjoy cold drinks, cocktails, and light bites in a relaxed beachside setting — the perfect spot to swap dive stories as the sun goes down.',
      area_bar_feat_1:    'Ocean View',
      area_bar_feat_2:    'Cold Drinks & Cocktails',
      area_bar_feat_3:    'Open Air',
      area_bar_feat_4:    'Light Bites',
      area_bar_feat_5:    'Dive Debrief Spot',
      area_btn_book:      'Book Now',
      area_beach_label:   'Beach Deck',
      area_beach_name_prefix:'The',
      area_beach_name_em: 'Beach Deck',
      area_beach_desc:    'Step directly from your suite onto our seafront deck and feel Batangas Bay at your feet. Lounge chairs, sun, and unobstructed sea views — the ideal place to relax between dives or watch the sunrise over the water.',
      area_beach_feat_1:  'Seafront Access',
      area_beach_feat_2:  'Lounge Area',
      area_beach_feat_3:  'Sea View',
      area_beach_feat_4:  'Sunrise Spot',
      area_beach_feat_5:  'Direct Beach Entry',
      rooms_policies_eyebrow: 'Before You Book',
      rooms_policies_h2:  'Resort <em>Policies</em>',
      pol_checkin_title:  'Check-In / Check-Out',
      pol_checkin_1:      'Check-in from 2:00 PM',
      pol_checkin_2:      'Check-out by 12:00 noon',
      pol_checkin_3:      'Early check-in subject to availability',
      pol_checkin_4:      'Late check-out may be arranged (additional fee)',
      pol_inclusions_title:'Inclusions',
      pol_inclusions_1:   'Breakfast available as an optional add-on',
      pol_inclusions_2:   'Free Wi-Fi in rooms and common areas',
      pol_inclusions_3:   'Use of swimming pool and resort facilities',
      pol_inclusions_4:   'Dive gear rinse tanks and drying racks',
      pol_houserules_title:'House Rules',
      pol_houserules_1:   'No smoking in enclosed areas — designated outdoor areas available',
      pol_houserules_2:   'Pets not allowed inside the resort premises',
      pol_houserules_3:   'Children 0–6 years old are free of charge',
      pol_houserules_4:   'Full board available — from lunch on arrival through lunch on departure day',
      pol_houserules_6:   'Parking free for the first 20 cars — first come, first served',
      pol_booking_title:  'Booking & Payment',
      pol_booking_1:      '50% non-refundable down payment required to confirm reservation',
      pol_booking_2:      'Full payment required at least 1 month prior to travel date',
      pol_booking_3:      'Day use of rooms available: 8:00 AM – 5:00 PM',
      pol_booking_4:      'Visitors exceeding 3 hours will be charged the full day trip rate',
      rooms_cta_h2:       'Ready to <em>Book?</em>',
      rooms_cta_p:        'Contact us directly for dive & stay packages and group bookings.',
      rooms_cta_btn_main: 'Book Your Room',
      rooms_cta_btn_outline: 'Message on Facebook',

      /* ── DIVE PAGE ── */
      dive_hero_cta_ghost:   'View Dive Packages →',
      dive_hero_cta_primary: 'Explore Courses',
      dive_overview_eyebrow: 'Our Dive Center',
      dive_overview_h2:      'Where Every <em>Dive Begins</em>',
      dive_overview_p1:      "Casa Escondida's PADI-certified dive center sits steps from your room. Our experienced divemasters and instructors know every reef, crevice, and critter in Anilao — so whether you're logging your first dive or your thousandth, you're in expert hands.",
      dive_overview_p2:      'Hot showers, full equipment rental, camera rinse stations, nitrox fills, and a private jetty for direct access to Anilao\'s legendary dive sites make every morning effortless.',
      dive_courses_eyebrow:  'PADI Courses',
      dive_courses_h2:       'Learn to Dive, <em>Level Up</em>',
      dive_courses_sub:      'From first-timers to experienced divers pursuing specialty certifications — our instructors guide you through every step.',
      dive_course1_level:    'Beginner',
      dive_course1_name:     'Discover Scuba Diving',
      dive_course1_desc:     'No certification needed. Experience scuba with a pool session followed by a shore dive — gear and Divemaster service included.',
      dive_course1_detail1:  'No experience required',
      dive_course1_detail2:  'Half-day experience',
      dive_course1_detail3:  'Max 6m depth',
      dive_course2_level:    'Certification',
      dive_course2_name:     'PADI Open Water Diver',
      dive_course2_desc:     "The world's most popular dive certification. Complete confined water sessions and four open-water dives to earn your lifetime certification, recognized worldwide.",
      dive_course2_detail1:  'Age 10+',
      dive_course2_detail2:  '3–4 days to complete',
      dive_course2_detail3:  'Certified to 18m',
      dive_course3_level:    'Advanced',
      dive_course3_name:     'Advanced Open Water',
      dive_course3_desc:     'Expand your skills with five specialty adventure dives including deep diving and underwater navigation. Dive deeper, see more, feel more confident.',
      dive_course3_detail1:  'OW certification required',
      dive_course3_detail2:  '2 days / 5 dives',
      dive_course3_detail3:  'Certified to 30m',
      dive_course4_level:    'Safety',
      dive_course4_name:     'Rescue Diver',
      dive_course4_desc:     "Learn to anticipate and manage diving problems. The most challenging and rewarding PADI course — widely considered a turning point in every diver's career.",
      dive_course4_detail1:  'AOW + EFR required',
      dive_course4_detail2:  '3–4 days',
      dive_course4_detail3:  'Scenario-based training',
      dive_course5_level:    'Specialty',
      dive_course5_name:     'Nitrox / Enriched Air',
      dive_course5_desc:     'Dive longer and reduce nitrogen loading with enriched air nitrox. Ideal for multi-dive days in Anilao — one of our most popular specialty certifications.',
      dive_course5_detail1:  'OW certification required',
      dive_course5_detail2:  '1 day / knowledge review',
      dive_course5_detail3:  'Up to 40% Nitrox fills',
      dive_course6_level:    'Professional',
      dive_course6_name:     'Divemaster',
      dive_course6_desc:     'Turn your passion into a career. Assist with courses, lead certified divers, and join our professional team — all in one of the world\'s best diving locations.',
      dive_course6_detail1:  'Rescue Diver required',
      dive_course6_detail2:  'Flexible timeline',
      dive_course6_detail3:  'Internship available',
      dive_eco_eyebrow:      'Ecosystem Library',
      dive_eco_h2:           'What Awaits <em>Below</em>',
      dive_eco_sub:          'Anilao sits inside the Coral Triangle — the most biodiverse marine region on Earth. Browse the ecosystem we dive every day: colourful nudibranchs, reef fish schools, macro critters hidden in coral rubble, and the occasional turtle gliding past our jetty.',
      dive_pkgs_eyebrow:     'Dive Packages',
      dive_pkgs_h2:          'Choose Your <em>Dive Experience</em>',
      dive_pkgs_sub:         'From single guided dives to full liveaboard-style packages — we have options for every diver and every schedule.',
      dive_pkg1_name:        '2 Dives Out Package',
      dive_pkg1_tagline:     '2 daytime boat dives for certified divers',
      dive_pkg1_feat1:       'Boat fee included',
      dive_pkg1_feat2:       'Service of 1 Divemaster',
      dive_pkg1_feat3:       'Tank & dive permit per dive',
      dive_pkg1_feat4:       'Dive briefing & logbook signing',
      dive_pkg1_feat5:       'Gear rental not included (available separately)',
      dive_pkg_cta_inquire:  'Inquire Now',
      dive_pkg_popular_badge:'Most Popular',
      dive_pkg2_name:        '3-Day Dive Package',
      dive_pkg2_tagline:     'Stay, dive, repeat — the full Anilao experience',
      dive_pkg2_feat1:       '3 nights accommodation (breakfast incl.)',
      dive_pkg2_feat2:       'Up to 3 dives per day',
      dive_pkg2_feat3:       'Dedicated Divemaster',
      dive_pkg2_feat4:       'Night dive on house reef',
      dive_pkg2_feat5:       'Nitrox fills available',
      dive_pkg2_feat6:       'Optional gear rental available',
      dive_pkg_cta_book:     'Book This Package',
      dive_pkg3_name:        'Single / Night Dive Package',
      dive_pkg3_tagline:     'One dive, anytime — day or after dark',
      dive_pkg3_feat1:       'Boat fee included',
      dive_pkg3_feat2:       'Service of 1 Divemaster',
      dive_pkg3_feat3:       'Tank & dive permit',
      dive_pkg3_feat4:       'Dive briefing & logbook signing',
      dive_pkg3_feat5:       'Gear rental not included (available separately)',
      dive_pkgs_note:        'Add-on available: Additional 3rd dive within the same day. All packages include use of rinse tanks and camera rinse station.',
      dive_pkgs_cta_heading: 'Not sure which package is right for you?',
      dive_pkgs_cta_sub:     'Our dive team is happy to help you choose. Get in touch and we\'ll put together the perfect dive plan.',
      dive_pkgs_cta_btn:     'Talk to Our Dive Team →',
      dive_equip_eyebrow:    'Equipment & Facilities',
      dive_equip_h2:         'Everything You <em>Need</em>',
      dive_equip_sub:        'Travelling light? Our full-service dive center has everything covered.',
      dive_equip1_name:      'BCD & Regulator',
      dive_equip1_note:      'All sizes available for daily rental',
      dive_equip2_name:      'Wetsuits',
      dive_equip2_note:      '3mm & 5mm suits, full range of sizes',
      dive_equip3_name:      'Dive Computers',
      dive_equip3_note:      'Available for rent per dive',
      dive_equip4_name:      'Nitrox Fills',
      dive_equip4_note:      'Up to 40% EANx on-site',
      dive_equip5_name:      'Camera Rinse Station',
      dive_equip5_note:      'Dedicated fresh-water rinse tanks',
      dive_equip6_name:      'Mask, Fins & Snorkel',
      dive_equip6_note:      'Complete snorkel sets for rental',
      dive_equip7_name:      'Dive Torches',
      dive_equip7_note:      'Primary & backup torches for night dives',
      dive_equip8_name:      'Marine Conservation',
      dive_equip8_note:      'Active reef monitoring & protection',
      dive_equip9_name:      'Booties',
      dive_equip9_note:      'Available for daily rental',
      dive_equip10_name:     'Tank – Air 12L / 15L',
      dive_equip10_note:     'Air tanks, two sizes available',
      dive_equip11_name:     'Tank – Nitrox 12L / 15L',
      dive_equip11_note:     'Enriched air tanks, two sizes',
      dive_equip12_name:     'Extra Dive Master',
      dive_equip12_note:     'Available for day & night dives',
      dive_equip13_name:     'Full Gear Set',
      dive_equip13_note:     'Complete rental package, all sizes',
      dive_equip14_name:     'Camera (GoPro)',
      dive_equip14_note:     'Available for daily rental',
      dive_equip15_name:     'DSMB',
      dive_equip15_note:     'Surface marker buoy for safety',
      dive_equip16_name:     'Kayak',
      dive_equip16_note:     'Available for 4-hour rental',
      dive_equip17_name:     'Black Water Torch Set',
      dive_equip17_note:     '1 set, 3 pcs — for black water dives',
      dive_equip18_name:     'Weights & Weight Belt',
      dive_equip18_note:     'Free with any CE Dive Package',
      dive_equip19_name:     'Battery (Camera)',
      dive_equip19_note:     'Camera battery rental available',
      dive_cond_eyebrow:     'Before You Dive',
      dive_cond_h2:          'Dive Package <em>Conditions</em>',
      dive_cond1_title:      'Package Inclusions',
      dive_cond1_1:          'Dive package rates include boat fee, service of 1 Divemaster, and tank for each dive.',
      dive_cond1_2:          'Gear is not included — rental available separately at the dive center.',
      dive_cond1_3:          'Requests for an additional Dive Master will be charged extra to the requesting guest or group.',
      dive_cond2_title:      'Dive Times',
      dive_cond2_1:          'Average dive time is 45 minutes per dive.',
      dive_cond2_2:          'Maximum dive time is 60 minutes.',
      dive_cond2_3:          'The 2 Dives Out Package is limited to 2 boat dives per trip.',
      dive_cond3_title:      'Cancellations & Missed Dives',
      dive_cond3_1:          'Missed and cancelled dives are non-transferrable and non-refundable.',
      dive_cond3_2:          'Boat and Divemaster cancellations will be charged 50% of the corresponding fee.',
      dive_cond4_title:      'Gear & Equipment',
      dive_cond4_1:          'All rented gear must be returned in proper working condition.',
      dive_cond4_2:          'Any damage caused by the guest will be charged accordingly.',
      dive_course7_level:    'ReActivate',
      dive_course7_name:     'PADI ReActivate',
      dive_course7_desc:     'Returning to diving after a break? Rebuild your confidence with a theory review and guided pool practice before heading back into open water.',
      dive_course7_detail1:  'Open Water cert. required',
      dive_course7_detail2:  'Half-day',
      dive_course7_detail3:  'Pool + guided dive',
      dive_cta_h2:           'Ready to <em>Take the Plunge?</em>',
      dive_cta_p:            "Whether you're a first-timer or a seasoned diver, the reefs of Anilao are waiting. Book your stay and dive package with us today.",
      dive_cta_btn_primary:  'Book Your Dive Stay',
      dive_cta_btn_ghost:    'How to Get Here →',

      /* ── INSTRUCTORS ── */
      instr_eyebrow:      'Meet Our Instructors',
      instr_h2:           'Dive with the <em>Masters</em>',
      instr_sub:          'Our PADI-certified instructors have guided hundreds of divers through Anilao\'s legendary underwater world — from first breaths to advanced certifications.',
      instr_1_cert:       'PADI Master Instructor',
      instr_1_name:       'Armando G. Vergara',
      instr_1_cert_sub:   'Master Instructor',
      instr_1_bio:        'A PADI Master Instructor with years of experience exploring Anilao\'s diverse reefs. Dong brings calm authority and a genuine passion for the ocean to every course and guided dive.',
      instr_2_cert:       'Master Scuba Diver Trainer',
      instr_2_name:       'Andrew Oh',
      instr_2_cert_sub:   'MSDT',
      instr_2_bio:        'Holding the prestigious Master Scuba Diver Trainer designation, Andrew combines precision technique with patient teaching — the ideal guide for divers serious about mastering their craft.',
      instr_label_padi:   'PADI No.',
      instr_label_since:  'Certified Since',
      instr_cta:          'Book a Session →',

      /* ── LOCATION PAGE ── */
      location_stat_1:    'From Manila',
      location_stat_2:    'By Car',
      location_stat_3:    'Dive Sites',
      location_hero_cta_ghost:   'Contact Us',
      location_hero_cta_primary: 'Get Directions →',
      location_qc_address_lbl: 'Address',
      location_qc_address_val: 'Brgy. Ligaya, Mabini\nBatangas 4202, Philippines',
      location_qc_phone_lbl:   'Phone',
      location_qc_email_lbl:   'Email',
      location_qc_desk_lbl:    'Front Desk',
      location_qc_desk_val:    'Open until 9 PM',
      location_routes_eyebrow: 'Getting Here',
      location_routes_h2:      'From Manila to <em>Anilao</em>',
      location_routes_sub:     "Roughly two hours south of the capital — pick how you'd like to travel and we'll guide you step by step.",
      location_route_car:      'By Private Car',
      location_route_bus:      'By Bus + Tricycle',
      location_route_van:      'Private Van Transfer',
      route_car_step1_title:   'Manila / Makati',
      route_car_step1_desc:    'Head south via SLEX (South Luzon Expressway) — the easiest start from any part of Metro Manila.',
      route_car_step1_meta:    'Start',
      route_car_step2_title:   'Sto. Tomas Exit',
      route_car_step2_desc:    'Exit at Sto. Tomas and continue onto STAR Tollway heading toward Batangas City.',
      route_car_step2_meta:    '~90 min',
      route_car_step3_title:   'Mabini Turn-off',
      route_car_step3_desc:    'Take the Mabini / Anilao exit and follow signs toward the dive resorts along the coastal road.',
      route_car_step3_meta:    '~25 min',
      route_car_step4_title:   'Brgy. Ligaya',
      route_car_step4_desc:    'Watch for the Casa Escondida signage on your left. Free on-site parking for guests.',
      route_car_step4_meta:    'Arrived',
      route_bus_step1_title:   'Buendia or Cubao Terminal',
      route_bus_step1_desc:    'Board a JAM Liner or ALPS Transit bus bound for Batangas Grand Terminal.',
      route_bus_step1_meta:    '~2 hr',
      route_bus_step2_title:   'Batangas Grand Terminal',
      route_bus_step2_desc:    'Disembark and transfer to a jeepney or van heading to Mabini / Anilao.',
      route_bus_step2_meta:    '~2 hr',
      route_bus_step3_title:   'Anilao Proper',
      route_bus_step3_desc:    'Take a tricycle from the Anilao junction — tell the driver "Casa Escondida, Brgy. Ligaya."',
      route_bus_step3_meta:    '~15 min',
      route_bus_step4_title:   'Casa Escondida',
      route_bus_step4_desc:    'Arrive at our gate — the front desk will help you with bags and check-in.',
      route_bus_step4_meta:    'Arrived',
      route_van_step1_title:   'Tell us your flight',
      route_van_step1_desc:    "Send your arrival details at least 48 hours before and we'll arrange a private van pickup.",
      route_van_step1_meta:    'Email',
      route_van_step2_title:   'NAIA Pickup',
      route_van_step2_desc:    'Our driver meets you at the airport with your name on a placard. Gear & luggage loaded for you.',
      route_van_step2_meta:    'On-time',
      route_van_step3_title:   'Door-to-door',
      route_van_step3_desc:    'Sit back for a comfortable 2.5 hr drive south with a snack stop along the way.',
      route_van_step3_meta:    '~2.5 hr',
      route_van_step4_title:   'Casa Escondida',
      route_van_step4_desc:    'Arrive relaxed — welcome drink waiting, briefings scheduled, gear storage ready.',
      route_van_step4_meta:    'Arrived',
      location_transport_eyebrow: 'Your Options',
      location_transport_h2:  'Choose How You <em>Travel</em>',
      location_transport_sub: 'Every route leads to the same hidden cove — pick the one that fits your schedule.',
      transport_car_name:     'Self-drive',
      transport_car_desc:     'The most direct option. Drive yourself south via SLEX & STAR tollways — about 2 hours from Makati with light traffic.',
      transport_car_feat1:    'Free on-site parking',
      transport_car_feat2:    'Flexible schedule',
      transport_car_feat3:    'Bring your own gear',
      transport_car_cta:      'Open in Google Maps',
      transport_van_name:     'Private Van Transfer',
      transport_van_desc:     'Our favorite for dive groups and divers arriving with gear. Door-to-door pickup from NAIA, Makati, or anywhere in Metro Manila.',
      transport_van_feat1:    'Airport pickup available',
      transport_van_feat2:    'Air-conditioned, dive-gear friendly',
      transport_van_feat3:    'Arrange 48 hrs in advance',
      transport_van_cta:      'Book a transfer',
      transport_bus_name:     'Public Bus',
      transport_bus_desc:     'The budget-friendly route. JAM Liner or ALPS from Buendia / Cubao to Batangas, then jeepney and tricycle to Anilao.',
      transport_bus_feat1:    'Frequent departures',
      transport_bus_feat2:    'Air-conditioned buses',
      transport_bus_feat3:    'Total travel ~3–4 hrs',
      transport_bus_cta:      'Ask for route help',
      location_dist_eyebrow:  'Distances',
      location_dist_h2:       'At a <em>Glance</em>',
      location_dist_sub:      'Typical travel times to and from Casa Escondida — adjusted for normal weekday traffic.',
      location_nearby_eyebrow:'Neighborhood',
      location_nearby_h2:     '30+ Dive Sites <em>Within Minutes</em>',
      location_nearby_sub:    'Anilao is world-renowned for its biodiversity. A short banca ride from our pier puts you on some of the richest muck and coral sites in the Philippines.',
      site_secret_bay_name:   'Secret Bay',
      site_secret_bay_desc:   'Muck-diving paradise — flamboyant cuttlefish, frogfish, and rare nudibranchs on black sand.',
      site_secret_bay_tag1:   'Macro',
      site_mainit_name:       'Mainit Point',
      site_mainit_desc:       'Currents and schooling fish — jacks, barracuda, and the occasional reef shark cruising past.',
      site_mainit_tag1:       'Drift',
      site_twin_rocks_name:   'Twin Rocks',
      site_twin_rocks_desc:   'Two dramatic underwater pinnacles — coral-encrusted and alive with schooling fish and turtles.',
      site_twin_rocks_tag1:   'Reef',
      site_cathedral_name:    'Cathedral',
      site_cathedral_desc:    'Iconic rock pinnacle with a cross marker — abundant soft coral and big fish action.',
      site_cathedral_tag1:    'Deep',
      site_kirbys_name:       "Kirby's Rock",
      site_kirbys_desc:       'Wall dive famous for ghost pipefish, sea snakes, and dramatic drop-offs into the blue.',
      site_kirbys_tag1:       'Wall',
      site_beatrice_name:     'Beatrice Rock',
      site_beatrice_desc:     'Great for all levels — healthy hard coral gardens teeming with reef fish life.',
      site_beatrice_tag1:     'Reef',
      site_sombrero_name:     'Sombrero Island',
      site_sombrero_desc:     'Picturesque islet circumnavigation — turtles, moray eels, and colorful soft coral fields.',
      site_sombrero_tag1:     'Reef',
      site_arthurs_name:      "Arthur's Rock",
      site_arthurs_desc:      'Classic Anilao site — gorgonians, schools of anthias, and macro critters on every ledge.',
      site_arthurs_tag1:      'Reef',
      location_contact_eyebrow: 'Get in Touch',
      location_contact_h2:    'Talk to the <em>Team</em>',
      location_contact_sub:   'Questions about dive packages, room availability, transfers, or groups? Drop us a line — we\'ll usually reply within a few hours.',
      cf_lbl_name:            'Name',
      cf_lbl_email:           'Email',
      cf_lbl_phone:           'Phone (optional)',
      cf_lbl_topic:           'Inquiry Type',
      cf_lbl_message:         'Message',
      cf_placeholder_name:    'Your full name',
      cf_placeholder_email:   'you@example.com',
      cf_placeholder_phone:   '+63 ...',
      cf_placeholder_message: 'Dates, number of guests, experience level, dive preferences...',
      cf_submit:              'Send Message',
      cf_success_msg:         'Thank you! Your message has been sent. We\'ll be in touch soon.',
      cf_error_msg:           'Something went wrong. Please try again or email us directly.',
      location_faq_eyebrow:   'Travel FAQs',
      location_faq_h2:        'Before You <em>Set Off</em>',
      location_faq_sub:       'Questions we hear often from guests planning their trip to Anilao.',
      faq_q1:  "What's the nearest airport?",
      faq_a1:  'Ninoy Aquino International Airport (NAIA / MNL) in Manila is the main gateway. The resort is about 130 km south — roughly a 2.5 hour drive. We can arrange a private van transfer from NAIA with 48 hours notice.',
      faq_q2:  'Do you offer airport pickup?',
      faq_a2:  'Yes — private air-conditioned van transfers from NAIA, Makati, BGC, or anywhere in Metro Manila. Please contact us with your flight details at least 48 hours in advance.',
      faq_q3:  'Is the trip doable in a single day?',
      faq_a3:  'Technically yes — but we strongly recommend at least 2 nights. Anilao has 30+ dive sites minutes from our pier, and the quality of diving here is worth the journey. Most dive guests stay 3–5 nights.',
      faq_q4:  'Is there parking on-site?',
      faq_a4:  'Yes. Free on-site parking for all guests, directly within the resort gate. No reservation needed — just drive in and our staff will direct you.',
      faq_q5:  'When is the best time to visit?',
      faq_a5:  'Anilao is divable year-round. The dry season (November to May) has the calmest seas and best visibility. For macro enthusiasts and underwater photographers, the "muck season" from November through March is legendary.',
      faq_q6:  'Can I visit without diving?',
      faq_a6:  'Absolutely. Many of our guests come for the ocean-front rooms, pool, Filipino cuisine, and quiet coastal setting. Non-divers are just as welcome — we have guided snorkeling, island hopping, and nearby attractions to explore.',
      faq_q7:  'Is there mobile signal and WiFi?',
      faq_a7:  'Globe and Smart both have reliable 4G signal in the area. Free Wi-Fi is available throughout the resort — rooms, restaurant, dive center, and common areas.',
      location_cta_h2:        'See You in <em>Anilao</em>',
      location_cta_p:         "Ready to make the trip? Book your stay and we'll handle the rest — directions, transfers, dive plans.",
      location_cta_btn_primary: 'Book Your Stay',
      location_cta_btn_ghost:   'Get Directions ↗',

      /* ── ROOMS PAGE hero stat labels ── */
      hero_cta_primary:   'Reserve Your Stay',
      hero_cta_secondary: 'Explore Diving',
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

      /* Nav link keys */
      nav_about:    '关于我们', nav_rooms:    '客房',
      nav_dive:     '潜水',     nav_gallery:  '图库',
      nav_location: '位置',     nav_blog:     '博客',
      nav_book:     '立即预订',

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
      incl_breakfast:     '早餐（可选）',

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
      booking_title:      '准备好潜入大海了吗？',
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

      /* ── NEW HOMEPAGE KEYS ── */
      hero_tag:           '阿尼劳 · 马比尼 · 八打雁省',
      hero_sub_new:       '海洋即是家园',
      our_story:          '我们的故事',
      about_title:        '八打雁省的隐秘天堂',
      about_p1:           '我们是一家精品PADI五星IDC度假村，坐落于阿尼劳的心脏地带——菲律宾潜水的发源地，也是全球顶级微距潜水目的地之一。',
      about_p2:           '无论您是来取得开放水域潜水认证、在夜潜中追寻裸鳃类生物，还是只想在海边静静放松，卡萨埃斯孔迪达都是您的完美大本营。',
      services_eyebrow:   '设施与服务',
      everything_you_need: '一应俱全',
      services_sub:       '从刺激的潜水体验到悠闲的海滩时光——卡萨埃斯孔迪达是您的全能度假目的地。',
      svc_name_1:         'PADI潜水中心',
      svc_name_2:         '泳池与海滩',
      svc_name_3:         '餐厅与酒吧',
      svc_name_4:         '舒适客房',
      svc_name_5:         '离岛游览',
      svc_name_6:         '活动与团体',
      svc_desc_1:         '专业认证教学、休闲潜水、装备租借，尽享30余处顶级潜点。',
      svc_desc_2:         '在淡水泳池畔放松身心，或在私人海滨欣赏壮阔海景。',
      svc_desc_3:         '新鲜菲律宾美食、国际佳肴，以及面朝大海精心调制的特色鸡尾酒。',
      svc_desc_4:         '配备空调与独立卫浴的客房，提供Wi-Fi及迷人海景或花园景观。',
      svc_desc_5:         '附近岛屿一日游、浮潜之旅及海岛烧烤体验。',
      svc_desc_6:         '专为潜水团队、企业度假及私人庆典量身定制的专属套餐。',
      rooms_eyebrow:      '住宿',
      rooms_heading:      '休息与充电',
      rooms_lead:         '从24间客房中选择，其中8间可直接欣赏海景，专为潜水旅行者设计——伴着海浪声入眠，醒来即可投身大海。',
      rm_name_1:          '标准客房',
      rm_name_2:          '豪华双人间或双床间',
      rm_name_3:          '海景套房',
      reviews_eyebrow:    '宾客点评',
      reviews_title:      '深受潜水者喜爱',
      gallery_eyebrow:    '图库',
      gallery_title:      '生活在<em>卡萨埃斯孔迪达</em>',
      location_eyebrow_home: '前往阿尼劳',
      location_home_title: '距马尼拉两小时，换一个世界',
      foot_h_1:           '探索',
      foot_h_2:           '潜水与住宿',
      foot_h_3:           '宾客评价',
      foot_h_4:           '联系我们',
      copyright:          '版权所有',

      /* ── NEW ROOMS PAGE KEYS ── */
      rooms_page_eyebrow: '住宿',
      rooms_h1:           '客房与套房',
      rooms_page_sub:     '共24间客房，分三种类型——16间标准客房、4间豪华客房及4间套房，专为潜水旅行者精心打造。',
      rm_card_name_1:     '标准<em>客房</em>',
      rm_card_name_2:     '豪华<em>客房</em>',
      rm_card_name_3:     '<em>套房</em>',
      rm_card_desc_1:     '餐厅近在咫尺，每间标准客房提供1张大床或2张单人床，由您自由选择。',
      rm_card_desc_2:     '豪华客房设有私人阳台，可俯瞰海景，配备2张大床及宽敞的淋浴区。',
      rm_card_desc_3:     '套房直接俯瞰泳池与海洋，配备2张大床或1张特大床，双台盆及私人浴缸（按摩浴缸）。',

      /* ── NEW DIVE PAGE KEYS ── */
      dive_page_eyebrow:  'PADI五星IDC度假村',
      dive_h1:            '水肌潜水 <em>阿尼劳，八打雁省</em>',
      dive_page_sub:      '世界顶级微距潜水胜地之一——趣味潜水、PADI课程，以及从我们私人码头出发的夜间潜水。',
      dive_stat_1:        '潜点数量',
      dive_stat_2:        '从业年限',
      dive_stat_3:        'PADI认证',
      dive_stat_4:        '星级评分',

      /* ── NEW GALLERY PAGE KEYS ── */
      gallery_page_eyebrow: '照片与视频图库',
      gallery_h1:           '生活在<em>卡萨埃斯孔迪达</em>',
      gallery_page_sub:     '来自我们Facebook和Instagram的真实照片和视频——潜水生活、度假时光和阿尼劳水下世界。',
      tab_underwater:       '水下世界',
      tab_facebook:         '脸书',
      tab_instagram:        '照片墙',
      tab_videos:           '视频',
      gallery_stat_1:       'Instagram帖子',
      gallery_stat_2:       '潜点数量',
      gallery_stat_3:       'TripAdvisor评价',
      gallery_stat_4:       '综合评分',
      gallery_hero_cta_ghost:   '预订住宿 →',
      gallery_hero_cta_primary: '关注Instagram',
      gallery_fb_eyebrow:   'Facebook',
      gallery_fb_h2:        '来自我们Facebook主页的实时动态',
      gallery_fb_sub:       '直接来自我们官方Facebook主页的真实照片和帖子——每日更新潜水状况、宾客照片和度假村新闻。',
      gallery_fb_cta_p:     '在我们的官方Facebook主页查看更多照片、潜水动态和度假村精彩瞬间。',
      gallery_fb_cta_btn:   '关注我们的Facebook @CasaEscondidaAnilao',
      gallery_ig_eyebrow:   'Instagram',
      gallery_ig_h2:        '关注我们的Instagram',
      gallery_ig_sub:       '来自@casaescondidaanilao的真实潜水生活、微距生物、水下摄影和度假村精彩时光。',
      gallery_ig_cta_p:     '我们在Instagram上有802篇帖子——关注我们，随时查看最新潜水、生物发现和度假村生活。',
      gallery_ig_cta_btn:   '在Instagram上查看全部 @casaescondidaanilao',
      gallery_video_eyebrow:'观看',
      gallery_video_h2:     '卡萨埃斯孔迪达视频专区',
      gallery_video_sub:    '真实宾客视频博客和官方视频——亲眼见证是什么让卡萨埃斯孔迪达成为阿尼劳最受欢迎的潜水度假村。',
      /* Gallery creature filter + modal */
      uw_filter_all:        '全部生物',
      uw_filter_nudi:       '裸鳃目',
      uw_filter_reef:       '珊瑚礁鱼',
      uw_filter_macro:      '微距与头足类',
      uw_filter_coral:      '珊瑚与海葵',
      uw_filter_turtle:     '海龟与海绵',
      uw_species:           '物种',
      uw_photos:            '照片',
      uw_spec_size:         '体型',
      uw_spec_depth:        '深度',
      uw_spec_season:       '最佳季节',
      uw_spec_rarity:       '稀有度',
      uw_spec_where:        '发现地点',
      gallery_cta_h2:       '保持联系',
      gallery_cta_p:        '关注卡萨埃斯孔迪达，获取每日潜水动态、宾客故事和特别优惠。',

      /* ── NEW LOCATION PAGE KEYS ── */
      location_eyebrow:   '找到我们',
      location_h1:        '如何前往<em>八打雁省阿尼劳</em>',
      location_page_sub:  '坐落在利加亚村马比尼的丛林山丘与珊瑚丰富海域之间——距马尼拉以南仅两小时车程。',

      /* ── NEW BLOG PAGE KEYS ── */
      blog_page_eyebrow:  '卡萨埃斯孔迪达 · 八打雁省阿尼劳',
      blog_h1:            '潜水博客与<em>海洋生物指南</em>',
      blog_page_sub:      '来自阿尼劳（菲律宾微距潜水之都）的潜水指南、海洋生物观察技巧、度假故事和旅行建议。',
      blog_stat_1:        '篇文章',
      blog_stat_2:        '个分类',
      blog_stat_3:        '个潜点报道',
      blog_hero_cta_ghost:    '探索潜水 →',
      blog_hero_cta_primary:  '预订住宿',
      cat_all:            '全部',
      cat_dive:           '潜水指南',
      cat_dive_guide:     '潜水指南',
      cat_marine:         '海洋生物',
      cat_marine_life:    '海洋生物',
      cat_travel:         '旅游攻略',
      cat_travel_tips:    '旅游攻略',
      cat_resort:         '度假村生活',
      cat_resort_life:    '度假村生活',
      cat_conservation:   '海洋保护',
      cat_dive_tips:      '潜水技巧',
      cat_news:           '新闻与活动',
      cat_photography:    '水下摄影',
      blog_sort_newest:   '最新优先',
      blog_sort_oldest:   '最旧优先',
      blog_sort_popular:  '最热门',
      blog_read_more:     '阅读更多',
      blog_search_placeholder: '搜索文章…',
      bf_featured_badge:  '精选',
      bf_eyebrow:         '潜水指南',
      bf_title:           '阿尼劳，八打雁省最佳潜点：2026年完整指南',
      bf_excerpt:         "阿尼劳在不足10公里的海岸线上汇聚了50余处有名潜点——从Kirby's Rock的海底山峭壁，到秘密湾的砂泥微距天堂。无论您在追寻裸鳃类、躄鱼还是开放水域洄游鱼类，本指南将为您详细介绍每一处必潜之地及水下风貌。",
      bf_date:            '2026年4月20日 · 阅读约8分钟',
      bf_read_more:       '阅读文章 →',

      /* ── MARQUEE ── */
      marquee_1:          'PADI五星IDC度假村',
      marquee_2:          '30+潜点',
      marquee_3:          '旅行者之选奖',
      marquee_4:          '可选早餐服务',
      marquee_5:          '岛屿烧烤体验',
      marquee_6:          '客房及套房',
      marquee_7:          '菲律宾八打雁省阿尼劳',
      marquee_8:          'TripAdvisor推荐',
      marquee_9:          '海滨度假村',
      marquee_10:         '私人码头通道',
      marquee_11:         '夜潜服务',
      marquee_12:         '氮氧混合气及设备租借',
      marquee_13:         '泳池及海滩',
      marquee_14:         '4.5★ TripAdvisor评分',

      /* ── REVIEW PLATFORM STRIP ── */
      platform_stars_ta:    '★★★★★',
      platform_score_ta:    '4.5 / 5',
      platform_label_ta:    'TripAdvisor · 旅行者之选\n奖项得主',
      platform_count_ta:    '81条评价',
      platform_stars_google:'★★★★★',
      platform_score_google:'4.7 / 5',
      platform_label_google:'Google商家\n高度评价',
      platform_count_google:'230+条评价',
      platform_stars_fb:    '★★★★★',
      platform_score_fb:    '5.0 / 5',
      platform_label_fb:    'Facebook\n推荐',
      platform_count_fb:    '查看全部评价',

      /* ── ABOUT extra ── */
      about_p_short:      '卡萨埃斯孔迪达——"隐秘之家"——是位于菲律宾八打雁省阿尼劳的精品度假村兼PADI潜水中心，世界级微距潜水与真挚的菲律宾热情在此交汇。',
      about_stars_label:  '4.5 · 81条TripAdvisor评价',
      about_cta:          '预订住宿',

      /* ── DIVE SECTION (homepage) ── */
      dive_eyebrow:       '潜水中心',
      dive_title:         '潜入阿尼劳传奇深处',
      dive_sub:           '阿尼劳是菲律宾水肺潜水的发源地，至今仍是全球珊瑚多样性与微距生物最丰富的顶级潜水胜地之一。我们的专业PADI潜水中心让您置身这一水下王国的核心。',
      dive_cta_primary:   '预订潜水套餐',
      dive_cta_secondary: '探索潜水中心 →',

      /* ── SERVICES badges ── */
      svc_badge_1:        '潜水中心',
      svc_badge_2:        '海滩与泳池',
      svc_badge_3:        '餐厅',
      svc_badge_4:        '住宿',
      svc_badge_5:        '游览',
      svc_badge_6:        '活动与WiFi',

      /* ── ROOMS (homepage cards) ── */
      rm_badge_1:         '标准客房 · 16间',
      rm_badge_2:         '豪华客房 · 4间',
      rm_badge_3:         '套房 · 4间 · 最受欢迎 ★',
      rm_name_1:          '标准客房',
      rm_name_2:          '豪华双人间或双床间',
      rm_name_3:          '海景套房',
      rm_desc_1:          '每间标准客房均设有独立淋浴卫浴、空调及平板电视，可选大床或2张单人床。',
      rm_desc_2:          '宽敞的豪华客房配备空调、衣柜及可欣赏海景的露台，独立卫浴含淋浴设施，提供2张大床。',
      rm_desc_3:          '俯瞰泳池与海洋，套房设有私人按摩浴池、可观赏海景与泳池的露台、空调及平板电视。3间套房提供2张大床；1间套房提供1张特大床。',
      rm_feat_1_1:        '18平方米',
      rm_feat_1_2:        '大床或2张单人床',
      rm_feat_1_3:        '空调',
      rm_feat_1_4:        '独立卫浴',
      rm_feat_1_5:        '免费WiFi',
      rm_feat_2_1:        '40平方米',
      rm_feat_2_2:        '2张大床',
      rm_feat_2_3:        '海景',
      rm_feat_2_4:        '阳台',
      rm_feat_2_5:        '免费WiFi',
      rm_feat_3_1:        '50平方米',
      rm_feat_3_2:        '海景',
      rm_feat_3_3:        '按摩浴池',
      rm_feat_3_4:        '2张大床或1张特大床',
      rm_view_btn:        '查看客房',
      rm_book_btn:        '立即预订',
      rooms_note:         '可选早餐 · 全部客房禁烟 ·',

      /* ── GALLERY (homepage) ── */
      gallery_lead:       '卡萨埃斯孔迪达的每个角落都诉说着故事——从水下绚烂的珊瑚，到夕阳下海滩烧烤的温暖光芒。这就是阿尼劳最美好的样子。',
      gallery_fb_btn:     '更多内容在Facebook →',
      gallery_cta:        '预订住宿',
      mo_cap_1:           '卡萨埃斯孔迪达',
      mo_cap_2:           '海滨露台',
      mo_cap_3:           '泳池与休闲区',
      mo_cap_4:           '度假村餐厅',
      mo_cap_5:           '潜水艇',
      mo_cap_6:           '海滩甲板',
      mo_cap_7:           '潜水社群',
      mo_cap_8:           '准备下潜',
      mo_cap_9:           '潜水冒险',
      mo_cap_10:          '潜水团队',
      mo_cap_11:          '度假村生活',
      mo_cap_12:          '泳池训练',
      mo_cap_13:          '潜水培训',

      /* ── REVIEWS ── */
      reviews_count:      '81条TripAdvisor评价',
      reviews_award:      '🏆 旅行者之选',
      rb_cleanliness:     '清洁度',
      rb_service:         '服务',
      rb_location:        '位置',
      rb_sleep_quality:   '睡眠质量',
      rb_rooms:           '客房',
      rb_value:           '性价比',
      rv_stars_1:         '★★★★★',
      rv_quote_1:         '卓越的服务——员工在每一个细节上都尽心尽力。自助早餐品种丰富、美味可口。清晨推开窗，泳池与大海的美景尽收眼底。',
      rv_name_1:          '玛丽亚·R.',
      rv_meta_1:          '2025年3月',
      rv_source_1:        'TripAdvisor',
      rv_stars_2:         '★★★★★',
      rv_quote_2:         '潜水中心一流。我们的潜导极其专业、知识渊博。寒冷的清晨潜水结束后，潜水店提供热水淋浴，这个贴心设计让人印象深刻。',
      rv_name_2:          '詹姆斯·T.',
      rv_meta_2:          '2025年2月',
      rv_source_2:        'TripAdvisor',
      rv_stars_3:         '★★★★★',
      rv_quote_3:         '海岛烧烤晚宴是整趟旅程的亮点。食物美味绝伦，氛围如梦似幻。阿尼劳的潜点绝对是世界级水准。',
      rv_name_3:          '莎拉·L.',
      rv_meta_3:          '2025年1月',
      rv_source_3:        'TripAdvisor',
      reviews_read_all:   '查看TripAdvisor全部81条评价 →',
      reviews_cta:        '加入我们的宾客——立即预订',

      /* ── LOCATION (homepage) ── */
      loc_map_btn:        '在Google地图中查看 →',
      location_lead:      '卡萨埃斯孔迪达坐落于阿尼劳的心脏地带——菲律宾潜水之都，从马尼拉轻松可达，是完美的周末或长假度假胜地。',
      loc_lbl_address:    '地址',
      loc_val_address:    'Brgy. Ligaya, Mabini, 八打雁省, 菲律宾 4202',
      loc_lbl_manila:     '从马尼拉机场出发',
      loc_val_manila:     '88.5公里 · 沿STAR收费公路经由八打雁市至马比尼，约需2至3小时',
      loc_lbl_bus:        '乘坐巴士',
      loc_val_bus:        '从布恩迪亚乘坐JAM Liner或Ceres巴士至八打雁，再乘三轮车或吉普尼前往阿尼劳',
      loc_lbl_contact:    '联系与预订',

      /* ── BOOKING SECTION ── */
      booking_eyebrow:    '预订',
      form_label_name:    '您的姓名',
      form_label_email:   '电子邮箱',
      form_label_checkin: '入住日期',
      form_label_guests:  '入住人数',
      form_placeholder_name:  '您的姓名',
      form_placeholder_email: '电子邮箱',
      form_submit_btn:    '查询空房',
      form_success_title: '预订申请已收到！',
      form_success_sub:   '感谢您——我们将在24小时内与您确认入住安排。',
      booking_note:       '或通过以下渠道联系我们：',

      /* ── FOOTER ── */
      foot_desc:          '隐匿于八打雁省阿尼劳的世外桃源——世界级菲律宾潜水与卓越热情好客在八打雁湾畔交汇。',
      foot_link_1_1:      '关于度假村',
      foot_link_1_2:      '潜水中心',
      foot_link_1_3:      '客房与套房',
      foot_link_1_4:      '图片展览',
      foot_link_1_5:      '餐厅与酒吧',
      foot_link_2_1:      'PADI开放水域课程',
      foot_link_2_2:      '高级开放水域课程',
      foot_link_2_3:      '救援潜水员课程',
      foot_link_2_4:      '导览潜水',
      foot_link_2_5:      '夜潜',
      foot_link_3_1:      '阿尼劳最佳潜点',
      foot_link_3_2:      '阿尼劳裸鳃类生物',
      foot_link_3_3:      '马尼拉至阿尼劳攻略',
      foot_link_3_4:      '豆丁海马观赏指南',
      foot_link_3_5:      'Kirby\'s Rock潜点',
      foot_link_3_6:      '全部文章 →',
      foot_link_4_1:      'Brgy. Ligaya, 马比尼',
      foot_link_4_2:      '八打雁省 4202',
      foot_link_4_3:      '菲律宾',
      foot_link_4_4:      'Google地图 →',
      foot_link_4_5:      '立即预订',
      foot_privacy:       '隐私政策',
      foot_terms:         '服务条款',
      /* Legal pages */
      policy_contents:    '目录',
      tos_h1:             '服务条款',
      tos_sub:            '在预订住宿或参加卡萨埃斯孔迪达阿尼劳潜水活动前，请仔细阅读以下条款。',
      tos_s1:  '条款协议',              tos_s2:  '预订与预约',
      tos_s3:  '取消与退款',            tos_s4:  '潜水要求',
      tos_s5:  '度假村规则与行为准则',  tos_s6:  '责任免除',
      tos_s7:  '健康与医疗',            tos_s8:  '摄影与媒体',
      tos_s9:  '知识产权',              tos_s10: '适用法律',
      tos_s11: '条款修订',              tos_s12: '联系我们',
      pp_h1:   '隐私政策',
      pp_sub:  '我们如何在卡萨埃斯孔迪达阿尼劳收集、使用和保护您的个人信息。',
      pp_s1:  '我们收集的信息',         pp_s2:  '信息使用方式',
      pp_s3:  'Cookie与跟踪技术',       pp_s4:  '数据共享',
      pp_s5:  '数据保留',               pp_s6:  '您的权利',
      pp_s7:  '第三方链接',             pp_s8:  '儿童隐私',
      pp_s9:  '政策变更',               pp_s10: '联系我们',
      foot_copy:          '© 2026 卡萨埃斯孔迪达阿尼劳度假村暨潜水中心 · 马比尼，八打雁省',
      foot_powered:       '由TechNext Asia提供技术支持',
      soc_aria_fb:        'Facebook',
      soc_aria_ig:        'Instagram',
      soc_aria_ta:        'TripAdvisor',

      /* ── ROOMS.HTML footer variant keys ── */
      foot_h_explore:     '探索',
      foot_h_dive:        '潜水课程',
      foot_h_articles:    '最新文章',
      foot_h_location:    '位置',
      foot_link_about:    '关于度假村',
      foot_link_dive:     '潜水中心',
      foot_link_rooms:    '客房与套房',
      foot_link_gallery:  '图片展览',
      foot_link_dining:   '餐厅与酒吧',
      foot_link_ow:       'PADI开放水域课程',
      foot_link_aow:      '高级开放水域课程',
      foot_link_rescue:   '救援潜水员课程',
      foot_link_guided:   '导览潜水',
      foot_link_night:    '夜潜',
      foot_link_blog_1:   '阿尼劳最佳潜点',
      foot_link_blog_2:   '阿尼劳裸鳃类生物',
      foot_link_blog_3:   '马尼拉至阿尼劳攻略',
      foot_link_blog_4:   '豆丁海马观赏指南',
      foot_link_blog_5:   'Kirby\'s Rock潜点',
      foot_link_all_articles: '全部文章 →',
      foot_link_loc_1:    'Brgy. Ligaya, 马比尼',
      foot_link_loc_2:    '八打雁省 4202',
      foot_link_loc_3:    '菲律宾',
      foot_link_maps:     'Google地图 →',
      foot_link_booknow:  '立即预订',

      /* ── MODAL ── */
      modal_eyebrow:      '预订',
      modal_title:        '预订您的住宿',
      modal_sub:          '请填写您的信息，我们将在24小时内确认您的预订。',
      modal_label_name:   '全名',
      modal_label_phone:  '联系电话',
      modal_label_email:  '电子邮箱',
      modal_label_checkin:'入住日期',
      modal_label_guests: '入住人数',
      modal_placeholder_name:  '您的全名',
      modal_placeholder_phone: '+63 9XX XXX XXXX',
      modal_placeholder_email: 'your@email.com',
      modal_submit_btn:   '发送预订申请',
      modal_note:         '或通过以下渠道联系我们：Facebook · TripAdvisor',
      modal_success_title:'预订申请已收到！',
      modal_success_sub:  '感谢您——我们将在24小时内与您确认在卡萨埃斯孔迪达的入住安排。',
      modal_success_close:'关闭',

      /* ── EXIT POPUP ── */
      exit_cta:           '继续预订',
      exit_dismiss:       '不了，返回网站',

      /* ── ROOMS PAGE ── */
      rooms_h1_text:      '客房',
      rooms_h1_em:        '与套房',
      rooms_stat_1_number:'24',
      rooms_stat_1_label: '客房总数',
      rooms_stat_2_number:'3',
      rooms_stat_2_label: '房型',
      rooms_stat_3_number:'100%',
      rooms_stat_3_label: '可选早餐',
      rooms_stat_4_number:'8',
      rooms_stat_4_label: '海景客房',
      rooms_hero_cta_ghost:   '浏览客房 →',
      rooms_hero_cta_primary: '预订客房',
      inc_breakfast_title:'早餐',
      inc_breakfast_desc: '早餐为可选项目，可另行预订。亦提供全食宿方案——从抵达当天午餐起至离店当天午餐止。',
      inc_wifi_title:     '免费WiFi',
      inc_wifi_desc:      '度假村全域提供高速无线网络，包括客房及潜水中心。',
      inc_gear_title:     '潜水装备存放',
      inc_gear_desc:      '为所有住客提供专用冲洗水槽和装备晾晒架。',
      inc_frontdesk_title:'前台服务',
      inc_frontdesk_desc: '前台营业至晚上9时，为您提供入住办理、潜水预订及咨询服务。',
      rooms_sec_eyebrow:  '选择您的房间',
      rooms_sec_h2:       '找到您的理想住所',
      rooms_sec_sub:      '从温馨的标准客房到宽敞的海景套房——步行即可抵达海边。',
      rm_badge_standard:  '标准客房 · 16间',
      rm_badge_deluxe:    '豪华客房 · 4间',
      rm_badge_suite:     '套房 · 4间',
      rm_badge_popular:   '最受欢迎 ★',
      rm_meta_size_18:    '18平方米',
      rm_meta_size_40:    '40平方米',
      rm_meta_size_50:    '50平方米',
      rm_meta_guests_2:   '最多2位宾客',
      rm_meta_guests_4:   '最多4位宾客',
      rm_meta_beds_2single:'2张单人床',
      rm_meta_beds_2double:'2张大床',
      rm_meta_beds_standard:'大床或2张单人床',
      rm_meta_beds_deluxe:'2张大床',
      rm_meta_beds_suite:  '2张大床或1张特大床',
      rm_feats_label:     '客房设施',
      rm_feat_aircon:     '空调',
      rm_feat_bathroom:   '独立卫浴',
      rm_feat_shower:     '浴缸或淋浴',
      rm_feat_bidet:      '智能马桶盖',
      rm_feat_toiletries: '免费洗漱用品',
      rm_feat_towels:     '浴巾',
      rm_feat_tv:         '平板电视',
      rm_feat_desk:       '书桌',
      rm_feat_floor:      '瓷砖/大理石地板',
      rm_feat_linen:      '床上用品',
      rm_feat_sanitiser:  '免洗洗手液',
      rm_feat_wifi:       '免费WiFi',
      rm_feat_nosmoking:  '禁止吸烟',
      rm_feat_seaview:    '海景',
      rm_feat_balcony:    '阳台',
      rm_feat_terrace:    '露台',
      rm_feat_wardrobe:   '衣柜',
      rm_feat_poolview:   '泳池景观',
      rm_feat_hottub:     '按摩浴池',
      rm_feat_bathshower: '浴缸及淋浴',
      rm_feat_fridge:     '冰箱',
      rm_btn_book:        '立即预订',
      rm_btn_inquire:     '询价',
      rooms_areas_eyebrow:'探索园区',
      rooms_areas_h2:     '度假村公共区域',
      rooms_areas_sub:    '客房之外——让卡萨埃斯孔迪达体验更加完整的公共空间。',
      area_bar_label:     '酒吧与休闲区',
      area_bar_name_prefix:'',
      area_bar_name_em:   '酒吧与休闲区',
      area_bar_desc:      '在俯瞰八打雁湾的露天酒吧里，潜水结束后尽情放松。享用冷饮、鸡尾酒和小吃，在轻松的海滨氛围中分享潜水故事，等待落日余晖。',
      area_bar_feat_1:    '海景',
      area_bar_feat_2:    '冷饮与鸡尾酒',
      area_bar_feat_3:    '露天环境',
      area_bar_feat_4:    '轻食小吃',
      area_bar_feat_5:    '潜水复盘好去处',
      area_btn_book:      '立即预订',
      area_beach_label:   '海滩甲板',
      area_beach_name_prefix:'',
      area_beach_name_em: '海滩甲板',
      area_beach_desc:    '从套房直接踏上海滨甲板，感受八打雁湾近在咫尺。躺椅、阳光与无遮挡海景——在两次潜水之间放松身心，或在此欣赏海上日出的绝佳场所。',
      area_beach_feat_1:  '海滨直达',
      area_beach_feat_2:  '休闲区',
      area_beach_feat_3:  '海景',
      area_beach_feat_4:  '观日出胜地',
      area_beach_feat_5:  '直接入海',
      rooms_policies_eyebrow: '预订须知',
      rooms_policies_h2:  '度假村规定',
      pol_checkin_title:  '入住/退房',
      pol_checkin_1:      '入住时间：下午2:00起',
      pol_checkin_2:      '退房时间：中午12:00前',
      pol_checkin_3:      '提前入住视房况而定',
      pol_checkin_4:      '延迟退房可申请（另收费用）',
      pol_inclusions_title:'含项',
      pol_inclusions_1:   '早餐为可选项目，可另行预订',
      pol_inclusions_2:   '客房及公共区域免费Wi-Fi',
      pol_inclusions_3:   '使用游泳池及度假村设施',
      pol_inclusions_4:   '潜水装备冲洗水槽及晾晒架',
      pol_houserules_title:'住宿规定',
      pol_houserules_1:   '室内禁止吸烟——户外设有指定吸烟区',
      pol_houserules_2:   '度假村内不允许携带宠物',
      pol_houserules_3:   '0–6岁儿童免费',
      pol_houserules_4:   '提供全食宿方案——从抵达当天午餐起至离店当天午餐止',
      pol_houserules_6:   '前20辆车免费停车——先到先得',
      pol_booking_title:  '预订与付款',
      pol_booking_1:      '确认预订须缴纳50%不可退还定金',
      pol_booking_2:      '出发前至少1个月须付清全款',
      pol_booking_3:      '客房日间使用开放时间：上午8:00 – 下午5:00',
      pol_booking_4:      '逗留超过3小时的访客将收取全额日游费用',
      rooms_cta_h2:       '准备好预订了吗？',
      rooms_cta_p:        '欢迎直接联系我们，咨询潜水住宿套餐及团体预订事宜。',
      rooms_cta_btn_main: '预订您的客房',
      rooms_cta_btn_outline: '在Facebook上留言',

      /* ── DIVE PAGE ── */
      dive_hero_cta_ghost:   '查看潜水套餐 →',
      dive_hero_cta_primary: '探索潜水课程',
      dive_overview_eyebrow: '我们的潜水中心',
      dive_overview_h2:      '每次潜水的起点',
      dive_overview_p1:      '卡萨埃斯孔迪达的PADI认证潜水中心就在客房几步之遥。我们经验丰富的潜导和教练熟知阿尼劳每一处礁盘、缝隙与小生物——无论您是第一次潜水还是第一千次，都将得到专业指引。',
      dive_overview_p2:      '热水淋浴、完整设备租借、相机冲洗站、氮氧混合气充装，以及可直达阿尼劳传奇潜点的私人码头——让每一个清晨都轻松自如。',
      dive_courses_eyebrow:  'PADI课程',
      dive_courses_h2:       '学习潜水，提升等级',
      dive_courses_sub:      '从初学者到追求专项认证的资深潜水员——我们的教练将全程陪伴引导。',
      dive_course1_level:    '初学者',
      dive_course1_name:     '体验水肺潜水',
      dive_course1_desc:     '无需任何认证。通过泳池课程和浅海潜水体验水肺潜水——设备和潜导服务均已包含。',
      dive_course1_detail1:  '无需任何经验',
      dive_course1_detail2:  '半天体验',
      dive_course1_detail3:  '最深6米',
      dive_course2_level:    '认证课程',
      dive_course2_name:     'PADI开放水域潜水员',
      dive_course2_desc:     '全球最受欢迎的潜水认证。完成限制水域练习和四次开放水域潜水，即可获得终身有效、全球认可的证书。',
      dive_course2_detail1:  '10岁以上',
      dive_course2_detail2:  '3至4天完成',
      dive_course2_detail3:  '认证深度至18米',
      dive_course3_level:    '进阶',
      dive_course3_name:     '高级开放水域潜水员',
      dive_course3_desc:     '通过五次专项探险潜水（含深潜和水下导航）提升技能，潜得更深、看得更多、更加自信。',
      dive_course3_detail1:  '需持有OW认证',
      dive_course3_detail2:  '2天 / 5次潜水',
      dive_course3_detail3:  '认证深度至30米',
      dive_course4_level:    '安全',
      dive_course4_name:     '救援潜水员',
      dive_course4_desc:     '学习预判和应对潜水问题。这是最具挑战性也最有价值的PADI课程——被普遍认为是每位潜水员职业生涯的转折点。',
      dive_course4_detail1:  '需持有AOW + EFR认证',
      dive_course4_detail2:  '3至4天',
      dive_course4_detail3:  '情景模拟训练',
      dive_course5_level:    '专长课程',
      dive_course5_name:     '氮氧混合气/富氧空气',
      dive_course5_desc:     '使用富氧空气延长潜水时间并减少氮气负荷。在阿尼劳多次潜水的理想选择——我们最受欢迎的专长认证之一。',
      dive_course5_detail1:  '需持有OW认证',
      dive_course5_detail2:  '1天/知识复习',
      dive_course5_detail3:  '可充装至40%氮氧混合气',
      dive_course6_level:    '专业级别',
      dive_course6_name:     '潜水长',
      dive_course6_desc:     '将热情转化为职业。协助课程教学、带领持证潜水员，加入我们的专业团队——在全球最佳潜水地点之一开启职业生涯。',
      dive_course6_detail1:  '需持有救援潜水员认证',
      dive_course6_detail2:  '灵活时间安排',
      dive_course6_detail3:  '提供实习机会',
      dive_eco_eyebrow:      '生态图鉴',
      dive_eco_h2:           '水下等待着什么',
      dive_eco_sub:          '阿尼劳位于珊瑚三角区——地球上海洋生物多样性最丰富的区域。浏览我们每日潜探的生态系统：色彩斑斓的裸鳃类、珊瑚礁鱼群、隐匿在珊瑚碎石中的微距生物，以及偶尔从我们码头旁游过的海龟。',
      dive_pkgs_eyebrow:     '潜水套餐',
      dive_pkgs_h2:          '选择您的潜水体验',
      dive_pkgs_sub:         '从单次导览潜水到全方位住宿式套餐——我们为每位潜水员和每种行程提供合适选择。',
      dive_pkg1_name:        '双次出海套餐',
      dive_pkg1_tagline:     '适合持证潜水员的2次日间船潜',
      dive_pkg1_feat1:       '含出海费用',
      dive_pkg1_feat2:       '1名潜导服务',
      dive_pkg1_feat3:       '气瓶及潜水许可',
      dive_pkg1_feat4:       '潜水简报及记录本签名',
      dive_pkg1_feat5:       '不含设备租借（可另行租借）',
      dive_pkg_cta_inquire:  '立即询价',
      dive_pkg_popular_badge:'最受欢迎',
      dive_pkg2_name:        '3天潜水套餐',
      dive_pkg2_tagline:     '住宿、潜水、循环往复——完整的阿尼劳体验',
      dive_pkg2_feat1:       '3晚住宿（含早餐）',
      dive_pkg2_feat2:       '每天最多3次潜水',
      dive_pkg2_feat3:       '专属潜导',
      dive_pkg2_feat4:       '礁盘夜潜',
      dive_pkg2_feat5:       '可充装氮氧混合气',
      dive_pkg2_feat6:       '可选设备租借',
      dive_pkg_cta_book:     '预订此套餐',
      dive_pkg3_name:        '单次/夜潜套餐',
      dive_pkg3_tagline:     '随时畅潜，日间或夜间均可',
      dive_pkg3_feat1:       '含出海费用',
      dive_pkg3_feat2:       '1名潜导服务',
      dive_pkg3_feat3:       '气瓶及潜水许可',
      dive_pkg3_feat4:       '潜水简报及记录本签名',
      dive_pkg3_feat5:       '不含设备租借（可另行租借）',
      dive_pkgs_note:        '可选附加服务：当天同一套餐内的第3次额外潜水。所有套餐均包含使用冲洗水槽及相机冲洗站。',
      dive_pkgs_cta_heading: '不确定哪个套餐适合您？',
      dive_pkgs_cta_sub:     '我们的潜水团队很乐意为您提供建议。欢迎联系我们，我们将为您制定完美的潜水计划。',
      dive_pkgs_cta_btn:     '联系我们的潜水团队 →',
      dive_equip_eyebrow:    '装备与设施',
      dive_equip_h2:         '一应俱全',
      dive_equip_sub:        '轻装出行？我们的全服务潜水中心为您备齐一切。',
      dive_equip1_name:      '浮力背心（BCD）及调节器',
      dive_equip1_note:      '各种尺寸均可按日租借',
      dive_equip2_name:      '潜水服',
      dive_equip2_note:      '3毫米及5毫米，尺寸齐全',
      dive_equip3_name:      '潜水电脑表',
      dive_equip3_note:      '可按次租借',
      dive_equip4_name:      '氮氧混合气充装',
      dive_equip4_note:      '现场可充装至40% EANx',
      dive_equip5_name:      '相机冲洗站',
      dive_equip5_note:      '配备专用淡水冲洗水槽',
      dive_equip6_name:      '面镜、脚蹼及通气管',
      dive_equip6_note:      '完整浮潜套装可租借',
      dive_equip7_name:      '潜水手电',
      dive_equip7_note:      '夜潜主备两用手电',
      dive_equip8_name:      '海洋保育',
      dive_equip8_note:      '主动开展珊瑚礁监测与保护',
      dive_equip9_name:      '潜水靴',
      dive_equip9_note:      '可按日租借',
      dive_equip10_name:     '气瓶 – 空气 12L/15L',
      dive_equip10_note:     '空气气瓶，两种规格可选',
      dive_equip11_name:     '气瓶 – 氮氧混合气 12L/15L',
      dive_equip11_note:     '富氧空气气瓶，两种规格',
      dive_equip12_name:     '额外潜导',
      dive_equip12_note:     '日间及夜间潜水均可预约',
      dive_equip13_name:     '全套装备',
      dive_equip13_note:     '完整租借套装，尺寸齐全',
      dive_equip14_name:     '运动相机（GoPro）',
      dive_equip14_note:     '可按日租借',
      dive_equip15_name:     '水面标志浮标（DSMB）',
      dive_equip15_note:     '安全上升用水面标志浮标',
      dive_equip16_name:     '皮划艇',
      dive_equip16_note:     '可租借4小时',
      dive_equip17_name:     '黑水潜水手电组',
      dive_equip17_note:     '1套3件，专为黑水潜水设计',
      dive_equip18_name:     '配重及配重带',
      dive_equip18_note:     '使用CE潜水套餐免费提供',
      dive_equip19_name:     '相机电池',
      dive_equip19_note:     '可租借相机电池',
      dive_cond_eyebrow:     '潜水前须知',
      dive_cond_h2:          '潜水套餐<em>注意事项</em>',
      dive_cond1_title:      '套餐包含内容',
      dive_cond1_1:          '潜水套餐费用包含出海费、1名潜导服务及每次潜水所需气瓶。',
      dive_cond1_2:          '套餐不含设备——可在潜水中心另行租借。',
      dive_cond1_3:          '如需额外潜导，相关费用将向提出申请的宾客或团体另行收取。',
      dive_cond2_title:      '潜水时间',
      dive_cond2_1:          '每次潜水平均时间约为45分钟。',
      dive_cond2_2:          '最长潜水时间为60分钟。',
      dive_cond2_3:          '双次出海套餐每次出行限2次船潜。',
      dive_cond3_title:      '取消及未完成潜水',
      dive_cond3_1:          '已错过或取消的潜水不可转让，亦不予退款。',
      dive_cond3_2:          '取消船只及潜导预约将收取相应费用的50%。',
      dive_cond4_title:      '设备及装备',
      dive_cond4_1:          '所有租借设备须以正常工作状态归还。',
      dive_cond4_2:          '因宾客造成的任何损坏将按情况收费。',
      dive_course7_level:    'ReActivate',
      dive_course7_name:     'PADI ReActivate',
      dive_course7_desc:     '暂别潜水一段时间后重返水下？通过理论复习和引导式泳池练习重建信心，再次出发探索开放水域。',
      dive_course7_detail1:  '需持有开放水域认证',
      dive_course7_detail2:  '半天',
      dive_course7_detail3:  '泳池+引导潜水',
      dive_cta_h2:           '准备好纵身入海了吗？',
      dive_cta_p:            '无论您是初次体验还是资深潜水员，阿尼劳的礁盘正在等待。立即预订住宿与潜水套餐。',
      dive_cta_btn_primary:  '预订潜水住宿',
      dive_cta_btn_ghost:    '如何抵达 →',

      /* ── INSTRUCTORS ── */
      instr_eyebrow:      '认识我们的教练',
      instr_h2:           '与<em>大师</em>共潜',
      instr_sub:          '我们的PADI认证教练带领数百名潜水员探索阿尼劳的传奇海底世界——从初次呼吸到高级认证，全程陪伴。',
      instr_1_cert:       'PADI 首席潜水教练',
      instr_1_name:       'Armando G. Vergara',
      instr_1_cert_sub:   '首席潜水教练',
      instr_1_bio:        '拥有多年探索阿尼劳多元珊瑚礁的PADI首席教练。Dong以沉稳专业的姿态和对大海的真挚热情，全程陪伴每一堂课程与导潜。',
      instr_2_cert:       '硕士水肺潜水训练员',
      instr_2_name:       'Andrew Oh',
      instr_2_cert_sub:   'MSDT',
      instr_2_bio:        '荣获硕士水肺潜水训练员资格，Andrew将精准的技术与耐心的教学融为一体——是每一位认真进阶的潜水员的理想导师。',
      instr_label_padi:   'PADI 编号',
      instr_label_since:  '认证时间',
      instr_cta:          '预约课程 →',

      /* ── LOCATION PAGE ── */
      location_stat_1:    '距马尼拉',
      location_stat_2:    '驾车时间',
      location_stat_3:    '个潜水点',
      location_hero_cta_ghost:   '联系我们',
      location_hero_cta_primary: '前往导航 →',
      location_qc_address_lbl: '地址',
      location_qc_address_val: 'Brgy. Ligaya, 马比尼\n八打雁 4202, 菲律宾',
      location_qc_phone_lbl:   '电话',
      location_qc_email_lbl:   '邮箱',
      location_qc_desk_lbl:    '前台',
      location_qc_desk_val:    '营业至晚上9时',
      location_routes_eyebrow: '如何抵达',
      location_routes_h2:      '从马尼拉到阿尼劳',
      location_routes_sub:     '距首都以南约两小时——选择您偏好的交通方式，我们将一步步为您指引。',
      location_route_car:      '自驾前往',
      location_route_bus:      '乘巴士+三轮车',
      location_route_van:      '私人包车接送',
      route_car_step1_title:   '马尼拉/马卡蒂',
      route_car_step1_desc:    '沿SLEX（南吕宋高速公路）向南行驶——从大马尼拉任何区域出发的最便捷路线。',
      route_car_step1_meta:    '出发',
      route_car_step2_title:   '圣托马斯出口',
      route_car_step2_desc:    '在圣托马斯出口下高速，继续沿STAR收费公路朝八打雁市方向行驶。',
      route_car_step2_meta:    '约90分钟',
      route_car_step3_title:   '马比尼转向',
      route_car_step3_desc:    '驶出马比尼/阿尼劳出口，沿海岸公路标志向度假村方向行驶。',
      route_car_step3_meta:    '约25分钟',
      route_car_step4_title:   'Brgy. Ligaya',
      route_car_step4_desc:    '注意左侧的卡萨埃斯孔迪达标志牌，住客提供免费停车。',
      route_car_step4_meta:    '已到达',
      route_bus_step1_title:   '布恩迪亚或古包候车站',
      route_bus_step1_desc:    '乘坐JAM Liner或ALPS Transit巴士前往八打雁大巴总站。',
      route_bus_step1_meta:    '约2小时',
      route_bus_step2_title:   '八打雁大巴总站',
      route_bus_step2_desc:    '下车后转乘前往马比尼/阿尼劳方向的吉普尼或厢型车。',
      route_bus_step2_meta:    '约2小时',
      route_bus_step3_title:   '阿尼劳市区',
      route_bus_step3_desc:    '在阿尼劳路口乘坐三轮车，告知司机"卡萨埃斯孔迪达，Brgy. Ligaya"。',
      route_bus_step3_meta:    '约15分钟',
      route_bus_step4_title:   '卡萨埃斯孔迪达',
      route_bus_step4_desc:    '抵达大门——前台工作人员将协助搬运行李并办理入住。',
      route_bus_step4_meta:    '已到达',
      route_van_step1_title:   '告知您的航班信息',
      route_van_step1_desc:    '请提前至少48小时发送到达信息，我们将为您安排私人包车接送。',
      route_van_step1_meta:    '邮件',
      route_van_step2_title:   'NAIA接机',
      route_van_step2_desc:    '我们的司机将在机场举牌迎接，全程协助装载装备和行李。',
      route_van_step2_meta:    '准时',
      route_van_step3_title:   '门到门服务',
      route_van_step3_desc:    '舒适乘坐约2.5小时向南行驶，途中可停靠休息。',
      route_van_step3_meta:    '约2.5小时',
      route_van_step4_title:   '卡萨埃斯孔迪达',
      route_van_step4_desc:    '轻松抵达——欢迎饮料已备好，简报已安排，装备存放已就绪。',
      route_van_step4_meta:    '已到达',
      location_transport_eyebrow: '出行方式',
      location_transport_h2:  '选择您的出行方式',
      location_transport_sub: '每条路线都通向同一处隐秘海湾——选择最适合您行程的那一条。',
      transport_car_name:     '自驾',
      transport_car_desc:     '最直接的方式。沿SLEX和STAR收费公路向南行驶——正常路况下从马卡蒂出发约需2小时。',
      transport_car_feat1:    '免费现场停车',
      transport_car_feat2:    '时间灵活',
      transport_car_feat3:    '可自带装备',
      transport_car_cta:      '在Google地图中打开',
      transport_van_name:     '私人包车接送',
      transport_van_desc:     '携带装备的潜水团体首选。从NAIA机场、马卡蒂或大马尼拉任何地点提供门到门接送。',
      transport_van_feat1:    '提供机场接送',
      transport_van_feat2:    '空调车厢，可装载潜水装备',
      transport_van_feat3:    '需提前48小时预约',
      transport_van_cta:      '预订接送',
      transport_bus_name:     '公共巴士',
      transport_bus_desc:     '经济实惠的路线。从布恩迪亚/古包乘JAM Liner或ALPS巴士至八打雁，再转乘吉普尼和三轮车前往阿尼劳。',
      transport_bus_feat1:    '班次频繁',
      transport_bus_feat2:    '空调巴士',
      transport_bus_feat3:    '全程约3至4小时',
      transport_bus_cta:      '咨询路线',
      location_dist_eyebrow:  '里程参考',
      location_dist_h2:       '一目了然',
      location_dist_sub:      '前往卡萨埃斯孔迪达的典型行程时间，以正常工作日交通状况为准。',
      location_nearby_eyebrow:'周边环境',
      location_nearby_h2:     '30+个潜点，数分钟即达',
      location_nearby_sub:    '阿尼劳以其生物多样性享誉全球。从我们的码头出发，短短几分钟的竹筏之旅，即可抵达菲律宾最丰富的砂泥与珊瑚潜点。',
      site_secret_bay_name:   '秘密湾',
      site_secret_bay_desc:   '砂泥潜水天堂——绚烂的花枝、躄鱼和罕见的裸鳃类生物栖居于黑色砂底。',
      site_secret_bay_tag1:   '微距',
      site_mainit_name:       '马伊尼特角',
      site_mainit_desc:       '水流与鱼群交汇——鰺鱼、梭鱼，以及偶尔掠过的礁鲨。',
      site_mainit_tag1:       '流潜',
      site_twin_rocks_name:   '双礁',
      site_twin_rocks_desc:   '两座壮观的水下礁柱——珊瑚密布，鱼群与海龟穿梭其间。',
      site_twin_rocks_tag1:   '礁盘',
      site_cathedral_name:    '大教堂',
      site_cathedral_desc:    '标志性礁石尖顶，十字架标记——软珊瑚繁盛，大型鱼类活跃。',
      site_cathedral_tag1:    '深潜',
      site_kirbys_name:       'Kirby\'s Rock',
      site_kirbys_desc:       '峭壁潜水——以幽灵海龙、海蛇和戏剧性的蓝色深渊著称。',
      site_kirbys_tag1:       '峭壁',
      site_beatrice_name:     '比阿特丽斯礁',
      site_beatrice_desc:     '适合各水平潜水员——健康的硬珊瑚花园，礁鱼生机勃勃。',
      site_beatrice_tag1:     '礁盘',
      site_sombrero_name:     '宽边帽岛',
      site_sombrero_desc:     '绕行精致小岛——海龟、海鳗和缤纷的软珊瑚场令人叹为观止。',
      site_sombrero_tag1:     '礁盘',
      site_arthurs_name:      'Arthur\'s Rock',
      site_arthurs_desc:      '阿尼劳经典潜点——柳珊瑚、花鲈鱼群，每处岩架都藏有微距生物。',
      site_arthurs_tag1:      '礁盘',
      location_contact_eyebrow: '联系我们',
      location_contact_h2:    '与团队沟通',
      location_contact_sub:   '有关潜水套餐、房间空档、接送或团体预订的疑问？留言给我们——通常几小时内回复。',
      cf_lbl_name:            '姓名',
      cf_lbl_email:           '邮箱',
      cf_lbl_phone:           '电话（选填）',
      cf_lbl_topic:           '咨询类型',
      cf_lbl_message:         '留言',
      cf_placeholder_name:    '您的全名',
      cf_placeholder_email:   'you@example.com',
      cf_placeholder_phone:   '+63 ...',
      cf_placeholder_message: '日期、入住人数、潜水经验、潜水偏好……',
      cf_submit:              '发送留言',
      cf_success_msg:         '感谢您的留言！我们将尽快与您联系。',
      cf_error_msg:           '发送失败，请重试或直接发送邮件联系我们。',
      location_faq_eyebrow:   '出行常见问题',
      location_faq_h2:        '出发前须知',
      location_faq_sub:       '这些是宾客在规划阿尼劳之旅时最常问到的问题。',
      faq_q1:  '最近的机场在哪里？',
      faq_a1:  '马尼拉尼诺伊·阿基诺国际机场（NAIA/MNL）是主要入境口岸。度假村位于其以南约130公里处——驾车约需2.5小时。提前48小时通知，我们可安排从NAIA出发的私人包车接送。',
      faq_q2:  '你们提供机场接送服务吗？',
      faq_a2:  '提供——从NAIA、马卡蒂、BGC或大马尼拉任何地点出发的私人空调包车接送。请至少提前48小时联系我们并告知航班信息。',
      faq_q3:  '单日往返可行吗？',
      faq_a3:  '理论上可以——但我们强烈建议至少住两晚。阿尼劳在我们码头几分钟之内就有30多个潜点，这里的潜水品质值得每一段旅途。大多数潜水宾客会入住3至5晚。',
      faq_q4:  '度假村内有停车位吗？',
      faq_a4:  '有。所有住客均可在度假村大门内免费停车，无需预约——直接驶入，工作人员将为您指引。',
      faq_q5:  '什么时候来最合适？',
      faq_a5:  '阿尼劳全年均可潜水。旱季（11月至5月）海况最平稳，能见度最佳。对于微距爱好者和水下摄影师而言，11月至3月的"砂泥季节"堪称传奇。',
      faq_q6:  '不潜水也可以来玩吗？',
      faq_a6:  '当然！许多宾客专程前来享受海景客房、泳池、菲律宾美食和宁静的海岸风光。非潜水者同样欢迎——我们提供导览浮潜、海岛游览，以及附近的各类景点体验。',
      faq_q7:  '这里有手机信号和WiFi吗？',
      faq_a7:  'Globe和Smart在该区域均有稳定的4G信号。度假村全域提供免费Wi-Fi——客房、餐厅、潜水中心及公共区域均有覆盖。',
      location_cta_h2:        '期待在阿尼劳与您相见',
      location_cta_p:         '准备好出发了吗？预订您的住宿，剩下的交给我们——路线指引、接送安排、潜水计划，一切为您打理。',
      location_cta_btn_primary: '预订住宿',
      location_cta_btn_ghost:   '获取路线 ↗',

      /* ── ROOMS PAGE hero stat labels / extra ── */
      hero_cta_primary:   '预订住宿',
      hero_cta_secondary: '探索潜水',
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

    /* data-i18n — handle text and glint <em>/<strong> children correctly */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (!val) return;
      if (val.indexOf('<') !== -1) {
        /* Translation contains HTML tags — use innerHTML */
        el.innerHTML = val;
      } else if (el.children.length === 0) {
        /* Leaf node — safe to replace all text */
        el.textContent = val;
      } else {
        /* Has child elements. If ALL children are decorative (em/strong/br/span),
         * wipe them and set plain text — avoids leaving English em text in zh.
         * Otherwise fall back to replacing the first text node only. */
        var allDecorative = true;
        var DECO = { EM:1, STRONG:1, BR:1, SPAN:1 };
        for (var ci = 0; ci < el.children.length; ci++) {
          if (!DECO[el.children[ci].tagName]) { allDecorative = false; break; }
        }
        if (allDecorative) {
          el.textContent = val;
        } else {
          for (var n = 0; n < el.childNodes.length; n++) {
            if (el.childNodes[n].nodeType === 3 && el.childNodes[n].textContent.trim()) {
              el.childNodes[n].textContent = val + ' ';
              break;
            }
          }
        }
      }
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
      '.nav-links a[href="#about"],.nav-links a[href="/"],.nav-links a[href="/#about"],.nav-links a[href="index.html"]': { en:'About', zh:'关于我们' },
      '.mob-link[href="#about"],.mob-link[href="/#about"]':      { en:'About',    zh:'关于我们' },
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
      '.r-sub':             { en:'24 rooms — 8 with direct ocean views — designed for the diving traveler. Fall asleep to the sound of waves, wake up ready to dive.',
                              zh:'共24间客房，其中8间可直接欣赏海景，专为潜水旅行者设计——伴着海浪声入眠，醒来即可投身大海。' },
      /* Dive hero */
      '.dv-eyebrow':        { en:'PADI 5 Star IDC Resort · Anilao, Batangas', zh:'PADI五星IDC度假村 · 阿尼劳，八打雁' },
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
      '.incl-item:nth-child(1), .inclusion-item:nth-child(1)': { en:'Breakfast (Optional)', zh:'早餐（可选）' },
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
          /* Skip elements already handled by data-i18n (prevents SEL overwriting them) */
          if (el.hasAttribute('data-i18n')) return;
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

    var label = (savedLang === 'zh') ? '中文' : 'EN';  /* show current lang */

    wrapper.innerHTML =
      '<button class="lang-btn" aria-haspopup="listbox" aria-expanded="false" '
      + 'aria-label="Select language" '
      + 'style="display:flex;align-items:center;gap:6px;'
      + 'background:rgba(255,255,255,0.12);'
      + 'border:1.5px solid rgba(255,255,255,0.35);border-radius:30px;'
      + 'padding:5px 13px 5px 10px;cursor:pointer;color:#ffffff;font-size:0.73rem;'
      + 'font-weight:500;letter-spacing:0.06em;white-space:nowrap;line-height:1;font-family:inherit;'
      + 'transition:border-color .25s,background .25s,color .25s,box-shadow .25s;">'
      + globeSVG
      + '<span class="lang-current">' + label + '</span>'
      + '</button>'
      + '<ul class="lang-dropdown" role="listbox" '
      + 'style="display:none;position:absolute;top:calc(100% + 6px);right:0;'
      + 'min-width:140px;list-style:none;margin:0;padding:4px 0;'
      + 'border-radius:10px;z-index:9999;transition:background .25s,border-color .25s;">'
      + '<li data-lang="en" role="option" tabindex="0" '
      + 'style="padding:10px 16px;cursor:pointer;font-size:0.78rem;letter-spacing:0.05em;'
      + 'display:flex;align-items:center;gap:8px;transition:background .15s;">'
      + '<span class="lang-opt-code" style="font-weight:600;min-width:28px;color:#4dc2e8;">EN</span>'
      + '<span class="lang-opt-name" style="opacity:.8;">English</span>'
      + '</li>'
      + '<li data-lang="zh" role="option" tabindex="0" '
      + 'style="padding:10px 16px;cursor:pointer;font-size:0.78rem;letter-spacing:0.05em;'
      + 'display:flex;align-items:center;gap:8px;transition:background .15s;">'
      + '<span class="lang-opt-code" style="font-weight:600;min-width:28px;color:#4dc2e8;">中文</span>'
      + '<span class="lang-opt-name" style="opacity:.8;">普通话</span>'
      + '</li>'
      + '</ul>';

    /* ----- 3c. Insert BEFORE theme toggle (swap order: lang | theme | book) ----- */
    /* Try multiple nav container selectors for cross-page compatibility */
    var navRight = document.querySelector('.nav-right')
      || document.querySelector('.nav-controls')
      || document.querySelector('.navbar-right')
      || document.querySelector('#nav .nav-end')
      || document.querySelector('#nav');
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

    /* ----- 3c2. Theme-aware + scroll-aware button styling ----- */
    function syncLangBtnTheme() {
      var navEl      = document.getElementById('nav');
      var isDark     = document.documentElement.getAttribute('data-theme') !== 'day';
      var isScrolled = navEl && navEl.classList.contains('scrolled');
      var b = wrapper.querySelector('.lang-btn');
      if (!b) return;

      if (!isScrolled) {
        /* Over hero (transparent nav) — frosted white pill over dark video */
        b.style.background  = 'rgba(255,255,255,0.15)';
        b.style.borderColor = 'rgba(255,255,255,0.45)';
        b.style.color       = '#ffffff';
        b.style.boxShadow   = 'none';
      } else if (isDark) {
        /* Scrolled + NIGHT — deep dark pill with teal accent border */
        b.style.background  = 'rgba(8,18,32,0.88)';
        b.style.borderColor = 'rgba(77,194,232,0.45)';
        b.style.color       = '#e8f4f8';
        b.style.boxShadow   = 'none';
      } else {
        /* Scrolled + DAY — clean white pill with dark text */
        b.style.background  = 'rgba(255,255,255,0.95)';
        b.style.borderColor = 'rgba(0,0,0,0.12)';
        b.style.color       = '#0d1e2e';
        b.style.boxShadow   = 'none';
      }
    }
    /* ----- 3c3. Dropdown theme sync ----- */
    function syncDropdownTheme() {
      var isDark = document.documentElement.getAttribute('data-theme') !== 'day';
      var d = wrapper.querySelector('.lang-dropdown');
      if (!d) return;
      if (isDark) {
        /* Night — deep dark with teal border */
        d.style.background = '#0a1628';
        d.style.border     = '1px solid rgba(77,194,232,0.22)';
        d.style.boxShadow  = '0 8px 28px rgba(0,0,0,0.5)';
        wrapper.querySelectorAll('[data-lang]').forEach(function(li) {
          li.style.color = '#e8f4f8';
        });
      } else {
        /* Day — clean white card */
        d.style.background = '#ffffff';
        d.style.border     = '1px solid rgba(0,0,0,0.1)';
        d.style.boxShadow  = '0 4px 20px rgba(0,0,0,0.12)';
        wrapper.querySelectorAll('[data-lang]').forEach(function(li) {
          li.style.color = '#0d1e2e';
        });
      }
    }

    syncLangBtnTheme();
    syncDropdownTheme();
    /* Watch theme + scroll changes */
    new MutationObserver(function() { syncLangBtnTheme(); syncDropdownTheme(); })
      .observe(document.documentElement, { attributes:true, attributeFilter:['data-theme'] });
    var _nav = document.getElementById('nav');
    if (_nav) {
      new MutationObserver(syncLangBtnTheme)
        .observe(_nav, { attributes:true, attributeFilter:['class'] });
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
      syncDropdownTheme();
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
        current.textContent = (lang === 'zh') ? '中文' : 'EN';  /* show current lang */
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
