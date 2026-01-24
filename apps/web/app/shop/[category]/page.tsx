import ShopPageInner from '../_components/shop-page-inner'

export { generateStaticParams } from '../_components/shop-page-inner'
export const dynamicParams = false
export const dynamic = 'force-static'

export default function ShopPageCategory(props) {
  return ShopPageInner(props)
}
