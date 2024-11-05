// Astro config
import { defineConfig } from 'astro/config';
import { resolve } from 'node:path';

// Integrations
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/wocc2025',
  integrations: [sitemap(), tailwind({ nesting: true })],
  site: 'https://www.wocc.org',
  trailingSlash: 'never',
  vite: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@assets': resolve('src/assets'),
        '@comp': resolve('src/components'),
        '@layout': resolve('src/layouts'),
        '@utils': resolve('src/utils')
      }
    }
  }
});
