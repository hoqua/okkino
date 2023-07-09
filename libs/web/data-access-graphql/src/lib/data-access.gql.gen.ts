import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type GetHomeImagesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetHomeImagesQuery = { __typename?: 'Query', homeBlocks: Array<{ __typename?: 'HomeBlock', id: string, navigationPath: string, image: { __typename?: 'Image', title: string, imagePath: string, rgbBackground: { __typename?: 'RgbColor', r: number, g: number, b: number } } }> };

export type GetProductsQueryVariables = Types.Exact<{
  productCategory?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', name: string, price: number, discountPrice?: number | null, images?: Array<{ __typename?: 'Image', title: string, imagePath: string, rgbBackground: { __typename?: 'RgbColor', r: number, g: number, b: number } }> | null, availableColors?: Array<{ __typename?: 'RgbColor', r: number, g: number, b: number }> | null }> };

export type GetProductCategoriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetProductCategoriesQuery = { __typename?: 'Query', productCategories: Array<{ __typename?: 'ProductCategory', name: string }> };

export type GetProductLengthsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetProductLengthsQuery = { __typename?: 'Query', productLengths: Array<{ __typename?: 'ProductLength', name: string }> };

export type GetProductQueryVariables = Types.Exact<{
  where: Types.ProductWhereUniqueInput;
}>;


export type GetProductQuery = { __typename?: 'Query', product: { __typename?: 'Product', name: string, description: string, price: number, discountPrice?: number | null, productSizes?: Array<{ __typename?: 'ProductSize', name: string }> | null, images?: Array<{ __typename?: 'Image', id: string, title: string, imagePath: string, rgbBackground: { __typename?: 'RgbColor', r: number, g: number, b: number } }> | null, availableColors?: Array<{ __typename?: 'RgbColor', name: string, r: number, g: number, b: number }> | null } };


export const GetHomeImagesDocument = gql`
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
    `;
export const GetProductsDocument = gql`
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
    `;
export const GetProductCategoriesDocument = gql`
    query GetProductCategories {
  productCategories {
    name
  }
}
    `;
export const GetProductLengthsDocument = gql`
    query GetProductLengths {
  productLengths {
    name
  }
}
    `;
export const GetProductDocument = gql`
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
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetHomeImages(variables?: GetHomeImagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHomeImagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomeImagesQuery>(GetHomeImagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHomeImages', 'query');
    },
    GetProducts(variables?: GetProductsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetProductsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductsQuery>(GetProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetProducts', 'query');
    },
    GetProductCategories(variables?: GetProductCategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetProductCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductCategoriesQuery>(GetProductCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetProductCategories', 'query');
    },
    GetProductLengths(variables?: GetProductLengthsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetProductLengthsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductLengthsQuery>(GetProductLengthsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetProductLengths', 'query');
    },
    GetProduct(variables: GetProductQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetProductQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductQuery>(GetProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetProduct', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;