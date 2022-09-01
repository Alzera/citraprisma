import { locale, loadTranslations } from '$lib/translations';
import type { LayoutLoad } from "./$types"

export const load: LayoutLoad = async ({ url }) => {
  const { pathname } = url
  const initLocale = locale.get() || 'id';
  await loadTranslations(initLocale, pathname)
  return { url };
}