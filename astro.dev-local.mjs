// @ts-check
// Local-only dev config: mirrors astro.config.mjs but disables the
// Cloudflare inspector port probe (sandbox blocks binding 0.0.0.0:9229).
// Usage: npm run dev -- --config ./astro.dev-local.mjs --port 4322
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://eventhex.ai',
  output: 'server',
  adapter: cloudflare({ inspectorPort: false }),

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['lottie-web/build/player/lottie_svg', '@lottiefiles/dotlottie-web'],
    },
  },
});
