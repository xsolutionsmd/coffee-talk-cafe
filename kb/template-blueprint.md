# Coffee Talk Cafe reconstruction blueprint

## Reference and evidence boundary

One reference: [Provisions Cafe](https://provisionscafe.com/), [Menu](https://provisionscafe.com/menu/), [About](https://provisionscafe.com/about/) and [Contact](https://provisionscafe.com/contact-us/). Reference selection and content sufficiency were accepted before implementation on October 18, 2026. No additional design search or generation service was used.

The coordinator's reference-selection captures cover desktop 1280/1440 and mobile 390, the menu location change, drawer and ordering chooser. This reconstruction independently inspected the live Home/Menu/About/Contact pages and mobile drawer through native T3 preview. Direct DOM measurements below are ordinary browser observations.

**REA evidence remains unavailable.** Current automatic execution review rejected the documented dedicated, task-owned browser helper launch before execution, with `rejected: blocked by policy` and no more specific reason. No endpoint was guessed, no personal profile was accessed and no alternative launch was attempted. There are no REA Evidence IDs, captures or observed sessions for this run. Browser screenshots must not be represented as REA evidence. Coordinator acceptance of the required reconstruction gate remains pending this limitation.

Private coordinator evidence is retained outside this repository in `runs/reference-selection/`, `runs/template-analysis/` and `runs/rea-runtime/`. The latter contains the exact rejection and an unchanged helper copy. Build screenshots are named `1440-home`, `1440-menu`, `1440-about`, `1440-visit` and their `390-` equivalents, plus lower-page captures. `browser-matrix.json` records the populated local checks.

## Observed geometry and visual system

- Header: white, 72 CSS pixels high; desktop 40px side padding, mobile 20px. Spaced uppercase wordmark at left; compact uppercase navigation and muted tan ordering button at right. Mobile replaces these with a three-line drawer trigger. The reference header remains visible while scrolling.
- Background and ink: cream `#fdfbf5`, navy `#00244c`, subtly darker cream menu panels. Reference tan is approximately `#a2875f`; implementation darkens it to `#89704d` to support small white button text.
- Reference typography is Coconat display and Neue Haas sans. Implementation uses the licensed system families Georgia and Arial as close, portable serif/sans alternatives; no reference font files or code were copied. Desktop main headings 40–50px, section headings 32px, item names 14px bold uppercase with modest tracking, ingredient text 13px/1.55. Mobile headings 29–42px; body 15–16px and menu text 13px.
- Home: immersive full-width photo, navy gradient toward its lower edge; centered cream introduction; paired destination photos with bottom-left serif labels and small light buttons; restrained text/photo order callout; navy footer. Live reference home hero measured 800px at 1280×800, destination panels 590×600 with 20px gutter, order section about 864px wide with two equal columns and a 60px gap.
- Menu reference: 40px desktop outer margins, heading around y140, selector around y146, two cream panels starting around y257; 60px internal padding, 20px inter-panel gutter. Serif category headings have fine horizontal rules; ingredients sit under bold uppercase item names. No item images are present. At 390px, the reference uses a single column with 40px outer and 20px panel padding.
- About reference: photographic opening with centered white serif text, centered cream story, then alternating photo/text content. Its extensive team, related-business and press sections are outside Coffee Talk's evidence and scope.
- Contact reference: large serif title, cream spacing and location/contact information; no reference-specific addresses, map credentials or form infrastructure are copied.

## Implemented pages and responsive rules

`/` uses a static 480–680px desktop photo hero, shortened to 420px on phones because the authentic source is 1000×800. The centered introduction has 90/100px desktop and 60/65px phone vertical padding. The photo pair is two columns with a 20px gutter and 560px desktop height, becoming one column with 430px panels. The order callout is 960px maximum width, two columns and 64px gap, becoming one column on phones. The practical footer stacks from four to two to one columns.

`/menu` renders every one of the 96 entries as actual static HTML, with original stable IDs, full names, descriptions and grouped variants. The source projection contains no prices. Breakfast/drinks/ice cream occupy the left desktop column and the deeper lunch menu the right; the independent columns avoid empty row gaps. Below 650px, the visual order is Breakfast, Lunch, Drinks, Ice Cream. Four native hash links and lunch subcategory links frame actual section headings; all items stay available without JavaScript. Panels use 50px desktop and 20–25px phone padding, a deliberate adaptation for the longer Coffee Talk names. No food-photo cards belong to this baseline.

`/about` uses an authentic historic sandwich photo for the reference-shaped opening, the sourced since-2016 story, a cropped counter image and a separate breakfast photo/text feature. The breakfast original is displayed uncropped to preserve both sandwiches and its genuine original caption.

`/visit` contains the verified address, suite, phone, hours, breakfast window, directions and external ordering link. Its two-column text/photo layout stacks on phones. The storefront caption dates the historical photo instead of promising unchanged signage or parking.

All pages share a 72px header, active-page navigation and native modal mobile drawer. Narrow-phone text and controls can wrap, including under a 200% text-size stress check. Layouts use no decorative numbering, fabricated proof, generated images or unsupported forms.

## Company content and asset map

| Asset hash prefix | Site file / placement | Accuracy and crop decision |
|---|---|---|
| `ef00531ccb27` | `app/public/images/sandwich.jpg`; Home/About hero | Owner-captioned Oriole Bird, 2017. Alt text retains date. Broad food context, never a claim that current ciabatta preparation matches this historic round bread. |
| `417ce2123f74` | `hummus-wrap.jpg`; Home lunch panel | Genuine owner-captioned Hummus Wrap, 2017; plate and wrap remain recognizable. |
| `da8c81746d7c` | `coffee.jpg`; Home coffee panel/order callout | April 2026 coffee with artwork; generic coffee label, never assigned to a particular drink. |
| `aef28c12ec7f` | `breakfast.jpg`; About breakfast feature | Official October 2026 bacon/egg/cheese croissant, rendered at its original aspect ratio. |
| `16d40bf8cbab` | `cafe-counter.jpg`; About counter feature | CSS window shows original y585–940 context at full source width, avoiding readable wall/floor price boards. No photo pixels altered. |
| `92a52aadf5eb` | `storefront.jpg`; Visit | Historical 2017 storefront, clearly dated in caption/alt. |

The six compact JPEGs total under 1MB, are local runtime assets and retain explicit image dimensions. Lower images lazy-load; hero images get high fetch priority. Original library/provenance remains separate. No uncertain ice-cream/chili candidate is used as an exact product image. The remaining authentic photos remain available for the later separately owned Derek variation.

Content authority: [company profile](company-profile.md), [offerings](offerings.md), [menu](menu.json), [contact/hours](contact-and-hours.md), [voice](brand-and-voice.md), [source register](sources.md) and [media](media.md). Price omission follows the official October 19 increase with no confirmed new amounts. One croissant variant's research-attribution phrase is shortened for visitors; its grouping and full original source value remain in the menu projection.

## Flows, states and integration boundaries

- Primary route links are real page documents with distinct titles/descriptions, direct load/refresh and browser-history support. Vite's app config rewrites extensionless development paths to the matching documents. Production output includes each `index.html` directly.
- Menu category links set a URL hash, selected state and keyboard focus on the actual heading, with smooth scrolling unless reduced motion is requested. Back/forward preserve normal browser history. Static links still function without JavaScript; no asynchronous menu loading, fabricated empty results or service errors exist.
- Drawer: trigger expands, native dialog opens, close button receives focus, backdrop makes the page inert, Tab/Shift+Tab cycle within it. Close button, Escape and navigation close it; dismissal restores trigger focus. The slide is 250ms; reduced motion removes it.
- Reference ordering: the coordinator observed a two-location chooser with external destinations. Coffee Talk has one verified location, so every ordering action goes directly to its verified [Grubhub page](https://www.grubhub.com/restaurant/coffee-talk-cafe-22-w-pennsylvania-ave-101-towson/1969580). No chooser, account, cart, checkout or order submission is built. Availability, fulfillment and prices belong to Grubhub; downstream transaction states were not tested.
- Call uses `tel:+14102961937`; directions uses the verified Google Maps coordinates. Buttons have hover/focus states and SVG arrows. No message, call or order was submitted during testing.
- Reference photo fade is adapted to a static image: available media and image clarity do not justify a continuous carousel. Hover transitions and the drawer respect reduced motion; there is no ongoing decorative movement needing a pause control.
- No customer data, API records or stateful backend is needed. Astra still owns production health/version/noindex, container, missing-route/asset 404 and deployment verification. The development launcher supplies a separate Vite config; merge/import the app route plugin there if that launcher is used. Canonical/social absolute URLs should be set only against the accepted live environment by the release owner.

## Validation and remaining uncertainty

The populated browser pass checked all four routes at 1440, 390 and 320 CSS pixels, all 96 rendered menu entries, image loading, primary hrefs, page/control containment, drawer dismissal/focus cycling and category focus/scroll behavior. The 320px 200% text-size stress check passes after allowing long text/grid children to wrap. Reduced-motion stylesheet rules were forced active in the browser and produced zero-duration transitions, no drawer animation and automatic scrolling; actual OS preference emulation is not exposed by the native preview tools.

See [frontend validation](../docs/FRONTEND_VALIDATION.md). This is a local implementation pass, not a formal deployed/live review. Real REA capture, container acceptance, refinement and publication remain coordinator-owned outstanding work. No hidden reference server implementation, timing trace or successful transaction is inferred from browser appearance.
