'use client'

interface IProps {
  label: string
  onClick: () => void
  flat?: boolean
}

export const ProductButton = (props: IProps) => {
  const { label, onClick, flat = false } = props

  return (
    <button
      onClick={() => onClick()}
      className={
        (flat
          ? 'border-transparent hover:border-transparent '
          : 'border-black hover:border-gray-600 ') +
        'okkino-text-hover border pl-9 pr-9 pt-3 pb-3  text-sm uppercase'
      }
    >
      {label}
    </button>
  )
}
