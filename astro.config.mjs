import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'solarized-light',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true
    } //    remarkplugins: [
    //      'remark-smartypants'
    //    ],
    //    rehypePlugins: [
    //    ],

  },
  integrations: [tailwind()]
});