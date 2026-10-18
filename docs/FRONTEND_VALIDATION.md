# Frontend reconstruction validation — October 18, 2026

Local populated reconstruction on `derek-dev`, starting at `bf05485`. No deployment, formal live review or transaction occurred.

- `npm ci --no-audit --no-fund`: passed using the existing Vite lockfile; no dependency added.
- `npm run check`: build/static contract and exact 96-entry menu checks passed. Four built HTML documents, local images, source IDs, names, descriptions, variant groupings, anchor targets and required hrefs are checked. Research prices are absent from frontend data/output. The main-equivalent menu is text-only.
- Native T3 browser: Home/Menu/About/Visit direct URLs at 1440×900, 390×844 and 320×844; correct page titles and all 96 menu entries rendered. No document overflow, broken image or button/category control extending outside its containing panel.
- Actual desktop/mobile screenshots were inspected for header, typography, food/coffee crops, photo panels, order section, counter crop, uncropped breakfast image, storefront and footer. Evidence stays outside the public repository in the company task's template-analysis folder.
- Category click: Drinks updates `#drinks`, selected link and focus `drinks-title`; heading is framed at y235 on a phone after smooth scrolling. Lunch category links and all static anchors are validated. All menu entries remain present rather than a teaser or hidden default subset.
- Mobile drawer: native modal/inert background, initial close-button focus, explicit Tab/Shift+Tab wrap, Escape closure and trigger-focus restoration passed. Navigation to Visit closes the drawer; browser Back returns to Menu with its title. Visible focus styles remain enabled.
- At 320px, all four pages pass a browser DOM stress test that doubles every computed text size to 200%; long text/grid children wrap without horizontal overflow. This is text-size simulation, not an OS/browser zoom claim.
- Reduced motion: source contains the preference guard and CSS media rule. Forcing that rule active through the browser stylesheet produces `transition-duration: 0s`, drawer `animation-name: none` and `scroll-behavior: auto`. OS preference emulation is unavailable through these preview tools; the normal OS preference reported false. No continuous decorative animation is implemented.
- Verified destination values match the accepted KB for Grubhub, phone, directions and social links. No external order, call, payment or message was submitted; third-party availability is outside this frontend pass.

The first content-check iteration incorrectly counted `data-menu-id` attributes as duplicate HTML IDs; the checker was corrected to require a standalone `id` attribute. Browser testing found and fixed extensionless Vite routes, desktop menu-column spacing, native backward-tab escape and narrow enlarged-text overflow. Final checks apply to the corrected state.

## Inspection method and limits

Derek's October 18 correction permits browser/devtools inspection when REA is unavailable. The completed reconstruction uses that fallback: actual native T3 desktop/mobile rendered reference views, DOM/accessibility inspection, bounding-box measurements, computed styles and visible interactions, followed by the populated local page/flow checks above. The blueprint records the exact REA limitation and evidence location; these browser observations are not called REA. No tooling repair, repeated rejected helper attempt or waiver is pending. The implementation and its evidence are ready for normal coordinator acceptance under the corrected policy.

A combined image/content preparation command was also rejected before execution. The site uses unchanged compact originals copied independently; source-image processing did not run. Display crops are CSS only, and the full breakfast photo is preserved. Current selected JPEGs total under 1MB.

## Backend handoff

No customer API, database or form endpoint is required. Astra must validate the existing unprivileged container, `/health`, exact `/version.json`, no-store/noindex, real 404 behavior and output routes. The app development config supplies extensionless page rewrites; the separate launcher config must incorporate those if it replaces the app config. No runtime/Dockerfile/API file was changed by this frontend task. Release metadata with environment-specific absolute URLs remains the release owner's work.
