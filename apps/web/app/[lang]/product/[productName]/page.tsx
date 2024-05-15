import { AddToCartSection } from './components/add-to-card-section'
import { getDictionary } from '../../../../i18n/get-dirctionary'
import { Locale } from '../../../../i18n/i18n-config'
import { getProduct, getProductLength } from '@okkino/api/data-access-db'
import { Metadata } from 'next'
import { Product, WithContext } from 'schema-dts'
import { TEXT_EDITOR_CLASSES } from '@okkino/web/utils-shared'

interface IProductPageProps {
  params: { productName: string; lang: Locale }
}

export async function generateMetadata({ params }: IProductPageProps): Promise<Metadata> {
  const productName = decodeURI(params.productName)

  const product = await getProduct(productName)

  return {
    title: product.textName,
    description: product.seoDescription,
    referrer: 'origin-when-cross-origin',
    keywords: product.seoKeywords,
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
    textName,
    seoDescription,
    seoKeywords,
    hasLength
  } = product
  const sortedImages = images.sort((a, b) => a.order - b.order)

  const jsonLd: WithContext<Product> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: textName,
    image: images?.[0].url,
    description: seoDescription,
    keywords: seoKeywords,
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
      <h1 className="uppercase">{textName}</h1>

      <div className="h-5" />

      <div className="flex flex-col xl:flex-col-reverse">
        <AddToCartSection
          id={id}
          price={price}
          discountPrice={discountPrice}
          productSizes={productSizes}
          availableColors={availableColors}
          productLengths={productLengths}
          hasLength={hasLength}
          locale={params.lang}
          productName={textName}
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
          <div className={TEXT_EDITOR_CLASSES} dangerouslySetInnerHTML={{ __html: description }} />
        </section>
      </div>
    </section>
  )
}
