import { posts } from '@/lib/posts'

const BASE = 'https://ideal-ai.co.kr'

export default function sitemap() {
  const staticRoutes = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/cases`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ]

  const blogRoutes = posts.map(post => ({
    url: `${BASE}/blog/${post.id}`,
    lastModified: new Date(post.date.replace(/\./g, '-')),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
