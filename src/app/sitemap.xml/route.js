export async function GET() {
  const baseUrl = 'https://www.gobayfi.com/';

  const staticPages = [
    '',
    'canlio',
    'edgex', 
    'agentai',
    'neios',
    'unilex',
    'priome',
    'privacypolicy',
    'termsandcondition',
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}${page}</loc>
    </url>`
    )
    .join('')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
