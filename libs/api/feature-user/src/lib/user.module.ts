import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { PrismaModule } from '@okkino/api/data-access-db'

@Module({
  providers: [UserResolver, UserService],
  imports: [PrismaModule]
})
export class UserModule {}
