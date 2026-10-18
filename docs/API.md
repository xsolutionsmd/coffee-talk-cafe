# Runtime and integration contract

Coffee Talk Cafe is a static presentation site. No custom customer backend is selected. This contract is preparation for the post-reconstruction Astra check; it is not a claim that the completed application has passed validation.

## Routes

- `/`, `/menu`, `/about` and `/visit` must load directly, refresh and navigate with browser history. Production build output must include actual page documents or a deliberate router fallback that preserves missing-asset 404 responses.
- `/health` returns HTTP 200 with `ok` from the runtime.
- `/version.json` returns the exact source `revision`, with `Cache-Control: no-store`.
- Missing pages/assets return an authored HTTP 404, not a success page or stock server error.
- Runtime listens on container port 8080, supports ARM64, runs unprivileged/read-only with temporary writable paths, and exposes no host application port behind the shared gateway.
- All three authorized demonstration environments retain `noindex, nofollow`. HTTPS is supplied by the existing gateway.

## Existing customer services

- Order on Grubhub: `https://www.grubhub.com/restaurant/coffee-talk-cafe-22-w-pennsylvania-ave-101-towson/1969580`.
- Call: `tel:+14102961937`.
- Directions: `https://www.google.com/maps/dir/?api=1&destination=39.40077400,-76.60378920`.
- Facebook: `https://www.facebook.com/coffeetalktowson/`.
- Instagram: `https://www.instagram.com/coffeetalktowson/`.

These remain outbound links. Do not collect payment/contact details, emulate order submission, add unsupported reservation availability or imply an on-site cart. External-provider hours/availability govern fulfillment; café opening hours are separate. No real order or message is created by validation.

## Content constraints

Render every supported entry from the accepted 96-item menu with clear category access. Never publish dated research prices because new amounts were not announced with the October 19 price change. Original source provenance stays in the KB/library; the deployed image contains only required authored runtime/frontend inputs and selected production media.

## Validation pending

After Sol reconstruction: verify built page output, menu ID coverage, actual image files, outbound destinations, health/version/noindex, read-only container behavior and desktop/mobile navigation. Record the checked revision and results in the backend/readiness evidence before refinement/publication.
