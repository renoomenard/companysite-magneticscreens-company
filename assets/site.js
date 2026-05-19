/* site.js — Magnetic Screens Company */

// Nav — transparent over hero, solid after scroll
(function() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;
  function updateNav() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
})();

// Hamburger / mobile nav
(function() {
  const btn = document.querySelector('.hamburger');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const close = document.querySelector('.mobile-close');
  if (!btn || !overlay) return;
  btn.addEventListener('click', () => overlay.classList.add('open'));
  if (close) close.addEventListener('click', () => overlay.classList.remove('open'));
  overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', () => overlay.classList.remove('open')));
})();

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    const isOpen = this.getAttribute('aria-expanded') === 'true';
    // close all
    document.querySelectorAll('.faq-question').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });
    if (!isOpen) {
      this.setAttribute('aria-expanded', 'true');
      answer.classList.add('open');
    }
  });
});

// Country card search
// Europe card shows for any European country not already with its own card
(function() {
  const input = document.getElementById('country-search');
  if (!input) return;

  // All European countries NOT already represented by their own dedicated card
  const europeAliases = [
    'albania','andorra','armenia','austria','azerbaijan','belarus',
    'bosnia','bulgaria','croatia','cyprus','czech','czechia','slovakia',
    'denmark', // has own card — but listed in europe too, kept separate
    'estonia','finland','georgia','gibraltar','greece','hungary',
    'iceland','kosovo','latvia','liechtenstein','lithuania','luxembourg',
    'malta','moldova','monaco','montenegro','north macedonia',
    'poland','romania','russia','san marino','serbia','slovenia',
    'turkey','ukraine','vatican','europe','eu','european'
  ];

  // Cards that have their own dedicated entry (exclude from europe alias matching)
  const ownCards = [
    'belgium','france','germany','ireland','italy','netherlands',
    'norway','portugal','spain','sweden','switzerland','united kingdom','uk'
  ];

  input.addEventListener('input', function() {
    const q = this.value.toLowerCase().trim();

    // Does the query match a European alias (and not a country with its own card)?
    const isEuropeQuery = q.length > 1
      && europeAliases.some(alias => alias.includes(q) || q.includes(alias))
      && !ownCards.some(own => own.includes(q) || q.includes(own));

    document.querySelectorAll('.country-card').forEach(card => {
      const nameEl = card.querySelector('.country-name');
      if (!nameEl) return;
      const name = nameEl.textContent.toLowerCase();
      const isEuropeCard = name === 'europe';

      if (q === '') {
        card.style.display = '';
      } else if (isEuropeCard) {
        // Show Europe card if query matches europe aliases AND no own card covers it
        card.style.display = isEuropeQuery ? '' : 'none';
      } else {
        card.style.display = name.includes(q) ? '' : 'none';
      }
    });
  });
})();

// Sticky CTA
(function() {
  const cta = document.querySelector('.sticky-cta');
  if (!cta) return;
  const hero = document.querySelector('.hero-section');
  window.addEventListener('scroll', () => {
    const heroBottom = hero ? hero.getBoundingClientRect().bottom : 400;
    cta.classList.toggle('visible', heroBottom < 0);
  });
})();

// Blog search (archive page)
(function() {
  const blogSearch = document.getElementById('blog-search');
  if (!blogSearch) return;
  blogSearch.addEventListener('input', function() {
    const q = this.value.toLowerCase();
    document.querySelectorAll('.blog-card').forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(q) ? '' : 'none';
    });
  });
})();
