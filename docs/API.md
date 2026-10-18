# Runtime and integration contract

Coffee Talk Cafe is a static presentation site. No custom customer backend is selected. Astra verified this contract on October 18, 2026 against the populated static site and isolated production/development containers.

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

## Validation ? October 18, 2026

Checked application/runtime revision `e7ac3613caf6cf78168def9887ff09ec55e654ca`. ARM64 production image passed 21 HTTP checks: four page documents, relative extensionless redirects, eight local CSS/JS/image resources, health, exact uncached revision and missing page/asset/dotfile 404 responses. User 101:101, read-only root and no-new-privileges verified; attempted write to the site root was rejected. The initial internal-port redirect defect was fixed before acceptance. The development image independently passed five health/version/direct-page checks with the app route plugin retained. All 96 sourced menu entries and no research prices were verified. Grubhub was opened again in the browser and showed the matching name/address/phone and preorder/pickup controls; no transaction was performed. Local desktop/mobile reconstruction checks are in FRONTEND_VALIDATION.md. No server release has occurred yet; final readiness follows refinement. Private receipts: backend-runtime-r2.json, backend-dev-runtime.json and grubhub-backend-check.png. Disposable test containers/images were removed; the isolated builder/cache remains only for the immediate first-release build.
