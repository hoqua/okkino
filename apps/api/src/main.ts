/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import helmet from '@fastify/helmet'
import { apiEnv } from './environments/environment'

const { isProd, api } = apiEnv

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())

  await app.register(helmet, { contentSecurityPolicy: isProd })
  app.enableCors()

  await app.listen(api.port)
  Logger.log(`🚀 Application playground is running on: http://localhost:${api.port}/graphiql`)
}

// eslint-disable-next-line unicorn/prefer-top-level-await
bootstrap().catch(console.log)
