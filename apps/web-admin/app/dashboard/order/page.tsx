import { getOrders } from '@okkino/api/data-access-db'
import Link from 'next/link'

type SortType = 'fulfilled' | 'unfulfilled' | 'all' | 'shipped'

export default async function OrdersPage(props: { searchParams: { sort: SortType } }) {
  const sort = props.searchParams.sort

  const orders = await getOrders()
  return (
    <div>
      <div className="overflow-x-auto"></div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>total</th>
            <th>fulfilled</th>
            <th>shipped</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className={o.fulfilled ? '' : 'bg-red-50'}>
              <th className="max-w-[100px] truncate">{o.id}</th>
              <td>{o.customerName}</td>
              <td>{o.customerEmail}</td>
              <td>{o.total}</td>
              <td>{o.fulfilled ? heartSvg : null}</td>
              <td>{o.shipped ? heartSvg : null}</td>
              <td>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Link href={`/dashboard/order/${o.id}`}>
                  <button className="btn btn-ghost btn-xs">details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const heartSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="inline-block h-6 w-6 stroke-current"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
)
