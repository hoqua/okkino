import Image from 'next/image'
import Link from 'next/link'
import { rgbToDataUrl } from '@okkino/web/utils-shared'
import { webEnv } from '../../../environments/environment'
import { gql } from '../../../data-access/graphq-client'
import { ProductColors } from './components/product-colors'

const IMAGES_ON_SCREEN = 6

const { storage } = webEnv

interface IProductPageProps {
  searchParams: { category: string }
}

export default async function Page({ searchParams }: IProductPageProps) {
  const { products } = await gql.GetProducts({ productCategory: searchParams.category })

  return (
    <div className="object grid grid-cols-2 gap-y-5 gap-x-2 md:gap-x-4 md:gap-y-7 lg:grid-cols-3 ">
      {products.map((product, index) => {
        const { availableColors, images, discountPrice, price } = product
        const [mainImage, hoverImage] = images
        const { r, g, b } = mainImage.rgbBackground

        return (
          <section key={product.name}>
            <Link href={product.name} className="relative block aspect-[120/179]">
              <Image
                src={`${storage.url}/${mainImage.imagePath}`}
                alt={mainImage.title}
                className="hover:transition-{opacity} duration-300 hover:opacity-100 lg:hover:opacity-0"
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

              {discountPrice ? (
                <div className="flex gap-2">
                  <p className="text-sm font-bold text-gray-300 line-through">
                    {priseFormatter(discountPrice)}
                  </p>
                  <p className="text-sm font-bold text-black">{priseFormatter(price)} </p>
                </div>
              ) : (
                <p className="text-sm font-bold text-black">{priseFormatter(price)} </p>
              )}
            </div>
          </section>
        )
      })}
    </div>
  )
}

const priseFormatter = (price: number) => `$${price}`
