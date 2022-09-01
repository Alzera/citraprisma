import { toast } from '$lib/toast'
import { locale } from '$lib/translations'

export const share = (text: string) => {
  if(navigator.share)
    navigator.share({title: document.title, text, url: window.location.href})
  else if(navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href)
    toast(locale.get() == 'en' ? 'Link copied to clipboard' : 'Tautan disalin ke papan klip')
  }
}