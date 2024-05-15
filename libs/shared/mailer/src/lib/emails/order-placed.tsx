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
  const { name, products, items, total, subTotal, shipping } = props
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
      <Tailwind
        config={{
          theme: {
            colors: {
              black: '#262217',
              white: '#FFFDF8',
              gray: {
                100: '#F5F5F5',
                200: '#EEEEEE',
                300: '#E0E0E0',
                400: '#BDBDBD',
                500: '#9E9E9E',
                600: '#757575',
                700: '#616161',
                800: '#424242',
                900: '#212121'
              }
            }
          }
        }}
      >
        <Body className="bg-white text-black">
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
        </Body>
      </Tailwind>
    </Html>
  )
}
