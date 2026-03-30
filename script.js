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

const heroSlider = document.querySelector('.hero-slider');

if (heroSlider) {
  const slides = Array.from(heroSlider.querySelectorAll('.hero-slide'));
  const dotsWrap = heroSlider.querySelector('.hero-slider-dots');
  let currentIndex = 0;
  let autoplayId;

  const renderSlide = (index) => {
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));

    if (dotsWrap) {
      const dots = dotsWrap.querySelectorAll('.hero-dot');
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
    }
  };

  if (dotsWrap) {
    dotsWrap.innerHTML = '';
    slides.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.className = 'hero-dot';
      dotsWrap.appendChild(dot);
      dot.addEventListener('click', () => {
        currentIndex = index;
        renderSlide(currentIndex);
      });
    });
  }

  renderSlide(currentIndex);

  if (slides.length > 1) {
    autoplayId = window.setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      renderSlide(currentIndex);
    }, 4500);

    heroSlider.addEventListener('mouseenter', () => {
      if (autoplayId) window.clearInterval(autoplayId);
    });

    heroSlider.addEventListener('mouseleave', () => {
      autoplayId = window.setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        renderSlide(currentIndex);
      }, 4500);
    });
  }
}

const countdownRoot = document.querySelector('[data-countdown-target]');

if (countdownRoot) {
  const [monthText, dayText] = (countdownRoot.getAttribute('data-countdown-target') || '07-26').split('-');
  const month = Number(monthText);
  const day = Number(dayText);

  const daysEl = countdownRoot.querySelector('[data-countdown-days]');
  const hoursEl = countdownRoot.querySelector('[data-countdown-hours]');
  const minutesEl = countdownRoot.querySelector('[data-countdown-minutes]');
  const secondsEl = countdownRoot.querySelector('[data-countdown-seconds]');

  const getTargetDate = () => {
    const now = new Date();
    let target = new Date(now.getFullYear(), month - 1, day, 0, 0, 0);
    if (target.getTime() <= now.getTime()) {
      target = new Date(now.getFullYear() + 1, month - 1, day, 0, 0, 0);
    }
    return target;
  };

  let targetDate = getTargetDate();

  const updateCountdown = () => {
    const now = new Date();

    if (now.getTime() > targetDate.getTime()) {
      targetDate = getTargetDate();
    }

    const diffMs = Math.max(0, targetDate.getTime() - now.getTime());
    const totalSeconds = Math.floor(diffMs / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (value) => String(value).padStart(2, '0');

    if (daysEl) daysEl.textContent = pad(days);
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minutesEl) minutesEl.textContent = pad(minutes);
    if (secondsEl) secondsEl.textContent = pad(seconds);
  };

  updateCountdown();
  window.setInterval(updateCountdown, 1000);
}

const tourismMarquee = document.querySelector('.tourism-marquee');

if (tourismMarquee) {
  const tourismTrack = tourismMarquee.querySelector('.tourism-track');
  const tourismRows = tourismTrack ? tourismTrack.querySelectorAll('.tourism-row') : [];

  if (tourismTrack && tourismRows.length) {
    let loopWidth = tourismRows[0].scrollWidth;
    let offset = 0;
    let speed = -0.28;
    let dragging = false;
    let lastX = 0;
    let lastTime = 0;
    let velocity = 0;

    const normalizeOffset = () => {
      if (!loopWidth) return;
      while (offset <= -loopWidth) offset += loopWidth;
      while (offset > 0) offset -= loopWidth;
    };

    const render = () => {
      normalizeOffset();
      tourismTrack.style.transform = `translateX(${offset}px)`;
    };

    const onPointerDown = (event) => {
      dragging = true;
      velocity = 0;
      lastX = event.clientX;
      lastTime = performance.now();
      tourismMarquee.classList.add('is-dragging');
      tourismMarquee.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event) => {
      if (!dragging) return;
      const now = performance.now();
      const dx = event.clientX - lastX;
      const dt = Math.max(1, now - lastTime);

      offset += dx;
      velocity = dx / dt;
      lastX = event.clientX;
      lastTime = now;

      render();
    };

    const onPointerUp = () => {
      if (!dragging) return;
      dragging = false;
      tourismMarquee.classList.remove('is-dragging');

      if (Math.abs(velocity) > 0.001) {
        speed = Math.max(-1.2, Math.min(1.2, velocity * 14));
      }

      if (Math.abs(speed) < 0.12) {
        speed = speed >= 0 ? 0.12 : -0.12;
      }
    };

    tourismMarquee.addEventListener('pointerdown', onPointerDown);
    tourismMarquee.addEventListener('pointermove', onPointerMove);
    tourismMarquee.addEventListener('pointerup', onPointerUp);
    tourismMarquee.addEventListener('pointercancel', onPointerUp);
    tourismMarquee.addEventListener('lostpointercapture', onPointerUp);

    const resizeObserver = () => {
      loopWidth = tourismRows[0].scrollWidth;
      render();
    };

    window.addEventListener('resize', resizeObserver);

    const tick = () => {
      if (!dragging) {
        offset += speed;
      }

      speed *= 0.998;
      if (!dragging && Math.abs(speed) < 0.12) {
        speed = speed >= 0 ? 0.12 : -0.12;
      }

      render();
      window.requestAnimationFrame(tick);
    };

    render();
    window.requestAnimationFrame(tick);
  }
}

const updateHeroParallax = () => {
  if (!hero) return;
  const offset = Math.min(window.scrollY * 0.12, 36);
  hero.style.setProperty('--hero-offset', offset.toFixed(2) + 'px');
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






