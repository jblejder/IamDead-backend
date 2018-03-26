import { NestMiddleware, ExpressMiddleware, Middleware } from '@nestjs/common'
import { Response, Request } from 'express'

@Middleware()
export class AuthenticationMiddleware implements NestMiddleware {
    resolve(...args: any[]): ExpressMiddleware {
        return (req: Request, res: Response, next) => {
          req.headers['app-user-id'] = 'debug-user'
          next()
        };
      }
}