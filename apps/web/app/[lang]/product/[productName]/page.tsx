import { AddToCartSection } from './components/add-to-card-section'
import { getDictionary } from '../../../../i18n/get-dirctionary'
import { gql } from '../../../../data-access/graphq-client'
import { Locale } from '../../../../i18n/i18n-config'

interface IProductPageProps {
  params: { productName: string; lang: Locale }
}

export default async function Page({ params }: IProductPageProps) {
  const { product: productTranslations } = await getDictionary(params.lang)
  const { productLengths } = await gql.GetProductLengths()
  const { product } = await gql.GetProduct({
    where: {
      name: params.productName
    }
  })

  const { price, discountPrice, availableColors, productSizes, description } = product

  return (
    <div>
      <h1 className="uppercase">{product.name}</h1>

      <div className="h-5" />

      <div className="flex flex-col xl:flex-col-reverse">
        <AddToCartSection
          price={price}
          discountPrice={discountPrice}
          productSizes={productSizes}
          availableColors={availableColors}
          productLengths={productLengths}
          locale={params.lang}
          productName={product.name}
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
    </div>
  )
}
