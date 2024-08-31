import Stripe from 'stripe'
import { webEnv } from '@okkino/web/utils-env'
import { NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'
import { createInitialOrder } from '@okkino/api/data-access-db'
import { CheckoutProductSchema, DeliveryOptions } from '@okkino/shared/schema'
import { getDeliveryPrice } from '../../_shared/utils'

Sentry.init({
  dsn: 'https://01f8c52ebd9b45fd8f645b61599970fd@o4505696827932672.ingest.sentry.io/4505696829964288',
  tracesSampleRate: 1
})

const stripe = new Stripe(webEnv.stripe.secretKey, { apiVersion: '2022-11-15' })

export async function POST(request: Request) {
  try {
    const checkout = CheckoutProductSchema.parse(await request.json())
    const price = checkout.products.reduce(
      (a, b) => a + b.quantity * (b.discountPrice || b.price),
      0
    )

    const session = await stripe.checkout.sessions.create({
      line_items: checkout.products.map((product) => ({
        price_data: {
          product_data: {
            name: product.name,
            images: [product.imageUrl],
            description: `${product.quantity} x ${product.name}; Color: ${product.color.name}, Size: ${product.size}, Length: ${product.length}`
          },
          currency: 'eur',
          unit_amount: product.discountPrice * 100 || product.price * 100
        },
        quantity: product.quantity
      })),
      invoice_creation: { enabled: true },
      billing_address_collection: 'required',
      phone_number_collection: {
        enabled: true
      },
      shipping_address_collection: {
        allowed_countries:
          checkout.delivery === DeliveryOptions.enum.standard ? ['MD'] : ['US', 'MD']
      },
      shipping_options: [getShippingDetails(checkout.delivery, price)],
      mode: 'payment',
      success_url: `${checkout.host}/post-checkout?success=true`,
      cancel_url: `${checkout.host}/cart`
    })

    await createInitialOrder(session.id, checkout)

    return NextResponse.json({ id: session.id })
  } catch (error) {
    Sentry.captureException(error)
    throw error
  }
}

function getShippingDetails(
  method: DeliveryOptions,
  price: number
): Stripe.Checkout.SessionCreateParams.ShippingOption {
  return {
    shipping_rate_data: {
      type: 'fixed_amount',
      fixed_amount: {
        amount: getDeliveryPrice(method, price) * 100,
        currency: 'eur'
      },
      display_name: method === DeliveryOptions.enum.standard ? 'Standard' : 'Express',
      delivery_estimate: {
        minimum: {
          unit: 'business_day',
          value: method === DeliveryOptions.enum.express ? 1 : 5
        },
        maximum: {
          unit: 'business_day',
          value: method === DeliveryOptions.enum.express ? 5 : 14
        }
      }
    }
  }
}
