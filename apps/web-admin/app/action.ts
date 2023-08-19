'use server'

import { webAdminEnv } from '@okkino/web/utils-env-admin'
import { currentUser } from '@clerk/nextjs'
import { db, shipOrder } from '@okkino/api/data-access-db'
import { Product } from './dashboard/product/_components/form'
import { revalidatePath } from 'next/cache'
import nodemailer from 'nodemailer'

export async function emailAndShipOrder(data: {
  name: string
  email: string
  message: string
  orderId: string
}) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: webAdminEnv.email.name,
      pass: webAdminEnv.email.pass
    }
  })

  const mailDetails = {
    from: webAdminEnv.email.name,
    to: data.email,
    subject: 'Test mail',
    text: 'Node.js testing mail'
  }
  await transporter.sendMail(mailDetails)
  await shipOrder(data.orderId)
  revalidatePath('/dashboard/order')
  revalidatePath(`/dashboard/order/${data.orderId}`)
}

export async function redeploy() {
  const user = await currentUser()
  if (!user) throw new Error('You must be logged in to redeploy')

  await fetch(webAdminEnv.deployHook, { method: 'GET' })
}

export async function deleteProduct(id: string, name: string) {
  const user = await currentUser()
  if (!user) throw new Error('You must be logged in to delete user')

  await db.product.update({ where: { id }, data: { deleted: true, name: name + '_deleted_' + id } })
  revalidatePath('/dashboard')
  revalidatePath(`/dashboard/product/${id}`)
}

export async function saveProduct(data: Product) {
  const user = await currentUser()
  if (!user) throw new Error('You must be logged to update products')
  revalidatePath('/dashboard')

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
