import Image from 'next/image'
import { Locale } from '../../../i18n/i18n-config'
import { getDictionary } from '../../../i18n/get-dirctionary'

export default async function About({ params }: { params: { lang: Locale } }) {
  const t = await getDictionary(params.lang)

  return (
    // max-lg:grid-cols-1
    // <div className="max-md flex justify-between max-lg:flex-wrap">
    <div className="grid gap-10 lg:grid-cols-[2.1fr_2fr]">
      <div className=" relative aspect-[1/1] lg:max-w-xl 2xl:max-w-3xl ">
        <Image src="/static-images/about.webp" alt="about" fill priority />
      </div>
      <div className="flex items-end justify-end">
        <div className="w-[430px] max-xl:w-full">
          <h1 className="font-semibold uppercase">{t.about.title}</h1>
          <p className="text-xs leading-5 text-gray-600">{t.about.text}</p>
        </div>
      </div>
    </div>
  )
}
