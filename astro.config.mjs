import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://caitlinkchen.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  image: { responsiveStyles: true },
  integrations: [sitemap()],
});
