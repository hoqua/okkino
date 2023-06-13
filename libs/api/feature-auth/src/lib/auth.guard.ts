import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Observable } from 'rxjs'
import { GqlExecutionContext } from '@nestjs/graphql'
import * as jwt from 'jsonwebtoken'

const splitPem = process.env?.['CLERK_JWT_VERIFICATION_KEY']?.match(/.{1,64}/g) as string[]
const publicKey =
  '-----BEGIN PUBLIC KEY-----\n' + splitPem.join('\n') + '\n-----END PUBLIC KEY-----'

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = GqlExecutionContext.create(context).getContext().req
    const sessToken = req.cookies['__session']

    jwt.verify(sessToken, publicKey)
    return true
  }
}
