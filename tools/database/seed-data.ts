import {
  HomeBlockCreateInput,
  ProductCreateInput,
  RgbColorCreateInput,
  User
} from '../../libs/api/generated-db-types/src'

export const USERS_SEED_DATA: User[] = [
  {
    id: '1',
    email: 'admin@okkino.com',
    name: 'Administrator Okkino',
    password: '$2b$10$kRW9o24vrKjquuKVXLSeoOwOLjSfByooHwSp3BnIyjUBSVM2aJv8S'
  }
]

export const COLORS = [
  {
    id: 'gray',
    color: { r: 235, g: 235, b: 233 }
  },
  {
    id: 'beige',
    color: { r: 244, g: 235, b: 213 }
  }
]

export const HOME_BLOCKS_COLORS_DATA: RgbColorCreateInput[] = COLORS.map((color) => {
  return {
    id: color.id,
    r: color.color.r,
    g: color.color.g,
    b: color.color.b
  }
})

const HOME_BLOCKS = ['left', 'right']

export const HOME_BLOCK_IMAGES = HOME_BLOCKS.map((block) => {
  return {
    id: block,
    title: block,
    imagePath: `home-block/${block}.png`,
    rgbBackground: { connect: { id: HOME_BLOCKS_COLORS_DATA[0].id } }
  }
})

export const HOME_BLOCK_DATA: HomeBlockCreateInput[] = HOME_BLOCKS.map((block) => {
  return {
    id: block,
    navigationPath: '/shop',
    image: {
      connect: { id: block }
    }
  }
})

export const PRODUCTS = [
  'product-one',
  'product-two',
  'product-three',
  'product-four',
  'product-five',
  'product-six'
]

export const PRODUCT_COVER_IMAGES = PRODUCTS.map((product) => {
  return {
    id: product,
    imagePath: `products/${product}.png`,
    title: product,
    rgbBackground: { connect: { id: HOME_BLOCKS_COLORS_DATA[0].id } }
  }
})

export const PRODUCT_DATA: ProductCreateInput[] = PRODUCTS.map((product, index) => {
  return {
    id: product,
    name: product,
    price: 100 + index * 100,
    discountPrice: 100 * index,
    images: {},
    availableColors: {}
  }
})
