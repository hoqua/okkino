'use client'

import { FC, useState } from 'react'
import { ProductPropsSelector } from './product-props-selector'
import Link from 'next/link'
import { RouteName } from '../../../components/common/constants'
import { useRouter } from 'next/navigation'
import './module.css'
import { OrderProduct } from '@okkino/shared/schema'
import { useCart } from '../../../_shared/hooks'
import { compareCartProducts } from '../../../_shared/utils'
import { Price } from '../../../_shared/price'
import { Button } from '../../../_shared/button'
import { ColorCube } from '../../../components/common/color-cube'

export const AddToCartSection: FC<IProps> = (props) => {
  const {
    id,
    price,
    discountPrice,
    productSizes,
    productLengths,
    availableColors,
    productName,
    imageUrl,
    hasLength,
    urlName
  } = props
  const [selectedSize, setSelectedSize] = useState({ value: '', hasError: false })
  const [selectedLength, setSelectedLength] = useState({
    value: hasLength ? 'regular' : '',
    hasError: false
  })
  const [selectedColor, setSelectedColor] = useState({
    value: availableColors.length <= 1 ? availableColors[0].name : '',
    hasError: false
  })
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
        color: availableColors.find((c) => c.name === selectedColor.value) || {
          name: '',
          value: ''
        },
        discountPrice: discountPrice,
        imageUrl: imageUrl,
        quantity: 1,
        urlName
      } satisfies OrderProduct
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
          color: availableColors.find((c) => c.name === selectedColor.value) || {
            name: '',
            value: ''
          },
          discountPrice: discountPrice,
          imageUrl: imageUrl,
          quantity: 1,
          urlName
        } satisfies OrderProduct)
      }

      return newCart
    })

    if (isBuyNow) {
      router.push('/' + RouteName.cart)
    }
  }

  return (
    <section className={'flex flex-col gap-6 ' + (isError ? 'shake' : '')}>
      <ProductPropsSelector<Size>
        label={t.size}
        items={productSizes}
        selected={selectedSize.value}
        onSelect={(size) => setSelectedSize({ value: size, hasError: false })}
        hasErrors={selectedSize.hasError}
        actionItem={
          <Link
            href={'/' + RouteName.product + '/' + urlName + '/' + RouteName.sizeGuide}
            className="okkino-text-hover text-xs font-light uppercase text-gray-600 hover:text-black"
          >
            {t.size_guide}
          </Link>
        }
      />
      {hasLength && (
        <ProductPropsSelector<Length>
          label={t.length}
          items={productLengths}
          selected={selectedLength.value}
          hasErrors={selectedLength.hasError}
          onSelect={(length) => setSelectedLength({ value: length, hasError: false })}
        />
      )}

      <ProductPropsSelector<Color>
        label={t.color}
        items={availableColors}
        selected={selectedColor.value}
        hasErrors={selectedColor.hasError}
        onSelect={(colorName) => setSelectedColor({ value: colorName, hasError: false })}
        getSelectionComponent={(colorName, selectedColorName) => {
          const color = availableColors.find((c) => c.name === colorName)
          return (
            <ColorCube
              color={color || { name: '', value: '' }}
              size="lg"
              selected={selectedColorName === color?.name}
            />
          )
        }}
      />

      <div className="h-2"></div>

      <div className="flex flex-col  justify-between gap-4 xl:flex-row xl:items-center ">
        <Price price={price} discountPrice={discountPrice} />

        <div className="flex items-center xl:flex-row-reverse gap-5">
          <Button label={t.add_to_cart} onClick={() => handleAddToCard()} />

          <Link
            className="text-black text-sm font-light uppercase hover:underline"
            href={'/' + RouteName.product + '/' + urlName + '/' + RouteName.shippingGuide}
          >
            {t.shipping_guide}
          </Link>
        </div>
      </div>
    </section>
  )
}

type Size = { name: string }
type Length = { name: string }
export type Color = { value: string; name: string }

interface IProps {
  id: string
  urlName: string
  price: number
  discountPrice?: number
  productSizes: Size[]
  availableColors: Color[]
  productLengths: Length[]
  hasLength: boolean
  productName: string
  imageUrl: string
}

const t = {
  size_guide: 'Size guide',
  size: 'Size',
  color: 'Color',
  length: 'Length',
  add_to_cart: 'Add to cart',
  shipping_guide: 'Shipping & Returns'
}
