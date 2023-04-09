import { Module } from '@nestjs/common'
import { ProductCategoryService } from './product-category.service'
import { ProductCategoryResolver } from './product-category.resolver'
import { PrismaService } from '@okkino/api/data-access-db'

@Module({
  providers: [ProductCategoryResolver, ProductCategoryService, PrismaService]
})
export class ProductCategoryModule {}
