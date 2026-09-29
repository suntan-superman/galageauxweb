import { initRouter } from './router.js';
import { renderHome } from './pages/home.js';
import { renderAbout } from './pages/about.js';
import { renderSupport } from './pages/support.js';
import { renderTerms } from './pages/terms.js';
import { renderPrivacy } from './pages/privacy.js';

const routes = {
  '/': renderHome,
  '/about': renderAbout,
  '/support': renderSupport,
  '/privacy': renderPrivacy,
  '/terms': renderTerms,
};

initRouter(routes);
