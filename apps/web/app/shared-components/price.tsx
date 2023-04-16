import { FC } from 'react'

interface IProps {
  price: number
  discountPrice?: number
}

export const Price: FC<IProps> = (props: IProps) => {
  const { discountPrice, price } = props
  return discountPrice ? (
    <div className="flex gap-2">
      <p className="text-sm font-bold text-gray-300 line-through">
        {priseFormatter(discountPrice)}
      </p>
      <p className="text-sm font-bold text-black">{priseFormatter(price)} </p>
    </div>
  ) : (
    <p className="text-sm font-bold text-black">{priseFormatter(price)} </p>
  )
}

const priseFormatter = (price: number) => `$${price}`
