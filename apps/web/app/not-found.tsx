'use client'
import Image from 'next/image'
import { Button } from './_shared/button'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <html lang="en">
      <body className="flex h-screen flex-col items-center justify-center bg-white">
        <Image
          src={'/logo.svg'}
          width={85}
          height={15}
          alt={'logo'}
          className="-scale-100 md:h-5 md:w-28"
        />

        <div className="h-10" />

        <p className="text-7xl text-black">404</p>

        <div className="h-7" />

        <p className="text-gray-600">We couldn&apos;t find this page</p>

        <div className="h-20" />

        <Button label="homepage" onClick={handleClick} />
      </body>
    </html>
  )
}
