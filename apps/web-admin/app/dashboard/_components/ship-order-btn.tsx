'use client'
import { emailAndShipOrder } from '../../action'

import { useTransition } from 'react'
import { Prisma } from '@prisma/client'

export default function ShipOrderBtn(props: { order: Prisma.OrderGetPayload<any> }) {
  const { order } = props
  const [isPending, startTransition] = useTransition()

  function handleClick() {
    startTransition(
      async () =>
        await emailAndShipOrder({
          email: order?.customerEmail || '',
          name: order?.customerName || '',
          message: 'Hi from next',
          orderId: order?.id || ''
        })
    )
  }

  return (
    <button onClick={handleClick} className="btn">
      {isPending && <span className="loading loading-spinner"></span>}
      ship
    </button>
  )
}
