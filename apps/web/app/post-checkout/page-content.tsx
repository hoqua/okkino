'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useCart } from '../_shared/hooks'
import { Button } from '../_shared/button'

export default function PostCheckoutPageContent() {
  const searchParams = useSearchParams()
  const [, setCart] = useCart()
  const router = useRouter()
  const paymentSuccess = searchParams.get('success') === 'true'

  useEffect(() => {
    if (paymentSuccess) {
      setCart([])
    }
  }, [paymentSuccess, setCart])

  const handleClick = () => {
    const destination = paymentSuccess ? '/' : '/cart'
    router.push(destination)
  }

  return (
    <div
      className={
        'flex h-full flex-col items-center justify-center bg-white ' +
        'h-[calc(100vh-5.5rem)] md:h-[calc(100vh-7.5rem)] lg:h-[calc(100vh-18rem)]'
      }
    >
      <div className="h-10" />

      <p className="text-md font-semibold uppercase text-black">
        {paymentSuccess ? t.success.title : t.error.title}
      </p>

      <div className="h-1" />

      <p className="text-gray-600">{paymentSuccess ? t.success.text : t.error.text}</p>

      <div className="h-20" />

      <Button label={paymentSuccess ? t.success.button : t.error.button} onClick={handleClick} />
    </div>
  )
}

const t = {
  success: {
    title: 'Payment successful',
    text: 'Thank you for your purchase.',
    button: 'homepage'
  },
  error: {
    title: 'Payment error',
    text: 'We apologize for the inconvenience. Please verify your payment details and try again. If issues persist, contact us at contact@studiookkino.com for assistance.',
    button: 'Try again'
  }
}
