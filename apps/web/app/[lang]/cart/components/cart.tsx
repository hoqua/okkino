'use client'

import CartEmpty from './cart-empty'
import { Translation } from '../../../../i18n/get-dirctionary'
import Image from 'next/image'
import { Price } from '../../../_shared/price'
import { Button } from '../../../_shared/button'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState, useTransition } from 'react'
import getStripe from '../utils'
import { usePathname } from 'next/navigation'
import { useCart } from '../../../_shared/hooks'
import { compareCartProducts } from '../../../_shared/utils'
import { CartProduct, CheckoutProduct, DeliveryOptions } from '@okkino/web/utils-shared'

interface IProps {
  cartTranslations: Translation['cart']
}

const deliveryPrice = 50

export default function Cart({ cartTranslations: t }: IProps) {
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const { ref, inView } = useInView({ threshold: 0.99 })
  const [delivery, setDelivery] = useState<DeliveryOptions>(DeliveryOptions.enum.other)
  const [cart, setCart] = useCart()

  useEffect(() => {
    getStripe().catch((error) => {
      console.error('Error loading Stripe', error)
      throw error
    })
  }, [])

  function removeProductFromCart(removeProduct: CartProduct) {
    // TODO remove not only by id
    setCart(cart.filter((p) => !compareCartProducts(p, removeProduct)))
  }

  async function handleCheckout() {
    try {
      const checkout: CheckoutProduct = {
        host: window.location.origin,
        language: pathname.split('/')[1],
        delivery,
        products: cart
      }
      const response = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify(checkout)
      })

      if (response.status !== 200) throw new Error('Error creating checkout session')

      const data = await response.json()

      const stripe = await getStripe()
      const { error } = await stripe!.redirectToCheckout({ sessionId: data.id })
      if (error) throw new Error(error.message)
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  if (cart.length === 0) return <CartEmpty cartTranslations={t} />

  // eslint-disable-next-line unicorn/no-array-reduce
  const prise = cart.reduce((a, b) => a + b.quantity * (b.discountPrice || b.price), 0)
  const totalPrice = prise + (delivery === DeliveryOptions.enum.moldova ? 0 : 50)
  const totalItems = cart.reduce((a, b) => a + b.quantity, 0)

  return (
    <div className="grid lg:grid-cols-2 lg:justify-items-center lg:gap-60">
      <div className="grid gap-14 md:gap-24 lg:w-full lg:auto-rows-min">
        {/*PRODUCTS PAGE GRID*/}
        {cart.map((product) => (
          <div key={JSON.stringify(product)} className="grid grid-cols-[1fr_2fr] gap-10 md:gap-20">
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
                  <h3 className=" hidden text-xs uppercase text-black md:inline">{product.name}</h3>
                </span>
                <div className="flex w-full justify-end">
                  <button
                    className="okkino-text-hover text-xs uppercase text-black"
                    onClick={() => removeProductFromCart(product)}
                  >
                    {t.product.remove}
                  </button>
                </div>
              </div>
              {/*PRODUCT INFO*/}
              <div className="grid h-full auto-rows-max grid-cols-[1fr_2fr] items-center gap-y-2 last:align-bottom">
                {/*col-2*/}
                <span className="text-xs uppercase text-gray-600">{t.product.color}</span>
                <div className="h-3 w-3" style={{ backgroundColor: product.color.value }} />
                {/*col-2*/}
                <span className="text-xs uppercase text-gray-600">{t.product.size}</span>
                <span className="text-sm font-bold uppercase text-black">{product.size}</span>
                {/*col-2*/}
                <span className="text-xs uppercase text-gray-600">{t.product.length}</span>
                <span className="text-sm font-bold uppercase text-black">{product.length}</span>
                {/*col-2*/}
                <span className="text-xs uppercase text-gray-600">{t.product.quantity}</span>
                <span className="text-sm font-bold uppercase text-black">{product.quantity}</span>
              </div>
              {/*col-2*/}
              <div className="grid grid-cols-[1fr_2fr]">
                <span className="text-sm uppercase text-black">{t.total}</span>
                <Price
                  price={product.price * product.quantity}
                  discountPrice={product.discountPrice * product.quantity}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*REF FOR OBSERVER, AFTER @MD-screen it fixed to top, so always visible*/}
      <div
        className={(inView ? 'h-14' : 'h-[calc(134px+56px)]') + ' md:-z-1 md:fixed md:top-0'}
        ref={ref}
      />

      {/*ORDER OVERVIEW*/}
      <div
        className={
          'gap bottom-0 left-0 right-0 bg-black p-6 text-white transition-[height] ease-in-out' +
          (inView ? ' relative -ml-6 -mr-6' : ' fixed') +
          ' md:bg-white md:pb-24 md:pt-24 md:text-black' +
          ' lg:m-0 lg:p-0'
        }
      >
        {inView && <h3 className="text-base uppercase ">{t.overview.title}</h3>}

        {inView && <div className="h-8" />}

        {inView && (
          <div className="grid grid-cols-[1fr_3fr] gap-5">
            <span className="text-xs uppercase text-inherit">
              {totalItems} {totalItems > 1 ? t.overview.items : t.overview.item}
            </span>
            <span className="text-right text-sm font-bold text-inherit">${prise}</span>

            <span className="text-xs uppercase text-inherit">{t.delivery.delivery}</span>
            <div className="flex flex-col items-end">
              <div className="flex gap-8">
                <span
                  onClick={() => setDelivery(DeliveryOptions.enum.moldova)}
                  className={
                    'cursor-pointer text-sm font-bold uppercase text-inherit ' +
                    (delivery === DeliveryOptions.enum.moldova ? ' underline' : '')
                  }
                >
                  {t.delivery.moldova}
                </span>
                <span
                  onClick={() => setDelivery(DeliveryOptions.enum.other)}
                  className={
                    'cursor-pointer text-sm font-bold uppercase text-inherit ' +
                    (delivery === DeliveryOptions.enum.other ? ' underline' : '')
                  }
                >
                  {t.delivery.other}
                </span>
              </div>
              <div className="h-2" />
              <span className="text-sm font-bold uppercase text-inherit">
                {delivery === DeliveryOptions.enum.moldova ? t.delivery.free : `$${deliveryPrice}`}
              </span>
            </div>
          </div>
        )}

        {/*TOTAL PRICE SPACER*/}
        {inView && <div className="h-12" />}
        {/*TOTAL PRICE*/}
        <div className="grid grid-cols-2">
          <span className="text-xs uppercase text-inherit">{t.total}</span>
          <span className="text-right text-sm font-bold text-inherit">${totalPrice}</span>
        </div>

        {/*CHECKOUT SPACER*/}
        <div className={inView ? 'h-16' : 'h-5'} />

        <Button
          label={'Checkout'}
          onClick={() => startTransition(handleCheckout)}
          fullWidth
          className={
            ' border-white text-white md:border-black md:text-black ' +
            (isPending ? ' animate-pulse' : '')
          }
        />

        {/*POST CHECKOUT SPACER*/}
        {inView && <div className="h-14" />}

        {inView && <p className="text-sm uppercase text-inherit">{t.info.paymentTitle}</p>}
        {inView && <div className="h-2"></div>}
        {inView && <p className="text-xs uppercase text-inherit">{t.info.paymentTypes}</p>}

        {inView && <div className="h-20" />}

        {inView && <p className="text-sm uppercase text-inherit">{t.info.returnTitle}</p>}
      </div>
    </div>
  )
}
