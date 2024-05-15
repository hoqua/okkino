import OrderPlaced from './order-placed'

const products = [
  {
    id: 'd991db81-971e-46c3-b343-26b88634ae31',
    name: 'Hem top',
    size: 'XS',
    color: {
      name: 'black',
      value: '#000000'
    },
    price: 500,
    length: '',
    imageUrl: 'https://utfs.io/f/f69587e8-7f78-4d53-929f-f9c5e55b1561-e1u2rz.png',
    quantity: 1,
    discountPrice: 400
  },
  {
    id: 'd991db81-971e-46c3-b343-26b88634ae31',
    name: 'Test Anca',
    size: 'XS',
    color: {
      name: 'black',
      value: '#000000'
    },
    price: 500,
    length: 'PETITE',
    imageUrl: 'https://utfs.io/f/f69587e8-7f78-4d53-929f-f9c5e55b1561-e1u2rz.png',
    quantity: 1,
    discountPrice: 400
  }
]

export default function OrderPlacedExample() {
  return (
    <OrderPlaced
      subTotal={500}
      items={2}
      shipping={50}
      name="John Doe "
      total={550}
      email="example@email.com"
      pass="dsad"
      products={products}
    />
  )
}
