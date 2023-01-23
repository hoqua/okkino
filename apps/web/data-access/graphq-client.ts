import { getGraphqlClient } from '@okkino/web/data-access-graphql'
import { webEnv } from '../environment/environment'

const { api } = webEnv
export const gql = getGraphqlClient(api.gqlUrl)
