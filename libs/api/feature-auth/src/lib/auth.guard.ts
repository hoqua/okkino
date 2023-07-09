import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Observable } from 'rxjs'
import { GqlExecutionContext } from '@nestjs/graphql'
import * as jwt from 'jsonwebtoken'
import { ConfigService } from '@nestjs/config'
import { TApiEnv } from '@okkino/api/utils-env'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = GqlExecutionContext.create(context).getContext().req
    const key = this.configService.get<TApiEnv['auth']['jwtVerifyKey']>('auth.jwtVerifyKey')
    const splitPem = key?.match(/.{1,64}/g) as string[]
    const publicKey =
      '-----BEGIN PUBLIC KEY-----\n' + splitPem.join('\n') + '\n-----END PUBLIC KEY-----'

    const sessToken = req.cookies['__session']

    jwt.verify(sessToken, publicKey)
    return true
  }
}
