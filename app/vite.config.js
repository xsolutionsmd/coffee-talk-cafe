import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
const app = fileURLToPath(new URL('./', import.meta.url));
export default defineConfig({ plugins: [{
  name: 'coffee-talk-page-routes',
  configureServer(server) {
    server.middlewares.use((request, response, next) => {
      const [path, query] = (request.url || '').split('?');
      if (/^\/(menu|about|visit)\/?$/.test(path)) request.url = `${path.replace(/\/$/, '')}/index.html${query ? `?${query}` : ''}`;
      next();
    });
  },
}], build: { rollupOptions: { input: {
  home: resolve(app, 'index.html'), menu: resolve(app, 'menu/index.html'),
  about: resolve(app, 'about/index.html'), visit: resolve(app, 'visit/index.html'),
} } } });
