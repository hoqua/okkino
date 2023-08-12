'use server'

import { currentUser } from '@clerk/nextjs'
import { Product } from './_components/form'
import { db } from '@okkino/api/data-access-db'

export async function saveProduct(data: Product) {
  const user = await currentUser()
  if (!user) throw new Error('You must be logged to update products')

  const productBody = {
    name: data.name,
    description: data.description,
    price: data.price,
    discountPrice: data.discountPrice,
    productCategories: {
      connect: data.productCategories
    },
    productSizes: {
      connect: data.productSizes
    },
    availableColors: {
      connect: data.availableColors
    }
  }

  await db.product.upsert({
    where: data.id ? { id: data.id } : { id: data.id, name: data.name },
    create: {
      ...productBody,
      images: {
        createMany: {
          data: data.images.map((image) => ({
            url: image.url,
            title: data.name,
            bgColor: image.bgColor,
            order: image.order,
            key: image.key
          })),
          skipDuplicates: true
        }
      }
    },
    update: {
      ...productBody,
      images: {
        deleteMany: {
          key: {
            notIn: data.images.map((image) => image.key)
          }
        },
        createMany: {
          data: data.images.map((image) => ({
            url: image.url,
            title: data.name,
            bgColor: image.bgColor,
            order: image.order,
            key: image.key
          })),
          skipDuplicates: true
        }
      }
    }
  })
}
