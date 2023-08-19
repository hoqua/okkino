import Stripe from 'stripe'
import { webEnv } from '@okkino/web/utils-env'
import { NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'
import { createInitialOrder } from '@okkino/api/data-access-db'
import { CheckoutProductSchema, DeliveryOptions } from '@okkino/web/utils-shared'

Sentry.init({
  dsn: 'https://01f8c52ebd9b45fd8f645b61599970fd@o4505696827932672.ingest.sentry.io/4505696829964288',
  tracesSampleRate: 1
})

const stripe = new Stripe(webEnv.stripe.secretKey, { apiVersion: '2022-11-15' })

export async function POST(request: Request) {
  try {
    const checkout = CheckoutProductSchema.parse(await request.json())

    const session = await stripe.checkout.sessions.create({
      line_items: checkout.products.map((product) => ({
        price_data: {
          product_data: {
            name: product.name,
            images: [product.imageUrl],
            description: `${product.quantity} x ${product.name}; Color: ${product.color.name}, Size: ${product.size}, Length: ${product.length}`
          },
          currency: 'usd',
          unit_amount: product.price * 100
        },
        quantity: product.quantity
      })),
      invoice_creation: { enabled: true },
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries:
          checkout.delivery === DeliveryOptions.enum.moldova ? ['MD'] : ['US', 'MD']
      },
      shipping_options: [
        checkout.delivery === DeliveryOptions.enum.moldova ? freeShipping : internationalShipping
      ],
      mode: 'payment',
      success_url: `${checkout.host}/${checkout.language}/post-checkout?success=true`,
      cancel_url: `${checkout.host}/${checkout.language}/cart`
    })

    await createInitialOrder(session.id, checkout)

    return NextResponse.json({ id: session.id })
  } catch (error) {
    Sentry.captureException(error)
    throw error
  }
}

const freeShipping = {
  shipping_rate_data: {
    type: 'fixed_amount',
    fixed_amount: {
      amount: 0,
      currency: 'usd'
    },
    display_name: 'Free shipping',
    delivery_estimate: {
      minimum: {
        unit: 'business_day',
        value: 14
      },
      maximum: {
        unit: 'business_day',
        value: 28
      }
    }
  }
} as any

const internationalShipping = {
  shipping_rate_data: {
    type: 'fixed_amount',
    fixed_amount: {
      amount: 5000,
      currency: 'usd'
    },
    display_name: 'Next day air',
    delivery_estimate: {
      minimum: {
        unit: 'business_day',
        value: 14
      },
      maximum: {
        unit: 'business_day',
        value: 28
      }
    }
  }
} as any
