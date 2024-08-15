'use client'
import { emailAndShipOrder } from '../../action'

import { useTransition } from 'react'
import { Prisma } from '@prisma/client'
import { objectToString } from '../order/_components/utils'
import { OrderProduct } from '@okkino/shared/schema'
import { useForm } from 'react-hook-form'

export default function ShipOrderBtn(props: {
  order: Prisma.OrderGetPayload<any>
  products: OrderProduct[]
}) {
  const { order, products } = props
  const [isPending, startTransition] = useTransition()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<{ tracking_number: string }>()
  const items = products.reduce((acc, product) => {
    return acc + product.quantity
  }, 0)

  function submit(data: { tracking_number: string }) {
    startTransition(
      async () =>
        await emailAndShipOrder({
          email: order?.customerEmail || '',
          name: order?.customerName || '',
          message: 'Hi from next',
          orderId: order?.id || '',
          address: objectToString(order?.address),
          items,
          products,
          total: order?.total || 0,
          subTotal: order?.orderSubtotal || 0,
          shipping: order?.deliveryPrice || 0,
          tracking_number: data.tracking_number
        })
    )
  }

  return (
    <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit(submit)}>
      <input
        placeholder="Tracking Number"
        className={`w-full h-12 rounded-sm pl-2 border ${
          errors.tracking_number ? 'border-red-500' : 'border-black'
        }`}
        {...register('tracking_number', { required: true })}
      />
      <button className="btn w-full">
        {isPending && <span className="loading loading-spinner"></span>}
        ship
      </button>
    </form>
  )
}
