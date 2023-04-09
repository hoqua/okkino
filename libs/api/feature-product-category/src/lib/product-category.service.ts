import { Injectable } from '@nestjs/common'
import { PrismaService } from '@okkino/api/data-access-db'

@Injectable()
export class ProductCategoryService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.productCategory.findMany()
  }
}
