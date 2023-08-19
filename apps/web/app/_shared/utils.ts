import { CartProduct } from './product.schema'

export function compareCartProducts(p1: CartProduct, p2: CartProduct) {
  const { quantity: _, ...product1 } = p1
  const { quantity: __, ...product } = p2
  return JSON.stringify(product1) === JSON.stringify(product)
}
