import { i18n, Locale } from '../../../../i18n/i18n-config'
import { Translation } from '../../../../i18n/get-dirctionary'
import { Button } from '../../../_shared/button'
import { usePathname, useRouter } from 'next/navigation'

export default function CartEmpty({ cartTranslations }: { cartTranslations: Translation['cart'] }) {
  const pathname = usePathname()
  const router = useRouter()
  const locale = pathname.split('/')[1] as Locale

  const handleClick = () => {
    router.push(i18n.locales.includes(locale) ? `/${locale}/shop/all` : '/shop/all')
  }

  return (
    <div
      className={
        'flex flex-col items-center  justify-center gap-20 ' +
        'h-[calc(100vh-5.5rem)] md:h-[calc(100vh-7.5rem)] lg:h-[calc(100vh-18rem)]'
      }
    >
      <h1 className="uppercase">{cartTranslations.empty.title}</h1>

      <Button label={cartTranslations.empty.buttonText} onClick={handleClick} />
    </div>
  )
}
