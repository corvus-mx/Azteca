import { defineConfig } from "astro/config";

export default defineConfig({
  output: 'static',
  base: '/',
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname
      }
    }
  },
    build: {
    format: 'file', // genera .html en lugar de carpetas index.html
  }
});
