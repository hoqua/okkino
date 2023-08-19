import Link from 'next/link'

export default function OrderCrumbs() {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href="/dashboard/order">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="mr-2 h-4 w-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              ></path>
            </svg>
            Orders
          </Link>
        </li>
        <li>Order</li>
      </ul>
    </div>
  )
}
