import { getLastUpdatedText } from '../appInfo.js';
import { renderPage } from './layout.js';

export function renderPrivacy() {
  return renderPage({
    eyebrow: 'LEGAL / PRIVACY',
    title: 'Privacy, kept local where V1 keeps it.',
    intro: `Last updated: ${getLastUpdatedText()}`,
    className: 'text-page legal-page',
    content: `
      <article class="prose-card legal-card">
        <p class="lead">Galageaux is designed to keep your gameplay data on your device.</p>
        <h2>What Galageaux stores</h2>
        <p>V1 stores gameplay statistics, achievements, and preferences/settings locally on your device. These may include scores, runs, kills, boss progress, powerups collected, combos, completed stages, audio preferences, tilt sensitivity, and fire-button placement.</p>
        <p>V1 does not require an account or authentication to play. It does not expose cloud save, online leaderboards, or a social profile.</p>
        <h2>Motion and touch controls</h2>
        <p>When tilt control is enabled, Galageaux uses the device accelerometer/motion input to translate your movement into ship movement. You can switch Tilt Control off in Pause and use touch movement instead. Motion input is used on-device for gameplay.</p>
        <h2>Information sent from the app</h2>
        <p>Galageaux does not require an account or authentication to play. V1 does not send your gameplay statistics, achievements, preferences, or motion input to a server. The game does not include analytics, crash reporting, cloud saves, or online leaderboards.</p>
        <h2>Data retention and deletion</h2>
        <p>Local data remains on the device until the app's reset controls or the device's app-data controls remove it. The website cannot access or delete local gameplay data for you.</p>
        <h2>Changes to this policy</h2>
        <p>We may update this page when Galageaux or its data practices change. The latest version will always be posted here with an updated date.</p>
      </article>
    `,
  });
}
