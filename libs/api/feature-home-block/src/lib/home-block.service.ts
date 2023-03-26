import { Injectable } from '@nestjs/common'
import { PrismaService } from '@okkino/api/data-access-db'
import {
  CreateOneHomeBlockArgs,
  DeleteOneHomeBlockArgs,
  FindUniqueHomeBlockArgs,
  UpdateOneHomeBlockArgs
} from '@okkino/api/generated-db-types'
import { Prisma } from '@prisma/client'

const include: Prisma.HomeBlockInclude = {
  image: {
    include: {
      rgbBackground: true
    }
  }
}

@Injectable()
export class HomeBlockService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOneHomeBlockArgs: CreateOneHomeBlockArgs) {
    return this.prisma.homeBlock.create({
      data: createOneHomeBlockArgs.data,
      include
    })
  }

  findAll() {
    return this.prisma.homeBlock.findMany({ include })
  }

  findOne(findUniqueHomeBlockArgs: FindUniqueHomeBlockArgs) {
    const { where } = findUniqueHomeBlockArgs
    return this.prisma.homeBlock.findUnique({ where, include })
  }

  update(updateOneHomeBlockArgs: UpdateOneHomeBlockArgs) {
    return this.prisma.homeBlock.update({
      data: updateOneHomeBlockArgs.data,
      where: updateOneHomeBlockArgs.where,
      include
    })
  }

  remove(deleteOneHomeBlockArgs: DeleteOneHomeBlockArgs) {
    return this.prisma.homeBlock.delete({
      where: deleteOneHomeBlockArgs.where
    })
  }
}
