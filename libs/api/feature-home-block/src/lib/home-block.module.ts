import { Module } from '@nestjs/common'
import { HomeBlockService } from './home-block.service'
import { HomeBlockResolver } from './home-block.resolver'
import { PrismaService } from '@okkino/api/data-access-db'

@Module({
  providers: [HomeBlockResolver, HomeBlockService, PrismaService]
})
export class HomeBlockModule {}
