import Image from 'next/image'
import { ReactNode } from 'react'
import { hexToDataUrl } from '@okkino/web/utils-shared'
import { i18n, Locale } from '../../../../i18n/i18n-config'
import { getProduct, getProducts } from '@okkino/api/data-access-db'

const IMAGES_ON_SCREEN = 2

interface IRootLayoutProps {
  children: ReactNode
  params: { lang: Locale; productName: string }
}

export default async function RootLayout(props: IRootLayoutProps) {
  const { params, children } = props
  const productName = decodeURI(params.productName)
  const product = await getProduct(productName)
  const { images } = product
  const sortedImages = images.sort((a, b) => a.order - b.order)

  return (
    <div className="3xl 3xl:grid-cols-2 xl:grid xl:h-[calc(100vh-9rem)] xl:grid-cols-[1fr_2fr] xl:gap-40">
      <div
        className={
          // full screen - 9rem (header height)
          'xl:h-[calc(100vh-9rem)] ' +
          'xl:max-w-[540px] ' +
          'xl:overflow-y-scroll ' +
          'xl:scrollbar-hide ' +
          'xl:flex-col ' +
          'xl:mr-0 ' +
          '-mr-6 flex snap-both snap-mandatory gap-4 overflow-x-scroll scroll-smooth md:-mr-14 md:gap-6 '
        }
      >
        {sortedImages.map((image, index) => {
          return (
            <section
              key={image.id}
              className={'xl:min-w-full ' + 'relative aspect-[120/179] min-w-[80%] snap-center '}
            >
              <Image
                src={image.url}
                alt={image.title}
                className=""
                placeholder="blur"
                blurDataURL={hexToDataUrl(image.bgColor)}
                title={image.title}
                priority={index < IMAGES_ON_SCREEN}
                sizes="(min-width: 1600px) 540px, (min-width: 1280px) calc(28.33vw - 27px), 77.29vw"
                fill
              />
            </section>
          )
        })}
      </div>

      <div className="flex flex-col justify-center">
        <div className="h-6 xl:h-0" />

        {children}
      </div>
      <footer className="h-20  md:h-28 xl:hidden" />
    </div>
  )
}

export async function generateStaticParams() {
  const products = await getProducts()
  const productNames = products.map((product) => product.name)

  const params = []
  for (const product of productNames) {
    for (const locale of i18n.locales) {
      params.push({ lang: locale, productName: product })
    }
  }
  return params
}
