import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://nitishpatel.github.io",
  base: "blog",
  integrations: [mdx(), sitemap(), pagefind()],
});
