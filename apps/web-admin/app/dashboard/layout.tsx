import Link from 'next/link'
import { SignOutButton } from '@clerk/nextjs'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col  p-12">
        {/* Page content here */}

        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <Link href={'/dashboard'}>Dashboard</Link>
          </li>
          <li>
            <Link href={'/dashboard/order'}>Orders</Link>
          </li>
          <li>
            <SignOutButton />
          </li>
        </ul>
      </div>
    </div>
  )
}
