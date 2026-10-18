import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { pages, render } from '../src/site.mjs';
const app = fileURLToPath(new URL('../', import.meta.url));
for (const path of Object.keys(pages)) {
  const directory = path === '/' ? app : `${app}${path.slice(1)}/`;
  mkdirSync(directory, { recursive: true });
  writeFileSync(`${directory}index.html`, render(path));
}
console.log('Generated Home, Menu, About and Visit as static HTML.');
