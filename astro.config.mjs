import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import cloudflare from "@astrojs/cloudflare";

// Content
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkEmoji from "remark-emoji";

// Added for LaTeX support
import remarkMath from "remark-math";

// SEO
import sitemap from '@astrojs/sitemap';
import pageInsight from "astro-page-insight";
import mdx from "@astrojs/mdx";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://ran.so",
  base: "/",
  trailingSlash: "never",
  output: "hybrid",
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [sitemap(), tailwind(), svelte(), mdx(), pageInsight(), solidJs()],
  markdown: {
    remarkPlugins: [remarkEmoji, remarkMath, [remarkToc, {
      heading: 'toc'
    }], [remarkCollapse, {
      test: "Table of contents"
    }]],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    }
  },
  server: {
    port: 4321
  },
  vite: {
    build: {
      // For more meaningful error messages
      minify: false
    }
  },
  redirects: {
    "/ran": "https://ran.so"
  },
  experimental: {
    contentIntellisense: true,
    serverIslands: true
  }
});
