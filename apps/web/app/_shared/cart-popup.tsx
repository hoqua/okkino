'use client'

import { createPortal } from 'react-dom'
import Link from 'next/link'
import { Button } from './button'
import { RouteName } from '../components/common/constants'
import { CartProductCard } from './cart-product-card'
import { OrderProduct } from '@okkino/shared/schema'

interface CartPopupProps {
  product: OrderProduct
  onClose: () => void
}

export function CartPopup({ product, onClose }: CartPopupProps) {
  return createPortal(
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 z-40 xl:bg-transparent" onClick={onClose} />

      {/* Popup */}
      <div
        className={
          'fixed z-50 bg-white shadow-lg p-6 xl:p-20 ' +
          'top-0 left-0 right-0 ' +
          'xl:top-36 xl:left-auto xl:right-14 xl:w-[517px]'
        }
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-6 xl:right-20 text-xs uppercase text-black hover:underline"
        >
          {t.close}
        </button>

        <div className="mt-8">
          <CartProductCard product={product} />
        </div>

        <div className="mt-8">
          <Link href={'/' + RouteName.cart}>
            <Button label={t.goToCart} fullWidth onClick={onClose} />
          </Link>
        </div>
      </div>
    </>,
    document.body
  )
}

const t = {
  close: 'Close',
  goToCart: 'Go to cart'
}
