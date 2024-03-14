'use client'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Editor from '../_components/editor'
import MySelect from '../_components/select'
import Images from '../_components/images'
import { useTransition } from 'react'
import { ProductWithImages } from '@okkino/api/data-access-db'
import ProductCrumbs from './product-crumbs'
import { useRouter } from 'next/navigation'
import DeleteProduct from './delete-product'
import { saveProduct } from '../../../action'
import { PRODUCT_CATEGORIES, PRODUCT_COLORS, PRODUCT_SIZES } from '@okkino/web/utils-shared'

export default function ProductForm({ product }: { product?: ProductWithImages }) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  console.log('product', product)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<ProductForm>({
    resolver: zodResolver(productSchema),
    defaultValues: product ? productSchema.parse(product) : undefined
  })

  const submit = (data: ProductForm) => {
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

        {/*NAME*/}
        <h1>NAME</h1>
        <input
          type="text"
          placeholder="dash-separated-name-in-url"
          className={
            'input input-bordered w-full max-w-xs' + (errors.urlName ? ' border-red-500' : '')
          }
          {...register('urlName')}
        />
        <input
          type="text"
          placeholder="Product name"
          className={
            'input input-bordered w-full max-w-xs' + (errors.urlName ? ' border-red-500' : '')
          }
          {...register('textName')}
        />

        {/*PRICE*/}
        <h1 className="mt-2">PRICE</h1>

        <input
          type="number"
          placeholder="price"
          className={
            'input input-bordered w-full max-w-xs ' + (errors.price ? ' border-red-500' : '')
          }
          {...register('price', { valueAsNumber: true })}
        />
        <input
          type="number"
          placeholder="discount (optional)"
          className={
            'input input-bordered w-full max-w-xs ' +
            (errors.discountPrice ? ' border-red-500' : '')
          }
          {...register('discountPrice')}
        />

        {/*DESCRIPTION*/}
        <h1 className="mt-2">DESCRIPTION</h1>

        <Controller
          control={control}
          render={({ field }) => (
            <Editor value={field.value} onChange={field.onChange} isError={!!errors.description} />
          )}
          name="description"
        />

        <input
          type="text"
          placeholder="Seo description"
          className={
            'input input-bordered w-full max-w-xs' + (errors.urlName ? ' border-red-500' : '')
          }
          {...register('seoDescription')}
        />

        <input
          type="text"
          placeholder="Seo, keywords, separated, by, comma"
          className={
            'input input-bordered w-full max-w-xs' + (errors.urlName ? ' border-red-500' : '')
          }
          {...register('seoKeywords')}
        />

        <h1 className="mt-2">PRODUCT PROPS</h1>
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
        {/*COLORS*/}
        <MySelect
          isError={!!errors.availableColors}
          control={control}
          name="availableColors"
          options={PRODUCT_COLORS.map(({ name, value }) => ({ value, name }))}
          isMulti
        />

        <label className="cursor-pointer flex items-center gap-4">
          <input type="checkbox" className="checkbox checkbox-accent" {...register('hasLength')} />
          <span className="label-text">Has length</span>
        </label>

        <h1 className="mt-2">IMAGES</h1>
        <Images control={control} register={register} errors={errors} />

        <button className={'btn'} type="submit">
          {isPending ? <span className="loading loading-spinner"></span> : null}
          save
        </button>
        {product?.id && <DeleteProduct id={product.id} />}
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
  urlName: z.string().min(3),
  textName: z.string().min(3),
  availableColors: z.object({ name: z.string(), value: z.string().startsWith('#') }).array(),
  description: z.string(),
  price: z.number(),
  discountPrice: z.coerce.number().optional(),
  productCategories: z.object({ name: z.string() }).array(),
  productSizes: z.object({ name: z.string() }).array(),
  hasLength: z.boolean(),
  images: imagesSchema.array(),
  seoDescription: z.string().optional(),
  seoKeywords: z.string().optional()
})
// extracting the type
export type ProductForm = z.infer<typeof productSchema>
