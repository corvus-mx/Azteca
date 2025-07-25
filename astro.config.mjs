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
  }
});
