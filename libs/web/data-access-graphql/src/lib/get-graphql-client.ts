import { GraphQLClient } from 'graphql-request';
import { MaybeFunction } from 'graphql-request/dist/types';
import { getSdk } from "./data-access.gql.gen";

export const getGraphqlClient = (
  url: string,
  headers?: MaybeFunction<HeadersInit | undefined>
) => {
  const client = new GraphQLClient(url, {
    headers,
  });

  return getSdk(client);
};
