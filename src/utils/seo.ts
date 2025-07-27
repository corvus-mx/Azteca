interface SeoOptions {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string; // e.g., 'article', 'website'
}

export function getSeo({
  title = 'CaballoAzteca - Periodismo Independiente',
  description = 'Luchando por la libre prensa y la soberania en México y Quintana Roo.',
  image = '/aztech.png',
  url = '',
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
