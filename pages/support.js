import { getLastUpdatedText } from '../appInfo.js';
import { renderPage, renderSupportContact } from './layout.js';

const powerupRows = [
  ['Double', 'Adds a second firing lane.'],
  ['Triple', 'Adds a third line of fire.'],
  ['Spread', 'Sends shots across a wider arc.'],
  ['Rapid', 'Increases firing speed.'],
  ['Shield', 'Absorbs incoming damage for a short time.'],
  ['Slow', 'Slows enemy movement so you can read the pattern.'],
];

export function renderSupport() {
  return renderPage({
    eyebrow: 'SUPPORT / V1',
    title: 'Get in, get oriented, get back in the fight.',
    intro: 'A quick field guide for controls, powerups, settings, and the live Show Me demonstration.',
    className: 'text-page support-page',
    content: `
      <div class="support-grid">
        <article class="support-card support-card-wide">
          <span class="support-index">01</span>
          <h2>Getting started</h2>
          <ol class="instruction-list">
            <li><strong>Tilt to move.</strong> Tilt control is on by default.</li>
            <li><strong>Hold Fire to shoot.</strong> Manual fire gives you direct control.</li>
            <li><strong>Need touch movement?</strong> Pause, then switch <strong>Tilt Control</strong> off.</li>
            <li><strong>Want fewer trigger presses?</strong> Turn on <strong>Auto-Fire</strong> from Pause.</li>
          </ol>
        </article>
        <article class="support-card">
          <span class="support-index">02</span>
          <h2>Controls</h2>
          <dl class="support-list">
            <div><dt>Movement</dt><dd>Tilt or touch</dd></div>
            <div><dt>Fire</dt><dd>Hold Fire button</dd></div>
            <div><dt>Auto-Fire</dt><dd>Pause → Auto-Fire</dd></div>
            <div><dt>Sensitivity</dt><dd>Settings / Pause</dd></div>
            <div><dt>Button side</dt><dd>Left or right</dd></div>
          </dl>
        </article>
        <article class="support-card support-card-wide">
          <span class="support-index">03</span>
          <h2>Powerups</h2>
          <div class="support-powerups">
            ${powerupRows.map(([name, description], index) => `
              <div class="support-powerup powerup-${index + 1}"><span aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><p><strong>${name}</strong>${description}</p></div>
            `).join('')}
          </div>
        </article>
        <article class="support-card">
          <span class="support-index">04</span>
          <h2>Show Me</h2>
          <p>Open <strong>SHOW ME HOW</strong> from the Main Menu. The live demonstration shows movement, firing, powerups, and boss behavior through simulated play.</p>
        </article>
        <article class="support-card">
          <span class="support-index">05</span>
          <h2>Audio & settings</h2>
          <p>Sound FX, music, volumes, tilt sensitivity, and fire-button side are persistent settings. Session controls such as Tilt Control and Auto-Fire are available from Pause.</p>
        </article>
        <article class="support-card">
          <span class="support-index">06</span>
          <h2>Resetting settings</h2>
          <p>Use the in-app reset action in Settings to restore the displayed persistent preferences to their defaults. Pause-only gameplay choices are not saved as permanent settings.</p>
        </article>
        <article class="support-card">
          <span class="support-index">07</span>
          <h2>Troubleshooting</h2>
          <ul class="compact-list">
            <li>Restart the app and try the run again.</li>
            <li>Check the in-game music and Sound FX settings.</li>
            <li>Switch between tilt and touch movement.</li>
            <li>Update to the current App Store version when available.</li>
          </ul>
        </article>
        <article class="support-card support-contact">
          <span class="support-index">08</span>
          <h2>Contact</h2>
          <p>${renderSupportContact()}</p>
          <small>Before release, add the confirmed support address in <code>appInfo.js</code> as <code>supportEmail</code>.</small>
        </article>
      </div>
      <p class="page-updated">Support guide last reviewed ${getLastUpdatedText()}.</p>
    `,
  });
}
