interface SeoOptions {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string; // e.g., 'article', 'website'
}

export function getSeo({
  title = 'CaballoAzteca - Red de Investigación Ciudadana',
  description = 'Plataforma de investigación ciudadana que aplica técnicas OSINT para exponer casos que las autoridades ignoran. Cualquier persona puede ser Caballo Azteca.',
  image = '/aztech.png',
  url = 'https://caballoazteca.netlify.app',
  type = 'website'
}: SeoOptions = {}) {
  return {
    title,
    description,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ]
  };
}
