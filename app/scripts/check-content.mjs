import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { menu, pages, links, escape, publicVariant } from '../src/site.mjs';
const app = fileURLToPath(new URL('../', import.meta.url));
const html = readFileSync(`${app}dist/menu/index.html`, 'utf8');
assert.equal(menu.length, 96);
assert.equal(new Set(menu.map(item => item.id)).size, 96);
const renderedIds = [...html.matchAll(/data-menu-id="([^"]+)"/g)].map(match => match[1]);
assert.deepEqual(renderedIds.sort(), menu.map(item => item.id).sort(), 'Every accepted entry must appear exactly once');
assert(!/research_price|publish_price|\$\s*\d/.test(html), 'Research prices must never reach the menu');
assert(!/<img\b/.test(html), 'Reference-equivalent menu is text-only');
for (const item of menu) {
  assert(html.includes(escape(item.name)), `Missing name: ${item.id}`);
  assert(html.includes(escape(item.description)), `Missing description: ${item.id}`);
  for (const variant of item.variants) assert(html.includes(escape(publicVariant(variant))), `Missing variant: ${item.id}`);
}
const sourcePath = `${app}../kb/menu.json`;
if (existsSync(sourcePath)) {
  const source = JSON.parse(readFileSync(sourcePath, 'utf8')).items;
  assert.deepEqual(menu, source.map(({id,name,category,description,variants}) => ({id,name,category,description,variants})));
}
for (const path of Object.keys(pages)) {
  const page = readFileSync(`${app}dist/${path === '/' ? '' : `${path.slice(1)}/`}index.html`, 'utf8');
  assert.equal([...page.matchAll(/<h1\b/g)].length, 1, `${path}: one main heading`);
  assert(!page.includes('xs-stage'), `${path}: starter marker must be removed`);
  assert(!/<form\b/.test(page), `${path}: no unsupported form`);
  const ids = [...page.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${path}: unique anchors`);
  for (const match of page.matchAll(/href="#([^"]+)"/g)) assert(ids.includes(match[1]), `${path}: missing anchor ${match[1]}`);
  for (const match of page.matchAll(/src="(\/images\/[^\"]+)"/g)) assert(existsSync(`${app}public${match[1]}`), `Missing image: ${match[1]}`);
  for (const key of ['phone','directions','order']) assert(page.includes(escape(links[key])), `${path}: missing ${key}`);
}
console.log('Content checks passed: 96 exact sourced IDs/names/descriptions/variants; four static pages, anchors, images and contact actions.');
