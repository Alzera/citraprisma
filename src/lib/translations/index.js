import i18n from 'sveltekit-i18n';
import lang from './lang.json';
import loaders from './loaders';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
  translations: {
    en: { lang },
    id: { lang },
  },
  loaders
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);