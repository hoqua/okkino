import { OrderProduct } from '@okkino/shared/schema'

export function compareCartProducts(p1: OrderProduct, p2: OrderProduct) {
  const { quantity: _, ...product1 } = p1
  const { quantity: __, ...product } = p2
  return JSON.stringify(product1) === JSON.stringify(product)
}
