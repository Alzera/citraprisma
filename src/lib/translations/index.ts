import i18n from 'sveltekit-i18n';
import loaders from './loaders';
import type { Config } from "sveltekit-i18n"

const lang = {
  en: "English",
  id: "Indonesian"
}
export const config: Config = {
  translations: {
    en: { lang },
    id: { lang },
  },
  loaders
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);