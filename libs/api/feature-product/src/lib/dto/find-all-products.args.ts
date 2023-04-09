import { ArgsType, Field } from '@nestjs/graphql'

@ArgsType()
export class FindAllProductsArgs {
  @Field(() => String, { nullable: true })
  productCategory?: string
}
