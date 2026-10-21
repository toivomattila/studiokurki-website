import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/data/site";

export default defineConfig({
  site: SITE_URL,
  output: "static",
  integrations: [
    sitemap({ filter: (page) => !page.includes("/.well-known/") && !page.endsWith("/404.html") }),
  ],
  vite: { plugins: [tailwindcss()] },
});
