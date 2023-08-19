'use client'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  PRODUCT_CATEGORIES,
  PRODUCT_COLORS,
  PRODUCT_SIZES
} from '../../../../../../tools/database/seed-data.prod'
import Editor from '../_components/editor'
import MySelect from '../_components/select'
import Images from '../_components/images'
import { useTransition } from 'react'
import { ProductWithImages } from '@okkino/api/data-access-db'
import ProductCrumbs from './product-crumbs'
import { useRouter } from 'next/navigation'
import DeleteProduct from './delete-product'
import { saveProduct } from '../../../action'

export default function ProductForm({ product }: { product?: ProductWithImages }) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<Product>({
    resolver: zodResolver(productSchema),
    defaultValues: product ? productSchema.parse(product) : undefined
  })

  const submit = (data: Product) => {
    if (isValid) {
      startTransition(async () => {
        await saveProduct(data)
        router.push('/dashboard')
      })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
        <ProductCrumbs />

        <input
          type="text"
          placeholder="name"
          className={
            'input input-bordered w-full max-w-xs' + (errors.name ? ' border-red-500' : '')
          }
          {...register('name')}
        />

        {/*COLORS*/}
        <MySelect
          isError={!!errors.availableColors}
          control={control}
          name="availableColors"
          options={PRODUCT_COLORS.map(({ name, value }) => ({ value, name }))}
          isMulti
        />
        {/*TIP TAP TEXT AREA*/}
        <Controller
          control={control}
          render={({ field }) => (
            <Editor value={field.value} onChange={field.onChange} isError={!!errors.description} />
          )}
          name="description"
        />
        {/*PRICE*/}
        <input
          type="number"
          placeholder="price"
          className={
            'input input-bordered w-full max-w-xs ' + (errors.price ? ' border-red-500' : '')
          }
          {...register('price', { valueAsNumber: true })}
        />
        {/*DISCOUNT PRICE*/}
        <input
          type="number"
          placeholder="discount (optional)"
          className={
            'input input-bordered w-full max-w-xs ' + (errors.name ? ' border-red-500' : '')
          }
          {...register('discountPrice')}
        />
        {/*CATEGORY*/}
        <MySelect
          isMulti
          isError={!!errors.productCategories}
          control={control}
          name="productCategories"
          options={PRODUCT_CATEGORIES.map(({ name }) => ({ value: name, name }))}
        />
        {/*SIZES*/}
        <MySelect
          isError={!!errors.productSizes}
          control={control}
          name="productSizes"
          options={PRODUCT_SIZES.map(({ name }) => ({ value: name, name }))}
          isMulti
        />

        <Images control={control} register={register} errors={errors} />

        <button className={'btn'} type="submit">
          {isPending ? <span className="loading loading-spinner"></span> : null}
          save
        </button>
        {product?.id && <DeleteProduct id={product.id} name={product.name} />}
      </form>
    </div>
  )
}

const imagesSchema = z.object({
  url: z.string(),
  bgColor: z.string().startsWith('#'),
  order: z.number(),
  //needed for deletion
  key: z.string()
})

const productSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3),
  availableColors: z.object({ name: z.string(), value: z.string().startsWith('#') }).array(),
  description: z.string(),
  price: z.number(),
  discountPrice: z.coerce.number().optional(),
  productCategories: z.object({ name: z.string() }).array(),
  productSizes: z.object({ name: z.string() }).array(),
  images: imagesSchema.array()
})
// extracting the type
export type Product = z.infer<typeof productSchema>
