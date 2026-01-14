/* Mobile nav */
const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu when clicking a link
  navLinks.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* Smooth scrolling with navbar offset */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    const navbar = document.querySelector('.navbar');
    const offset = navbar ? navbar.offsetHeight + 12 : 84;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* Floating particles animation */
const hero = document.querySelector('.hero');
if (hero) {
  const count = 16;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = 55 + Math.random() * 45 + '%';
    particle.style.animationDelay = (Math.random() * 5) + 's';
    particle.style.animationDuration = (7 + Math.random() * 6) + 's';
    hero.appendChild(particle);
  }
}

/* Demo contact form feedback (non-sending) */
const submitBtn = document.getElementById('contact-submit');
const note = document.getElementById('form-note');
if (submitBtn && note) {
  submitBtn.addEventListener('click', () => {
    note.textContent = 'Thanks! This demo form doesn\'t send yet — connect it to your email/service when ready.';
  });
}
