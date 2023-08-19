import { getOrder } from '@okkino/api/data-access-db'
import { CartProductSchema } from '@okkino/web/utils-shared'
import OrderCrumbs from '../_components/order-crumbs'

import OrdersTable from '../_components/orders-table'
import CustomerTable from '../_components/customer-table'
import { objectToString } from '../_components/utils'
import ShipOrderBtn from '../../_components/ship-order-btn'

export default async function OrderDetails(props: { params: { id: string } }) {
  const order = await getOrder(props.params.id)
  const products = CartProductSchema.array().parse(order?.products)

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
      {order.shipped ? null : <ShipOrderBtn order={order} />}
    </div>
  )
}
