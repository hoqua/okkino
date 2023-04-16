import Image from 'next/image'
import Link from 'next/link'
import { rgbToDataUrl } from '@okkino/web/utils-shared'
import { webEnv } from '../../../../environments/environment'
import { gql } from '../../../../data-access/graphq-client'
import { ProductColors } from './components/product-colors'
import { Price } from '../../../shared-components/price'
import { getI18nNavigationPath } from '../../components/common/utils'
import { RouteName } from '../../components/common/constants'
import { i18n, Locale } from '../../../../i18n/i18n-config'
import { ALL_CATEGORY } from './constants'

const IMAGES_ON_SCREEN = 6

const { storage } = webEnv

interface IProductPageProps {
  params: { lang: Locale; category?: string }
}

export default async function Page(props: IProductPageProps) {
  const { category, lang } = props.params
  const { products } = await gql.GetProducts({
    productCategory: category === ALL_CATEGORY ? undefined : category
  })

  return (
    <div className="object grid grid-cols-2 gap-y-5 gap-x-2 md:gap-x-4 md:gap-y-7 lg:grid-cols-3 ">
      {products.map((product, index) => {
        const { availableColors, images, discountPrice, price } = product
        const [mainImage, hoverImage] = images
        const { r, g, b } = mainImage.rgbBackground

        return (
          <section key={product.name}>
            <Link
              href={getI18nNavigationPath(lang, RouteName.product + '/' + product.name)}
              className="relative block aspect-[120/179]"
            >
              <Image
                src={`${storage.url}/${mainImage.imagePath}`}
                alt={mainImage.title}
                className="hover:transition-{opacity} duration-300 ease-in-out hover:opacity-100 lg:hover:opacity-0"
                placeholder="blur"
                blurDataURL={rgbToDataUrl(r, g, b)}
                title={mainImage.title}
                priority={index < IMAGES_ON_SCREEN}
                fill
              />

              <Image
                src={`${storage.url}/${hoverImage.imagePath}`}
                alt={mainImage.title}
                className={'index absolute left-0 top-0 z-[-1] hidden lg:inline '}
                title={mainImage.title}
                fill
              />

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
  const { productCategories } = await gql.GetProductCategories()
  const categories = [ALL_CATEGORY, ...productCategories.map((category) => category.name)]

  const params = []
  for (const category of categories) {
    for (const locale of i18n.locales) {
      params.push({ lang: locale, category })
    }
  }
  return params
}
