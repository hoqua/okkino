import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { HomeBlockService } from './home-block.service'
import {
  CreateOneHomeBlockArgs,
  DeleteOneHomeBlockArgs,
  FindUniqueHomeBlockArgs,
  HomeBlock,
  UpdateOneHomeBlockArgs
} from '@okkino/api/generated-db-types'

@Resolver(() => HomeBlock)
export class HomeBlockResolver {
  constructor(private readonly homeBlockService: HomeBlockService) {}

  @Mutation(() => HomeBlock)
  createHomeBlock(@Args() createOneHomeBlockArgs: CreateOneHomeBlockArgs) {
    return this.homeBlockService.create(createOneHomeBlockArgs)
  }

  @Query(() => [HomeBlock])
  homeBlocks() {
    return this.homeBlockService.findAll()
  }

  @Query(() => HomeBlock)
  homeBlock(@Args() findUniqueHomeBlockArgs: FindUniqueHomeBlockArgs) {
    return this.homeBlockService.findOne(findUniqueHomeBlockArgs)
  }

  @Mutation(() => HomeBlock)
  updateHomeBlock(@Args() updateOneHomeBlockArgs: UpdateOneHomeBlockArgs) {
    return this.homeBlockService.update(updateOneHomeBlockArgs)
  }

  @Mutation(() => HomeBlock)
  removeHomeBlock(@Args() deleteOneHomeBlockArgs: DeleteOneHomeBlockArgs) {
    return this.homeBlockService.remove(deleteOneHomeBlockArgs)
  }
}
