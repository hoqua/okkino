import { Locale } from '../../../../i18n/i18n-config'

export interface IProductPageProps {
  params: { lang: Locale; category?: string }
}
