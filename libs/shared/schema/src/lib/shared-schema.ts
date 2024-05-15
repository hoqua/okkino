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
  quantity: z.number()
})

export type OrderProduct = z.infer<typeof OrderProductSchema>
