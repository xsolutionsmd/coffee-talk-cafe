# Features

Landing build: no custom features. Decision established before reference selection on October 18, 2026. Sourced details are in offerings.md, contact-and-hours.md, menu.json and sources.md.

## Selected features

Separate Home, Menu, About and Visit pages; responsive active-page navigation; full 96-entry menu with useful category navigation; clear phone, directions and external Grubhub ordering links. Preserve native links and back/forward/direct-route access. No real customer transactions in testing.

## Existing systems we integrate with (instead of rebuilding)

Grubhub location 1969580 is the verified external pickup/delivery destination (sources S4). Label it “Order on Grubhub.” Google Maps supplies directions. Phone is tel:+14102961937. Facebook and Instagram are the verified social accounts. Do not include the closed Uber Eats location, unconfirmed delivery services or an unrelated domain.

## Per feature: user stories, states, business rules

Visitors can read all supported menu entries and ingredients, move between categories and reach ordering without losing the café context. The menu never renders `research_price_usd`; the official announced price change has no known replacement amounts. Category controls must work by keyboard, preserve clear selection/focus and fit narrow screens. Mobile navigation opens/closes cleanly, supports Escape and closes after navigation. Do not add cart/account/contact-form states that imply a service we do not provide.

## Operational checklist (what the owner must provide or approve)

New prices and future menu changes can be supplied later. They are not necessary for a complete unpriced presentation with verified Grubhub ordering. Current flavors and exact modifier choices are deferred to the café/order platform. Recommended later maintenance: a current priced menu, higher-resolution refreshed photographs and future hours updates; no extra operational platform recommended without a concrete need.

## Acceptance
<!-- Functional builds: one row per scenario (see references/features.md, feature acceptance gate).
Phase pre: every row must pass before build counts as done. Phase live: every row must pass
before deploy counts as done. Editing results here doesn't make the build stale. -->

| Phase | Feature | Scenario | Viewport | How tested | Result | Evidence |
|---|---|---|---|---|---|---|
