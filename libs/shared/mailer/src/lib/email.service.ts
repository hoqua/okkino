import { createTransport } from 'nodemailer'
import { render } from '@react-email/render'

import type { SendMailOptions } from 'nodemailer'
import OrderPlaced from './emails/order-placed'
import { DispatchOrderArgs, SendOrderArgs } from './types'
import OrderDispatched from './emails/order-dispatched'

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

export async function sendOrderPlacedEmail(args: SendOrderArgs) {
  const { email, pass } = args

  const options: SendMailOptions = {
    from: {
      name: 'OK KINO',
      address: 'contact@studiookkino.com'
    },
    sender: {
      name: 'OK KINO',
      address: 'contact@studiookkino.com'
    },
    to: email,
    subject: 'Thank you for your purchase.',
    html: render(OrderPlaced(args))
  }

  const transporter = getTransporter(pass)
  await transporter.sendMail(options)
}

export async function sendDispatchedOrderEmail(args: DispatchOrderArgs) {
  const { email, pass } = args.order
  console.log(email, pass)
  const options: SendMailOptions = {
    from: {
      name: 'OK KINO',
      address: 'contact@studiookkino.com'
    },
    sender: {
      name: 'OK KINO',
      address: 'contact@studiookkino.com'
    },
    to: email,
    subject: 'Your order has been dispatched.',
    html: render(OrderDispatched(args))
  }

  const transporter = getTransporter(pass)
  await transporter.sendMail(options)
}
