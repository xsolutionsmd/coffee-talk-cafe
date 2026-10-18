# Coffee Talk Cafe

Static Vite website with separate Home, Menu, About and Visit documents. Public company evidence lives in `kb/`; begin with [the handoff](kb/HANDOFF.md), [the blueprint](kb/template-blueprint.md) and [frontend validation](docs/FRONTEND_VALIDATION.md).

From `app/`:

```powershell
npm ci --no-audit --no-fund
npm run dev -- --host 127.0.0.1 --port 5188
npm run check
```

`src/site.mjs` contains original page templates. `src/content/menu.json` is the price-free projection of all 96 authoritative KB menu entries. `scripts/generate.mjs` writes the four HTML documents before development/build. Change templates/data, then regenerate or restart the development command. Vite builds every document to `dist/`; content and navigation work without client JavaScript. The small client script enhances the modal drawer and section focus/history.

`npm run check` builds, checks the static runtime/link contract, validates exact menu identity/name/description/variant coverage against the KB when present, rejects prices/item photos, and checks page anchors/media/contact actions. No new runtime dependency or framework is introduced. Container lifecycle instructions remain in [WORKFLOW.md](WORKFLOW.md); runtime acceptance belongs to the next backend pass.

Use `derek-dev` for Derek's work. This reconstruction is the text-menu baseline shared by production/Abdul after authorized release. The later Derek-only menu-photo variation is a separate final change. No publication follows a local commit automatically; follow the accepted release boundary and repository instructions.
