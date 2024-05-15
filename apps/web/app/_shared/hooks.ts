import { useLocalStorageSafe } from 'use-local-storage-safe'
import { OrderProduct, OrderProductSchema } from '@okkino/shared/schema'

export const storageOptions = {
  validateInit: (value) => OrderProductSchema.array().safeParse(value).success
}
export const storageDefaultValue = []

export const useCart = () => {
  return useLocalStorageSafe<OrderProduct[]>('okkino-cart', storageDefaultValue, storageOptions)
}
