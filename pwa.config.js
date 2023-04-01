export default {
  srcDir: './build',
  outDir: './.svelte-kit/output/client',
  includeManifestIcons: false,
  base: '/',
  scope: '/',
  manifest: {
    short_name: 'CPM',
    name: 'Citra Prisma Mandiri',
    description: 'Distributor of waterproofing, concrete repair, gypsum and sealant materials such as Bostik, Knauf, Yoshino, Boral, Fibrin, Shinetsu & Star Series',
    scope: '/',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    theme_color: '#02824a',
    background_color: '#ffffff',
    icons: [
      {
        src: '/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
    ]
  },
  // injectManifest: {
  //   globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}']
  // },
  workbox: {
    globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}'],
    navigateFallbackDenylist: [/^\/shop/]
  },
}