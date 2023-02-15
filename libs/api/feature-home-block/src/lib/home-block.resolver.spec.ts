import { Test, TestingModule } from '@nestjs/testing'
import { HomeBlockResolver } from './home-block.resolver'
import { HomeBlockService } from './home-block.service'

describe('HomeBlockResolver', () => {
  let resolver: HomeBlockResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeBlockResolver, HomeBlockService]
    }).compile()

    resolver = module.get<HomeBlockResolver>(HomeBlockResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
