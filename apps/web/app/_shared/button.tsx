'use client'

interface IProps {
  label: string
  onClick: () => void
  flat?: boolean
  fullWidth?: boolean
  className?: string
}

export const Button = (props: IProps) => {
  const { label, onClick, flat = false, fullWidth = false, className } = props

  return (
    <button
      onClick={() => onClick()}
      className={
        (flat
          ? 'border-transparent hover:border-b-black '
          : 'border-black hover:bg-black hover:text-white ') +
        'border pb-3 pl-9 pr-9 pt-3  text-sm uppercase' +
        (fullWidth ? ' w-full' : '') +
        ' ' +
        className
      }
    >
      {label}
    </button>
  )
}
