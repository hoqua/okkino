import Image from 'next/image'
import { Metadata } from 'next'
import about from '../public/static-images/about.webp'

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://www.studiookkino.com/'),
    title: 'OK KINO',
    description:
      'Official online store for OK KINO. An independent designer brand from Moldova. Designed by Darya Golneva and Denis Caunov.',
    referrer: 'origin-when-cross-origin',
    openGraph: {
      images: [about.src]
    }
  }
}

export default function TempPage() {
  return (
    <>
      <Image src={'/logo.svg'} width={114} height={20} alt={'logo'} className="md:h-5 md:w-28" />
      <div className="h-[60px]" />

      <div className="grid grid-cols-2 gap-6 w-full max-w-[640px]">
        <div className="relative aspect-[308/461]">
          <Image src="/static-images/l.png" alt="okkino coming soon left" fill priority />
        </div>
        <div className="relative aspect-[308/461]">
          <Image src="/static-images/r.png" alt="okkino coming soon right" fill priority />
        </div>
      </div>

      <div className="h-[60px]" />

      <div className="flex flex-col items-center w-full max-w-[375px]">
        <p className="text-center text-md uppercase font-bold text-black tracking-wide leading-6">
          We are rebranding our website, it will be back up and running soon.
        </p>

        <div className="h-3" />

        <p className="text-gray-600 text-center">
          For any questions regarding your current order or if you wish to place an order, please
          message us on Instagram —{' '}
          <a className="underline" href="https://www.instagram.com/okkino.studio">
            @okkino.studio
          </a>
        </p>

        <div className="h-[60px]" />

        <p className="text-xs uppercase font-normal">Best regards, OK KINO team</p>
      </div>
    </>
  )
}
