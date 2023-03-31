import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from 'unocss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import pwaConfig from './pwa.config'

/** @type {import('vite').UserConfig} */
const config = {
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					'comps': [
						// 'src/lib/components/Article.svelte',
						// 'src/lib/components/BrandsSlider.svelte',
						// 'src/lib/components/Breadcrumb.svelte',
						'src/lib/components/CloudinaryImage.svelte',
						'src/lib/components/Column.svelte',
						'src/lib/components/Container.svelte',
						// 'src/lib/components/Footer.svelte',
						'src/lib/components/LanguageSelector.svelte',
						'src/lib/components/Lazy.svelte',
						'src/lib/components/LoadingIndicator.svelte',
						'src/lib/components/Meta.svelte',
						'src/lib/components/PageTransition.svelte',
						'src/lib/components/Row.svelte',
					],
				}
			}
		}
	},
	plugins: [
		sveltekit(),
		Unocss(),
		// VitePWA(pwaConfig),
		SvelteKitPWA(pwaConfig),
	]
};

export default config;
