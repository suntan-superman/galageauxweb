import {
  renderAppStoreCta,
  renderFooter,
  renderHeader,
  renderSectionHeading,
} from './layout.js';

const powerups = [
  ['DBL', 'Double', 'Two lanes of pressure.'],
  ['TRI', 'Triple', 'More reach, more rhythm.'],
  ['SPR', 'Spread', 'Cover the formation.'],
  ['RPD', 'Rapid', 'Turn openings into combos.'],
  ['SHD', 'Shield', 'Take one more chance.'],
  ['SLO', 'Slow', 'Make the window count.'],
];

export function renderHome() {
  return `
    ${renderHeader()}
    <main id="main-content">
      <section class="hero-section">
        <div class="shell hero-grid">
          <div class="hero-copy">
            <p class="eyebrow hero-eyebrow"><span class="status-dot"></span> V1 / MOBILE ARCADE SHOOTER</p>
            <h1>Classic arcade combat.<br><em>Reimagined for mobile.</em></h1>
            <p class="hero-lede">A neon space shooter built around responsive movement, coordinated enemy attacks, powerful upgrades, and three multi-phase boss battles.</p>
            <div class="hero-actions">
              ${renderAppStoreCta()}
              <a class="text-link" href="#the-fight">See how it plays <span aria-hidden="true">↓</span></a>
            </div>
            <div class="hero-meta" aria-label="Game highlights">
              <span><b>03</b> stages</span>
              <span><b>06</b> powerups</span>
              <span><b>∞</b> replay runs</span>
            </div>
          </div>
          <figure class="gameplay-shot hero-shot">
            <img src="/images/gameplay/stage3-action.png" alt="Physical iPhone screenshot of Galageaux during a bonus shoot-out, showing the player ship, score HUD, countdown, and Fire controls." width="1242" height="2688" fetchpriority="high">
          </figure>
        </div>
      </section>

      <section class="section section-dark" id="the-fight">
        <div class="shell split-grid">
          <div class="section-copy">
            ${renderSectionHeading('01 / ENEMY CHOREOGRAPHY', 'They don\'t just fly. They come after you.', 'Formations are only the beginning. Enemies break away, bank into turns, dive on curved paths, coordinate attacks, and fight their way back into formation.')}
            <a class="text-link" href="/about">Read the gameplay philosophy <span aria-hidden="true">→</span></a>
          </div>
          <figure class="gameplay-shot enemy-shot">
            <img src="/images/gameplay/stage2-action.png" alt="Physical iPhone screenshot of Galageaux with a colorful enemy formation, incoming projectiles, player ship, and Fire controls visible." width="1242" height="2688" loading="lazy" decoding="async">
          </figure>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          ${renderSectionHeading('02 / PLAY YOUR WAY', 'Tilt or touch. Manual or auto-fire.', 'The controls stay out of the way. Move with the device, switch to touch when you want it, and decide whether every shot is yours.')}
          <div class="feature-grid control-grid">
            <article class="feature-panel accent-cyan">
              <div class="feature-symbol control-symbol tilt-symbol" aria-hidden="true"></div>
              <p class="eyebrow">MOVEMENT</p>
              <h3>Tilt or touch</h3>
              <p>Tilt control is ready by default. Pause the game and switch Tilt Control off for direct touch movement.</p>
            </article>
            <article class="feature-panel accent-orange">
              <div class="feature-symbol fire-symbol" aria-hidden="true"></div>
              <p class="eyebrow">FIRING</p>
              <h3>Manual or auto-fire</h3>
              <p>Hold Fire to shoot, or turn on Auto-Fire from Pause when you want to focus on the incoming pattern.</p>
            </article>
            <article class="feature-panel accent-purple">
              <div class="feature-symbol settings-symbol" aria-hidden="true">+</div>
              <p class="eyebrow">TUNING</p>
              <h3>Make it yours</h3>
              <p>Adjust sensitivity and move the fire button left or right. Settings stay local to your device.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section section-glow">
        <div class="shell">
          ${renderSectionHeading('03 / POWERUPS', 'Build the run one drop at a time.', 'Every pickup changes the shape of the fight. Learn when to chase a drop and when to keep your line.')}
          <div class="powerup-grid">
            ${powerups.map(([code, name, copy], index) => `
              <article class="powerup-card powerup-${index + 1}">
                <span class="powerup-glyph" aria-hidden="true">${code}</span>
                <div><h3>${name}</h3><p>${copy}</p></div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="section boss-section">
        <div class="shell">
          <div class="boss-header">
            ${renderSectionHeading('04 / THE CAMPAIGN', 'Three stages. Three guardians.', 'Telegraphed attacks. Multi-phase encounters. Enough room to learn the pattern before the pattern learns you.')}
            <span class="stage-count" aria-label="Three active stages"><b>03</b><small>active<br>stages</small></span>
          </div>
          <div class="boss-visuals">
            <figure class="gameplay-shot boss-shot">
              <img src="/images/gameplay/inferno-citadel.png" alt="Physical iPhone screenshot of a Galageaux boss encounter with a purple guardian, boss health bar, stage HUD, and Fire controls visible." width="1242" height="2688" loading="lazy" decoding="async">
            </figure>
            <figure class="gameplay-shot secondary-boss-shot">
              <img src="/images/gameplay/violet-wraith.png" alt="Physical iPhone screenshot of Galageaux showing a dense stage two enemy formation, projectiles, player ship, and Fire controls." width="1242" height="2688" loading="lazy" decoding="async">
            </figure>
          </div>
          <div class="boss-grid">
            <article class="boss-card boss-aegis"><span class="boss-index">BOSS / 01</span><h3>Aegis Sentinel</h3><p>Read the opening. Find the gap.</p><span class="boss-mark" aria-hidden="true"></span></article>
            <article class="boss-card boss-wraith"><span class="boss-index">BOSS / 02</span><h3>Violet Wraith</h3><p>Stay loose through the feint.</p><span class="boss-mark" aria-hidden="true"></span></article>
            <article class="boss-card boss-inferno"><span class="boss-index">BOSS / 03</span><h3>Inferno Citadel</h3><p>Hold steady through the finale.</p><span class="boss-mark" aria-hidden="true"></span></article>
          </div>
        </div>
      </section>

      <section class="section section-dark">
        <div class="shell show-me-grid">
          <figure class="gameplay-shot show-me-shot">
            <img src="/images/gameplay/show-me.png" alt="Physical iPhone screenshot of a Galageaux boss encounter with the Aegis Sentinel, stage HUD, incoming fire, and Fire controls visible." width="1242" height="2688" loading="lazy" decoding="async">
          </figure>
          <div class="section-copy">
            ${renderSectionHeading('05 / SHOW ME', 'Learn by watching.', 'Show Me demonstrates movement, firing, powerups, and boss behavior through live simulated play—not a page of instructions.')}
            <a class="text-link" href="/support">See the controls guide <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section class="section scoring-section">
        <div class="shell scoring-grid">
          <div>
            ${renderSectionHeading('06 / KEEP THE RUN ALIVE', 'Score. Combo. Repeat.', 'Build a high score, chase achievements, and keep your local stats climbing across replay runs.')}
          </div>
          <div class="score-readout" aria-label="Arcade scoring highlights">
            <div><strong>HI-SCORE</strong><b>004812</b></div>
            <div><strong>COMBO</strong><b>x09</b></div>
            <div><strong>ACHIEVEMENTS</strong><b>LOCAL</b></div>
          </div>
        </div>
      </section>

      <section class="final-cta">
        <div class="shell final-cta-inner">
          <p class="eyebrow">GALAGEAUX / V1</p>
          <h2>Classic arcade instincts.<br><em>Modern mobile combat.</em></h2>
          ${renderAppStoreCta()}
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;
}
