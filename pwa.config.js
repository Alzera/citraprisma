export default {
  srcDir: './build',
  outDir: './.svelte-kit/output/client',
  includeManifestIcons: false,
  base: '/',
  scope: '/',
  manifest: {
    short_name: 'CPM',
    name: 'Citra Prisma Mandiri',
    scope: '/',
    start_url: '/',
    display: 'standalone',
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
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ]
  },
  workbox: {
    // mode: 'development',
    navigateFallback: '/',
    // vite and SvelteKit are not aligned: pwa plugin will use /\.[a-f0-9]{8}\./ by default: #164 optimize workbox work
    dontCacheBustURLsMatching: /-[a-f0-9]{8}\./,
    globDirectory: './build/',
    globPatterns: ['robots.txt', '**/*.{js,css,html,ico,png,svg,webmanifest}'],
    globIgnores: ['**/sw*', '**/workbox-*'],
    manifestTransforms: [async (entries) => {
      // manifest.webmanifest is added always by pwa plugin, so we remove it.
      // EXCLUDE from the sw precache sw and workbox-*
      const manifest = entries.filter(({ url }) =>
        url !== 'manifest.webmanifest' && url !== 'sw.js' && !url.startsWith('workbox-')
      ).map((e) => {
        let url = e.url
        if (url && url.endsWith('.html')) {
          if (url.startsWith('/'))
            url = url.slice(1)

          if (url === 'index.html')
            e.url = '/'
          else if (url.endsWith('index.html'))
            e.url = `/${url.substring(0, url.lastIndexOf('/'))}`
          else if (url.endsWith('.html'))
            e.url = `/${url.substring(0, url.length - '.html'.length)}`

        }

        return e
      })

      return { manifest }
    }]
  }
}