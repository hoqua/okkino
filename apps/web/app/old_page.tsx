import Image from 'next/image'
import Link from 'next/link'

import { getHomeImages } from '@okkino/api/data-access-db'
import { Metadata } from 'next'
import { hexToDataUrl } from '@okkino/web/utils-shared'

export async function generateMetadata(): Promise<Metadata> {
  const homeBlocks = await getHomeImages()

  return {
    metadataBase: new URL('https://www.studiookkino.com/'),
    title: 'OK KINO',
    description:
      'Official online store for OK KINO. An independent designer brand from Moldova. Designed by Darya Golneva and Denis Caunov.',
    referrer: 'origin-when-cross-origin',
    openGraph: {
      images: homeBlocks.map((block) => block.image.url)
    }
  }
}

export default async function Old_page() {
  const homeBlocks = await getHomeImages()

  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:gap-7 xl:gap-12">
      {homeBlocks.map((block) => {
        return (
          <Link
            prefetch
            href={block.navigationPath}
            key={block.id}
            className="
             relative  flex
             h-[calc(50vh-5.5rem)]
             min-h-[232px] items-center justify-center gap-4
             overflow-hidden md:h-[calc(50vh-7.5rem)] lg:h-[calc(100vh-18rem)]
             "
          >
            <Image
              src={block.image.url}
              alt={block.image.title}
              className={
                'hover:transition-{scale} h-full object-cover duration-1000 hover:scale-105 '
              }
              placeholder="blur"
              blurDataURL={hexToDataUrl(block.image.bgColor)}
              sizes="(min-width: 1640px) 688px, (min-width: 1040px) calc(41.03vw + 23px), (min-width: 780px) calc(100vw - 112px), calc(100vw - 48px)"
              priority
              fill
              title={block.image.title}
            />
          </Link>
        )
      })}
    </div>
  )
}
