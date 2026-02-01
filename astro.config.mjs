import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        page !== 'https://antska.dev/404' &&
        !page.endsWith('/404/'),
    }),
  ],
  output: 'static',
  site: 'https://antska.dev',
});
