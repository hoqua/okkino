import Image from 'next/image'
import { Locale } from '../../../i18n/i18n-config'
import { getDictionary } from '../../../i18n/get-dirctionary'

export default async function About({ params }: { params: { lang: Locale } }) {
  const t = await getDictionary(params.lang)

  return (
    <div className="3xl:grid-cols-[5fr_4fr] grid gap-10 xl:grid-cols-[4fr_5fr]">
      <div className="relative aspect-square w-full">
        <Image src="/static-images/about.webp" alt="about" fill priority />
      </div>
      <div className="flex w-full items-end justify-end">
        <div className="xl:max-w-[430px]">
          <h1 className="font-semibold uppercase">{t.about.title}</h1>
          <div className="h-3" />
          <p className="text-xs leading-5 text-gray-600">{t.about.text}</p>
        </div>
      </div>
    </div>
  )
}
