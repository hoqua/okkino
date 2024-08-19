'use client'
import React, { useTransition } from 'react'
import { Prisma } from '@prisma/client'
import Modal from './modal'
import { emailAndCancelOrder } from '../../action'
import { OrderProduct } from '@okkino/shared/schema'

export default function CancelOrderBtn({
  order,
  products
}: {
  order: Prisma.OrderGetPayload<any>
  products: OrderProduct[]
}) {
  const [isPending, startTransition] = useTransition()
  const items = products.reduce((acc, product) => {
    return acc + product.quantity
  }, 0)
  function handleCancelOrder() {
    startTransition(async () => {
      await emailAndCancelOrder({
        name: order?.customerName || '',
        email: order?.customerEmail || '',
        items,
        products,
        shipping: order?.deliveryPrice || 0,
        subTotal: order?.orderSubtotal || 0,
        total: order?.total || 0,
        orderId: order.id
      })
    })
  }
  return (
    <Modal
      buttonText="Cancel"
      btnClassName="btn w-full bg-orange-500 text-white hover:bg-orange-600"
    >
      <div className="flex flex-col gap-10">
        <div className="text-center">
          <h2 className="text-lg">Are you sure you want to cancel this order?</h2>
        </div>
        <button
          onClick={handleCancelOrder}
          className="btn w-full bg-green-500 text-white hover:bg-green-600"
        >
          {isPending && <span className="loading loading-spinner"></span>}
          Confirm
        </button>
      </div>
    </Modal>
  )
}
