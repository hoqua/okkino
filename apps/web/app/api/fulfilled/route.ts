import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { buffer } from 'node:stream/consumers'

import Stripe from 'stripe'
import { webEnv } from '@okkino/web/utils-env'
import { fulfillOrder, updateRefundStatus } from '@okkino/api/data-access-db'
import * as Sentry from '@sentry/nextjs'
import { sendOrderPlacedEmail } from '@okkino/shared/mailer'
import { OrderProduct } from '@okkino/shared/schema'
import { sendEmailOrderNotification } from '@okkino/shared/mailer'

Sentry.init({
  dsn: 'https://01f8c52ebd9b45fd8f645b61599970fd@o4505696827932672.ingest.sentry.io/4505696829964288',
  tracesSampleRate: 1
})

const stripe = new Stripe(webEnv.stripe.secretKey as string, {
  apiVersion: '2022-11-15'
})

export async function POST(req: NextRequest) {
  let event: Stripe.Event
  try {
    try {
      const rawBody = await buffer(req.body as any)
      event = stripe.webhooks.constructEvent(
        rawBody,
        headers().get('stripe-signature'),
        webEnv.stripe.endpointSecret
      )
    } catch {
      return NextResponse.json(
        { message: 'Webhook signature verification failed', success: false }
      )
    }

    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const object = event?.data.object as Stripe.Checkout.Session
      console.log('🔔  Payment was successful!', object)
      const total = object.amount_total / 100
      const subTotal = object.amount_subtotal / 100
      const shipping = object.total_details.amount_shipping / 100

      const order = await fulfillOrder({
        id: object.id,
        address: object.shipping_details.address as object,
        customerName: object.shipping_details.name,
        total,
        customerEmail: object.customer_details.email,
        customerPhone: object.customer_details.phone,
        paymentIntent: String(object.payment_intent),
        deliveryPrice: shipping,
        orderSubtotal: subTotal
      })
      const items = (order.products as OrderProduct[]).reduce((acc, product) => {
        return acc + product.quantity
      }, 0)

      console.log('🔔  Order fulfilled!', order)

      await sendOrderPlacedEmail({
        shipping,
        items,
        subTotal,
        products: order.products as OrderProduct[],
        total,
        email: object.customer_details.email,
        name: object.shipping_details.name,
        pass: webEnv.email.pass
      })
      await sendEmailOrderNotification({
        shipping,
        subTotal,
        total,
        items,
        customerName: object.shipping_details.name,
        pass: webEnv.email.pass,
        orderId: object.id
      })
    } else if (event.type === 'charge.refunded') {
      const object = event?.data.object as any
      const paymentIntent = object.payment_intent
      const sessions = await stripe.checkout.sessions.list({ payment_intent: paymentIntent })
      await updateRefundStatus(sessions.data[0].id)
    }
  } catch (error) {
    const object = event?.data.object as any
    Sentry.captureException(error, {
      user: object.customer_details.email
    })
  }

  return NextResponse.json({ success: true })
}
