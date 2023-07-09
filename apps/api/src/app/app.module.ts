import { Module, ValidationPipe } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius'
import * as path from 'node:path'
import { APP_PIPE } from '@nestjs/core'
import { HomeBlockModule } from '@okkino/api/feature-home-block'
import { ProductModule } from '@okkino/api/feature-product'
import { ProductCategoryModule } from '@okkino/api/feature-product-category'
import { ProductLengthModule } from '@okkino/api/feature-product-length'
import { ConfigModule } from '@nestjs/config'
import { apiEnv } from '@okkino/api/utils-env'

const validationProvider = {
  provide: APP_PIPE,
  useValue: new ValidationPipe()
}

@Module({
  imports: [
    ConfigModule.forRoot({ load: [() => apiEnv], isGlobal: true }),
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      autoSchemaFile: path.join(__dirname, './autogenerated-schema.gql')
    }),
    HomeBlockModule,
    ProductModule,
    ProductCategoryModule,
    ProductLengthModule
  ],
  providers: [validationProvider]
})
export class AppModule {}
