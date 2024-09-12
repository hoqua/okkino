import Image from 'next/image'

export default async function About() {
  return (
    <div className="3xl:grid-cols-[5fr_4fr] grid gap-10 xl:grid-cols-[4fr_5fr]">
      <div className="relative aspect-square w-full">
        <Image src="/static-images/about.webp" alt="about" fill priority />
      </div>
      <div className="flex w-full items-end justify-end">
        <div className="xl:max-w-[430px]">
          <h1 className="font-semibold uppercase">
            OK KINO IS AN INDEPENDENT BRAND ESTABLISHED IN Chisinau, MOLDOVA
          </h1>

          <div className="h-3" />

          <div className="text-xs leading-5 text-gray-600 flex flex-col gap-5">
            <p>
              Exploring the national heritage, creative directors Darya Golneva and Denis Caunov
              carefully work with ethnic and cultural symbols, reinterpreting them from a new
              perspective. Immersed in the process of deconstructing familiar items, they are
              captivated by the concept of reimagining these objects.
            </p>
            <p>
              At OK KINO we care about ethical attitude towards environment and production.
              Therefore, we create high quality garments made to last, using carefully selected
              fabrics.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
