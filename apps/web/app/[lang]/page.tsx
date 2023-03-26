import { gql } from '../../data-access/graphq-client'
import { webEnv } from '../../environments/environment'
import Image from 'next/image'
import Link from 'next/link'
import { rgbToDataUrl } from '@okkino/web/utils-shared'

const { storage } = webEnv
export default async function Page() {
  const { homeBlocks } = await gql.GetHomeImages()

  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:gap-7 xl:gap-12">
      {homeBlocks.map((block) => {
        const { r, g, b } = block.image.rgbBackground
        return (
          <Link
            href={block.navigationPath}
            key={block.id}
            className="
             relative block flex
             h-[calc(50vh-5.5rem)] min-h-[232px]
             items-center justify-center gap-4 overflow-hidden
             md:h-[calc(50vh-7.5rem)] lg:h-[calc(100vh-18rem)]
             "
          >
            <Image
              src={`${storage.url}/${block.image.imagePath}`}
              alt={block.image.title}
              className={
                'hover:transition-{scale} h-full object-cover duration-1000 hover:scale-105 '
              }
              placeholder="blur"
              blurDataURL={rgbToDataUrl(r, g, b)}
              priority
              fill
              title={block.image.title}
            ></Image>
          </Link>
        )
      })}
    </div>
  )
}
