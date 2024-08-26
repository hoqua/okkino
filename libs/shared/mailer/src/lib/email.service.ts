import { createTransport, Transporter } from 'nodemailer'
import { render } from '@react-email/render'

import type { SendMailOptions } from 'nodemailer'
import OrderPlaced from './emails/order-placed'
import { DispatchOrderArgs, OrderNotificationArgs, SendOrderArgs } from './types'
import OrderDispatched from './emails/order-dispatched'
import OrderCanceled from './emails/order-cancelled'
import OrderNotificationTemplate from './emails/order-notification'

const defaultEmailOptions = {
  from: {
    name: 'OK KINO',
    address: 'contact@studiookkino.com'
  },
  sender: {
    name: 'OK KINO',
    address: 'contact@studiookkino.com'
  }
}

let transporter: Transporter
export const getTransporter = async (pass: string) => {
  if (!transporter) {
    transporter = createTransport({
      host: 'mail.privateemail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'contact@studiookkino.com',
        pass
      }
    })

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error)
          reject(error)
        } else {
          console.log('Server is ready to take our messages')
          resolve(success)
        }
      })
    })
  }

  return transporter
}

export async function sendOrderPlacedEmail(args: SendOrderArgs) {
  const { email, pass } = args

  const options: SendMailOptions = {
    ...defaultEmailOptions,
    to: email,
    subject: 'Thank you for your purchase.',
    html: render(OrderPlaced(args))
  }

  const transporter = await getTransporter(pass)
  await transporter.sendMail(options)
}

export async function sendDispatchedOrderEmail(args: DispatchOrderArgs) {
  const { email, pass } = args.order
  const options: SendMailOptions = {
    ...defaultEmailOptions,
    to: email,
    subject: 'Your order has been dispatched',
    html: render(OrderDispatched(args))
  }

  const transporter = await getTransporter(pass)
  await transporter.sendMail(options)
}

export async function sendCancelOrderEmail(args: SendOrderArgs) {
  const { email, pass } = args
  const options: SendMailOptions = {
    ...defaultEmailOptions,
    to: email,
    subject: 'Your order has been canceled',
    html: render(OrderCanceled(args))
  }

  const transporter = await getTransporter(pass)
  await transporter.sendMail(options)
}

export async function sendEmailOrderNotification(args: OrderNotificationArgs) {
  const options: SendMailOptions = {
    ...defaultEmailOptions,
    to: 'contact@studiookkino.com',
    subject: `New OKKINO Order Placed - Order #${args.orderId}`,
    html: render(OrderNotificationTemplate(args))
  }

  const transporter = await getTransporter(args.pass)
  await transporter.sendMail(options)
}
