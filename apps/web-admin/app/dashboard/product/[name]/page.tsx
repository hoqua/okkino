import ProductForm from '../_components/form'
import { getProduct } from '@okkino/api/data-access-db'

export default async function ProductEdit({ params }: { params: { name: string } }) {
  const product = await getProduct(decodeURI(params.name))

  return <ProductForm product={product} />
}
