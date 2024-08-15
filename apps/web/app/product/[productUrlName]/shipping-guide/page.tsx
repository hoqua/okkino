import Link from 'next/link'
import { RouteName } from '../../../components/common/constants'

interface IProductPageProps {
  params: { productUrlName: string }
}

export default async function Page(props: IProductPageProps) {
  const { params } = props

  return (
    <div
      className={
        // full screen - 9rem (header height)
        'xl:h-[calc(100vh-9rem)] ' +
        'xl:overflow-y-scroll ' +
        'xl:scrollbar-hide ' +
        'left-0 top-16 max-w-full bg-white p-6 text-8xl max-sm:absolute flex flex-col gap-12 '
      }
    >
      <div className="flex w-full items-end ">
        <Link
          href={'/' + RouteName.product + '/' + params.productUrlName}
          className="okkino-text-hover w-full text-right text-xs uppercase"
        >
          {t.close}
        </Link>
      </div>

      <section className="text-sm text-black flex flex-col gap-5">
        <h3 className="text-xs uppercase text-gray-700">{t.shipping.title}</h3>
        <p>{t.shipping.description}</p>

        <div>
          <p>{t.deliver_cost.title}</p>
          <p>{t.deliver_cost.up_to_300}</p>
          <p>{t.deliver_cost.from_300}</p>
          <p>{t.deliver_cost.express}</p>
        </div>

        <p>{t.shipping.p1}</p>
        <p>{t.shipping.p2}</p>
        <p>{t.shipping.p3}</p>
        <p>{t.shipping.p4}</p>
        <p>{t.shipping.p5}</p>

        <p className="flex items-center gap-1">
          {t.contact.title}
          <Link href={`mailto:${t.contact.email}`} className="underline">
            {t.contact.email}
          </Link>
        </p>
      </section>

      <section className="text-sm text-black flex flex-col gap-5">
        <h3 className="text-xs uppercase text-gray-700">{t.returns.title}</h3>
        <p>{t.returns.description}</p>

        <div>
          <p className="flex items-center gap-1">
            {t.returns.contact_msg}
            <Link href={`mailto:${t.contact.email}`} className="underline">
              {t.contact.email}
            </Link>
          </p>
          <p>{t.returns.p1}</p>
        </div>

        <p>{t.returns.p2}</p>
        <p>{t.returns.p3}</p>
        <p>{t.returns.p4}</p>
        <p>{t.returns.p5}</p>

        <p className="flex items-center gap-1">
          {t.contact.title}
          <Link href={`mailto:${t.contact.email}`} className="underline">
            {t.contact.email}
          </Link>
        </p>
      </section>
    </div>
  )
}

const t = {
  close: 'close',
  shipping: {
    title: 'Shipping',
    description:
      'At OK KINO, we prioritize quality and sustainability. Each piece is crafted with care and dedication. To prevent overproduction, we create your items to order. As a result, please allow up to one week for us to prepare your order. Thank you for your patience and for supporting our commitment to thoughtful craftsmanship.',
    p1: "Please note the prices do not include international taxes and customs fees, your delivery might be subject to additional costs depending on the destination country's legislation.",
    p2: 'Standard delivery takes from 5 to 14 business days. Express delivery takes from 1 to 5 business days.',
    p3: 'Please note that delivery times may be longer during busy periods or holidays. In case of any changes you will be contacted by our sales team.',
    p4: 'We cannot specify the exact time of your delivery, just the possible timeframe. As per international laws regulating commerce and trade of imports and exports all our orders are shipped out of Chisinau, Moldova.',
    p5: 'If your order is taking longer than expected or you want to find out when it will arrive, you can check its progress using the tracking information sent in your order confirmation email.'
  },
  deliver_cost: {
    title: 'Standard worldwide delivery cost:',
    up_to_300: 'Order amount up to 300 euro — 20 euro',
    from_300: 'Order amount from 300 euro — free',
    express: 'Express delivery cost — 85 euro'
  },
  returns: {
    title: 'Returns',
    description:
      'We offer full refunds or exchanges into a different size if an unwanted item is shipped/postmarked within 7 days from when it was delivered to you. The cost of shipment of the order is not refundable.',
    contact_msg: 'In order to initiate a return, you should write to us at',
    p1: 'Please notice that shipping costs are covered by the buyer',
    p2: 'In order to receive a full refund, the item must be returned in its original condition with original labels and packaging. We reserve the right to refuse a return or exchange if the merchandise does not meet our standards. Where provided, all original packaging to accompany the item must be included and returned in its original condition.',
    p3: 'Goods that are returned with damages may not be accepted, and may be sent back to the customer.',
    p4: 'In case of absence of desired size, OK KINO may provide an equivalent item or issue a refund.',
    p5: 'In cases not covered by this delivery and return policy, issues are solved individually by negotiations of the parties.'
  },
  contact: {
    title: 'For any further questions, please email us at',
    email: 'contact@studiookkino.com'
  }
}
