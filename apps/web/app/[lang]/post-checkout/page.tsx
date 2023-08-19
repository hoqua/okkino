import { Locale } from '../../../i18n/i18n-config'
import { getDictionary } from '../../../i18n/get-dirctionary'
import PostCheckoutPageContent from './page-content'

export default async function PostCheckoutPage({ params }: { params: { lang: Locale } }) {
  const t = await getDictionary(params.lang)

  return <PostCheckoutPageContent paymentTranslations={t.payment} />
}
