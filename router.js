export function initRouter(routes) {
  const app = document.getElementById('app');
  if (!app) return;

  const normalizePath = path => {
    const cleanPath = path.replace(/\/+$/, '');
    return cleanPath || '/';
  };

  function render(path, { focus = false } = {}) {
    const normalizedPath = normalizePath(path);
    const route = routes[normalizedPath] || routes['/'];
    app.innerHTML = route();
    updateActiveLink(normalizedPath);
    if (focus) {
      const main = app.querySelector('main');
      if (main) {
        main.setAttribute('tabindex', '-1');
        main.focus({ preventScroll: true });
      }
    }
    window.scrollTo(0, 0);
  }

  function updateActiveLink(path) {
    document.querySelectorAll('[data-site-nav] a').forEach(link => {
      const isActive = link.getAttribute('href') === path;
      link.classList.toggle('active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  document.addEventListener('click', event => {
    const menuButton = event.target.closest('[data-menu-toggle]');
    if (menuButton) {
      const nav = document.getElementById('site-nav');
      const isOpen = nav?.classList.toggle('is-open') ?? false;
      menuButton.setAttribute('aria-expanded', String(isOpen));
      return;
    }

    const link = event.target.closest('a');
    if (!link || link.origin !== window.location.origin || !link.pathname.startsWith('/')) return;

    const path = normalizePath(link.pathname);
    if (link.hash && path === normalizePath(window.location.pathname)) {
      event.preventDefault();
      document.querySelector(link.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', path);
    render(path, { focus: true });
  });

  window.addEventListener('popstate', () => render(window.location.pathname, { focus: true }));
  render(window.location.pathname);
}
