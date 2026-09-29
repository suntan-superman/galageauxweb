import { getLastUpdatedText } from '../appInfo.js';
import { renderPage } from './layout.js';

export function renderTerms() {
  return renderPage({
    eyebrow: 'LEGAL / TERMS',
    title: 'The simple version of the deal.',
    intro: `Last updated: ${getLastUpdatedText()}`,
    className: 'text-page legal-page',
    content: `
      <article class="prose-card legal-card">
        <p class="lead">These terms describe use of the Galageaux V1 mobile arcade game.</p>
        <h2>Using the game</h2>
        <p>Galageaux is a three-stage mobile arcade shooter provided for personal entertainment. You may play without creating an account. V1 does not promise cloud saves, online services, online leaderboards, or uninterrupted availability.</p>
        <h2>Your responsibilities</h2>
        <p>Use the app lawfully and do not tamper with, reverse engineer, disrupt, or use automated systems against the game or its distribution channels. Follow the rules and policies of the store from which you install it.</p>
        <h2>Local progress</h2>
        <p>V1 stats, achievements, and settings are stored locally on your device. They may be lost if local app data is reset, removed, or made unavailable. No online sync or account recovery is promised.</p>
        <h2>Availability and changes</h2>
        <p>The game, its content, and these terms may change as the product is maintained. We may suspend or discontinue access where necessary to operate, protect, or update the service.</p>
        <h2>Disclaimer</h2>
        <p>The app is provided on an as-available basis to the extent permitted by applicable law. Nothing on this page creates a warranty or changes rights that cannot legally be waived.</p>
      </article>
    `,
  });
}
