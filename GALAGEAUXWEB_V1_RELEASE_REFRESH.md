# GalageauxWeb V1 release refresh

Date: September 29, 2026

## 1. Existing architecture

The site remains a small Vite + vanilla JavaScript single-page application. It uses
index.html, main.js, router.js, page render modules, and style.css. No UI framework,
animation library, analytics, tracker, server, or new runtime dependency was added.

Netlify configuration remains npm run build with dist as the publish directory and the
existing SPA fallback. The existing domain and deployment identity were not changed.

## 2. Files changed

- index.html — metadata, canonical URL, theme color, favicon, and title.
- main.js — added the /support route.
- router.js — normalized paths, mobile menu behavior, focus handling, same-page anchors,
  and Back/Forward rendering.
- style.css — complete responsive retro-futuristic neon visual system.
- appInfo.js — centralized App Store, support, site, and legal-date configuration.
- pages/layout.js — shared header, footer, CTA, page, and screenshot-placeholder helpers.
- pages/home.js — new product landing page.
- pages/about.js — finished V1 product story.
- pages/support.js — controls, powerups, Show Me, settings, and troubleshooting guide.
- pages/privacy.js — reconciled V1 privacy copy.
- pages/terms.js — reconciled V1 terms draft.
- public/favicon.svg — lightweight product favicon.
- public/images/gameplay/README.md — approved physical-iPhone screenshot instructions.

netlify.toml, vite.config.js, and the deployment command were preserved.

## 3. Homepage redesign

The homepage now presents Galageaux as a finished V1 mobile arcade shooter:

- hero headline and App Store CTA state;
- responsive enemy choreography section;
- tilt/touch and manual/auto-fire controls;
- six current powerups;
- Aegis Sentinel, Violet Wraith, and Inferno Citadel;
- live Show Me explanation;
- local scoring, combos, achievements, and replayability;
- final CTA.

There are no claims of online multiplayer, online leaderboards, cloud saves, Android
availability, or a live App Store listing.

## 4. About rewrite

About now focuses on the product, arcade inspiration, enemy behavior, mobile-first
controls, three-stage campaign, and local V1 nature. It removes implementation details
and the old “In Development” status. It also clarifies that Galageaux is an original
game inspired by classic arcade space shooters and does not claim franchise affiliation.

## 5. Support page

/support is now a first-class route with:

- Getting Started;
- tilt, touch, Fire, Auto-Fire, sensitivity, and button-side guidance;
- Double, Triple, Spread, Rapid, Shield, and Slow powerups;
- Show Me access;
- persistent audio/settings behavior;
- reset behavior;
- practical troubleshooting;
- centralized support-contact configuration.

The real support address is intentionally not invented. Add it to appInfo.js as
supportEmail before release.

## 6. Privacy changes

Privacy now describes local gameplay statistics, achievements, and settings; optional
accelerometer use for tilt control; touch as an alternative; no required account; and
no cloud save or leaderboard surface in V1. It does not describe dormant authentication,
analytics, crash-reporting, or cloud integrations as active product behavior.

The final iOS artifact, motion permission behavior, store privacy disclosures, and any
future services still require human privacy/legal review.

## 7. Terms changes

Terms now describe a three-stage local arcade game without a required account, cloud
service, or promised online service. Account-specific provisions were removed, and the
draft avoids asserting a corporate legal owner, governing jurisdiction, refund policy,
or store-specific legal guarantee that is not established in repository evidence.

Human/legal review is required before publication.

## 8. Navigation/footer

Primary and footer navigation include Home, About, Support, Privacy, and Terms. The
router supports direct loads through the Netlify fallback, internal navigation,
browser Back, browser Forward, active-link state, and a compact mobile menu.

## 9. Responsive design

The layout adapts across narrow phones, larger phones, tablets, laptops, and desktop
widths. Grids collapse without fixed-height content sections, the screenshot slots
remain contained, navigation becomes a touch-friendly menu, and legal/support copy
stays readable on small screens.

## 10. Accessibility

The refresh uses semantic headings, labeled navigation, a labeled mobile menu button,
focus-visible states, keyboard-operable links/buttons, hidden decorative visual layers,
comfortable touch targets, reduced-motion support, and focus movement to new route
content. Screenshot placeholders are decorative until replaced by real images with
meaningful alt text.

No formal WCAG certification is claimed.

## 11. SEO/metadata

index.html now includes a V1 title, product description, viewport, theme color, robots
directive, canonical https://galageaux.com/ URL, Open Graph title/description, site
name, and a favicon. No fabricated Open Graph screenshot was added. A confirmed share
image should be added later in the head and/or centralized configuration.

## 12. Screenshot placeholders/assets needed

The homepage intentionally uses clearly labeled CSS capture slots and does not
fabricate gameplay screenshots. Add approved physical-iPhone captures from the current
release candidate under public/images/gameplay/, following the instructions in its
README. Suggested slots are stage 1, enemy attack, boss, powerup, and Show Me.

## 13. App Store URL still needed

APP_INFO.appStoreUrl in appInfo.js is intentionally empty. The site displays a disabled,
non-link CTA until the confirmed listing URL is added. No App Store URL was invented.

## 14. Support contact still needed

APP_INFO.supportEmail in appInfo.js is intentionally empty. Support displays a clear
unconfigured state instead of a fake address. Add the confirmed destination before
release.

## 15. Legal/privacy statements requiring human review

- Confirm the final shipped iOS artifact matches the audited V1 behavior.
- Confirm motion permission and accelerometer disclosures.
- Confirm store privacy nutrition-label/questionnaire answers.
- Confirm age guidance and any jurisdiction-specific wording.
- Confirm ownership attribution, governing law, refunds, and support destination.
- Reconcile these pages if analytics, crash reporting, accounts, cloud save, purchases,
  or online services are enabled later.

## 16. Build validation

- npm install — passed; installed 11 packages.
- npm run build — passed with Vite 5.4.21; output written to dist.
- npm run lint — not runnable because ESLint is not installed or configured in this
  website package. No lint dependency was added solely for this small site.

The build output contains the SPA entrypoint, compiled JavaScript, favicon, and the
gameplay asset README. No broken gameplay image references are emitted because real
screenshots are not yet configured.

## 17. Netlify deployment expectations

The existing Netlify site, custom domain, DNS, TLS, repository, main branch workflow,
build command, publish directory, and SPA fallback should remain unchanged. Deploying
this refresh requires only the existing npm run build → dist flow.

No deployment, DNS change, domain change, or Netlify identity change was performed.

## 18. Exact post-deployment checklist

1. Add the confirmed App Store URL to APP_INFO.appStoreUrl.
2. Add the real support destination to APP_INFO.supportEmail.
3. Add approved physical-iPhone screenshots under public/images/gameplay/ and replace
   the labeled CSS slots.
4. Add a reviewed Open Graph/share image if one is approved.
5. Run npm install and npm run build from galageauxweb.
6. Verify /, /about, /support, /privacy, and /terms on the deployed domain.
7. Open each route directly in a fresh browser tab and verify Back/Forward behavior.
8. Test the mobile menu, keyboard focus, visible focus states, and same-page hero anchor.
9. Check the site at a narrow phone width, tablet width, laptop width, and desktop width.
10. Confirm the console has no route or asset errors and the disabled App Store CTA has
    become the confirmed link only after configuration.
11. Review Privacy and Terms against the final submitted mobile build and obtain human
    legal/privacy approval.
12. Only after that review, decide whether to publish the Netlify deploy.
