import { Color } from '../../product/[productUrlName]/components/add-to-card-section'

export function ColorCube({
  color,
  size,
  selected
}: {
  color: Color
  size: 'lg' | 'md'
  selected?: boolean
}) {
  const classSize = size === 'lg' ? 'h-3 w-3' : 'h-2 w-2'
  return (
    <div className="flex">
      <div
        key={color.name}
        style={{ backgroundColor: color.value }}
        className={'border border-black ' + classSize}
      />
    </div>
  )
}
