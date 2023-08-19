import { Prisma, PrismaClient } from '@prisma/client'
import { CheckoutProduct } from '@okkino/web/utils-shared'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const NodeCache = require('node-cache')

export const db = new PrismaClient()

const cache = new NodeCache({ stdTTL: 1, checkperiod: 2 })

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
      deleted: false,
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
      deleted: false,
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

export async function createInitialOrder(id: string, checkout: CheckoutProduct) {
  await db.order.create({
    data: {
      id,
      language: checkout.language,
      products: checkout.products,
      address: {}
    }
  })
}

export async function fulfillOrder(
  id: string,
  address: Prisma.InputJsonValue,
  customerName: string,
  total: number,
  customerEmail: string
) {
  await db.order.update({
    where: { id },
    data: {
      fulfilled: true,
      address,
      customerName,
      total,
      customerEmail
    }
  })
}

export async function shipOrder(id: string) {
  await db.order.update({
    where: { id },
    data: {
      shipped: true
    }
  })
}

export async function getOrders(fulfilled = true) {
  return db.order.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
}

export async function getOrder(id: string) {
  return db.order.findUnique({
    where: { id }
  })
}
