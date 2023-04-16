import { Locale } from '../../../../i18n/i18n-config'

export const getTranslationSafe = (translations: Record<string, string>, itemKeyName: string) => {
  if (itemKeyName in translations) {
    return translations[itemKeyName]
  }

  return itemKeyName
}

export const redirectedPathName = (pathName: string, newLocale: string) => {
  if (!pathName) return '/'
  const segments = pathName.split('/')
  segments[1] = newLocale
  return segments.join('/')
}

export const getI18nNavigationPath = (locale: Locale, path: string) => {
  return `/${locale}/${path}`
}
