'use client'
import Link from 'next/link'
import { useCart } from '../../_shared/hooks'

export function CartIcon() {
  const [cart] = useCart()

  return (
    <Link className="okkino-text-hover text-xs uppercase text-black" href={`/cart`}>
      <div className="relative">
        {cart.length > 0 && (
          <div className="absolute right-[-5px]">
            <span className="relative flex h-1 w-1">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex h-1 w-1 rounded-full bg-black"></span>
            </span>
          </div>
        )}

        CART
      </div>
    </Link>
  )
}
