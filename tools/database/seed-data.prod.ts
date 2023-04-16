import {
  ProductCategoryCreateInput,
  ProductLengthCreateInput,
  ProductSizeCreateInput,
  RgbColorCreateInput
} from '../../libs/api/generated-db-types/src'

export const PRODUCT_CATEGORIES: ProductCategoryCreateInput[] = [
  {
    name: 'new_arrivals'
  },
  {
    name: 'coats_and_jackets'
  },
  {
    name: 'dresses'
  },
  {
    name: 'pants_and_skirts'
  }
]

export const PRODUCT_SIZES: ProductSizeCreateInput[] = [
  {
    name: 'XS'
  },
  {
    name: 'S'
  },
  {
    name: 'M'
  },
  {
    name: 'L'
  },
  {
    name: 'XL'
  },
  {
    name: 'XXL'
  }
]

export const PRODUCT_COLORS: RgbColorCreateInput[] = [
  {
    name: 'black',
    r: 0,
    g: 0,
    b: 0
  },
  {
    name: 'gray',
    r: 128,
    g: 128,
    b: 128
  },
  {
    name: 'beige',
    r: 225,
    g: 198,
    b: 153
  },
  {
    name: 'white',
    r: 255,
    g: 255,
    b: 255
  },
  {
    name: 'blue',
    r: 0,
    g: 0,
    b: 0
  }
]

export const PRODUCT_LENGTHS: ProductLengthCreateInput[] = [
  {
    name: 'petit'
  },
  {
    name: 'regular'
  },
  {
    name: 'tall'
  }
]
