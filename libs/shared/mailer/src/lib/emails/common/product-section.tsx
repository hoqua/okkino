import { Column, Img, Row, Section, Text } from '@react-email/components'
import * as React from 'react'

export function ProductSection() {
  return (
    <Section>
      <Text className="text-sm uppercase">Product name</Text>
      <Row>
        <Column>
          <Img
            src="https://utfs.io/f/bd2587fb-1b3a-468a-90ba-977eb88988c0-yu6obf.webp"
            alt="Cat"
            width="104"
            height="145"
          />
        </Column>
        <Column valign="top">
          <table>
            <tbody>
              <tr>
                <td>
                  <Text className="m-0 text-gray-600 text-xs">COLOR</Text>
                </td>
                <td>blk</td>
              </tr>
              <tr>
                <td>
                  <Text className="m-0 text-gray-600 text-xs">SIZE</Text>
                </td>
                <td>
                  <Text className="m-0 ml-2 text-xs font-bold uppercase">XXS</Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text className="m-0 text-gray-600 text-xs">LENGTH</Text>
                </td>
                <td>
                  <Text className="m-0 ml-2 text-xs font-bold uppercase">Francisco Chang</Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text className="m-0 text-gray-600 text-xs">Q-TY</Text>
                </td>
                <td>
                  <Text className="m-0 ml-2 text-xs font-bold uppercase">1</Text>
                </td>
              </tr>

              <tr>
                <td>
                  <Text className="m-0 mt-11 text-gray-600 text-xs">TOTAL</Text>
                </td>
                <td>
                  <Text className="m-0 mt-11 ml-2 text-xs font-bold uppercase">1</Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Column>
      </Row>
    </Section>
  )
}
