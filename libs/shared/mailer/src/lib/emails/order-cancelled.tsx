import { Container, Img, Section, Text } from '@react-email/components'
import * as React from 'react'
import { ProductSection } from './common/product-section'
import { OrderDetails } from './common/order-details'
import { Footer } from './common/footer'
import EmailLayout from './common/email-layout'
import { SendOrderArgs } from '../types'

export default function OrderCanceled(props: SendOrderArgs) {
  const { products, items, total, subTotal, shipping } = props
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
          Regrettably, your order has been canceled
        </Text>
        <Text className="text-xs text-center text-gray-600">
          We apologize for any inconvenience caused. Please feel free to reach out to us with any
          questions or concerns.
        </Text>
        <Section className="mt-20" />
        <Text className="uppercase text-sm font-bold text-center">Canceled Items</Text>
        <Section className="mt-10" />

        <div className="opacity-50">
          {products.map((product) => (
            <>
              <ProductSection product={product} />
              <Section className="mt-20" />
            </>
          ))}
        </div>

        <OrderDetails items={items} shipping={shipping} subTotal={subTotal} total={total} />
        <Section className="mt-20" />

        <Footer cancel={true} />
        <Section className="mt-20" />
      </Container>
    </EmailLayout>
  )
}
