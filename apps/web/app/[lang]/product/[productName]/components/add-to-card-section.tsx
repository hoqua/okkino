'use client'

import { FC, useState } from 'react'
import { Price } from '../../../../_shared/price'
import { ProductPropsSelector } from './product-props-selector'
import { Button } from '../../../../_shared/button'
import Link from 'next/link'
import { getI18nNavigationPath } from '../../../components/common/utils'
import { Locale } from '../../../../../i18n/i18n-config'
import { RouteName } from '../../../components/common/constants'
import { useCart } from '../../../../_shared/hooks'
import { compareCartProducts } from '../../../../_shared/utils'
import { useRouter } from 'next/navigation'
import { CartProduct } from '@okkino/web/utils-shared'
import './module.css'
import { Simulate } from 'react-dom/test-utils'
import error = Simulate.error

export const AddToCartSection: FC<IProps> = (props) => {
  const {
    id,
    price,
    discountPrice,
    productSizes,
    productLengths,
    availableColors,
    locale,
    productName,
    translations,
    imageUrl
  } = props
  const [selectedSize, setSelectedSize] = useState({ value: '', hasError: false })
  const [selectedLength, setSelectedLength] = useState({ value: 'regular', hasError: false })
  const [selectedColor, setSelectedColor] = useState({ value: '', hasError: false })
  const [, setCart] = useCart()
  const router = useRouter()

  const isError = selectedSize.hasError || selectedColor.hasError

  const handleAddToCard = (isBuyNow?: boolean) => {
    if (!selectedSize.value || !selectedColor.value) {
      setSelectedSize({ value: selectedSize.value, hasError: !selectedSize.value })
      setSelectedColor({ value: selectedColor.value, hasError: !selectedColor.value })
      return
    }

    setCart((prevState) => {
      const newCart = [...prevState]
      const newProduct = {
        id: id,
        name: productName,
        price: price,
        size: selectedSize.value,
        length: selectedLength.value,
        color: availableColors.find((c) => c.name === selectedColor.value),
        discountPrice: discountPrice,
        imageUrl: imageUrl,
        quantity: 1
      } satisfies CartProduct
      // TODO: FIX quantity
      const product = newCart.find((p) => compareCartProducts(p, newProduct))

      if (product) {
        product.quantity += 1
      } else {
        newCart.push({
          id: id,
          name: productName,
          price: price,
          size: selectedSize.value,
          length: selectedLength.value,
          color: availableColors.find((c) => c.name === selectedColor.value),
          discountPrice: discountPrice,
          imageUrl: imageUrl,
          quantity: 1
        } satisfies CartProduct)
      }

      return newCart
    })

    if (isBuyNow) {
      router.push(getI18nNavigationPath(locale, RouteName.cart))
    }
  }

  return (
    <section className={'flex flex-col gap-6 ' + (isError ? 'shake' : '')}>
      <ProductPropsSelector<Size>
        label={translations.size}
        items={productSizes}
        selected={selectedSize.value}
        onSelect={(size) => setSelectedSize({ value: size, hasError: false })}
        hasErrors={selectedSize.hasError}
        actionItem={
          <Link
            href={getI18nNavigationPath(
              locale,
              RouteName.product + '/' + productName + '/' + RouteName.sizeGuide
            )}
            className="okkino-text-hover text-xs font-light uppercase text-gray-600 hover:text-black"
          >
            {translations.sizeGuide}
          </Link>
        }
      />

      <ProductPropsSelector<Length>
        label={translations.length}
        items={productLengths}
        selected={selectedLength.value}
        hasErrors={selectedLength.hasError}
        onSelect={(length) => setSelectedLength({ value: length, hasError: false })}
      />

      <ProductPropsSelector<Color>
        label={translations.color}
        items={availableColors}
        selected={selectedColor.value}
        hasErrors={selectedColor.hasError}
        onSelect={(colorName) => setSelectedColor({ value: colorName, hasError: false })}
        getSelectionComponent={(colorName) => {
          const color = availableColors.find((c) => c.name === colorName)
          return <div className=" h-4 w-4" style={{ backgroundColor: color.value }} />
        }}
      />

      <div className="h-2"></div>

      <div className="flex flex-col  justify-between gap-4 xl:flex-row xl:items-center ">
        <Price price={price} discountPrice={discountPrice} />

        <div className="flex xl:flex-row-reverse">
          <Button label={translations.addToCart} onClick={() => handleAddToCard()} />

          <Button label={translations.buyNow} flat onClick={() => handleAddToCard(true)} />
        </div>
      </div>
    </section>
  )
}

interface IAddToCartSectionTranslations {
  size: string
  length: string
  color: string
  addToCart: string
  buyNow: string
  sizeGuide: string
}

type Size = { name: string }
type Length = { name: string }
type Color = { value: string; name: string }

interface IProps {
  id: string
  price: number
  discountPrice?: number
  productSizes: Size[]
  availableColors: Color[]
  productLengths: Length[]
  locale: Locale
  productName: string
  translations: IAddToCartSectionTranslations
  imageUrl: string
}
