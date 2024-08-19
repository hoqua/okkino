'use client'
import React, { useTransition } from 'react'
import Modal from './modal'
import { removeOrder } from '../../action'

export default function DeleteOrderBtn({ orderId }: { orderId: string }) {
  const [isPending, startTransition] = useTransition()

  function handleDeleteOrder() {
    startTransition(async () => {
      await removeOrder(orderId)
    })
  }
  return (
    <Modal buttonText="Delete" btnClassName="btn w-full bg-red-500 text-white hover:bg-red-600">
      <div className="flex flex-col gap-10">
        <div className="text-center">
          <h2 className="text-lg">Are you sure you want to delete this order?</h2>
        </div>
        <button
          onClick={handleDeleteOrder}
          className="btn w-full bg-red-500 text-white hover:bg-red-600"
        >
          {isPending && <span className="loading loading-spinner"></span>}
          Confirm
        </button>
      </div>
    </Modal>
  )
}
