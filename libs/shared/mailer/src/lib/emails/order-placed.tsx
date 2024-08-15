import { Container, Img, Section, Text } from '@react-email/components'
import * as React from 'react'
import { ProductSection } from './common/product-section'
import { OrderDetails } from './common/order-details'
import { Footer } from './common/footer'
import EmailLayout from './common/email-layout'
import { SendOrderArgs } from '../types'

export default function OrderPlaced(props: SendOrderArgs) {
  const { name, products, items, total, subTotal, shipping } = props
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

        <Text className="text-sm text-center font-bold uppercase">Your order has been placed</Text>
        <Text className="text-xs text-center text-gray-600">
          Dear {name}, thank you for your purchase. We'll inform you promptly once it's dispatched.
          Feel free to reach out if you have any questions.
        </Text>
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
