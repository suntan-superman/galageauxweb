import { getHtmlCopyrightText, getLastUpdatedText } from '../appInfo.js';

export function renderPrivacy() {
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
          <h2>Privacy Policy</h2>
          <p><strong>Last Updated: ${getLastUpdatedText('January')}</strong></p>

          <h3>1. Introduction</h3>
          <p>
            This Privacy Policy describes how Galageaux ("we," "our," or "us") collects, 
            uses, and protects your information when you use our mobile application ("App").
          </p>

          <h3>2. Information We Collect</h3>
          
          <h3>2.1 Information You Provide</h3>
          <p>We may collect information that you provide directly to us, including:</p>
          <ul>
            <li>Account registration information (email, screen name, password)</li>
            <li>Game progress and scores</li>
            <li>Settings preferences</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <p>The App may automatically collect certain information, including:</p>
          <ul>
            <li>Device information (model, operating system, unique device identifiers)</li>
            <li>Usage data (game sessions, features used, performance metrics)</li>
            <li>Crash reports and error logs</li>
          </ul>

          <h3>3. How We Use Your Information</h3>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide and maintain the App's functionality</li>
            <li>Save your game progress and preferences</li>
            <li>Improve the App's performance and user experience</li>
            <li>Respond to your requests and support needs</li>
            <li>Send you updates and notifications (with your consent)</li>
          </ul>

          <h3>4. Data Storage and Security</h3>
          <p>
            Your data is stored securely using industry-standard encryption and security 
            measures. Game progress and settings are stored locally on your device and may 
            be synced to cloud services if you choose to enable that feature.
          </p>

          <h3>5. Third-Party Services</h3>
          <p>
            The App may use third-party services for analytics, crash reporting, and 
            authentication. These services have their own privacy policies governing the 
            collection and use of your information.
          </p>

          <h3>6. Children's Privacy</h3>
          <p>
            The App is not intended for children under the age of 13. We do not knowingly 
            collect personal information from children under 13. If you are a parent or 
            guardian and believe your child has provided us with personal information, 
            please contact us.
          </p>

          <h3>7. Your Rights</h3>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of certain data collection</li>
            <li>Export your game data</li>
          </ul>

          <h3>8. Data Retention</h3>
          <p>
            We retain your information for as long as necessary to provide the App's 
            services and fulfill the purposes described in this Privacy Policy. You may 
            request deletion of your account and associated data at any time.
          </p>

          <h3>9. Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any 
            material changes by posting the new Privacy Policy in the App and updating the 
            "Last Updated" date.
          </p>

          <h3>10. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy or our data practices, 
            please contact us through the App Store or Google Play Store listing.
          </p>

          <h3>11. California Privacy Rights</h3>
          <p>
            If you are a California resident, you have additional rights under the 
            California Consumer Privacy Act (CCPA), including the right to know what 
            personal information we collect and the right to opt-out of the sale of 
            personal information (if applicable).
          </p>

          <h3>12. International Users</h3>
          <p>
            If you are using the App from outside the United States, please note that your 
            information may be transferred to, stored, and processed in the United States 
            where our servers are located.
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

