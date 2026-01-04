/**
 * Application Information Constants for Web
 * 
 * Central location for app-wide information like version, copyright year, etc.
 * Update these values in one place to reflect changes across the entire website.
 */

export const APP_INFO = {
  name: 'Galageaux',
  version: '1.0.0',
  copyrightYear: 2026,
  companyName: 'Galageaux',
};

// Helper function to generate copyright HTML
export const getHtmlCopyrightText = () => {
  return `&copy; ${APP_INFO.copyrightYear} ${APP_INFO.name}. All rights reserved.`;
};

// For "Last Updated" text on legal pages
export const getLastUpdatedText = (month = 'January') => {
  return `${month} ${APP_INFO.copyrightYear}`;
};

export default APP_INFO;
