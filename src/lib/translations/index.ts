import i18n from 'sveltekit-i18n';
import lang from './lang.json';
import loaders from './loaders';
import type { Config } from "sveltekit-i18n"

export const config: Config = {
  translations: {
    en: { lang },
    id: { lang },
  },
  loaders
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);