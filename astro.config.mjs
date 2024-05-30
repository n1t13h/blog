import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://nitishpatel.github.io",
  base: "astro-test",
  trailingSlash: "never",
  integrations: [mdx(), sitemap()],
});
