import {
  HomeBlockCreateInput,
  ProductCreateInput,
  User
} from '../../libs/api/generated-db-types/src'
import { PRODUCT_CATEGORIES, PRODUCT_COLORS, PRODUCT_SIZES } from './seed-data.prod'

export const USERS_SEED_DATA: User[] = [
  {
    id: '1',
    email: 'admin@okkino.com',
    name: 'Administrator Okkino',
    password: '$2b$10$kRW9o24vrKjquuKVXLSeoOwOLjSfByooHwSp3BnIyjUBSVM2aJv8S'
  }
]

const HOME_BLOCKS = ['left', 'right']

export const HOME_BLOCK_IMAGES = HOME_BLOCKS.map((block) => {
  return {
    id: block,
    title: block,
    imagePath: `home-block/${block}.png`,
    rgbBackground: { connect: { name: PRODUCT_COLORS[0].name } }
  }
})

export const HOME_BLOCK_DATA: HomeBlockCreateInput[] = HOME_BLOCKS.map((block) => {
  return {
    id: block,
    navigationPath: '/shop/all',
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
    rgbBackground: { connect: { name: PRODUCT_COLORS[1].name } }
  }
})

const productDescription = `
<p>OK KINO 'Ia' dress with a shaped belt. The geometry of the belt is impressed by the work of sculptor Constantin Brancusi 'Endless Column'. It's made from soft wool in a loose shape that can be cinched with the detachable belt. Dress has a viscose lining in the bust area, side slits and sleeve cuffs.</p>
<p>100% wool, 100% viscose lining</p>
<p></p>
<p>Dry clean is recommended</p>
<p></p>
<p>Made in Moldova.</p>
`
export const PRODUCT_DATA: ProductCreateInput[] = PRODUCTS.map((product, index) => {
  return {
    id: product,
    name: product,
    price: 100 + index * 100,
    discountPrice: 100 * index,
    images: {},
    description: productDescription,
    productCategories: {
      connect: [
        {
          name: PRODUCT_CATEGORIES[index % PRODUCT_CATEGORIES.length].name
        }
      ]
    },
    productSizes: {
      connect: [
        {
          name: PRODUCT_SIZES[0].name
        },
        {
          name: PRODUCT_SIZES[1].name
        },
        {
          name: PRODUCT_SIZES[2].name
        }
      ]
    },
    availableColors: {
      connect: [
        {
          name: PRODUCT_COLORS[0].name
        },
        {
          name: PRODUCT_COLORS[1].name
        },
        {
          name: PRODUCT_COLORS[2].name
        }
      ]
    }
  }
})
