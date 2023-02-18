import '../../styles/global.css'
import { Lato } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { i18n, Locale } from '../../i18n/i18n-config'
import { getDictionary } from '../../i18n/get-dirctionary'
import LocaleSwitcher from './component/locale-switcher'

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
  const { navBar } = await getDictionary(params.lang)

  return (
    <html lang={params.lang} className={lato.className}>
      <body>
        <div className="mr-6 ml-6 max-w-screen-2xl md:ml-14 md:mr-14">
          <nav className="flex h-20 items-center justify-between md:h-28 lg:h-36">
            <Image
              src={'/logo.svg'}
              width={85}
              height={15}
              alt={'logo'}
              className="md:h-5 md:w-28"
            />

            <div className="flex items-center gap-10">
              <Link href={'/menu'} className="text-xs uppercase text-black">
                {navBar.menu}
              </Link>
              <Link href={'/cart'} className="text-xs uppercase text-black">
                {navBar.cart}
              </Link>

              <LocaleSwitcher />
            </div>
          </nav>
          {children}
        </div>
      </body>
    </html>
  )
}
