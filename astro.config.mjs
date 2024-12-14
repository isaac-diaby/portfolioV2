import { defineConfig } from "astro/config";
import { tailwind } from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";


import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://isaacdiaby.tech',
  integrations: [tailwind(), react(), sitemap({
    customPages: ['https://medium.com/@midiaby']
  }), mdx({})],
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