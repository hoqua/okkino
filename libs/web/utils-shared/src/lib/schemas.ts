import { z } from 'zod'
import { OrderProductSchema } from '@okkino/shared/schema'

export const DeliveryOptions = z.enum(['other', 'moldova'])
export type DeliveryOptions = z.infer<typeof DeliveryOptions>

export const CheckoutProductSchema = z.object({
  host: z.string(),
  language: z.string(),
  delivery: DeliveryOptions,
  products: OrderProductSchema.array()
})

export type CheckoutProduct = z.infer<typeof CheckoutProductSchema>
