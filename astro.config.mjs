import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://isaacdiaby.tech',
  integrations: [tailwind(), react(), sitemap({
    customPages: ['https://medium.com/@midiaby']
  }), mdx()],
  output: "server",
  adapter: vercel()
});