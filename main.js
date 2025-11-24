import { initRouter } from './router.js';
import { renderHome } from './pages/home.js';
import { renderTerms } from './pages/terms.js';
import { renderPrivacy } from './pages/privacy.js';
import { renderAbout } from './pages/about.js';

const routes = {
  '/': renderHome,
  '/terms': renderTerms,
  '/privacy': renderPrivacy,
  '/about': renderAbout
};

initRouter(routes);

