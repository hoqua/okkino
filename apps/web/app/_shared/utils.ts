import { DeliveryOptions, OrderProduct } from '@okkino/shared/schema'

export const STANDARD_DELIVERY_PRICE = 20
export const EXPRESS_DELIVERY_PRICE = 85

export function compareCartProducts(p1: OrderProduct, p2: OrderProduct) {
  const { quantity: _, ...product1 } = p1
  const { quantity: __, ...product } = p2
  return JSON.stringify(product1) === JSON.stringify(product)
}

export function getDeliveryPrice(method: DeliveryOptions, price: number) {
  if (method === DeliveryOptions.enum.express) {
    return EXPRESS_DELIVERY_PRICE
  }

  return price < 300 ? STANDARD_DELIVERY_PRICE : 0
}
