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
        <p class="lead">This policy describes the current Galageaux V1 product behavior as audited in September 2026. It is product-text alignment, not legal advice.</p>
        <h2>What Galageaux stores</h2>
        <p>V1 stores gameplay statistics, achievements, and preferences/settings locally on your device. These may include scores, runs, kills, boss progress, powerups collected, combos, completed stages, audio preferences, tilt sensitivity, and fire-button placement.</p>
        <p>V1 does not require an account or authentication to play. It does not expose cloud save, online leaderboards, or a social profile.</p>
        <h2>Motion and touch controls</h2>
        <p>When tilt control is enabled, Galageaux uses the device accelerometer/motion input to translate your movement into ship movement. You can switch Tilt Control off in Pause and use touch movement instead. Motion input is used on-device for gameplay based on the current V1 source audit.</p>
        <h2>Information sent from the app</h2>
        <p>The current V1 release audit does not identify active analytics, crash-reporting, authentication, or cloud-save functionality in the core game flow. Dormant integration source may remain in the mobile repository; that source is not described here as an active V1 data practice.</p>
        <h2>Data retention and deletion</h2>
        <p>Local data remains on the device until the app's reset controls or the device's app-data controls remove it. The website cannot access or delete local gameplay data for you.</p>
        <h2>Children and third parties</h2>
        <p>This policy does not establish an age rating, legal basis, or jurisdiction-specific rights statement. No third-party account or tracking service is described as active here. Any store-specific disclosures and legal requirements should be reviewed against the final submitted build.</p>
        <h2>Changes and review</h2>
        <p>We may update this page when the product or its data practices change. Human privacy/legal review is required before production publication, especially for the final iOS build, motion permissions, store disclosures, and any support contact that is added.</p>
      </article>
    `,
  });
}
