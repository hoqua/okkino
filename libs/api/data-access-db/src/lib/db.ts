import { Prisma, PrismaClient } from '@prisma/client'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const NodeCache = require('node-cache')

export const db = new PrismaClient()

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 })

const include: Prisma.ProductInclude = {
  images: true,
  productSizes: true,
  availableColors: true,
  productCategories: true
}

export type ProductWithImages = Prisma.ProductGetPayload<{
  include: {
    images: true
    productSizes: true
    availableColors: true
    productCategories: true
  }
}>

const includeHomeBlock: Prisma.HomeBlockInclude = {
  image: true
}

type HomeBlockWithImage = Prisma.HomeBlockGetPayload<{
  include: {
    image: true
  }
}>

export async function getProducts(productCategory?: string) {
  const key = 'products_' + (productCategory ?? '')
  const fromCache = cache.get(key)

  if (fromCache) {
    return fromCache as ProductWithImages[]
  }

  const products = await db.product.findMany({
    where: {
      productCategories: {
        some: {
          name: productCategory
        }
      }
    },
    include
  })

  cache.set(key, products)

  return products as ProductWithImages[]
}

export async function getProduct(productName: string) {
  const key = 'product_' + productName
  const fromCache = cache.get(key)

  if (fromCache) {
    return fromCache as ProductWithImages
  }

  const product = await db.product.findUnique({
    where: {
      name: productName
    },
    include
  })

  cache.set(key, product)

  return product as ProductWithImages
}

export async function getProductCategories() {
  const key = 'productCategories'
  const fromCache = cache.get(key)

  if (fromCache) {
    return fromCache as { id: string; name: string }[]
  }

  const productCategories = await db.productCategory.findMany()

  cache.set(key, productCategories)
  return productCategories as { id: string; name: string }[]
}

export async function getHomeImages() {
  const key = 'homeImages'

  const fromCache = cache.get(key)
  if (fromCache) {
    return fromCache as HomeBlockWithImage[]
  }

  const homeImages = await db.homeBlock.findMany({
    include: includeHomeBlock
  })

  cache.set(key, homeImages)

  return homeImages as HomeBlockWithImage[]
}

export async function getProductLength() {
  const key = 'productLength'

  const fromCache = cache.get(key)
  if (fromCache) {
    return fromCache as { id: string; name: string }[]
  }

  const productLength = await db.productLength.findMany()

  cache.set(key, productLength)

  return productLength as { id: string; name: string }[]
}
