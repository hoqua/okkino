import '../../styles/global.css'
import { Lato } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { i18n, Locale } from '../../i18n/i18n-config'
import { getDictionary } from '../../i18n/get-dirctionary'
import { gql } from '../../data-access/graphq-client'
import { LocaleSwitcher } from './components/menu/locale-switcher'
import MobileMenu from './components/menu/mobile-menu/mobile-menu'
import { DesktopMenu } from './components/menu/desktop-menu/desktop-menu'

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
  const { productCategories } = await gql.GetProductCategories()

  return (
    <html lang={params.lang} className={lato.className}>
      <body className="flex flex-col items-center">
        <div className="w-full max-w-screen-2xl pr-6 pl-6 md:pl-14 md:pr-14">
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

              <LocaleSwitcher locale={params.lang} />
            </div>
          </nav>
          {children}
        </div>
      </body>
    </html>
  )
}
