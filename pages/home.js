import { getHtmlCopyrightText } from '../appInfo.js';

export function renderHome() {
  return `
    <header>
      <div class="container">
        <div class="header-content">
          <a href="/" class="logo">GALAGEAUX</a>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </nav>
        </div>
      </div>
    </header>

    <main>
      <div class="container">
        <div class="hero">
          <h1>GALAGEAUX</h1>
          <p class="tagline">Arcade chaos, pocket sized.</p>
          <p class="description">
            Experience the thrill of classic arcade space combat reimagined for mobile. 
            Navigate through waves of enemies, collect power-ups, and battle epic bosses 
            in this vertical neon space shooter.
          </p>
        </div>

        <div class="features">
          <div class="feature-card">
            <div class="icon">🎮</div>
            <h3>Classic Arcade Action</h3>
            <p>Fast-paced vertical shooter gameplay inspired by classic arcade games</p>
          </div>
          <div class="feature-card">
            <div class="icon">📱</div>
            <h3>Mobile Optimized</h3>
            <p>Designed specifically for mobile with tilt controls and intuitive touch interface</p>
          </div>
          <div class="feature-card">
            <div class="icon">⚡</div>
            <h3>Power-ups & Upgrades</h3>
            <p>Collect power-ups to enhance your weapons, shields, and abilities</p>
          </div>
          <div class="feature-card">
            <div class="icon">👾</div>
            <h3>Epic Boss Battles</h3>
            <p>Face challenging multi-phase boss encounters with unique attack patterns</p>
          </div>
          <div class="feature-card">
            <div class="icon">🏆</div>
            <h3>Level Progression</h3>
            <p>10 challenging levels with increasing difficulty and bonus shoot-out rounds</p>
          </div>
          <div class="feature-card">
            <div class="icon">🎯</div>
            <h3>Customizable Controls</h3>
            <p>Adjustable tilt sensitivity and fire button positioning for left/right-handed players</p>
          </div>
        </div>

        <div class="card">
          <h2>Game Features</h2>
          <h3>Movement & Controls</h3>
          <p>
            Control your ship by tilting your device left and right, or use touch drag controls. 
            Adjust the tilt sensitivity to match your preference (1-10 scale). The fire button 
            can be positioned on either side of the screen for comfortable gameplay.
          </p>

          <h3>Weapons & Power-ups</h3>
          <p>
            Start with a basic weapon and collect power-ups dropped by defeated enemies:
          </p>
          <ul>
            <li><strong>Spread Shot:</strong> Fire multiple bullets in a spread pattern</li>
            <li><strong>Double/Triple Shot:</strong> Increase your firepower</li>
            <li><strong>Rapid Fire:</strong> Significantly increase your firing rate</li>
            <li><strong>Shield:</strong> Temporary protection from enemy fire</li>
            <li><strong>Slow:</strong> Slow down enemy movement for easier targeting</li>
          </ul>

          <h3>Gameplay Modes</h3>
          <p>
            Progress through 10 levels, each with increasing difficulty. Complete level objectives 
            to unlock bonus shoot-out rounds where you can earn extra points. Face off against 
            powerful bosses with unique attack patterns and multiple phases.
          </p>

          <h3>Customization</h3>
          <p>
            Customize your gaming experience with adjustable settings:
          </p>
          <ul>
            <li>Tilt sensitivity control (1-10)</li>
            <li>Fire button position (left/right)</li>
            <li>Auto-fire toggle</li>
            <li>Tilt control on/off</li>
          </ul>
        </div>

        <div class="card">
          <h2>Coming Soon</h2>
          <p>
            Galageaux is currently in development. The mobile app will be available on iOS and 
            Android app stores soon. Stay tuned for updates!
          </p>
          <p>
            For questions or feedback, please refer to our <a href="/about" style="color: var(--accent-blue);">About</a> page.
          </p>
        </div>
      </div>
    </main>

    <footer>
      <div class="container">
        <p>${getHtmlCopyrightText()}</p>
        <p style="margin-top: 0.5rem;">
          <a href="/terms">Terms of Service</a> | 
          <a href="/privacy">Privacy Policy</a> | 
          <a href="/about">About</a>
        </p>
      </div>
    </footer>
  `;
}

