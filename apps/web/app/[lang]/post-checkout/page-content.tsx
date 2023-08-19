'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from '../../_shared/button'
import { i18n, Locale } from '../../../i18n/i18n-config'
import { Translation } from '../../../i18n/get-dirctionary'
import { useCart } from '../../_shared/hooks'
import { useEffect } from 'react'

interface IProps {
  paymentTranslations: Translation['payment']
}

export default function PostCheckoutPageContent({ paymentTranslations }: IProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [, setCart] = useCart()
  const router = useRouter()
  const locale = pathname.split('/')[1] as Locale
  const paymentSuccess = searchParams.get('success') === 'true'

  useEffect(() => {
    if (paymentSuccess) {
      setCart([])
    }
  }, [paymentSuccess, setCart])

  const handleClick = () => {
    const destination = paymentSuccess ? '/' : '/cart'
    router.push(i18n.locales.includes(locale) ? `/${locale}${destination}` : destination)
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
        {paymentSuccess ? paymentTranslations.success.title : paymentTranslations.error.title}
      </p>

      <div className="h-1" />

      <p className="text-gray-600">
        {paymentSuccess ? paymentTranslations.success.text : paymentTranslations.error.text}
      </p>

      <div className="h-20" />

      <Button
        label={
          paymentSuccess ? paymentTranslations.success.button : paymentTranslations.error.button
        }
        onClick={handleClick}
      />
    </div>
  )
}
