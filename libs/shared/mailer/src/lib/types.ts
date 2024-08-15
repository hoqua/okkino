import { OrderProduct } from '@okkino/shared/schema'

export type SendOrderArgs = {
  name: string
  total: number
  subTotal: number
  email: string
  pass: string
  products: OrderProduct[]
  items: number
  shipping: number
}

export type DispatchDetails = {
  client_address: string
  tracking_number: string
}

export type DispatchOrderArgs = {
  order: SendOrderArgs
  dispatchDetails: DispatchDetails
}
