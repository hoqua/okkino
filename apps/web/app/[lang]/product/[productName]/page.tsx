import { AddToCartSection } from './components/add-to-card-section'
import { getDictionary } from '../../../../i18n/get-dirctionary'
import { Locale } from '../../../../i18n/i18n-config'
import { getProduct, getProductLength } from '@okkino/api/data-access-db'
import { Metadata } from 'next'
import { Product, WithContext } from 'schema-dts'

interface IProductPageProps {
  params: { productName: string; lang: Locale }
}

export async function generateMetadata({ params }: IProductPageProps): Promise<Metadata> {
  const productName = decodeURI(params.productName)

  const product = await getProduct(productName)

  return {
    title: product.name,
    description: product.seoDescription,
    referrer: 'origin-when-cross-origin',
    openGraph: {
      images: product.images.map((image) => image.url)
    }
  }
}

export default async function Page({ params }: IProductPageProps) {
  const { product: productTranslations } = await getDictionary(params.lang)
  const productLengths = await getProductLength()
  const productName = decodeURI(params.productName)

  const product = await getProduct(productName)

  const {
    price,
    discountPrice,
    availableColors,
    productSizes,
    description,
    id,
    images,
    name,
    seoDescription
  } = product
  const sortedImages = images.sort((a, b) => a.order - b.order)

  const jsonLd: WithContext<Product> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    image: images?.[0].url,
    description: seoDescription,
    brand: 'OK KINO',
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    mpn: id,
    manufacturer: 'Darya Golneva & Danis Caunov'
  }

  return (
    <section>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="uppercase">{name}</h1>

      <div className="h-5" />

      <div className="flex flex-col xl:flex-col-reverse">
        <AddToCartSection
          id={id}
          price={price}
          discountPrice={discountPrice}
          productSizes={productSizes}
          availableColors={availableColors}
          productLengths={productLengths}
          locale={params.lang}
          productName={productName}
          imageUrl={sortedImages[0].url}
          translations={{
            sizeGuide: productTranslations.size_guide,
            size: productTranslations.size,
            length: productTranslations.length,
            color: productTranslations.color,
            addToCart: productTranslations.add_to_cart,
            buyNow: productTranslations.buy_now
          }}
        />

        <div className="h-16" />

        <section>
          <div
            className="[&>p:empty]:h-6 [&>p]:text-sm [&>p]:text-gray-600"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <div className="h-5" />

          <p className="text-xs">{productTranslations.note}</p>
        </section>
      </div>
    </section>
  )
}
