import { Control, Controller } from 'react-hook-form'
import ReactSelect, { CSSObjectWithLabel } from 'react-select'
import chroma from 'chroma-js'
import { Product } from './form'
type Option = { value: string; name: string }
interface Props {
  control: Control<Product>
  options: Option[]
  isMulti?: boolean
  name: keyof Product
  isError?: boolean
}

export default function MySelect(props: Props) {
  const { control, options, isMulti = false, name: selectName, isError } = props
  const isColor = selectName === 'availableColors'

  return (
    <Controller
      control={control}
      name={selectName}
      render={({ field: { onChange, onBlur, value, name, ref } }) => (
        <ReactSelect
          classNames={{
            control: () => (isError ? ' border-red-500 input-primary' : ' input-primary')
          }}
          instanceId={`id-${String(selectName)}`}
          options={options}
          isMulti={isMulti as false | undefined}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          getOptionLabel={(option: any) => option?.name}
          name={String(name)}
          ref={ref}
          placeholder={String(selectName)}
          styles={{
            control: (styles: CSSObjectWithLabel) => ({
              ...styles,
              height: '48px',
              borderRadius: '2px'
            }),
            ...(isColor
              ? {
                  multiValue: (styles, { data }) => {
                    const color = chroma((data as { value: string }).value)
                    return {
                      ...styles,
                      backgroundColor: color.alpha(0.3).css()
                    }
                  }
                }
              : {})
          }}
        />
      )}
    />
  )
}
