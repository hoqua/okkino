import Image from 'next/image'
import { CartProduct } from '@okkino/web/utils-shared'

export default function OrdersTable({ products }: { products: CartProduct[] }) {
  return (
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th></th>
          <th>Color</th>
          <th>Length</th>
          <th>Size</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        {products.map((p) => (
          <tr key={JSON.stringify(p)}>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask h-12 w-12">
                    <Image src={p.imageUrl} alt="product" height={40} width={40} />
                  </div>
                </div>
              </div>
            </td>
            <td>{p.name}</td>
            <td>
              <div className="h-4 w-4" style={{ backgroundColor: p.color.value }} />
            </td>
            <td>
              <span className="badge badge-ghost badge-sm">{p.color.name}</span>
            </td>
            <td>
              <span className="badge badge-ghost badge-sm">{p.length}</span>
            </td>
            <td>
              <span className="badge badge-ghost badge-sm">{p.size}</span>
            </td>
            <td>{p.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
