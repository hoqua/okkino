import 'server-only'
import type { Locale } from './i18n-config'
import en from './dictionaries/en.json'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the defalt import for cleaner types
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ru: () => import('./dictionaries/ru.json').then((module) => module.default),
  ua: () => import('./dictionaries/ua.json').then((module) => module.default),
  ro: () => import('./dictionaries/ro.json').then((module) => module.default)
}

export type Translation = typeof en

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
