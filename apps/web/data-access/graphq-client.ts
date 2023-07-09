import { getGraphqlClient } from '@okkino/web/data-access-graphql'
import { webEnv } from '@okkino/web/utils-env'

const { api } = webEnv

export const gql = getGraphqlClient(api.gqlUrl)
