import { Image as ProductImageData } from '@prisma/client'
import React, { useEffect, useRef, useState } from 'react'
import 'zoomist/css'
import Zoomist from 'zoomist'
import Image from 'next/image'
import { hexToDataUrl } from '@okkino/web/utils-shared'

export default function ZoomImageModal({
  img,
  setZoomImage
}: {
  img: ProductImageData
  setZoomImage: (props: ProductImageData | null) => void
}) {
  const zoomistRef = useRef<HTMLDivElement>(null)

  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    let zoomistInstance: Zoomist | null = null
    if (imageLoaded && zoomistRef.current) {
      zoomistInstance = new Zoomist(zoomistRef.current)
    }

    return () => {
      if (zoomistInstance) {
        zoomistInstance.destroy()
      }
    }
  }, [imageLoaded])

  return (
    <div className="fixed inset-0 bg-black flex items-center bg-opacity-50">
      <div className="relative w-full h-full bg-white">
        <button
          className="absolute right-4 top-4 z-50"
          onClick={() => {
            setZoomImage(null)
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <div ref={zoomistRef} className=" w-full h-full zoomist-container">
          <div className="zoomist-wrapper">
            <div className="zoomist-image flex items-center justify-center">
              <Image
                src={img.url}
                alt={img.title}
                className="max-w-lg"
                placeholder="blur"
                blurDataURL={hexToDataUrl(img.bgColor)}
                width={1080}
                height={1610}
                quality={100}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
