import i18n from 'sveltekit-i18n';
import lang from './lang.json';

// const langs = Object.keys(lang);
// /**
//  * @type {{ locale: string; key: string; routes: string[]; loader: () => Promise<any>; }[]}
//  */
// let loaders = [];
// Object.keys(import.meta.glob(['../../routes/**/*.svelte', '!../../routes/**/_*.svelte']))
//   .map(i => i.replaceAll('../../routes/', '').replaceAll('.svelte', ''))
//   .forEach(i => { 
//     let
//       key = i.replaceAll('/', '.'),
//       routes = [ '/' + i.replaceAll('index', '') ]
//     if(routes[0] != '/' && routes[0].endsWith('/'))
//       routes[0] = routes[0].substring(0, routes[0].length - 1)
//     for(const l of langs){
//       loaders.push({
//         locale: l,
//         key,
//         routes,
//         loader: async () => {
//           const json = `./${l}/${i}.json`;
//           return (await import(/* @vite-ignore */ json)).default
//         }
//       })
//     }
//   })

/** @type {import('sveltekit-i18n').Config} */
export const config = {
  translations: {
    en: { lang },
    id: { lang },
  },
  loaders: [
    { locale: 'id', key: '__layout', loader: async () => (await import('./id/__layout.json')).default, },
    { locale: 'en', key: '__layout', loader: async () => (await import('./en/__layout.json')).default, },
    { locale: 'id', key: 'index', routes: ['/'], loader: async () => (await import('./id/index.json')).default, },
    { locale: 'en', key: 'index', routes: ['/'], loader: async () => (await import('./en/index.json')).default, },
    { locale: 'id', key: 'about-us', routes: ['/about-us'], loader: async () => (await import('./id/about-us.json')).default, },
    { locale: 'en', key: 'about-us', routes: ['/about-us'], loader: async () => (await import('./en/about-us.json')).default, },
    { locale: 'id', key: 'contact-us', routes: ['/contact-us'], loader: async () => (await import('./id/contact-us.json')).default, },
    { locale: 'en', key: 'contact-us', routes: ['/contact-us'], loader: async () => (await import('./en/contact-us.json')).default, },

    /** services */
    { locale: 'id', key: 'services.index', routes: ['/services'], loader: async () => (await import('./id/services/index.json')).default, },
    { locale: 'en', key: 'services.index', routes: ['/services'], loader: async () => (await import('./en/services/index.json')).default, },
    { locale: 'id', key: 'services.decorative', routes: ['/services/decorative'], loader: async () => (await import('./id/services/decorative.json')).default, },
    { locale: 'en', key: 'services.decorative', routes: ['/services/decorative'], loader: async () => (await import('./en/services/decorative.json')).default, },
    { locale: 'id', key: 'services.epoxy', routes: ['/services/epoxy'], loader: async () => (await import('./id/services/epoxy.json')).default, },
    { locale: 'en', key: 'services.epoxy', routes: ['/services/epoxy'], loader: async () => (await import('./en/services/epoxy.json')).default, },
    { locale: 'id', key: 'services.gypsum', routes: ['/services/gypsum'], loader: async () => (await import('./id/services/gypsum.json')).default, },
    { locale: 'en', key: 'services.gypsum', routes: ['/services/gypsum'], loader: async () => (await import('./en/services/gypsum.json')).default, },
    { locale: 'id', key: 'services.metal', routes: ['/services/metal'], loader: async () => (await import('./id/services/metal.json')).default, },
    { locale: 'en', key: 'services.metal', routes: ['/services/metal'], loader: async () => (await import('./en/services/metal.json')).default, },
    { locale: 'id', key: 'services.sealants', routes: ['/services/sealants'], loader: async () => (await import('./id/services/sealants.json')).default, },
    { locale: 'en', key: 'services.sealants', routes: ['/services/sealants'], loader: async () => (await import('./en/services/sealants.json')).default, },
    { locale: 'id', key: 'services.waterproofing', routes: ['/services/waterproofing'], loader: async () => (await import('./id/services/waterproofing.json')).default, },
    { locale: 'en', key: 'services.waterproofing', routes: ['/services/waterproofing'], loader: async () => (await import('./en/services/waterproofing.json')).default, },

    /** projects */
    { locale: 'id', key: 'projects.index', routes: ['/projects'], loader: async () => (await import('./id/projects/index.json')).default, },
    { locale: 'en', key: 'projects.index', routes: ['/projects'], loader: async () => (await import('./en/projects/index.json')).default, },
    { locale: 'id', key: 'projects.ais', routes: ['/projects/ais'], loader: async () => (await import('./id/projects/ais.json')).default, },
    { locale: 'en', key: 'projects.ais', routes: ['/projects/ais'], loader: async () => (await import('./en/projects/ais.json')).default, },
    { locale: 'id', key: 'projects.aston', routes: ['/projects/aston'], loader: async () => (await import('./id/projects/aston.json')).default, },
    { locale: 'en', key: 'projects.aston', routes: ['/projects/aston'], loader: async () => (await import('./en/projects/aston.json')).default, },
    { locale: 'id', key: 'projects.juanda', routes: ['/projects/juanda'], loader: async () => (await import('./id/projects/juanda.json')).default, },
    { locale: 'en', key: 'projects.juanda', routes: ['/projects/juanda'], loader: async () => (await import('./en/projects/juanda.json')).default, },
    { locale: 'id', key: 'projects.ngurah', routes: ['/projects/ngurah'], loader: async () => (await import('./id/projects/ngurah.json')).default, },
    { locale: 'en', key: 'projects.ngurah', routes: ['/projects/ngurah'], loader: async () => (await import('./en/projects/ngurah.json')).default, },
    { locale: 'id', key: 'projects.satrio', routes: ['/projects/satrio'], loader: async () => (await import('./id/projects/satrio.json')).default, },
    { locale: 'en', key: 'projects.satrio', routes: ['/projects/satrio'], loader: async () => (await import('./en/projects/satrio.json')).default, },
    { locale: 'id', key: 'projects.sheikhzayed', routes: ['/projects/sheikhzayed'], loader: async () => (await import('./id/projects/sheikhzayed.json')).default, },
    { locale: 'en', key: 'projects.sheikhzayed', routes: ['/projects/sheikhzayed'], loader: async () => (await import('./en/projects/sheikhzayed.json')).default, },
    { locale: 'id', key: 'projects.vihara', routes: ['/projects/vihara'], loader: async () => (await import('./id/projects/vihara.json')).default, },
    { locale: 'en', key: 'projects.vihara', routes: ['/projects/vihara'], loader: async () => (await import('./en/projects/vihara.json')).default, },
    { locale: 'id', key: 'projects.waterplace', routes: ['/projects/waterplace'], loader: async () => (await import('./id/projects/waterplace.json')).default, },
    { locale: 'en', key: 'projects.waterplace', routes: ['/projects/waterplace'], loader: async () => (await import('./en/projects/waterplace.json')).default, },

    /** brands */
    { locale: 'id', key: 'brands.index', routes: ['/brands'], loader: async () => (await import('./id/brands/index.json')).default, },
    { locale: 'en', key: 'brands.index', routes: ['/brands'], loader: async () => (await import('./en/brands/index.json')).default, },
    { locale: 'id', key: 'brands.bostik', routes: ['/brands/bostik'], loader: async () => (await import('./id/brands/bostik.json')).default, },
    { locale: 'en', key: 'brands.bostik', routes: ['/brands/bostik'], loader: async () => (await import('./en/brands/bostik.json')).default, },
    { locale: 'id', key: 'brands.conwood', routes: ['/brands/conwood'], loader: async () => (await import('./id/brands/conwood.json')).default, },
    { locale: 'en', key: 'brands.conwood', routes: ['/brands/conwood'], loader: async () => (await import('./en/brands/conwood.json')).default, },
    { locale: 'id', key: 'brands.knauf', routes: ['/brands/knauf'], loader: async () => (await import('./id/brands/knauf.json')).default, },
    { locale: 'en', key: 'brands.knauf', routes: ['/brands/knauf'], loader: async () => (await import('./en/brands/knauf.json')).default, },
    { locale: 'id', key: 'brands.rockwool', routes: ['/brands/rockwool'], loader: async () => (await import('./id/brands/rockwool.json')).default, },
    { locale: 'en', key: 'brands.rockwool', routes: ['/brands/rockwool'], loader: async () => (await import('./en/brands/rockwool.json')).default, },
    { locale: 'id', key: 'brands.wacker', routes: ['/brands/wacker'], loader: async () => (await import('./id/brands/wacker.json')).default, },
    { locale: 'en', key: 'brands.wacker', routes: ['/brands/wacker'], loader: async () => (await import('./en/brands/wacker.json')).default, },
    { locale: 'id', key: 'brands.yoshino', routes: ['/brands/yoshino'], loader: async () => (await import('./id/brands/yoshino.json')).default, },
    { locale: 'en', key: 'brands.yoshino', routes: ['/brands/yoshino'], loader: async () => (await import('./en/brands/yoshino.json')).default, },
  ]
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);