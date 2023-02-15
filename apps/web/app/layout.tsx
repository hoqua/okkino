import { ReactNode } from 'react'
import '../styles/global.css'
import { Lato } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const lato = Lato({
  weight: ['400', '700'],
  display: 'swap',
  style: 'normal',
  subsets: ['latin']
})

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={lato.className}>
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

            <div className="flex gap-10">
              <Link href={'/menu'} className="text-xs uppercase text-black">
                Menu
              </Link>
              <Link href={'/cart'} className="text-xs uppercase text-black">
                Cart
              </Link>
            </div>
          </nav>
          {children}
        </div>
      </body>
    </html>
  )
}
