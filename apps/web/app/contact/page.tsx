import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className="3xl:grid-cols-[5fr_4fr] xl:gap-40 xl:grid xl:grid-cols-[4fr_5fr] xl:text-left text-center flex flex-col gap-10 items-center uppercase pb-10">
      <div className="relative aspect-square w-full">
        <Image src="/static-images/contact.webp" alt="okkino notebook" fill priority />
      </div>
      <div className="flex flex-col gap-16 justify-between h-full">
        <div className="mt-auto flex flex-col gap-16">
          <div className="flex flex-col gap-6">
            <h2>You are welcome to visit our studio by appointment.</h2>
            <p>Alexandru cel Bun street 38, chisinau, moldova</p>
          </div>

          <div className="flex flex-col gap-6">
            <h3>Contact Us</h3>
            <div>
              <Link className="underline" href="mailto:okkino.studio@gmail.com">
                okkino.studio@gmail.com
              </Link>
              <p>Phone (+373) 60 622 211</p>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <Link
            className="underline"
            href="https://www.instagram.com/okkino.studio?igsh=MWFjam1teGdjenBqYw=="
          >
            INSTAGRAM
          </Link>
        </div>
      </div>
    </div>
  )
}
