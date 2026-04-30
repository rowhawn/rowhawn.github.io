import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://rowhawn.github.io",
  base: "/",
  trailingSlash: "always",
  output: "static",
  integrations: [tailwind(), mdx()],
  redirects: {
    "/frequencies-in-transit/": "/projects/frequencies-in-transit/",
  },
});
