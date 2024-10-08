import { Prisma, PrismaClient } from '@prisma/client'
import { CheckoutProduct } from '@okkino/shared/schema'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const NodeCache = require('node-cache')

export const db = new PrismaClient({
  datasourceUrl: process.env?.['POSTGRES_PRISMA_URL'] || ''
})

const cache = new NodeCache({ stdTTL: 1, checkperiod: 2 })

const include: Prisma.ProductInclude = {
  images: {
    orderBy: {
      order: 'asc'
    }
  },
  productSizes: true,
  availableColors: true,
  productCategories: true
}

export type ProductWithImages = Prisma.ProductGetPayload<{
  include: {
    images: {
      orderBy: {
        order: 'asc'
      }
    }
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
    orderBy: {
      order: 'asc'
    },
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

export async function getProduct(urlName: string) {
  const key = 'product_' + urlName
  const fromCache = cache.get(key)

  if (fromCache) {
    return fromCache as ProductWithImages
  }

  const product = await db.product.findUnique({
    where: {
      deleted: false,
      urlName: urlName
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
      language: 'en',
      products: checkout.products,
      address: {}
    }
  })
}

export async function fulfillOrder({
  id,
  address,
  customerName,
  total,
  customerEmail,
  paymentIntent,
  deliveryPrice,
  orderSubtotal,
  customerPhone
}: {
  id: string
  address: Prisma.InputJsonValue
  customerName: string
  total: number
  customerEmail: string
  deliveryPrice: number
  paymentIntent: string
  orderSubtotal: number
  customerPhone: string
}) {
  return db.order.update({
    where: { id },
    data: {
      fulfilled: true,
      address,
      customerName,
      total,
      customerEmail,
      paymentIntent,
      deliveryPrice,
      orderSubtotal,
      customerPhone
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

export async function cancelOrder(id: string) {
  await db.order.update({
    where: { id },
    data: {
      canceled: true
    }
  })
}

export async function deleteOrder(id: string) {
  await db.order.delete({ where: { id } })
}

export async function getOrders() {
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

export async function updateRefundStatus(id: string) {
  return db.order.update({
    where: { id },
    data: {
      refunded: true
    }
  })
}
