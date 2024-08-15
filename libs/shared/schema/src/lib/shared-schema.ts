import { z } from 'zod'

export const OrderProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  size: z.string(),
  length: z.string(),
  color: z.object({ value: z.string(), name: z.string() }),
  discountPrice: z.number().optional(),
  imageUrl: z.string(),
  quantity: z.number(),
  urlName: z.string()
})

export type OrderProduct = z.infer<typeof OrderProductSchema>

export const DeliveryOptions = z.enum(['express', 'standard'])
export type DeliveryOptions = z.infer<typeof DeliveryOptions>

export const CheckoutProductSchema = z.object({
  host: z.string(),
  delivery: DeliveryOptions,
  products: OrderProductSchema.array()
})

export type CheckoutProduct = z.infer<typeof CheckoutProductSchema>
