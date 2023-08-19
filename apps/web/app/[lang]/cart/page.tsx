import { Locale } from '../../../i18n/i18n-config'
import Cart from './components/cart'
import { getDictionary } from '../../../i18n/get-dirctionary'

export const dynamic = 'force-static'

export default async function CartPage({ params }: { params: { lang: Locale } }) {
  const t = await getDictionary(params.lang)

  return <Cart cartTranslations={t.cart} />
}
