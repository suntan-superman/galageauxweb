/**
 * Release-facing website configuration.
 *
 * Keep release-specific destinations here so an App Store URL or real support
 * contact can be added once confirmed without searching through page markup.
 */
export const APP_INFO = {
  name: 'Galageaux',
  version: '1.0.0',
  copyrightYear: 2026,
  companyName: 'Galageaux',
  siteUrl: 'https://galageaux.com',
  appStoreUrl: '',
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || '',
  ogImage: '',
};

export const getHtmlCopyrightText = () =>
  `&copy; ${APP_INFO.copyrightYear} ${APP_INFO.name}. All rights reserved.`;

export const getLastUpdatedText = () => 'September 2026';

export const hasAppStoreLink = () => Boolean(APP_INFO.appStoreUrl);

export const hasSupportEmail = () => Boolean(APP_INFO.supportEmail);

export default APP_INFO;
