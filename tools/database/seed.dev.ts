import { PrismaClient } from '@prisma/client'
import {
  COLORS,
  HOME_BLOCK_DATA,
  HOME_BLOCK_IMAGES,
  HOME_BLOCKS_COLORS_DATA,
  PRODUCT_COVER_IMAGES,
  PRODUCT_DATA,
  PRODUCTS,
  USERS_SEED_DATA
} from './seed-data'
const prisma = new PrismaClient()

async function main() {
  await Promise.all(
    USERS_SEED_DATA.map((user) => {
      return prisma.user.upsert({
        where: { id: user.id },
        update: user,
        create: user
      })
    })
  )

  await Promise.all(
    HOME_BLOCKS_COLORS_DATA.map((color) => {
      return prisma.rgbColor.upsert({
        where: { id: color.id },
        update: color,
        create: color
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

  for (const product of PRODUCTS) {
    await prisma.rgbColor.upsert({
      where: { id: product + 1 },
      create: { ...COLORS[0].color, productId: product, id: product + 1 },
      update: { ...COLORS[0].color, productId: product, id: product + 1 }
    })

    await prisma.rgbColor.upsert({
      where: { id: product + 2 },
      create: { ...COLORS[1].color, productId: product, id: product + 2 },
      update: { ...COLORS[1].color, productId: product, id: product + 2 }
    })
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
