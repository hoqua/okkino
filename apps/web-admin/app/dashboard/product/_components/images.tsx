import { Control, FieldErrors, useFieldArray } from 'react-hook-form'
import Image from 'next/image'
import '@uploadthing/react/styles.css'
import { generateComponents } from '@uploadthing/react'
import { OurFileRouter } from '../../../api/uploadthing/core'
import { UseFormRegister } from 'react-hook-form/dist/types/form'
import { Product } from './form'

const { UploadDropzone } = generateComponents<OurFileRouter>()

interface Props {
  control: Control<Product>
  register: UseFormRegister<Product>
  errors: FieldErrors<Product>
}

export default function Images(props: Props) {
  const { control, register, errors } = props

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'images'
  })

  return (
    <div className={errors.images ? 'rounded-sm  border border-red-500' : ''}>
      <div className="carousel carousel-center rounded-box">
        {fields?.map((image, i) => {
          if (i !== image.order) {
            update(i, { ...image, order: i })
          }

          return (
            <div key={image.key}>
              <button
                className="btn btn-circle btn-sm absolute "
                onClick={() => {
                  fetch('/api/delete-file', {
                    method: 'POST',
                    body: JSON.stringify({ key: image.key })
                  })
                    .then((res) => console.log(res))
                    .catch((error) => console.error(error))

                  remove(i)
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="carousel-item">
                <Image src={image.url} alt="product-image" width={300} height={400} />
              </div>
              <input
                type="text"
                placeholder="#hex bg color"
                className={
                  'input input-bordered w-full max-w-xs ' +
                  (errors?.images?.[i]?.bgColor ? ' border-red-500' : '')
                }
                {...register(`images.${i}.bgColor`)}
              />
            </div>
          )
        })}
      </div>

      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          append(
            (res || []).map((r) => ({ url: r.url, key: r.key, bgColor: '', order: Number.NaN }))
          )
        }}
        // onUploadError={(error: Error) => {
        //   // Do something with the error.
        //   alert(`ERROR! ${error.message}`)
        // }}
      />
    </div>
  )
}
