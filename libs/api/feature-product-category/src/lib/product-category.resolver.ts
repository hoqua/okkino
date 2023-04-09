import { Query, Resolver } from '@nestjs/graphql'
import { ProductCategoryService } from './product-category.service'
import { ProductCategory } from '@okkino/api/generated-db-types'

@Resolver(() => ProductCategory)
export class ProductCategoryResolver {
  constructor(private readonly productCategoryService: ProductCategoryService) {}

  @Query(() => [ProductCategory])
  productCategories() {
    return this.productCategoryService.findAll()
  }
}
