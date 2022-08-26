import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from 'unocss/vite'
import { visualizer } from "rollup-plugin-visualizer";
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import { VitePWA } from 'vite-plugin-pwa'
import { pwaConfiguration } from './pwa-configuration.js'

/** @type {import('vite').UserConfig} */
const config = {
	// build: {
	// 	rollupOptions: {
	// 		output: {
	// 			manualChunks: undefined
	// 		}
	// 	}
	// },
	plugins: [
    // chunkSplitPlugin({
    //   customSplitting: {
    //     'Row-Column': [/src\/lib\/components\/(?:Row|Column).svelte/],
    //     'Article-Breadcrumb': [/src\/lib\/components\/(?:Article|Breadcrumb).svelte/],
    //   }
    // }),
		sveltekit(),
		Unocss(),
		// visualizer({
		// 	open: true,
		// 	emitFile: true,
		// 	brotliSize: true,
		// }),
		VitePWA(pwaConfiguration)
	]
};

export default config;
