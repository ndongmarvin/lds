import { defineNuxtConfig } from "nuxt/config";

// @ts-ignore - some custom keys are intentionally present and
// may not be included in the typed InputConfig used by the
// project's TypeScript settings. Silence the type-check here.
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  // Configuration du serveur
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3000',
      // canonical site URL (set SITE_URL in production env)
      siteUrl: process.env.SITE_URL || process.env.API_BASE || 'http://localhost:3000',
      port: 3001
    }
  },

  // Modules Nuxt
  modules: [

  ],

  // Configuration de TypeScript
  typescript: {
    strict: true,
    typeCheck: false,
    shim: false
  },

  // Configuration des styles
  // Use non-aliased paths so Vite/Vitest can resolve the files reliably
  css: [
    'assets/css/tailwind.css',
    'assets/css/main.css',
  ],

 

  // Configuration des routes
  routeRules: {
    '/unauthorized': { ssr: true },
  },

  // Configuration de l'application
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Excellence Fruits — Export de Fruits Premium d\'Afrique | Mangues, Ananas, Bananes Bio',
      meta: [
        { name: 'description', content: 'Excellence Fruits exporte des fruits tropicaux premium d\'Afrique : mangues, ananas golden, bananes bio, avocats Hass. Certification GlobalGAP et Bio. Livraison mondiale express en 48-72h.' },
        // Open Graph
        { property: 'og:site_name', content: 'Excellence Fruits' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Excellence Fruits — Export de Fruits Premium d\'Afrique' },
        { property: 'og:description', content: 'Export de fruits tropicaux premium : mangues, ananas, bananes bio, avocats. Certification GlobalGAP. Livraison mondiale express.' },
        { property: 'og:image', content: '/logo.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Excellence Fruits - Export de fruits premium' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@excellencefruits' },
        { name: 'twitter:title', content: 'Excellence Fruits — Export de Fruits Premium d\'Afrique' },
        { name: 'twitter:description', content: 'Export de fruits tropicaux premium : mangues, ananas, bananes bio. Certification GlobalGAP et Bio.' },
        { name: 'twitter:image', content: '/img/logo-excellence-fruits.svg' },
        // MS Tile
        { name: 'msapplication-TileColor', content: '#2e7d32' },
        { name: 'msapplication-TileImage', content: '/img/ms-icon-144x144.png' },
        { name: 'msapplication-config', content: '/img/browserconfig.xml' },
        // Theme
        { name: 'theme-color', content: '#2e7d32' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' },
        // Favicons
        { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/img/favicon-96x96.png' },
        // Apple Touch Icons
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/img/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/img/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/img/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/img/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/img/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/img/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/img/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/img/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-icon-180x180.png' },
        // Android Icons
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/img/android-icon-192x192.png' },
        // Manifest
        { rel: 'manifest', href: '/img/manifest.json' },
        // canonical (production should set SITE_URL env var)
        { rel: 'canonical', href: process.env.SITE_URL || process.env.API_BASE || 'http://localhost:3000' }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Excellence Fruits',
            description: 'Exportation de fruits tropicaux premium d\'Afrique vers le monde entier',
            logo: '/logo.png',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Dakar',
              addressCountry: 'SN'
            },
            areaServed: 'Worldwide',
            knowsAbout: ['Export de fruits', 'Fruits tropicaux', 'Mangues', 'Ananas', 'Bananes bio', 'Commerce international', 'Agriculture biologique'],
            foundingDate: '2020',
            slogan: 'La fraîcheur de l\'Afrique livrée dans le monde'
          })
        }
      ]
    }
  },


  // Configuration de Tailwind
  tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: false
  },

  compatibilityDate: '2026-02-05',

})