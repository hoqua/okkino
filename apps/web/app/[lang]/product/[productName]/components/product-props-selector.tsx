type Selectable = { name?: string }

interface IProps<T> {
  label: string
  items: T[]
  selected: string
  onSelect: (selected: string) => void
  getSelectionComponent?: (name: string) => JSX.Element
  actionItem?: JSX.Element
  hasErrors: boolean
}

export const ProductPropsSelector = <T extends Selectable>(props: IProps<T>) => {
  const { items, label, getSelectionComponent, onSelect, selected, actionItem, hasErrors } = props

  return (
    <div>
      <div className="flex items-center justify-between">
        <p
          className={`text-xs font-light uppercase text-gray-600 ${
            hasErrors ? 'text-red-400' : ''
          }`}
        >
          {label}
        </p>
        {actionItem}
      </div>

      <div className="h-3"></div>

      <div className="flex gap-4">
        {items.map((item) => (
          <div
            key={item.name}
            className={
              'cursor-pointer border-b ' +
              (item.name === selected ? 'border-black' : 'border-transparent')
            }
            onClick={() => onSelect(item.name)}
          >
            <div className="pb-1 ">
              {getSelectionComponent ? (
                getSelectionComponent(item.name)
              ) : (
                <p className="okkino-text-hover text-sm uppercase leading-[14px]">{item.name}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
