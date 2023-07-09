import { getGraphqlClient } from '@okkino/web/data-access-graphql'
import { webAdminEnv } from '@okkino/web/utils-env-admin'

const { api } = webAdminEnv

export const gql = getGraphqlClient(api.gqlUrl)
