import { getGraphqlClient } from '@okkino/web/data-access-graphql'

export const gql = getGraphqlClient('http://localhost:3333/graphql')
