import Link from 'next/link'
import { getI18nNavigationPath } from '../../../components/common/utils'
import { Locale } from '../../../../../i18n/i18n-config'
import { RouteName } from '../../../components/common/constants'
import { getDictionary } from '../../../../../i18n/get-dirctionary'

interface IProductPageProps {
  params: { productName: string; lang: Locale }
}

export default async function Page(props: IProductPageProps) {
  const { params } = props
  const { size_guide } = await getDictionary(params.lang)

  return (
    <div className="left-0 top-16 h-max max-w-full bg-white p-6 text-8xl max-sm:absolute">
      <div className="flex w-full items-end ">
        <Link
          href={getI18nNavigationPath(params.lang, RouteName.product + '/' + params.productName)}
          className="okkino-text-hover w-full text-right text-xs uppercase"
        >
          {size_guide.close}
        </Link>
      </div>

      <section>
        <h3 className="mb-1 text-xs uppercase text-gray-700">{size_guide.size_and_fit.title}</h3>
        <p className="text-sm text-black">{size_guide.size_and_fit.fit}</p>
        <p className="text-sm text-black">{size_guide.size_and_fit.materials}</p>
        <p className="text-sm text-black">{size_guide.size_and_fit.model_size}</p>

        <div className="h-12"></div>

        <h3 className="mb-1 text-xs uppercase text-gray-700">{size_guide.length.title}</h3>
        <p className="text-sm text-black">{size_guide.length.select_height}</p>
        <p className="text-sm text-black">{size_guide.length.petit}</p>
        <p className="text-sm text-black">{size_guide.length.regular}</p>
        <p className="text-sm text-black">{size_guide.length.tall}</p>

        <div className="h-12"></div>

        <h3 className="mb-1 text-xs uppercase text-gray-700">{size_guide.size_guide.title}</h3>

        <div className="overflow-x-auto ">
          <table className="-ml-10 table-fixed border-separate border-spacing-x-10 border-spacing-y-1 whitespace-nowrap text-left  text-sm text-black ">
            <thead>
              <tr>
                <th className="sticky left-0 bg-white pb-2 text-xs font-normal uppercase">
                  {size_guide.size_guide.size}
                </th>
                <th className="pb-2 text-xs font-normal uppercase">{size_guide.size_guide.bust}</th>
                <th className="pb-2 text-xs font-normal uppercase">
                  {size_guide.size_guide.waist}
                </th>
                <th className="pb-2 text-xs font-normal uppercase">{size_guide.size_guide.hips}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="sticky left-0 bg-white">XS</td>
                <td>31in / 80cm</td>
                <td>24in / 62cm</td>
                <td>34in / 86cm</td>
              </tr>
              <tr>
                <td className="sticky left-0 bg-white">S</td>
                <td>33in / 84cm</td>
                <td>26in / 66cm</td>
                <td>35in / 90cm</td>
              </tr>
              <tr>
                <td className="sticky left-0 bg-white">M</td>
                <td>35in / 88cm</td>
                <td>28in / 70cm</td>
                <td>37in / 94cm</td>
              </tr>
              <tr>
                <td className="sticky left-0 bg-white">L</td>
                <td>36in / 92cm</td>
                <td>29in / 74cm</td>
                <td>39in / 98cm</td>
              </tr>
              <tr>
                <td className="sticky left-0 bg-white">XL</td>
                <td>38in / 96cm</td>
                <td>31in / 78cm</td>
                <td>40in / 102cm</td>
              </tr>
              <tr>
                <td className="sticky left-0 bg-white">XXL</td>
                <td>39in / 100cm</td>
                <td>32in / 82cm</td>
                <td>42in / 106cm</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="h-7"></div>

        <p className="text-xs text-black">{size_guide.how_to_measure.title}</p>
        <p className="text-xs text-black">{size_guide.how_to_measure.guide}</p>
        <p className="text-xs text-black">{size_guide.how_to_measure.bust}</p>
        <p className="text-xs text-black">{size_guide.how_to_measure.waist}</p>
        <p className="text-xs text-black">{size_guide.how_to_measure.hips}</p>
      </section>
    </div>
  )
}
