/**
 * Elite Trailers North Alabama – Landing page scripts
 * Mobile menu toggle, smooth scroll, contact form, footer year
 */

(function () {
  'use strict';

  // ---------- Footer year ----------
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---------- Mobile menu toggle ----------
  var menuBtn = document.querySelector('.header__menu-btn');
  var nav = document.querySelector('.header__nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isOpen);
      nav.classList.toggle('is-open');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close menu when a nav link is clicked (for anchor links)
    var navLinks = nav.querySelectorAll('a[href^="#"]');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        menuBtn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        menuBtn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }

  // ---------- Smooth scroll (enhancement; HTML already has scroll-behavior: smooth) ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    var id = anchor.getAttribute('href');
    if (id === '#') return;
    var target = document.querySelector(id);
    if (target) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });

  // ---------- Contact form ----------
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Optional: replace with your backend endpoint or mailto: logic
      var submitBtn = form.querySelector('button[type="submit"]');
      var originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;

      // Simulate send; replace with real submission (e.g. fetch to your API)
      setTimeout(function () {
        submitBtn.textContent = 'Message sent!';
        submitBtn.disabled = false;
        form.reset();
        setTimeout(function () {
          submitBtn.textContent = originalText;
        }, 3000);
      }, 600);
    });
  }
})();
