import {
  Body,
  Container,
  Font,
  Head,
  Html,
  Img,
  Section,
  Tailwind,
  Text
} from '@react-email/components'
import * as React from 'react'
import { ProductSection } from './common/product-section'
import { OrderDetails } from './common/order-details'
import { Footer } from './common/footer'
import { SendOrderArgs } from '../email.service'

export default function OrderPlaced(props: SendOrderArgs) {
  const { name } = props
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Lato"
          fallbackFontFamily="Helvetica"
          fontWeight={400}
          fontStyle="normal"
        />
        <title className="text-xl">Thanks for buying OK KINO piece!</title>
      </Head>
      <Tailwind>
        <Body className="bg-[#FFFDF8]">
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
              Your order has been placed
            </Text>
            <Text className="text-xs text-center text-gray-600">
              Dear {name}, thank you for your purchase. We'll inform you promptly once it's
              dispatched. Feel free to reach out if you have any questions.
            </Text>
            <Section className="mt-20" />

            <ProductSection />
            <Section className="mt-20" />

            <OrderDetails />
            <Section className="mt-20" />

            <Footer />
            <Section className="mt-20" />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
