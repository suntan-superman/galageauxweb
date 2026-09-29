import { renderPage } from './layout.js';

export function renderAbout() {
  return renderPage({
    eyebrow: 'THE GAME / V1',
    title: 'A small screen. A full arcade run.',
    intro: 'Galageaux is a mobile space shooter shaped by the best arcade feeling: readable movement, dangerous patterns, and one more run.',
    className: 'text-page',
    content: `
      <div class="content-grid">
        <article class="prose-card">
          <p class="lead">Galageaux takes the spirit of classic formation-based space shooters and rebuilds it for the way a phone is actually played: held close, controlled quickly, and ready for another attempt.</p>
          <h2>Designed around the fight</h2>
          <p>Enemies enter in formations, break away, bank into turns, and return to the group after a dive. The result is a battlefield that feels active instead of decorative. You are not just clearing a screen—you are reading a threat.</p>
          <p>Procedural visuals, luminous projectiles, layered impacts, and stage-specific space backgrounds give each exchange a clear arcade rhythm without burying the action in noise.</p>
        </article>
        <aside class="fact-panel">
          <span class="fact-number">03</span>
          <span class="eyebrow">STAGE CAMPAIGN</span>
          <p>Three distinct stages, each ending with a telegraphed multi-phase guardian.</p>
        </aside>
      </div>
      <div class="content-grid content-grid-reverse">
        <article class="prose-card">
          <h2>Made for mobile-first play</h2>
          <p>Tilt is the default movement language, with touch movement available when you pause and turn Tilt Control off. Fire manually for precision or let Auto-Fire handle the trigger while you focus on positioning.</p>
          <p>Sensitivity and fire-button placement are adjustable, so the game can fit the way you hold your phone—not the other way around.</p>
          <h2>Local by design</h2>
          <p>V1 does not require an account, cloud save, or online leaderboard. Gameplay statistics, achievements, and preferences are kept locally on the device.</p>
        </article>
        <aside class="quote-panel">
          <span class="quote-mark" aria-hidden="true">“</span>
          <p>Finally looks like a real game.</p>
          <small>— physical-device playtest reaction</small>
        </aside>
      </div>
      <section class="about-note">
        <p class="eyebrow">INSPIRATION</p>
        <p>Galageaux is an original game inspired by classic arcade space shooters. It is not affiliated with or endorsed by any other game publisher or franchise.</p>
      </section>
    `,
  });
}
