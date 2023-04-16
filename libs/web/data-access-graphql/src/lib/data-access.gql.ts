import { gql } from 'graphql-request'

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      email
      name
    }
  }
`

const GET_HOME_BLOCKS = gql`
  query GetHomeImages {
    homeBlocks {
      id
      navigationPath
      image {
        title
        imagePath
        rgbBackground {
          r
          g
          b
        }
      }
    }
  }
`

const GET_PRODUCTS = gql`
  query GetProducts($productCategory: String) {
    products(productCategory: $productCategory) {
      name
      price
      discountPrice
      images {
        title
        imagePath
        rgbBackground {
          r
          g
          b
        }
      }
      availableColors {
        r
        g
        b
      }
    }
  }
`

const GET_PRODUCT_CATEGORIES = gql`
  query GetProductCategories {
    productCategories {
      name
    }
  }
`

const GET_PRODUCT_LENGTHS = gql`
  query GetProductLengths {
    productLengths {
      name
    }
  }
`

const GET_PRODUCT = gql`
  query GetProduct($where: ProductWhereUniqueInput!) {
    product(where: $where) {
      name
      description
      price
      discountPrice
      productSizes {
        name
      }
      images {
        id
        title
        imagePath
        rgbBackground {
          r
          g
          b
        }
      }
      availableColors {
        name
        r
        g
        b
      }
    }
  }
`
