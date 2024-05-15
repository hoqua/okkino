import { Column, Img, Row, Section, Text } from '@react-email/components'
import * as React from 'react'
import { OrderProduct } from '@okkino/shared/schema'

export function ProductSection(props: { product: OrderProduct }) {
  const { product } = props
  return (
    <Section>
      <Text className="text-sm uppercase">{product.name}</Text>

      <Row>
        <Column style={{ width: '50%' }}>
          <Img src={product.imageUrl} width="104" height="145" />
        </Column>

        <Column valign="top" style={{ width: '50%' }}>
          <table>
            <tbody>
              <tr>
                <td>
                  <Text className="m-0 text-gray-600 text-xs">COLOR</Text>
                </td>
                <td>
                  <div
                    className="ml-2"
                    style={{ backgroundColor: product.color.value, height: '8px', width: '8px' }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Text className="m-0 text-gray-600 text-xs">SIZE</Text>
                </td>
                <td>
                  <Text className="m-0 ml-2 text-xs font-bold uppercase">{product.size}</Text>
                </td>
              </tr>

              {product?.length && (
                <tr>
                  <td>
                    <Text className="m-0 text-gray-600 text-xs">LENGTH</Text>
                  </td>
                  <td>
                    <Text className="m-0 ml-2 text-xs font-bold uppercase">{product.length}</Text>
                  </td>
                </tr>
              )}

              <tr>
                <td>
                  <Text className="m-0 text-gray-600 text-xs">Q-TY</Text>
                </td>
                <td>
                  <Text className="m-0 ml-2 text-xs font-bold uppercase">{product.quantity}</Text>
                </td>
              </tr>

              <tr>
                <td>
                  <Text className="m-0 mt-11 text-xs">TOTAL</Text>
                </td>
                <td>
                  <Text className="m-0 mt-11 ml-2 text-xs font-bold uppercase">
                    {product.discountPrice || product.price}
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Column>
      </Row>
    </Section>
  )
}
