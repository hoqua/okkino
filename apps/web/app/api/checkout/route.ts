import Stripe from 'stripe'
import { webEnv } from '@okkino/web/utils-env'
import { NextResponse } from 'next/server'
import { CheckoutProductSchema, DeliveryOptions } from '../../[lang]/cart/components/types'
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://01f8c52ebd9b45fd8f645b61599970fd@o4505696827932672.ingest.sentry.io/4505696829964288',

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
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
            images: [product.imageUrl]
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
      cancel_url: `${checkout.host}/${checkout.language}/post-checkout?success=false`
    })

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
      amount: 1500,
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
