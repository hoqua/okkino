import { Lato } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import MobileMenu from './components/menu/mobile-menu/mobile-menu'
import { DesktopMenu } from './components/menu/desktop-menu/desktop-menu'
import { CartIcon } from './components/menu/cart-icon'
import { getProductCategories } from '@okkino/api/data-access-db'
import { ALL_CATEGORY } from './shop/_components/constants'
import { headers } from 'next/headers'
import '../styles/global.css'

const lato = Lato({
  weight: ['400', '700'],
  display: 'swap',
  style: 'normal',
  subsets: ['latin']
})

export async function generateStaticParams() {
  const productCategories = await getProductCategories()
  productCategories.push({ id: ALL_CATEGORY, name: ALL_CATEGORY })
  const categoryNames = productCategories.map((category) => category.name)

  const params = []
  for (const product of categoryNames) {
    params.push({ productUrlName: product })
  }

  return params
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const productCategories = await getProductCategories()
  const isHome = false

  return (
    <html lang="en" className={lato.className}>
      <body
        className={
          isHome
            ? 'min-h-full min-w-full flex items-center flex-col pl-6 pr-6 pt-[60px] bg-white'
            : 'flex flex-col items-center bg-white'
        }
      >
        {isHome ? (
          children
        ) : (
          <div className="w-full max-w-screen-2xl pl-6 pr-6 md:pl-14 md:pr-14">
            <nav className="flex h-20 items-center justify-between md:h-28 lg:h-36">
              <Link href={`/`}>
                <Image
                  src={'/logo.svg'}
                  width={85}
                  height={15}
                  alt={'logo'}
                  className="md:h-5 md:w-28"
                />
              </Link>

              <div className="flex items-center gap-10">
                <DesktopMenu productCategories={productCategories} />

                <MobileMenu productCategories={productCategories} />

                <CartIcon />
              </div>
            </nav>

            {children}
          </div>
        )}
      </body>
    </html>
  )
}
