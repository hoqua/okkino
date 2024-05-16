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
            OK KINO IS A MOLDOVA-BASED WOMENSWEAR BRAND FOUNDED IN 2020.
          </h1>

          <div className="h-3" />

          <p className="text-xs leading-5 text-gray-600">
            Through collections OK KINO try to combine the authenticity of native country with the
            contemporary fashion. Clean silhouettes, precise tailoring and delicate color palette is
            the base of each collection. Immersing into traditional Moldovan details is another
            important part of the brand. Exploring the national heritage, creative directors Darya
            Golneva and Denis Caunov carefully work with ethnic and cultural symbols and codes,
            reinterpreting them from a new minimalism perspective. At OK KINO we care about ethical
            attitude towards environment and production. Therefore, we create high quality garments
            made to last, using carefully selected fabrics.
          </p>
        </div>
      </div>
    </div>
  )
}
