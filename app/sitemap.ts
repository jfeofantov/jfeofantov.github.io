import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = false;

const baseUrl = 'https://primecoatlondon.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();
  return [
    {
      url: baseUrl,
      lastModified
    },
    {
      url: `${baseUrl}/about`,
      lastModified
    }
  ];
}
