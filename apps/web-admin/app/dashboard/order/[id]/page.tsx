import { getOrder } from '@okkino/api/data-access-db'
import OrderCrumbs from '../_components/order-crumbs'

import OrdersTable from '../_components/orders-table'
import CustomerTable from '../_components/customer-table'
import { objectToString } from '../_components/utils'
import ShipOrderBtn from '../../_components/ship-order-btn'
import { OrderProductSchema } from '@okkino/shared/schema'
import CancelOrderBtn from '../../_components/cancel-order-btn'
import RefundBtn from '../../_components/refund-btn'
import DeleteOrderBtn from '../../_components/delete-btn'

export default async function OrderDetails(props: { params: { id: string } }) {
  const order = await getOrder(props.params.id)
  const products = OrderProductSchema.array().parse(order?.products)

  if (!order) throw new Error('Order not found')

  return (
    <div className="flex flex-col gap-16">
      <OrderCrumbs />

      <CustomerTable order={order} />

      <div className="p-4">
        <p className="text-sm">Address</p>
        <div className="divider"></div>

        <p className="text-sm">{objectToString(order.address)}</p>
      </div>

      <OrdersTable products={products} />
      <div className="flex flex-col gap-5">
        {!order.shipped && !order.canceled && <ShipOrderBtn order={order} products={products} />}
        {!order.refunded && <RefundBtn order={order} />}
        {!order.canceled && <CancelOrderBtn order={order} products={products} />}
        <DeleteOrderBtn orderId={order.id} />
      </div>
    </div>
  )
}
