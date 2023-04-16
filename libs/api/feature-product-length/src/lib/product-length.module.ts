import { Module } from '@nestjs/common'
import { ProductLengthService } from './product-length.service'
import { ProductLengthResolver } from './product-length.resolver'
import { PrismaService } from '@okkino/api/data-access-db'

@Module({
  providers: [ProductLengthResolver, ProductLengthService, PrismaService]
})
export class ProductLengthModule {}
