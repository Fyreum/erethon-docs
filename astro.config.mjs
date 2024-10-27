// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  base: '/docs',

  integrations: [
      starlight({
          title: 'Erethon Docs',
          social: {
              github: 'https://github.com/DRE2N',
          },
          customCss: [
              // Relative path to your custom CSS file
              './src/styles/custom.css',
          ],
      }),
	],

  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),
});