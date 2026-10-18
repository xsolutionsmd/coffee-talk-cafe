# Coffee Talk Cafe

Static Vite website with separate Home, Menu, About and Visit documents. Public company evidence lives in `kb/`; begin with [the handoff](kb/HANDOFF.md), [the blueprint](kb/template-blueprint.md) and [frontend validation](docs/FRONTEND_VALIDATION.md).

From `app/`:

```powershell
npm ci --no-audit --no-fund
npm run dev -- --host 127.0.0.1 --port 5188
npm run check
```

`src/site.mjs` contains original page templates. `src/content/menu.json` is the price-free projection of all 96 authoritative KB menu entries. `scripts/generate.mjs` writes the four HTML documents before development/build. Change templates/data, then regenerate or restart the development command. Vite builds every document to `dist/`; content and navigation work without client JavaScript. The small client script enhances the modal drawer and section focus/history.

`npm run check` builds, checks the static runtime/link contract, validates exact menu identity/name/description/variant coverage against the KB when present, rejects prices, and checks page anchors/media/contact actions. Derek's variation also validates its 36 supported item-photo mappings and the omission of uncertain matches. No new runtime dependency or framework is introduced. Container lifecycle instructions remain in [WORKFLOW.md](WORKFLOW.md).

Use `derek-dev` for Derek's work. This branch intentionally adds 36 menu-item photos to the accepted design; production and Abdul retain the text-menu baseline. See [photo provenance](kb/menu-photos.json). Do not merge this variation to main or Abdul without a separate request. Pushes to the configured branches trigger their independent release workflows; follow the accepted release boundary and repository instructions.
