import { useLocalStorageSafe } from 'use-local-storage-safe'
import { CartProduct, CartProductSchema } from './product.schema'

export const storageOptions = {
  validateInit: (value) => CartProductSchema.array().safeParse(value).success
}
export const storageDefaultValue = []

export const useCart = () => {
  return useLocalStorageSafe<CartProduct[]>('okkino-cart', storageDefaultValue, storageOptions)
}
