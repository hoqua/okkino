'use client'

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
  const zoomistInstanceRef = useRef<Zoomist | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    if (imageLoaded && zoomistRef.current && !zoomistInstanceRef.current) {
      zoomistInstanceRef.current = new Zoomist(zoomistRef.current, {
        zoomer: true,
        slider: true
      })
    }

    return () => {
      if (zoomistInstanceRef.current) {
        zoomistInstanceRef.current.destroy()
        zoomistInstanceRef.current = null
      }
    }
  }, [imageLoaded])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (containerRef.current && e.target === containerRef.current) {
      setZoomImage(null)
    }
  }

  return (
    <div
      ref={containerRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black flex items-center bg-opacity-50"
    >
      <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-md">
        <div
          ref={zoomistRef}
          className="relative overflow-hidden max-h-[80vh] mx-auto zoomist-container"
        >
          <div className="zoomist-wrapper">
            <div className="zoomist-image flex items-center justify-center w-full">
              <Image
                src={img.url}
                alt={img.title}
                className="max-w-[540px]"
                placeholder="blur"
                blurDataURL={hexToDataUrl(img.bgColor)}
                width={1080}
                height={1610}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <button className="mt-3 uppercase" onClick={() => setZoomImage(null)}>
            Back
          </button>
        </div>
      </div>
    </div>
  )
}
