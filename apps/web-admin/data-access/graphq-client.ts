import { getGraphqlClient } from '@okkino/web/data-access-graphql'
import { webAdminEnv } from '../environments/environment'

const { api } = webAdminEnv

export const gql = getGraphqlClient(api.gqlUrl)
