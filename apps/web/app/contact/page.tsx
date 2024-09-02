import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className="grid gap-10 uppercase text-xs pb-10 3xl:grid-cols-[5fr_4fr] xl:grid-cols-[4fr_5fr]">
      <div className="relative aspect-square w-full">
        <Image src="/static-images/contact.webp" alt="okkino notebook" fill priority />
      </div>
      <div className="flex w-full  justify-center  text-center xl:justify-end xl:text-left">
        <div className="flex flex-col justify-between gap-16">
          <div className="mt-auto flex flex-col gap-16">
            <div className="flex flex-col gap-6">
              <h2>You are welcome to visit our studio by appointment.</h2>
              <p>Alexandru cel Bun street 38, chisinau, moldova</p>
            </div>

            <div className="flex flex-col gap-6">
              <h3>Contact Us</h3>
              <div>
                <Link className="okkino-text-hover" href="mailto:contact@studiookkino.com">
                  contact@studiookkino.com
                </Link>
                <p>Phone (+373) 60 622 211</p>
              </div>
            </div>
          </div>
          <div className="mt-auto okkino-text-hover">
            <Link href="https://www.instagram.com/okkino.studio?igsh=MWFjam1teGdjenBqYw==">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
