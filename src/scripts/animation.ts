const REVEAL_SELECTOR = '[data-reveal]';
const LOAD_SELECTOR = '[data-reveal-load]';
const VISIBLE_CLASS = 'is-visible';
const READY_CLASS = 'is-ready';

const getDelay = (el: HTMLElement) => {
  const value = getComputedStyle(el).getPropertyValue('--reveal-delay').trim();
  const seconds = parseFloat(value);
  return Number.isFinite(seconds) ? seconds * 1000 : 0;
};

const revealAll = (targets: NodeListOf<HTMLElement>) => {
  targets.forEach((el) => el.classList.add(VISIBLE_CLASS));
};

const revealOnLoad = (targets: NodeListOf<HTMLElement>) => {
  targets.forEach((el) => {
    setTimeout(() => el.classList.add(VISIBLE_CLASS), getDelay(el));
  });
};

const initReveal = () => {
  const targets = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
  if (!targets.length) return;

  const html = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const loadTargets = document.querySelectorAll<HTMLElement>(LOAD_SELECTOR);

  if (reduceMotion || !('IntersectionObserver' in window)) {
    html.classList.add(READY_CLASS);
    revealAll(targets);
    return;
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      html.classList.add(READY_CLASS);
      revealOnLoad(loadTargets);

      const scrollTargets = [...targets].filter((el) => !el.hasAttribute('data-reveal-load'));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add(VISIBLE_CLASS);
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
      );

      scrollTargets.forEach((el) => observer.observe(el));
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal);
} else {
  initReveal();
}
