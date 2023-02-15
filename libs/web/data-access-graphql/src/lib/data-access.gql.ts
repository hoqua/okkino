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
      title
      imagePath
      navigationPath
      rgbBackground {
        r
        g
        b
      }
    }
  }
`
