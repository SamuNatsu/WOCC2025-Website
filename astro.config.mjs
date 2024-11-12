// Astro config
import { defineConfig, passthroughImageService } from 'astro/config';
import { resolve } from 'node:path';

// Integrations
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/wocc2025',
  image: {
    service: passthroughImageService()
  },
  integrations: [tailwind({ nesting: true })],
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
