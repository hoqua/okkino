import React from 'react'
import EmailLayout from './common/email-layout'
import { Container, Img, Section, Text } from '@react-email/components'
import { ProductSection } from './common/product-section'
import { OrderDetails } from './common/order-details'
import { Footer } from './common/footer'
import { DispatchOrder, DispatchOrderArgs } from '../types'

export default function OrderDispatched(props: DispatchOrderArgs) {
  const { products, items, total, subTotal, shipping } = props.order
  return (
    <EmailLayout>
      <Container>
        <Img
          src="https://utfs.io/f/20c34913-02b0-442a-a629-ebdccb6d286f-1zbfv.png"
          alt="Cat"
          width="288"
          height="48"
          className="mt-10 mb-10"
          style={{ margin: 'auto' }}
        />

        <Text className="text-sm text-center font-bold uppercase">
          Your order has been successfully dispatched and will arrive shortly
        </Text>
        <Text className="text-xs text-center text-gray-600">Don't hesitate to contact us.</Text>
        <Section className="mt-20" />
        <DispatchedOrderDetails details={props.dispatchedOrder} />

        <Section className="mt-20" />

        {products.map((product) => (
          <>
            <ProductSection product={product} />
            <Section className="mt-20" />
          </>
        ))}

        <OrderDetails items={items} shipping={shipping} subTotal={subTotal} total={total} />
        <Section className="mt-20" />

        <Footer />
        <Section className="mt-20" />
      </Container>
    </EmailLayout>
  )
}

function DispatchedOrderDetails({ details }: { details: DispatchOrder }) {
  const { client_name, client_address, tracking_number } = details
  return (
    <Section>
      <table>
        <tbody>
          <tr>
            <td>
              <Text className="m-0 text-gray-800 uppercase text-sm font-bold">
                Tracking Number:
              </Text>
            </td>
            <td>
              <Text className="m-0 ml-2 text-sx text-gray-800">{tracking_number}</Text>
            </td>
          </tr>

          <tr>
            <td>
              <Text className="m-0 text-gray-800 uppercase text-sm font-bold">
                Shipping Address:
              </Text>
            </td>
            <td>
              <Text className="m-0 ml-2 text-sx text-gray-800">${client_name}</Text>
              <Text className="m-0 ml-2 text-sx text-gray-800">${client_address}</Text>
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  )
}
