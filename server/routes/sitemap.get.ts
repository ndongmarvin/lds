import { defineEventHandler, setHeader } from 'h3'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl || config.public.apiBase || 'http://localhost:3000'

  const pages = ['/', '/programmes', '/galerie', '/contact']
  const lastmod = new Date().toISOString()

  const urls = pages.map((p) => `  <url>\n    <loc>${siteUrl}${p}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`

  setHeader(event, 'content-type', 'application/xml')
  return xml
})
