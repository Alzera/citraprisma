import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import { exec } from 'child_process'

export const customUnocssPlaugin = function() {
  return {
    name: 'custom-unocss-plugin', // required, will show up in warnings and errors
    buildStart(opts) {
			exec("unocss \"src/routes/[(]app[)]/**/*.svelte\" --out-file \"src/routes/(app)/uno.css\"")
			exec("unocss \"src/routes/[(]admin[)]/**/*.svelte\" --out-file \"src/routes/(admin)/4dm1n/uno.css\"")
			exec("unocss \"src/lib/components/**/*.svelte\" --out-file \"src/components.css\"")
    },
  }
}

export default { 
  presets: [
    presetUno(),
    presetIcons(),
  ],
  rules: [
    [ 'input-select', {
      "print-color-adjust": "exact",
      "background-image": `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
      "background-position": "right .5rem center",
      "background-repeat": "no-repeat",
      "background-size": "1.5em 1.5em",
      "padding-right": "2.5rem",
      "appearance": "none",
    }],
    [ 'w-vw-center', {
      "width": "100vw",
      "max-width": "initial",
      "position": "relative",
      "left": "50%",
      "transform": "translateX(-50%)",
    }],
    [ 'text-base', {
      "font-size": "1rem",
      "line-height": "1.75rem",
      "text-align": "justify",
    }],
  ],
  shortcuts: {
    'form-input': 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
    'form-select': 'input-select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
    'toast-container': 'fixed w-full md:w-auto top-0 md:top-auto md:bottom-10 md:left-1/2 md:-translate-x-1/2 z-40',
    'toast': 'bg-gray-800 px-6 py-2 text-white mb-2',
    'row': 'flex flex-wrap flex-row overflow-hidden -m-1',
    'col': 'flex-auto overflow-hidden',
    'cont': 'p-3 max-w-4xl md:mx-auto',
    'aside-menu': 'w-full py-3 px-6 block cursor-pointer',
    'video-item': 'w-90 mb-2 mr-2 rounded-lg border border-gray-200 shadow-sm h-full bg-slate-50 snap-center inline-block align-top',
    'video-item-img': 'w-full h-52 object-cover aspect-video rounded-t-lg',
    'video-item-txt': 'p-4 text-lg tracking-tight text-gray-900 whitespace-normal',
  },
  safelist: [
    'toast-container',
    'toast',
  ]
}