const REVEAL_SELECTOR = '[data-reveal]';
const VISIBLE_CLASS = 'is-visible';
const READY_CLASS = 'is-ready';

const revealAll = (targets: NodeListOf<HTMLElement>) => {
  targets.forEach((el) => el.classList.add(VISIBLE_CLASS));
};

const initReveal = () => {
  const targets = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
  if (!targets.length) return;

  const html = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    html.classList.add(READY_CLASS);
    revealAll(targets);
    return;
  }

  // 初期非表示の描画を待ってから transition を有効化
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      html.classList.add(READY_CLASS);

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

      targets.forEach((el) => observer.observe(el));
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal);
} else {
  initReveal();
}
