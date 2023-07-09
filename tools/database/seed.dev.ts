import { PrismaClient } from '@prisma/client'
import {
  HOME_BLOCK_DATA,
  HOME_BLOCK_IMAGES,
  PRODUCT_COVER_IMAGES,
  PRODUCT_DATA,
  PRODUCTS,
} from './seed-data'
import {
  PRODUCT_CATEGORIES,
  PRODUCT_COLORS,
  PRODUCT_LENGTHS,
  PRODUCT_SIZES
} from './seed-data.prod'
const prisma = new PrismaClient()

async function main() {
  await Promise.all(
    PRODUCT_LENGTHS.map((length) => {
      return prisma.productLength.upsert({
        where: { name: length.name },
        update: length,
        create: length
      })
    })
  )
  await Promise.all(
    PRODUCT_COLORS.map((color) => {
      return prisma.rgbColor.upsert({
        where: { name: color.name },
        update: color,
        create: color
      })
    })
  )

  await Promise.all(
    PRODUCT_SIZES.map((size) => {
      return prisma.productSize.upsert({
        where: { name: size.name },
        update: size,
        create: size
      })
    })
  )

  await Promise.all(
    PRODUCT_CATEGORIES.map((category) => {
      return prisma.productCategory.upsert({
        where: { name: category.name },
        update: category,
        create: category
      })
    })
  )

  await Promise.all(
    HOME_BLOCK_IMAGES.map((image) => {
      return prisma.image.upsert({
        where: { id: image.id },
        update: image,
        create: image
      })
    })
  )

  await Promise.all(
    HOME_BLOCK_DATA.map((homeBlock) => {
      return prisma.homeBlock.upsert({
        where: { id: homeBlock.id },
        update: homeBlock,
        create: homeBlock
      })
    })
  )

  await Promise.all(
    PRODUCT_DATA.map((product) => {
      return prisma.product.upsert({
        where: { id: product.id },
        update: product,
        create: product
      })
    })
  )

  for (const product of PRODUCTS) {
    for (const image of PRODUCT_COVER_IMAGES) {
      await prisma.image.upsert({
        where: { id: product + image.id },
        create: {
          ...image,
          id: product + image.id,
          product: {
            connect: { id: product }
          }
        },
        update: {
          ...image,
          id: undefined,
          product: {
            connect: { id: product }
          }
        }
      })
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
