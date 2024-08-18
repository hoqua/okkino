'use client'
import React, { useState, useTransition } from 'react'
import { Prisma } from '@prisma/client'
import Modal from './modal'
import { refundOrder } from '../../action'

export default function RefundBtn({ order }: { order: Prisma.OrderGetPayload<any> }) {
  const [isPending, startTransition] = useTransition()
  const [msg, setMsg] = useState('')
  const [refunded, setRefunded] = useState(false)

  function handleRefund() {
    startTransition(async () => {
      const response = await refundOrder(order.paymentIntent, order.id)
      if (response.success) {
        setRefunded(true)
      }

      setMsg(response.msg)
    })
  }
  return (
    <Modal
      buttonText="Refund Money"
      btnClassName="btn w-full bg-yellow-500 text-white hover:bg-yellow-600"
      buttonCloseText="Close"
    >
      <div className="flex flex-col gap-10">
        <div className="text-center">
          {msg ? (
            <p className={!refunded ? 'text-red-500' : ''}>{msg}</p>
          ) : (
            <p>Are you sure you want to refund money to customer?</p>
          )}
        </div>
        {!refunded && (
          <button
            onClick={handleRefund}
            className="btn w-full bg-green-500 text-white hover:bg-green-600"
          >
            {isPending && <span className="loading loading-spinner"></span>}
            Confirm
          </button>
        )}
      </div>
    </Modal>
  )
}
