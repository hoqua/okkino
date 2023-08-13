import { FC } from 'react'

interface IProps {
  colors: { name: string; value: string }[]
}

export const ProductColors: FC<IProps> = (props) => {
  const { colors } = props

  return (
    <div className="absolute bottom-2 left-2 flex justify-between gap-x-2 md:bottom-[calc(-8px-24px)] md:left-0 md:gap-x-6">
      {colors.map(({ value }) => (
        <div key={value} className="h-2 w-2" style={{ backgroundColor: value }} />
      ))}
    </div>
  )
}
