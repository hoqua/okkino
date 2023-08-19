import Image from 'next/image'
import Link from 'next/link'
import { hexToDataUrl } from '@okkino/web/utils-shared'
import { Price } from '../../../_shared/price'
import { getI18nNavigationPath } from '../../components/common/utils'
import { RouteName } from '../../components/common/constants'
import { i18n, Locale } from '../../../../i18n/i18n-config'
import { ALL_CATEGORY } from './constants'
import { getProductCategories, getProducts } from '@okkino/api/data-access-db'
import { ProductColors } from './product-colors'

const IMAGES_ON_SCREEN = 6

interface IProductPageProps {
  params: { lang: Locale; category?: string }
}

export default async function ShopPageInner(props: IProductPageProps) {
  const { category, lang } = props.params

  const products = await getProducts(category === ALL_CATEGORY ? undefined : category)

  return (
    <div className="object grid grid-cols-2 gap-x-2 gap-y-5 md:gap-x-4 md:gap-y-7 lg:grid-cols-3 ">
      {products.map((product, index) => {
        const { availableColors, images, discountPrice, price } = product
        const [mainImage, hoverImage] = images.sort((a, b) => a.order - b.order)

        return (
          <section key={product.name}>
            <Link
              href={getI18nNavigationPath(lang, RouteName.product + '/' + product.name)}
              className="relative block aspect-[120/179]"
            >
              <Image
                src={mainImage.url}
                alt={mainImage.title}
                className="hover:transition-{opacity} duration-300 ease-in-out hover:opacity-100 lg:hover:opacity-0"
                placeholder="blur"
                sizes="(min-width: 1620px) 464px, (min-width: 1040px) 29.46vw, (min-width: 780px) calc(50vw - 64px), calc(50vw - 28px)"
                blurDataURL={hexToDataUrl(mainImage.bgColor)}
                title={mainImage.title}
                priority={index < IMAGES_ON_SCREEN}
                fill
              />

              {hoverImage && (
                <Image
                  src={hoverImage.url}
                  alt={hoverImage.title}
                  sizes="(min-width: 1620px) 464px, (min-width: 1040px) 29.46vw, (min-width: 780px) calc(50vw - 64px), calc(50vw - 28px)"
                  className={'index absolute left-0 top-0 z-[-1] hidden lg:inline '}
                  title={hoverImage.title}
                  fill
                />
              )}

              <ProductColors colors={availableColors} />
            </Link>

            <div className="h-5 w-full" />

            <div className="flex flex-col items-end gap-1">
              <h1 className="text-xs uppercase text-black">{product.name}</h1>

              <Price price={price} discountPrice={discountPrice} />
            </div>
          </section>
        )
      })}

      <footer className="h-20  md:h-28 lg:h-36" />
    </div>
  )
}

export async function generateStaticParams() {
  const productCategories = await getProductCategories()
  const categories = [ALL_CATEGORY, ...productCategories.map((category) => category.name)]

  const params = []
  for (const category of categories) {
    for (const locale of i18n.locales) {
      params.push({ lang: locale, category })
    }
  }
  return params
}
