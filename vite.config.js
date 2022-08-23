import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from 'unocss/vite'
import { visualizer } from "rollup-plugin-visualizer";
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import { VitePWA } from 'vite-plugin-pwa'
import { pwaConfiguration } from './pwa-configuration.js'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
    chunkSplitPlugin({
      customSplitting: {
        'Row-Column': [/src\/lib\/components\/(?:Row|Column).svelte/],
        'Article-Breadcrumb': [/src\/lib\/components\/(?:Article|Breadcrumb).svelte/],
      }
    }),
		sveltekit(),
		Unocss(),
		visualizer({
			open: true,
			emitFile: true,
			brotliSize: true,
		}),
		VitePWA(pwaConfiguration)
		// VitePWA({
		// 	injectRegister: 'script',
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html,ico,png,svg}']
    //   },
		// 	manifest: {
		// 		name: 'Citra Prisma',
		// 		short_name: 'Citra Prisma',
		// 		theme_color: '#02824a',
		// 		icons: [
		// 			{
		// 				src: 'pwa-192x192.png',
		// 				sizes: '192x192',
		// 				type: 'image/png'
		// 			},
		// 			{
		// 				src: 'pwa-512x512.png',
		// 				sizes: '512x512',
		// 				type: 'image/png'
		// 			},
		// 			{
		// 				src: 'pwa-512x512.png',
		// 				sizes: '512x512',
		// 				type: 'image/png',
		// 				purpose: 'any maskable'
		// 			}
		// 		]
		// 	},
		// }),
	]
};

export default config;
