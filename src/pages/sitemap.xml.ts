import type { APIRoute } from 'astro';

const siteUrl = 'https://antska.dev';

const staticPages = [
  '',
  '/about',
  '/projects',
  '/blog',
  '/contact',
];

const blogPosts = [
  '/blog/render-props-pattern',
  '/blog/compound-components',
  '/blog/state-machines-react',
  '/blog/css-container-queries',
];

const allPages = [...staticPages, ...blogPosts];

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (path) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${path === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
