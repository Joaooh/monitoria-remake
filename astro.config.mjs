// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://monitoriadeti.vercel.app', // Substituir pelo domínio oficial depois
  integrations: [react(), sitemap()],
});