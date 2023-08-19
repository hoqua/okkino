import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { buffer } from 'node:stream/consumers'

import Stripe from 'stripe'
import { webEnv } from '@okkino/web/utils-env'
import { fulfillOrder } from '@okkino/api/data-access-db'
import * as Sentry from '@sentry/nextjs'

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
        { message: 'Webhook signature verification failed' },
        { status: 400 }
      )
    }

    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      await fulfillOrder(
        event.data.object.id,
        event.data.object.shipping.address,
        event.data.object.shipping.name,
        event.data.object.amount_total / 100,
        event.data.object.customer_details.email
      )
    }
  } catch (error) {
    Sentry.captureException(error, {
      user: event?.data.object.customer_details.email
    })
  }

  return NextResponse.json({ success: true })
}
