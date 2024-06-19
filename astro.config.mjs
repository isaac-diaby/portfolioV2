import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { markdownConfigDefaults, rehypeHeadingIds } from "@astrojs/markdown-remark";


import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://isaacdiaby.tech',
  integrations: [tailwind(), react(), sitemap({
    customPages: ['https://medium.com/@midiaby']
  }), mdx({
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: 'dracula',
      // Alternatively, provide multiple themes
      // See note below for using dual light/dark themes
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [],
    },

    rehypePlugins: [...markdownConfigDefaults.rehypePlugins, rehypeHeadingIds],
    // remarkPlugins: [...markdownConfigDefaults.remarkPlugins, ]
    // remarkPlugins: [markdownConfigDefaults.remarkPlugins],
  })],
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  // vite: {
  //   ssr: {
  //     noExternal: ['path-to-regexp'],
  //   },
  // },
});