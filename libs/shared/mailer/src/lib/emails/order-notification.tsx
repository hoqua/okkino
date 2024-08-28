import EmailLayout from './common/email-layout'
import { Container, Img, Section, Text } from '@react-email/components'
import { OrderDetails } from './common/order-details'
import { OrderNotificationArgs } from '../types'
import React from 'react'

export default function OrderNotifications(props: OrderNotificationArgs) {
  const { items, shipping, customerName, subTotal, total } = props
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
          A new order has been placed by {customerName}. Here are the details:
        </Text>
        <Section className="mt-10" />
        <OrderDetails items={items} shipping={shipping} total={total} subTotal={subTotal} />
        <Section className="mt-20" />
      </Container>
    </EmailLayout>
  )
}
