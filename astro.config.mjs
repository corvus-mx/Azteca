import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  base: '/', // ⚠️ En Netlify debe ser '/' o se rompe el CSS
});


