import { z } from 'zod'

export const CartProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  size: z.string(),
  length: z.string(),
  color: z.object({ value: z.string(), name: z.string() }),
  discountPrice: z.number().optional(),
  imageUrl: z.string(),
  quantity: z.number()
})

export const DeliveryOptions = z.enum(['other', 'moldova'])
export type DeliveryOptions = z.infer<typeof DeliveryOptions>

export const CheckoutProductSchema = z.object({
  host: z.string(),
  language: z.string(),
  delivery: DeliveryOptions,
  products: CartProductSchema.array()
})

export type CartProduct = z.infer<typeof CartProductSchema>
export type CheckoutProduct = z.infer<typeof CheckoutProductSchema>
