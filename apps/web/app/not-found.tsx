'use client'
import { Button } from './_shared/button'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white">
      <div className="h-10" />

      <p className="text-7xl text-black">404</p>

      <div className="h-7" />

      <p className="text-gray-600">We couldn&apos;t find this page</p>

      <div className="h-20" />

      <Button label="homepage" onClick={handleClick} />
    </div>
  )
}
