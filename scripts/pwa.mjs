import { copyFileSync } from 'fs'
import { resolveConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import pwaConfig from '../pwa.config.js'
import glob from 'glob'

const webmanifestDestinations = [
  './.svelte-kit/output/client/',
  './build/',
]

const swDestinations = [
  './build/',
]

const buildPwa = async () => {
  const config = await resolveConfig({ plugins: [VitePWA({ ...pwaConfig })] }, 'build', 'production')
  // when `vite-plugin-pwa` is present, use it to regenerate SW after rendering
  const pwaPlugin = config.plugins.find(i => i.name === 'vite-plugin-pwa')?.api
  if (pwaPlugin?.generateSW) {
    console.log('Generating PWA...')
    await pwaPlugin.generateSW()
    webmanifestDestinations.forEach((d) => {
      copyFileSync('./.svelte-kit/output/client/manifest.webmanifest', `${d}manifest.webmanifest`)
    })
    // don't copy workbox, SvelteKit will copy it
    swDestinations.forEach((d) => {
      copyFileSync('./.svelte-kit/output/client/sw.js', `${d}sw.js`)
      glob(`.svelte-kit/output/client/workbox-+([a-z0-9]).js`, function (er, files) {
        if(files.length < 1) return
        const file = files[0]
        const targetD = file.replaceAll('.svelte-kit/output/client/', d)
        copyFileSync(file, targetD)
      })
    })
    console.log('Generation of PWA complete')
  }
}

buildPwa()
