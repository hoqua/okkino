import { Injectable } from '@nestjs/common'
import {
  CreateOneProductArgs,
  DeleteOneProductArgs,
  FindUniqueProductArgs,
  UpdateOneProductArgs
} from '@okkino/api/generated-db-types'
import { PrismaService } from '@okkino/api/data-access-db'
import { Prisma } from '@prisma/client'

const include: Prisma.ProductInclude = {
  images: { include: { rgbBackground: true } },
  availableColors: true
}

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOneProductArgs: CreateOneProductArgs) {
    return this.prisma.product.create({
      data: createOneProductArgs.data,
      include
    })
  }

  findAll() {
    return this.prisma.product.findMany({ include })
  }

  findOne(findUniqueProductArgs: FindUniqueProductArgs) {
    return this.prisma.product.findUnique({
      where: findUniqueProductArgs.where,
      include
    })
  }

  update(updateOneProductArgs: UpdateOneProductArgs) {
    return this.prisma.product.update({
      where: updateOneProductArgs.where,
      data: updateOneProductArgs.data,
      include
    })
  }

  remove(deleteOneProductArgs: DeleteOneProductArgs) {
    return this.prisma.product.delete({
      where: deleteOneProductArgs.where
    })
  }
}
