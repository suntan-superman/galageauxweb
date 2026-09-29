# Galageaux Web

Lightweight Vite + vanilla JavaScript website for the Galageaux mobile arcade game.

## Development

    npm install
    npm run dev

Build the Netlify release bundle with:

    npm run build

The production output is written to dist. The site keeps the existing SPA fallback
and supports /, /about, /support, /privacy, and /terms.

## Release configuration

Add the confirmed App Store listing and real support contact in appInfo.js before
release. Approved physical-iPhone gameplay captures belong under
public/images/gameplay/; see that folder's README for the intended slots.

See GALAGEAUXWEB_V1_RELEASE_REFRESH.md for the refresh details, validation results,
open release inputs, and post-deployment checklist.
