import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    scripts: [
        { src: './js/lightbox-plus-jquery.min.js' },
      ],
      stylesheets: [
        { href: './css/lightbox.css' },
      ],
});
