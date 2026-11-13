// Mobile nav toggle
const menuButton = document.getElementById('menuButton');
const siteNav = document.getElementById('siteNav');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('nav--open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('nav--open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// Project category filter
const filterBar = document.getElementById('showcaseFilters');
const grid = document.getElementById('showcaseGrid');
const emptyState = document.getElementById('showcaseEmpty');

if (filterBar && grid) {
  const cards = Array.from(grid.querySelectorAll('.showcase-card'));

  filterBar.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;

    filterBar.querySelectorAll('button').forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    let visibleCount = 0;

    cards.forEach((card) => {
      const filters = (card.dataset.filters || '').split('|');
      const show = filter === 'All Projects' || filters.includes(filter);
      card.hidden = !show;
      if (show) visibleCount += 1;
    });

    if (emptyState) emptyState.hidden = visibleCount !== 0;
  });
}

// Reveal-on-scroll
const revealTargets = document.querySelectorAll('.reveal');
if (revealTargets.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    },
    { threshold: 0.1 },
  );
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}

// Footer year
const footerYear = document.getElementById('footerYear');
if (footerYear) {
  footerYear.textContent = `© ${new Date().getFullYear()} KELOMPOK 5`;
}
