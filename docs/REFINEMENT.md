# Frontend refinement — October 18, 2026

Focused refinement of the existing populated Provisions-based frontend. The accepted
four-page structure, cream/navy/tan palette, Georgia/Arial pairing, six genuine images
and all 96 unpriced text-menu entries remain intact. No new design or asset search.

## Changes and reasons

- Added Order on Grubhub and View menu to the centered homepage introduction using
  the existing button styles. The main customer actions are now available before
  the photo panels, particularly useful when the desktop navigation is collapsed.
- Removed the duplicate menu anchor spacing. Category and subcategory headings now
  settle around 100px from the viewport top, below the 72px sticky header, instead
  of showing the preceding category above a heading around 200px down the screen.
- Kept Lunch selected when following a lunch subcategory, with a distinct selected
  subcategory state. Back, Forward, direct hashes and refresh restore the matching
  heading and focus. Repeating a category avoids duplicate history entries.
- Preserved native modified-click behavior, keyboard activation and reduced motion.

## Company and reference review

Reviewed the full sourced company KB, menu, asset manifest/coverage/item mapping,
18-image review sheet, relevant originals and accepted reference captures/blueprint.
The existing imagery is appropriate: historic sandwich imagery stays generic food
context with dated alt text; coffee is not assigned an unsupported drink name;
the October breakfast photo stays uncropped; storefront is visibly dated; the
counter crop excludes historical price boards. No photo or factual changes needed.
Menu prices and uncertain food-photo mappings remain excluded. The additional
homepage actions are a small company-priority adaptation, not a layout replacement.

## Validation

- Native T3 browser: Home, Menu, About and Visit at 1440×900, 390×844 and 320×740;
  no page/control containment overflow or broken images. Inspected lower-page food,
  counter, breakfast and footer compositions at desktop and mobile widths.
- Native dialog open/close, Escape, initial focus, Tab/Shift+Tab wrapping, restored
  trigger focus and route navigation; separate-page links, refresh and browser Back.
- All four category clicks, keyboard Enter, exact lunch subcategory selection,
  native history Back/Forward, repeated selection and direct-hash reload checked.
- At 320px, doubled computed text sizes on the affected Home/Menu pages without
  control overflow. This is a text-size stress simulation, not browser zoom.
- Forced the existing reduced-motion CSS rule and simulated its preference branch:
  zero transitions, no drawer animation and immediate category scrolling. OS
  preference emulation is unavailable; no OS-level pass is claimed.
- `npm run check`: production build and static/content checks pass, including exact
  96 IDs/names/descriptions/variants, no research prices, four documents and links.
- `xs_company.py check-public` and `git diff --check` pass.

Browser evidence is retained privately in the refinement run. Inspection used the
authorized ordinary browser/devtools method, not REA. This is a local refinement
check, not the later independent live review. Backend/API contract unchanged;
existing external destinations preserved. No publication or transaction performed.
