'use client'

import Image from 'next/image'
import { OrderProduct } from '@okkino/shared/schema'
import { Price } from './price'

interface CartProductCardProps {
  product: OrderProduct
  onRemove?: (product: OrderProduct) => void
}

export function CartProductCard({ product, onRemove }: CartProductCardProps) {
  return (
    <div className="grid grid-cols-[1fr_2fr] gap-10 md:gap-20">
      {/* PRODUCT LEFT COL*/}
      <div className="flex flex-col gap-5">
        <h3 className="text-xs uppercase text-black md:hidden">{product.name}</h3>

        <div className="relative aspect-[120/179]">
          <Image src={product.imageUrl} alt={product.name} fill />
        </div>
      </div>

      {/*PRODUCT DESCRIPTION*/}
      <div className="flex auto-rows-max flex-col gap-5">
        {/*PRODUCT NAME + REMOVE COL*/}
        <div className="grid auto-rows-max grid-cols-[1fr_2fr] items-center gap-y-2 last:align-bottom">
          <span>
            <h3 className="hidden text-xs uppercase text-black md:inline">{product.name}</h3>
          </span>
          {onRemove && (
            <div className="flex w-full justify-end">
              <button
                className="okkino-text-hover text-xs uppercase text-black"
                onClick={() => onRemove(product)}
              >
                {t.remove}
              </button>
            </div>
          )}
        </div>
        {/*PRODUCT INFO*/}
        <div className="grid h-full auto-rows-max grid-cols-[1fr_2fr] items-center gap-y-2 last:align-bottom">
          {/*col-2*/}
          <span className="text-xs uppercase text-gray-600">{t.color}</span>
          <span className="text-sm font-bold uppercase text-black">{product.color.name}</span>
          {/*col-2*/}
          <span className="text-xs uppercase text-gray-600">{t.size}</span>
          <span className="text-sm font-bold uppercase text-black">{product.size}</span>
          {/*col-2*/}
          {product.length.length > 0 && (
            <>
              <span className="text-xs uppercase text-gray-600">{t.length}</span>
              <span className="text-sm font-bold uppercase text-black">{product.length}</span>
            </>
          )}
          {/*col-2*/}
          <span className="text-xs uppercase text-gray-600">{t.quantity}</span>
          <span className="text-sm font-bold uppercase text-black">{product.quantity}</span>
        </div>
        {/*col-2*/}
        <div className="grid grid-cols-[1fr_2fr]">
          <span className="text-sm uppercase text-black">{t.total}</span>
          <Price
            price={product.price * product.quantity}
            discountPrice={
              product.discountPrice ? product.discountPrice * product.quantity : undefined
            }
          />
        </div>
      </div>
    </div>
  )
}

const t = {
  color: 'Color',
  size: 'Size',
  length: 'Length',
  quantity: 'Q_ty',
  total: 'total',
  remove: 'Remove'
}
