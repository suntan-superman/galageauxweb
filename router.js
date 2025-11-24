export function initRouter(routes) {
  const app = document.getElementById('app');
  
  function render(path) {
    const route = routes[path] || routes['/'];
    if (route) {
      app.innerHTML = route();
      updateActiveLink(path);
    }
  }
  
  function updateActiveLink(path) {
    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === path) {
        link.classList.add('active');
      }
    });
  }
  
  function handleNavigation(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('/')) {
      e.preventDefault();
      const path = e.target.getAttribute('href');
      window.history.pushState({}, '', path);
      render(path);
    }
  }
  
  document.addEventListener('click', handleNavigation);
  window.addEventListener('popstate', () => {
    render(window.location.pathname);
  });
  
  // Initial render
  render(window.location.pathname);
}

