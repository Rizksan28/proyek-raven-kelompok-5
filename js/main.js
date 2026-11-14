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

// Project Archive page: category filter
const archiveFilters = document.getElementById('archiveFilters');
const archiveFeatured = document.getElementById('archiveFeatured');
const archiveCount = document.getElementById('archiveCount');
const archiveCategory = document.getElementById('archiveCategory');
const archiveEmpty = document.getElementById('archiveEmpty');

if (archiveFilters && archiveFeatured) {
  const applyArchiveFilter = (category) => {
    let visible = 0;

    const filters = (archiveFeatured.dataset.filters || '').split('|');
    const show = category === 'All Projects' || filters.includes(category);
    archiveFeatured.hidden = !show;
    if (show) visible += 1;

    if (archiveCount) archiveCount.textContent = visible > 0 ? String(visible).padStart(2, '0') : '—';
    if (archiveCategory) archiveCategory.textContent = category;
    if (archiveEmpty) archiveEmpty.hidden = visible !== 0;
  };

  archiveFilters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;

    archiveFilters.querySelectorAll('button').forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    applyArchiveFilter(button.dataset.filter);
  });

  applyArchiveFilter('All Projects');
}

// Gentle vertical drift for elements marked with data-parallax (e.g. the PHARVIA case study)
const parallaxTargets = document.querySelectorAll('[data-parallax]');
if (parallaxTargets.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let frame = 0;
  const updateParallax = () => {
    frame = 0;
    const vh = window.innerHeight;
    parallaxTargets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) return;
      const speed = Number(el.dataset.parallax) || 0.06;
      const offset = (rect.top + rect.height / 2 - vh / 2) * -speed;
      el.style.setProperty('--pv-parallax', `${offset.toFixed(1)}px`);
    });
  };
  const onParallaxScroll = () => {
    if (!frame) frame = requestAnimationFrame(updateParallax);
  };
  updateParallax();
  window.addEventListener('scroll', onParallaxScroll, { passive: true });
  window.addEventListener('resize', onParallaxScroll);
}

// Footer year
const footerYear = document.getElementById('footerYear');
if (footerYear) {
  footerYear.textContent = `© ${new Date().getFullYear()} KELOMPOK 5`;
}
