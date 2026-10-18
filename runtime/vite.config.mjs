// Retain the frontend's multipage development routes inside the container launcher.
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
const { default: appConfig } = await import(pathToFileURL(resolve(process.cwd(), 'vite.config.js')).href);
export default {
  ...appConfig,
  server: {
    ...appConfig.server,
    headers: { ...appConfig.server?.headers, 'X-Robots-Tag': 'noindex, nofollow' },
  },
  plugins: [...(appConfig.plugins || []), {
    name: 'launcher-health-and-revision',
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const path = request.url?.split('?')[0];
        if (path !== '/health' && path !== '/version.json') return next();
        response.setHeader('Cache-Control', 'no-store');
        response.setHeader('X-Robots-Tag', 'noindex, nofollow');
        response.setHeader('Content-Type', path === '/health' ? 'text/plain' : 'application/json');
        response.end(path === '/health' ? 'ok\n' : JSON.stringify({ revision: process.env.APP_REVISION || 'unknown' }));
      });
    },
  }],
};
