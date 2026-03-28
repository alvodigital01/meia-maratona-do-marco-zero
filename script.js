const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealElements = Array.from(document.querySelectorAll(".reveal-group .reveal-hidden, .map-placeholder.reveal-hidden"));
revealElements.forEach((element, index) => {
  element.style.setProperty("--reveal-delay", `${(index % 6) * 100}ms`);
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("reveal-active");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px"
  });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("reveal-active"));
}

const countdownTarget = new Date("2026-07-26T05:00:00-03:00").getTime();
const countdownValues = {
  days: document.querySelector('[data-unit="days"]'),
  hours: document.querySelector('[data-unit="hours"]'),
  minutes: document.querySelector('[data-unit="minutes"]'),
  seconds: document.querySelector('[data-unit="seconds"]')
};

const pad = (value, size) => String(value).padStart(size, "0");

function updateValue(node, nextValue) {
  if (!node || node.textContent === nextValue) return;
  node.classList.add("is-updating");
  window.setTimeout(() => {
    node.textContent = nextValue;
    node.classList.remove("is-updating");
  }, prefersReducedMotion ? 0 : 110);
}

function updateCountdown() {
  const now = Date.now();
  const distance = Math.max(0, countdownTarget - now);
  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);
  const seconds = Math.floor((distance % 60000) / 1000);

  updateValue(countdownValues.days, pad(days, 3));
  updateValue(countdownValues.hours, pad(hours, 2));
  updateValue(countdownValues.minutes, pad(minutes, 2));
  updateValue(countdownValues.seconds, pad(seconds, 2));
}

updateCountdown();
window.setInterval(updateCountdown, 1000);

function createPointerRaf(handler, reset) {
  let rafId = 0;
  let payload = null;

  function flush() {
    rafId = 0;
    if (payload) handler(payload);
  }

  return {
    push(event) {
      payload = event;
      if (!rafId) rafId = window.requestAnimationFrame(flush);
    },
    clear() {
      payload = null;
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
      reset();
    }
  };
}

const hero = document.querySelector(".hero");
if (hero && !prefersReducedMotion) {
  const heroEffect = createPointerRaf((event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    document.documentElement.style.setProperty("--hero-offset-x", `${x * 22}px`);
    document.documentElement.style.setProperty("--hero-offset-y", `${y * 22}px`);
  }, () => {
    document.documentElement.style.setProperty("--hero-offset-x", "0px");
    document.documentElement.style.setProperty("--hero-offset-y", "0px");
  });

  hero.addEventListener("mousemove", heroEffect.push);
  hero.addEventListener("mouseleave", heroEffect.clear);
}

const magneticButton = document.querySelector(".cta-button");
if (magneticButton && !prefersReducedMotion) {
  const threshold = 100;
  let latestPointer = null;
  let rafId = 0;

  function renderMagnetic() {
    rafId = 0;
    if (!latestPointer) return;

    const rect = magneticButton.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = latestPointer.clientX - centerX;
    const dy = latestPointer.clientY - centerY;
    const distance = Math.hypot(dx, dy);

    if (distance < threshold) {
      const strength = (threshold - distance) / threshold;
      document.documentElement.style.setProperty("--magnetic-x", `${dx * 0.14 * strength}px`);
      document.documentElement.style.setProperty("--magnetic-y", `${dy * 0.14 * strength}px`);
    } else {
      document.documentElement.style.setProperty("--magnetic-x", "0px");
      document.documentElement.style.setProperty("--magnetic-y", "0px");
    }
  }

  window.addEventListener("mousemove", (event) => {
    latestPointer = event;
    if (!rafId) rafId = window.requestAnimationFrame(renderMagnetic);
  });

  magneticButton.addEventListener("mouseleave", () => {
    latestPointer = null;
    document.documentElement.style.setProperty("--magnetic-x", "0px");
    document.documentElement.style.setProperty("--magnetic-y", "0px");
  });
}
