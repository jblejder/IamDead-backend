import { NestMiddleware, ExpressMiddleware, Middleware } from '@nestjs/common'

@Middleware()
export class AuthenticationMiddleware implements NestMiddleware {
    resolve(...args: any[]): ExpressMiddleware {
        return (req, res, next) => {
          console.log('Request...')
          next()
        };
      }
}