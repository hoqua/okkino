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
