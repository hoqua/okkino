import Image from 'next/image'
import { Locale } from '../../../i18n/i18n-config'
import { getDictionary } from '../../../i18n/get-dirctionary'

export default async function About({ params }: { params: { lang: Locale } }) {
  const t = await getDictionary(params.lang)

  return (
    <div className="max-md flex justify-between max-lg:flex-wrap">
      <div>
        <Image src="/static-images/about.webp" width={744} height={744} alt="about" />
      </div>
      <div className=" ml-32 mt-10 flex max-w-sm flex-col justify-end max-lg:ml-0 max-lg:max-w-full">
        <h1 className="mb-3 font-bold uppercase">{t.about.title}</h1>
        <p className=" text-xs leading-5 text-gray-600">{t.about.text}</p>
      </div>
    </div>
  )
}
