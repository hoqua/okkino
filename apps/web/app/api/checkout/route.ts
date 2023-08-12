import Stripe from 'stripe'
import { webEnv } from '@okkino/web/utils-env'
import { NextResponse } from 'next/server'
import { CheckoutProductSchema, DeliveryOptions } from '../../[lang]/cart/components/types'

const stripe = new Stripe(webEnv.stripe.secretKey, { apiVersion: '2022-11-15' })

export async function POST(request: Request) {
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
      allowed_countries: checkout.delivery === DeliveryOptions.enum.moldova ? ['MD'] : ['US', 'MD']
    },
    shipping_options: [
      checkout.delivery === DeliveryOptions.enum.moldova ? freeShipping : internationalShipping
    ],
    mode: 'payment',
    success_url: `${checkout.host}/${checkout.language}/post-checkout?success=true`,
    cancel_url: `${checkout.host}/${checkout.language}/post-checkout?success=false`
  })

  return NextResponse.json({ id: session.id })
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
