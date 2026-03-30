const revealElements = document.querySelectorAll('.reveal');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id], footer[id]');
const hero = document.querySelector('.hero-media');
const interactiveCards = document.querySelectorAll('.interactive-card');
const siteHeader = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

if (siteHeader && menuToggle) {
  const closeMenu = () => {
    siteHeader.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = siteHeader.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => link.addEventListener('click', closeMenu));

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) closeMenu();
  });
}

if ('IntersectionObserver' in window && sections.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
        });
      });
    },
    {
      threshold: 0.45,
      rootMargin: '-10% 0px -35% 0px'
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

const updateHeroParallax = () => {
  if (!hero) return;
  const offset = Math.min(window.scrollY * 0.12, 36);
  hero.style.setProperty('--hero-offset', offset.toFixed(2));
};

updateHeroParallax();
window.addEventListener('scroll', updateHeroParallax, { passive: true });

interactiveCards.forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = (0.5 - (y / rect.height)) * 8;

    card.style.setProperty('--card-tilt-x', `${rotateX.toFixed(2)}deg`);
    card.style.setProperty('--card-tilt-y', `${rotateY.toFixed(2)}deg`);
    card.style.setProperty('--card-glow-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--card-glow-y', `${(y / rect.height) * 100}%`);
    card.classList.add('is-glow');
  });

  const resetCard = () => {
    card.style.setProperty('--card-tilt-x', '0deg');
    card.style.setProperty('--card-tilt-y', '0deg');
    card.style.setProperty('--card-glow-x', '50%');
    card.style.setProperty('--card-glow-y', '50%');
    card.classList.remove('is-glow');
  };

  card.addEventListener('pointerleave', resetCard);
  card.addEventListener('pointerup', resetCard);
});

