import { Resolver, Query } from '@nestjs/graphql'
import { ProductLengthService } from './product-length.service'
import { ProductLength } from '@okkino/api/generated-db-types'

@Resolver(() => ProductLength)
export class ProductLengthResolver {
  constructor(private readonly productLengthService: ProductLengthService) {}

  @Query(() => [ProductLength])
  productLengths() {
    return this.productLengthService.findAll()
  }
}
