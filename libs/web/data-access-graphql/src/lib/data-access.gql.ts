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
  query GetProducts {
    products {
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
