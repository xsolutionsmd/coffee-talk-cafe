# Design brief

## Visitor job and primary action
Find a satisfying morning or lunch stop in Towson, browse the actual menu, order through the existing Grubhub location, or call/get directions. Landing presentation scope: no custom checkout, booking, customer database or inactive contact form. Function choice was made before reference selection on October 18, 2026.

## Content plan
- `/`: warm introduction, real food imagery, brief breakfast/lunch/coffee overview and clear Menu / Order on Grubhub actions. Evidence: company-profile, offerings and sources S1/S4/S5/S6/S10.
- `/menu`: all 96 researched entries from menu.json, grouped into useful breakfast/lunch/drink/ice-cream sections with in-page category navigation. Preserve descriptions and honest variant groupings; never render research prices. Price update from S9 makes fixed pricing inappropriate. Offer the verified Grubhub action for current order options.
- `/about`: short family-run/community history since 2016, coffee/food/local ice-cream focus and genuine premises photographs. Historical owner attribution must remain faithful to S6, without invented founder quotations.
- `/visit`: address/suite, call, directions, weekday 7am–4pm schedule and weekend closure; breakfast 7–11am where useful. Use storefront/context imagery, no invented parking or accessibility promises.
- Primary external CTA: https://www.grubhub.com/restaurant/coffee-talk-cafe-22-w-pennsylvania-ave-101-towson/1969580. Secondary: tel:+14102961937 and source-backed Google directions. Uber Eats is closed on its matching platform and is excluded.
- Real-image roles: Oriole Bird `ef00531ccb27` for a modest food feature; recent breakfast `aef28c12ec7f` for breakfast; `417ce2123f74` Hummus Wrap / `c891a273cb44` Powerhouse for lunch; `da8c81746d7c` generic coffee for coffee; interior `16d40bf8cbab` and storefront `92a52aadf5eb` for About/Visit. Full hashes/provenance and historical crop caveats are in the media library. Coordinator inspected the complete 18-image review sheet; avoid upscaling small images and avoid price-board crops that imply current pricing.
- Gaps: new prices, exact current ice-cream flavors, a clean logo and some modifiers remain unknown. No generated/competitor media, fabricated ratings, price promises or unsupported business capabilities. Typography-led text wordmark is appropriate.

## Template site

**Selected October 18, 2026: [Provisions Café](https://provisionscafe.com/).** Astra inspected its live Home, [Menu](https://provisionscafe.com/menu/), [About](https://provisionscafe.com/about/) and [Contact](https://provisionscafe.com/contact-us/) views at desktop widths 1280/1440 and phone width 390. Home and About hero photography, cream/navy composition, mobile drawer, location/menu selector, text menu and external-order destination chooser were observed. Private reference-selection evidence contains captures; Sol must add its required REA blueprint and populated reconstruction evidence.

Why it fits: an actual neighborhood café presentation with breakfast/lunch/coffee, separate pages, external ordering and location information. Its restrained serif display type, simple sans body, dark navy `#00244c`, warm cream `#fdfbf5`, muted tan buttons, generous margins and two-column text menu provide a polished structure compatible with Coffee Talk's authentic food photos and deep menu.

Main reference components: 72px white header with spaced wordmark and compact uppercase navigation; immersive fading photographic hero; centered warm-cream introduction; paired image-led destination panels; calm order callout; navy footer. Menu uses two broad cream panels on desktop, single column on phone, serif category titles bracketed by fine rules, bold uppercase item names and smaller ingredient lines. **The reference has no per-item menu photos.** Preserve that on main/Abdul. Its menu selector changes content and URL hash; adapt the same button language to Breakfast, Lunch, Drinks and Ice Cream for one location.

Adaptations grounded in evidence: Coffee Talk has one location, so link Order on Grubhub directly without a location-selection modal. Replace location tiles with real breakfast/lunch/coffee or visit panels. Omit careers, newsletter, store, reservation and multi-location team sections unsupported by the brief. Keep a compact footer with actual contact/hours/socials. Replace contact forms/maps requiring credentials with actual address, storefront photograph and verified directions link. Use a restrained licensed serif/sans pairing close to the reference; do not take its proprietary fonts without a license. Keep any continuous photo fade pausable and respect reduced motion. Real food photographs fill hero/feature roles; use shorter photo proportions if needed to preserve food and avoid coarse upscaling. A short identity headline over the hero or in the adjacent intro may clarify this new business site; do not add a marketing card layout.

Other inspected candidates: [Daily Provisions](https://www.dailyprovisions.co/) has good external ordering and food sections but a much busier promotional/carousel/footer experience; [Maman](https://mamannyc.com/) has refined split photography but more elaborate branded illustration, commerce and campaign navigation. Provisions is the closest simple structure to the accepted scope and assets. This is a single primary reference, not a mixture of all three.

## Visual direction
Reconstruct Provisions' calm cream/navy/tan visual system, serif headings, small clean uppercase navigation, spacious photography, ruled text-menu categories and compact practical contact treatment. Use Coffee Talk's real images and the source-backed content map above from the first reconstruction. No panoramic hero video is available. Sol should preserve reference proportions and motion where compatible, document any practical crop/accessibility/company adaptation, and avoid unnecessary components.

## Accepted decisions and corrections
October 18: no Stitch; actual company photos on rendered pages; distinct Home/Menu/About/Visit URLs; no decorative numbering; at most two complementary type families; careful narrow-phone containment. The default full endpoint authorizes initial production and both previews. Main/Abdul follow the reference menu's photo treatment; if text-only, the final menu-photo variation belongs only on Derek's preview after normal delivery.

## X Solutions standing design rules

- Thoughtful, distinctive, professional and clean: strong typography, authentic
  photography, smooth restrained motion, enjoyable interaction; necessary copy only.
- No decorative numbering: no section ordinals, numbered badges, photo prefixes or
  counters such as 01 / 02. Factual numbers (prices, phone, dates) are fine.
- Primary navigation uses separate page URLs unless explicitly requested otherwise.
  Prefer one font family, at most two complementary families unless established
  company branding requires more. Adapt the inspected reference closely and keep
  company-specific structural changes natural and justified by the visitor's task.
- Choose photos for composition, quality, real work shown, variety and recency across
  the whole history, not just the newest posts. Never present generated or competitor
  work as the client's.
- Check every form control against its containing card (including padding) on narrow
  phones, with enlarged text and focus states; page-level overflow checks are not enough.
- Native inputs, keyboard access, visible focus, reduced-motion support and a pause
  control for ongoing decorative movement.
- Consistent SVG arrows/icons (no text glyphs or emoji arrows). No visitor-facing demo,
  preview or "functionality" banners and no repeated disclaimers.
- Optimise without degrading the experience: right-sized media, lazy loading, no
  needless browser work.
