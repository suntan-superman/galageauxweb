import {
  APP_INFO,
  getHtmlCopyrightText,
  hasAppStoreLink,
  hasSupportEmail,
} from '../appInfo.js';

const navItems = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/support', 'Support'],
  ['/privacy', 'Privacy'],
  ['/terms', 'Terms'],
];

export function renderHeader() {
  const links = navItems
    .map(([href, label]) => `<a href="${href}">${label}</a>`)
    .join('');

  return `
    <header class="site-header">
      <div class="shell header-inner">
        <a href="/" class="brand" aria-label="Galageaux home">
          <span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
          <span>GALAGEAUX</span>
        </a>
        <button class="menu-toggle" type="button" data-menu-toggle aria-controls="site-nav" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="menu-lines" aria-hidden="true"></span>
        </button>
        <nav id="site-nav" class="site-nav" data-site-nav aria-label="Primary navigation">
          ${links}
        </nav>
      </div>
    </header>
  `;
}

export function renderFooter() {
  const links = navItems
    .map(([href, label]) => `<a href="${href}">${label}</a>`)
    .join('');

  return `
    <footer class="site-footer">
      <div class="shell footer-grid">
        <div>
          <a href="/" class="footer-brand">GALAGEAUX</a>
          <p class="footer-note">Classic arcade instincts. Modern mobile combat.</p>
        </div>
        <nav class="footer-nav" aria-label="Footer navigation">${links}</nav>
        <p class="footer-copyright">${getHtmlCopyrightText()}</p>
      </div>
    </footer>
  `;
}

export function renderPage({ eyebrow, title, intro, content, className = '' }) {
  return `
    ${renderHeader()}
    <main class="page-shell ${className}" id="main-content">
      <div class="shell">
        <header class="page-heading">
          <p class="eyebrow">${eyebrow}</p>
          <h1>${title}</h1>
          ${intro ? `<p class="page-intro">${intro}</p>` : ''}
        </header>
        ${content}
      </div>
    </main>
    ${renderFooter()}
  `;
}

export function renderAppStoreCta({ compact = false } = {}) {
  if (hasAppStoreLink()) {
    return `<a class="button button-primary${compact ? ' button-small' : ''}" href="${APP_INFO.appStoreUrl}" target="_blank" rel="noopener">Download on the App Store <span aria-hidden="true">↗</span></a>`;
  }

  return `<span class="button button-disabled${compact ? ' button-small' : ''}" aria-disabled="true">App Store link coming soon</span>`;
}

export function renderSupportContact() {
  if (hasSupportEmail()) {
    return `<a href="mailto:${APP_INFO.supportEmail}">${APP_INFO.supportEmail}</a>`;
  }

  return `<span class="muted">Support contact is currently unavailable.</span>`;
}

export function renderSectionHeading(eyebrow, title, copy = '') {
  return `
    <div class="section-heading">
      <p class="eyebrow">${eyebrow}</p>
      <h2>${title}</h2>
      ${copy ? `<p>${copy}</p>` : ''}
    </div>
  `;
}
