import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
export type GetUsersVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUsers = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, name?: string | null }> };

export type GetHomeImagesVariables = Types.Exact<{ [key: string]: never; }>;


export type GetHomeImages = { __typename?: 'Query', homeBlocks: Array<{ __typename?: 'HomeBlock', id: string, navigationPath: string, image: { __typename?: 'Image', title?: string | null, imagePath: string, rgbBackground: { __typename?: 'RgbColor', r: number, g: number, b: number } } }> };

export type GetProductsVariables = Types.Exact<{
  productCategory?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetProducts = { __typename?: 'Query', products: Array<{ __typename?: 'Product', name: string, price: number, discountPrice?: number | null, images?: Array<{ __typename?: 'Image', title?: string | null, imagePath: string, rgbBackground: { __typename?: 'RgbColor', r: number, g: number, b: number } }> | null, availableColors?: Array<{ __typename?: 'RgbColor', r: number, g: number, b: number }> | null }> };

export type GetProductCategoriesVariables = Types.Exact<{ [key: string]: never; }>;


export type GetProductCategories = { __typename?: 'Query', productCategories: Array<{ __typename?: 'ProductCategory', name: string }> };

export type GetProductLengthsVariables = Types.Exact<{ [key: string]: never; }>;


export type GetProductLengths = { __typename?: 'Query', productLengths: Array<{ __typename?: 'ProductLength', name: string }> };

export type GetProductVariables = Types.Exact<{
  where: Types.ProductWhereUniqueInput;
}>;


export type GetProduct = { __typename?: 'Query', product: { __typename?: 'Product', name: string, description?: string | null, price: number, discountPrice?: number | null, productSizes?: Array<{ __typename?: 'ProductSize', name: string }> | null, images?: Array<{ __typename?: 'Image', id: string, title?: string | null, imagePath: string, rgbBackground: { __typename?: 'RgbColor', r: number, g: number, b: number } }> | null, availableColors?: Array<{ __typename?: 'RgbColor', name?: string | null, r: number, g: number, b: number }> | null } };


export const GetUsersDocument = /*#__PURE__*/ gql`
    query GetUsers {
  users {
    id
    email
    name
  }
}
    `;
export const GetHomeImagesDocument = /*#__PURE__*/ gql`
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
export const GetProductsDocument = /*#__PURE__*/ gql`
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
export const GetProductCategoriesDocument = /*#__PURE__*/ gql`
    query GetProductCategories {
  productCategories {
    name
  }
}
    `;
export const GetProductLengthsDocument = /*#__PURE__*/ gql`
    query GetProductLengths {
  productLengths {
    name
  }
}
    `;
export const GetProductDocument = /*#__PURE__*/ gql`
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
    GetUsers(variables?: GetUsersVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsers> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsers>(GetUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUsers', 'query');
    },
    GetHomeImages(variables?: GetHomeImagesVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetHomeImages> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomeImages>(GetHomeImagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHomeImages', 'query');
    },
    GetProducts(variables?: GetProductsVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProducts> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProducts>(GetProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetProducts', 'query');
    },
    GetProductCategories(variables?: GetProductCategoriesVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProductCategories> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductCategories>(GetProductCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetProductCategories', 'query');
    },
    GetProductLengths(variables?: GetProductLengthsVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProductLengths> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductLengths>(GetProductLengthsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetProductLengths', 'query');
    },
    GetProduct(variables: GetProductVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProduct> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProduct>(GetProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetProduct', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;