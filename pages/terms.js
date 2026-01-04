import { getHtmlCopyrightText, getLastUpdatedText } from '../appInfo.js';

export function renderTerms() {
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
          <h2>Terms of Service</h2>
          <p><strong>Last Updated: ${getLastUpdatedText('January')}</strong></p>

          <h3>1. Acceptance of Terms</h3>
          <p>
            By downloading, installing, or using the Galageaux mobile application ("App"), 
            you agree to be bound by these Terms of Service ("Terms"). If you do not agree 
            to these Terms, do not use the App.
          </p>

          <h3>2. Description of Service</h3>
          <p>
            Galageaux is a mobile arcade-style space shooter game. The App provides 
            entertainment and gaming services as described in the App Store or Google Play 
            Store listings.
          </p>

          <h3>3. User Accounts</h3>
          <p>
            You may be required to create an account to use certain features of the App. 
            You are responsible for maintaining the confidentiality of your account 
            credentials and for all activities that occur under your account.
          </p>

          <h3>4. User Conduct</h3>
          <p>You agree not to:</p>
          <ul>
            <li>Use the App for any illegal purpose or in violation of any laws</li>
            <li>Attempt to hack, reverse engineer, or modify the App</li>
            <li>Use automated systems or bots to interact with the App</li>
            <li>Share your account with others</li>
            <li>Interfere with or disrupt the App's functionality</li>
          </ul>

          <h3>5. Intellectual Property</h3>
          <p>
            All content, features, and functionality of the App, including but not limited 
            to text, graphics, logos, and software, are owned by Galageaux and are protected 
            by copyright, trademark, and other intellectual property laws.
          </p>

          <h3>6. In-App Purchases</h3>
          <p>
            If the App offers in-app purchases, all purchases are final. Refunds are 
            subject to the policies of the App Store or Google Play Store where you 
            made the purchase.
          </p>

          <h3>7. Disclaimer of Warranties</h3>
          <p>
            THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
            EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF 
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>

          <h3>8. Limitation of Liability</h3>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, GALAGEAUX SHALL NOT BE LIABLE FOR ANY 
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS 
            OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.
          </p>

          <h3>9. Changes to Terms</h3>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users 
            of any material changes. Your continued use of the App after such modifications 
            constitutes acceptance of the updated Terms.
          </p>

          <h3>10. Termination</h3>
          <p>
            We reserve the right to terminate or suspend your access to the App at any time, 
            with or without cause or notice, for any reason including violation of these Terms.
          </p>

          <h3>11. Governing Law</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of 
            the jurisdiction in which the App is operated, without regard to its conflict 
            of law provisions.
          </p>

          <h3>12. Contact Information</h3>
          <p>
            If you have any questions about these Terms, please contact us through the 
            App Store or Google Play Store listing.
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

