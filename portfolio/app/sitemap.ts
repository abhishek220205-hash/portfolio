import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

const siteUrl = 'https://abhishekkumar.dev'; // EDIT ME: swap for your real deployed domain

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, lastModified: new Date(), priority: 1 },
    ...projects.map((p) => ({
      url: `${siteUrl}/projects/${p.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ];
}
