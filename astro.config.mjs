import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"

import cloudflare from "@astrojs/cloudflare"

// TODO: menu, finish translations, put something interesting at the bottom of the page

// https://astro.build/config
export default defineConfig({
   integrations: [react(), tailwind()],
   i18n: {
      locales: ["en", "sk"],
      defaultLocale: "en",
      routing: {
         prefixDefaultLocale: false,
      },
   },
   output: "hybrid",
   adapter: cloudflare({ imageService: "cloudflare" }),
})
