/**
 * MÜŞTERİ KONFİGÜRASYONU
 * Yeni müşteri için yalnızca bu dosyayı doldurun.
 * index.html, style.css ve script.js hiç değişmez.
 */
window.CLIENT = {

  /* ── BRAND ─────────────────────────────────────────── */
  name: {
    sub:  'Pets',    // small top text
    main: 'villa',   // large logo text
  },
  tagline: 'Where Every Pet Leaves Looking Their Best',
  city:    'Staten Island, NY',

  brand: {
    primary: '#0A7E8C',  // buttons, links, accents
    text:    '#3D6B72',  // body text
    dark:    '#051F24',  // headings, dark areas
  },

  /* ── CONTACT ───────────────────────────────────────── */
  phone:     '+1 718-351-7387',
  whatsapp:  '17183517387',
  address:   '56 New Dorp Plaza, Staten Island, NY 10306',
  hours:     ['Wed – Sat: 9:00 AM – 6:00 PM', 'Sun, Mon & Tue: Closed'],
  instagram: '@petsvilla',
  mapQuery:  '56+New+Dorp+Plaza+Staten+Island+NY+10306',

  /* ── RATING ────────────────────────────────────────── */
  rating:      '4.5',
  reviewCount: 76,

  /* ── IMAGES ────────────────────────────────────────── */
  heroImage:  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=1400&fit=crop&crop=center&q=85',
  aboutImage: 'https://images.unsplash.com/photo-1601758177266-bc599de87707?w=800&q=85',

  /* ── ABOUT TEXT (array; each item is one paragraph) ── */
  aboutText: [
    'At Petsvilla, we\'ve been caring for the pets and families of Staten Island for over a decade. Our dedicated groomers — Rhonda, Dana, and Jackie — bring skill, patience, and genuine love to every appointment. Whether it\'s a quick bath or a full breed-specific cut, each pet receives the personal attention they deserve.',
    'Our salon at New Dorp Plaza is designed with your pet\'s comfort in mind. We use only premium, pet-safe shampoos and grooming products, and maintain a calm, stress-free environment from start to finish. You\'ll send your furry family member in — and get back a happy, fresh, and beautiful companion.',
  ],

  /* ── STATS BAR (4 items) ───────────────────────────── */
  stats: [
    { value: '10+',  label: 'Years of Experience' },
    { value: '76',   label: 'Happy Reviews' },
    { value: '4.5★', label: 'Google Rating' },
    { value: '100%', label: 'Pet-Safe Products' },
  ],

  /* ── SERVICES (4 items; last card auto-accent color) ── */
  services: [
    {
      icon: '🛁',
      title: 'Bath & Blow Dry',
      desc: 'A deep, thorough wash and professional blow-out using gentle, pet-safe shampoos that leave your dog\'s coat clean, shiny, and smelling fresh.',
      ctaText: 'Book a Bath',
      ctaHref: 'tel:+17183517387',
    },
    {
      icon: '✂️',
      title: 'Full Grooming',
      desc: 'Breed-specific styling and precision cuts by our expert groomers. Your pet will walk out looking picture-perfect every single visit.',
      ctaText: 'Schedule a Groom',
      ctaHref: 'tel:+17183517387',
    },
    {
      icon: '🐾',
      title: 'Nail Trim & File',
      desc: 'Quick, stress-free nail care to keep your pet comfortable and your floors scratch-free. Walk-ins welcome for this express service.',
      ctaText: 'Get a Trim',
      ctaHref: 'tel:+17183517387',
    },
    {
      icon: '🦷',
      title: 'Teeth Brushing',
      desc: 'Freshen your pet\'s smile with our gentle teeth brushing add-on — a small step that makes a big difference in their long-term health.',
      ctaText: 'Add to Service',
      ctaHref: 'https://wa.me/17183517387',
    },
  ],

  /* ── GALLERY (5 items; layout: 'normal' | 'tall' | 'wide') */
  gallery: [
    { url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=85', label: 'Expert Grooming',  layout: 'tall'   },
    { url: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=600&q=85', label: 'Happy Pups',       layout: 'normal' },
    { url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=85', label: 'Grooming Session', layout: 'normal' },
    { url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=85', label: 'Fresh & Clean',    layout: 'normal' },
    { url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=900&q=85', label: 'Happy Customer',  layout: 'wide'   },
  ],

  /* ── CUSTOMER REVIEWS (best ones only) ──────────────── */
  reviews: [
    { text: 'Thanks to Rhonda for the wonderful job on my Bichon Rosie. She looks so great and is zooming around the house happy as can be. Her coat was a mess and now she\'s gorgeous. 5 stars all day long!', author: 'Will C.' },
    { text: 'I have been using Petsvilla for ten years now. Rhonda and Dana are fantastic groomers. I have two dogs and they always come home beautiful. My whole family brings their dogs here too.', author: 'Mike R.' },
    { text: 'My favorite place ever! Jackie is AMAZING — she\'s quick and so gentle with my puppy. Always does an incredible job. We won\'t go anywhere else!', author: 'Kaelly E.' },
    { text: 'Just got home from my dog\'s bath and pedicure. He looks and smells fantastic. The staff is incredibly friendly and professional. Will definitely be back!', author: 'Sarah M.' },
    { text: 'Always have a great experience grooming our two dogs here. The team is so caring and thorough. Our pups are always calm and happy after their visits.', author: 'James T.' },
    { text: 'The relaxed atmosphere here makes such a difference. My Yorkie actually loves coming to Petsvilla now. Great job every time — highly recommend to any pet owner!', author: 'Linda K.' },
  ],

};
