import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ProductService } from './product.service'
import {
  CreateOneProductArgs,
  DeleteOneProductArgs,
  FindUniqueProductArgs,
  Product,
  UpdateOneProductArgs
} from '@okkino/api/generated-db-types'
import { FindAllProductsArgs } from './dto/find-all-products.args'
import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '@okkino/api/feature-auth'

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(AuthGuard)
  @Mutation(() => Product)
  createProduct(@Args() createOneProductArgs: CreateOneProductArgs) {
    return this.productService.create(createOneProductArgs)
  }

  @Query(() => [Product])
  products(@Args() findAllProductsArgs: FindAllProductsArgs) {
    return this.productService.findAll(findAllProductsArgs)
  }

  @Query(() => Product, { name: 'product' })
  product(@Args() findUniqueProductArgs: FindUniqueProductArgs) {
    return this.productService.findOne(findUniqueProductArgs)
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Product)
  updateProduct(@Args() updateOneProductArgs: UpdateOneProductArgs) {
    return this.productService.update(updateOneProductArgs)
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Product)
  removeProduct(@Args() deleteOneProductArgs: DeleteOneProductArgs) {
    return this.productService.remove(deleteOneProductArgs)
  }
}
