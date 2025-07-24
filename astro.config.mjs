import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static' // solo contenido prerenderizado (compatible con Netlify estático y GitHub Pages)
});


