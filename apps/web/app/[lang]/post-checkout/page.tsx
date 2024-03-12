import { Locale } from '../../../i18n/i18n-config'
import { getDictionary } from '../../../i18n/get-dirctionary'
import PostCheckoutPageContent from './page-content'
import { Suspense } from 'react'

export default async function PostCheckoutPage({ params }: { params: { lang: Locale } }) {
  const t = await getDictionary(params.lang)

  return (
    <Suspense>
      <PostCheckoutPageContent paymentTranslations={t.payment} />
    </Suspense>
  )
}
