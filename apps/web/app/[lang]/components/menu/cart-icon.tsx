'use client'
import Link from 'next/link'
import { Locale } from '../../../../i18n/i18n-config'
import { useCart } from '../../../_shared/hooks'

export function CartIcon({ locale }: { locale: Locale }) {
  const [cart] = useCart()

  return (
    <Link className="okkino-text-hover text-xs uppercase text-black" href={`/${locale}/cart`}>
      <div className="relative">
        {cart.length > 0 && (
          <div className="absolute right-1">
            <span className="relative flex h-1 w-1">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex h-1 w-1 rounded-full bg-black"></span>
            </span>
          </div>
        )}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23 16"
          fill="none"
          className="h-5 w-5"
          stroke="rgb(38, 34, 23)"
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <path d="M1 3H3L4.5 10A2 2 0 0 0 6.5 11.5H12a2 2 0 0 0 2-1.5L14 3H4" />
          <circle cx="6" cy="13" r="1" />
          <circle cx="13" cy="13" r="1" />
        </svg>
      </div>
    </Link>
  )
}
