export function renderAbout() {
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
        <div class="card">
          <h2>About Galageaux</h2>
          <p>
            Galageaux is a vertical neon space shooter game designed for mobile devices. 
            Inspired by classic arcade games like Galaga, Galageaux brings the excitement 
            of space combat to your pocket with modern controls and stunning visuals.
          </p>

          <h3>Our Mission</h3>
          <p>
            Our goal is to create an engaging, accessible mobile game that captures the 
            essence of classic arcade shooters while providing a smooth, modern gaming 
            experience optimized for touch and tilt controls.
          </p>

          <h3>Game Development</h3>
          <p>
            Galageaux is built using React Native and Expo, ensuring cross-platform 
            compatibility and smooth performance on both iOS and Android devices. The game 
            features custom graphics rendered with React Native Skia for crisp, smooth 
            animations and visual effects.
          </p>

          <h3>Contact & Support</h3>
          <p>
            For questions, feedback, or support regarding Galageaux, please refer to the 
            app's in-game support features or contact us through the app store listing 
            when available.
          </p>

          <h3>Version Information</h3>
          <p>
            Current Version: 1.0.0<br>
            Platform: iOS & Android<br>
            Status: In Development
          </p>
        </div>
      </div>
    </main>

    <footer>
      <div class="container">
        <p>&copy; 2025 Galageaux. All rights reserved.</p>
        <p style="margin-top: 0.5rem;">
          <a href="/terms">Terms of Service</a> | 
          <a href="/privacy">Privacy Policy</a> | 
          <a href="/about">About</a>
        </p>
      </div>
    </footer>
  `;
}

