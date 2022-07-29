import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from 'unocss/vite'
import { visualizer } from "rollup-plugin-visualizer";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		Unocss(),
		visualizer({
			open: true,
			emitFile: true,
			brotliSize: true,
		}),
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
