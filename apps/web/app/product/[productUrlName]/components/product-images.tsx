'use client'
import { hexToDataUrl } from '@okkino/web/utils-shared'
import type { Image as ProductImageData } from '@prisma/client'
import dynamic from 'next/dynamic'

import Image from 'next/image'
import React, { useState } from 'react'

const ZoomImageModal = dynamic(() => import('./zoom-img-modal'))

const IMAGES_ON_SCREEN = 2

export default function ProductImages({ productImages }: { productImages: ProductImageData[] }) {
  const [zoomImage, setZoomImage] = useState(null)
  return (
    <>
      {productImages.map((image, index) => {
        return (
          <section
            key={image.id}
            onClick={() => setZoomImage(image)}
            className={
              'xl:min-w-full ' + 'relative aspect-[120/179] min-w-[80%] snap-center zoom-cursor'
            }
          >
            <Image
              src={image.url}
              alt={image.title}
              className=""
              placeholder="blur"
              blurDataURL={hexToDataUrl(image.bgColor)}
              title={image.title}
              priority={index < IMAGES_ON_SCREEN}
              sizes="(min-width: 1600px) 540px, (min-width: 1280px) calc(28.33vw - 27px), 77.29vw"
              fill
            />
          </section>
        )
      })}

      {zoomImage && <ZoomImageModal img={zoomImage} setZoomImage={setZoomImage} />}
    </>
  )
}
