import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'

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
  ],
  shortcuts: {
    'form-input': 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
    'form-select': 'input-select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
    'toast-container': 'fixed w-full md:w-auto top-0 md:top-auto md:bottom-10 md:left-1/2 md:-translate-x-1/2 z-40',
    'toast': 'bg-gray-800 px-6 py-2 text-white mb-2',
  },
  safelist: [
    'toast-container',
    'toast',
  ]
}