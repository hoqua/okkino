import { Body, Font, Head, Html, Tailwind } from '@react-email/components'
import { ReactNode } from 'react'

export default function EmailLayout({ children }: { children: ReactNode }) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Lato"
          fallbackFontFamily="Helvetica"
          fontWeight={400}
          fontStyle="normal"
        />
        <title className="text-xl">Thanks for buying OK KINO piece!</title>
      </Head>
      <Tailwind
        config={{
          theme: {
            colors: {
              black: '#262217',
              white: '#FFFDF8',
              gray: {
                100: '#F5F5F5',
                200: '#EEEEEE',
                300: '#E0E0E0',
                400: '#BDBDBD',
                500: '#9E9E9E',
                600: '#757575',
                700: '#616161',
                800: '#424242',
                900: '#212121'
              }
            }
          }
        }}
      >
        <Body className="bg-white text-black">{children}</Body>
      </Tailwind>
    </Html>
  )
}
