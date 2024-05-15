import { createTransport } from 'nodemailer'
import { render } from '@react-email/render'

import type { SendMailOptions } from 'nodemailer'
import OrderPlaced from './emails/order-placed'

export const getTransporter = (pass: string) =>
  createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'contact@studiookkino.com',
      pass
    }
  })

export type SendOrderArgs = {
  name: string
  total: number
  email: string
  pass: string
}

export async function sendOrderPlacedEmail(args: SendOrderArgs) {
  const { email, pass } = args
  const options: SendMailOptions = {
    sender: 'contact@studiookkino.com',
    to: email,
    subject: 'Thank you for buying OK KINO piece!',
    html: render(OrderPlaced(args))
  }

  const transporter = getTransporter(pass)
  await transporter.sendMail(options)
}
