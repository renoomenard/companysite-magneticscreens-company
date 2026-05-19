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
(function() {
  const input = document.getElementById('country-search');
  if (!input) return;
  input.addEventListener('input', function() {
    const q = this.value.toLowerCase().trim();
    document.querySelectorAll('.country-card').forEach(card => {
      const name = card.querySelector('span').textContent.toLowerCase();
      card.style.display = name.includes(q) ? '' : 'none';
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
