import { Metadata } from 'next'
import { Lato } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  other: {
    'facebook-domain-verification': 'n6a8hudb0rzuys9itcm3o1ji5xrru2'
  }
}
import MobileMenu from './components/menu/mobile-menu/mobile-menu'
import { DesktopMenu } from './components/menu/desktop-menu/desktop-menu'

const CartIcon = dynamic(() => import('./components/menu/cart-icon').then((mod) => mod.CartIcon), {
  ssr: false,
  loading: () => <span className="text-xs uppercase text-black">CART</span>
})
import { getProductCategories } from '@okkino/api/data-access-db'
import { Analytics } from '@vercel/analytics/next'
import '../styles/global.css'

const lato = Lato({
  weight: ['400', '700'],
  display: 'swap',
  style: 'normal',
  subsets: ['latin']
})

export default async function RootLayout({ children }: { children: ReactNode }) {
  const productCategories = await getProductCategories()

  return (
    <html lang="en" className={lato.className}>
      <body className="flex flex-col items-center bg-white pl-6 pr-6 md:pl-14 md:pr-14">
        <div className="w-full max-w-screen-2xl">
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
        <Analytics />
        <Script id="facebook-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1758299338275530');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1758299338275530&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
