import Image from 'next/image'
import Link from 'next/link'
import { getProducts } from '@okkino/api/data-access-db'
import UpdateSiteBtn from './_components/update-site-btn'

export default async function DashboardPage() {
  const products = await getProducts()

  return (
    <div className="overflow-x-auto">
      <div className="flex w-full justify-between">
        <UpdateSiteBtn />
        <Link href="/dashboard/product" className="btn">
          <svg
            className=" h-6 w-6"
            height="50px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 50 50"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="none" height="50" width="50" />
            <line
              fill="none"
              stroke="#000000"
              strokeMiterlimit="10"
              strokeWidth="4"
              x1="9"
              x2="41"
              y1="25"
              y2="25"
            />
            <line
              fill="none"
              stroke="#000000"
              strokeMiterlimit="10"
              strokeWidth="4"
              x1="25"
              x2="25"
              y1="9"
              y2="41"
            />
          </svg>
          Add
        </Link>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Sizes</th>
            <th>Price</th>
            <th>Colors</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {products.map((product) => (
            <tr key={product.name}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask  h-12 w-12">
                      <Image
                        src={product.images?.[0].url}
                        alt={product.name}
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <div className="font-bold">{product.name}</div>
                </div>
              </td>
              <td>
                {product.productSizes.map((productSize) => (
                  <span key={productSize.name} className="badge badge-ghost badge-sm mr-2">
                    {productSize.name}
                  </span>
                ))}
              </td>
              <td>
                price: {product.price} |{' '}
                {product.discountPrice && `discount: ${product.discountPrice}`}
              </td>
              <td>
                {product.availableColors.map((color) => (
                  <div
                    key={color.name}
                    style={{ backgroundColor: color.value }}
                    className="m-2 h-3 w-3"
                  />
                ))}
              </td>
              <td>
                <Link href={`dashboard/product/${product.name}`}>
                  <button className="btn btn-ghost btn-xs">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
