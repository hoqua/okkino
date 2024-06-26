'use client'
import { Control, Controller } from 'react-hook-form'
import ReactSelect, { CSSObjectWithLabel } from 'react-select'
import chroma from 'chroma-js'
import { ProductForm } from './form'
type Option = { value: string; name: string }
interface Props {
  control: Control<ProductForm>
  options: Option[]
  isMulti?: boolean
  name: keyof ProductForm
  isError?: boolean
}

export default function MySelect(props: Props) {
  const { control, options, isMulti = false, name: selectName, isError } = props
  const isColor = selectName === 'availableColors'

  return (
    <Controller
      control={control}
      name={selectName}
      render={({ field: { onChange, onBlur, value, name, ref } }) => {
        // react select needs value and name not all items has value
        const mappedValue =
          (value as unknown as { name: string; value?: string }[])?.map((val) => ({
            value: val.value || val.name,
            name: val.name
          })) || []
        return (
          <ReactSelect
            classNames={{
              control: () => (isError ? ' border-red-500 input-primary' : ' input-primary')
            }}
            instanceId={`id-${String(selectName)}`}
            options={options}
            isMulti={isMulti as false | undefined}
            onChange={(val) => {
              onChange(val)
            }}
            onBlur={onBlur}
            value={mappedValue}
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
        )
      }}
    />
  )
}
