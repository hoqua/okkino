import { Test, TestingModule } from '@nestjs/testing'
import { UserService } from './user.service'
import { PrismaService } from '@okkino/api/data-access-db'

describe('UserService', () => {
  let service: UserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService]
    }).compile()

    service = module.get<UserService>(UserService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
