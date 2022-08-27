import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from 'unocss/vite'
import { visualizer } from "rollup-plugin-visualizer";
import { VitePWA } from 'vite-plugin-pwa'
import pwaConfig from './pwa.config.js'

/** @type {import('vite').UserConfig} */
const config = {
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					'Row-Column': [
						'src/lib/components/Row.svelte',
						'src/lib/components/Column.svelte',
					],
					'Article-Breadcrumb': [
						'src/lib/components/Article.svelte',
						'src/lib/components/Breadcrumb.svelte',
					],
				}
			}
		}
	},
	plugins: [
		sveltekit(),
		Unocss(),
		// visualizer({
		// 	open: true,
		// 	emitFile: true,
		// 	brotliSize: true,
		// }),
		VitePWA(pwaConfig)
	]
};

export default config;
