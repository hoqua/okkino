import { Lato } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { i18n, Locale } from '../../i18n/i18n-config'
import { getDictionary } from '../../i18n/get-dirctionary'
import { LocaleSwitcher } from './components/menu/locale-switcher'
import MobileMenu from './components/menu/mobile-menu/mobile-menu'
import { DesktopMenu } from './components/menu/desktop-menu/desktop-menu'
import { CartIcon } from './components/menu/cart-icon'
import { getProductCategories } from '@okkino/api/data-access-db'

const lato = Lato({
  weight: ['400', '700'],
  display: 'swap',
  style: 'normal',
  subsets: ['latin']
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params
}: {
  children: ReactNode
  params: { lang: Locale }
}) {
  const t = await getDictionary(params.lang)
  const productCategories = await getProductCategories()

  return (
    <html lang={params.lang} className={lato.className}>
      <body className="flex flex-col items-center bg-white">
        <div className="w-full max-w-screen-2xl pl-6 pr-6 md:pl-14 md:pr-14">
          <nav className="flex h-20 items-center justify-between md:h-28 lg:h-36">
            <Link href={`/${params.lang}`}>
              <Image
                src={'/logo.svg'}
                width={85}
                height={15}
                alt={'logo'}
                className="md:h-5 md:w-28"
              />
            </Link>

            <div className="flex items-center gap-10">
              <DesktopMenu
                navigationTranslation={t.navigation}
                productCategoriesTranslation={t.product_categories}
                productCategories={productCategories}
                locale={params.lang}
              />

              <MobileMenu
                navigationTranslation={t.navigation}
                productCategoriesTranslation={t.product_categories}
                productCategories={productCategories}
                locale={params.lang}
              />

              <CartIcon locale={params.lang} />

              <LocaleSwitcher locale={params.lang} />
            </div>
          </nav>
          {children}
        </div>
      </body>
    </html>
  )
}
