import { AddToCartSection } from './components/add-to-card-section'
import { getProduct, getProductLength } from '@okkino/api/data-access-db'
import { Metadata } from 'next'
import { Product, WithContext } from 'schema-dts'
import { PRODUCT_SIZES, TEXT_EDITOR_CLASSES } from '@okkino/web/utils-shared'

interface IProductPageProps {
  params: { productUrlName: string }
}

export async function generateMetadata({ params }: IProductPageProps): Promise<Metadata> {
  const product = await getProduct(decodeURI(params.productUrlName))

  return {
    metadataBase: new URL('https://www.studiookkino.com/'),
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
  const productLengths = await getProductLength()

  const product = await getProduct(decodeURI(params.productUrlName))

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
    hasLength,
    urlName
  } = product
  const sortedImages = images.sort((a, b) => a.order - b.order)
  const sortedSizes = productSizes.sort((a, b) => {
    const indexOfA = PRODUCT_SIZES.findIndex((size) => size.name === a.name)
    const indexOfB = PRODUCT_SIZES.findIndex((size) => size.name === b.name)
    return indexOfA - indexOfB
  })
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
          productSizes={sortedSizes}
          availableColors={availableColors}
          productLengths={productLengths}
          hasLength={hasLength}
          productName={textName}
          imageUrl={sortedImages[0].url}
          urlName={urlName}
        />

        <div className="h-16" />

        <section>
          <div className={TEXT_EDITOR_CLASSES} dangerouslySetInnerHTML={{ __html: description }} />
        </section>
      </div>
    </section>
  )
}
