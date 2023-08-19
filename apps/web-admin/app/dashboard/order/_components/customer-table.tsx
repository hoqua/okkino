import { Prisma } from '@prisma/client'

export default function CustomerTable({ order }: { order: Prisma.OrderGetPayload<any> }) {
  return (
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Customer name</th>
          <th>Customer email</th>
          <th>Order date</th>
          <th>Status</th>
          <th>Shipping</th>
          <th>Total</th>
          <th>Customer language</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{order?.customerName}</td>
          <td>{order?.customerName}</td>
          <td>{order?.createdAt?.toJSON().slice(0, 10)}</td>
          <td>{order?.fulfilled ? 'fulfilled' : 'not fulfilled'}</td>
          <td>{order?.shipped ? 'shipped' : 'waits for shipping'}</td>
          <td>Paid {order?.total}</td>
          <td>{order?.language}</td>
        </tr>
      </tbody>
    </table>
  )
}
