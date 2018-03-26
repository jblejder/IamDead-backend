import { Get, Controller, Req, Post } from '@nestjs/common'
import { Request } from 'express';

@Controller()
export class AppController {

  @Get()
  root(@Req() req: Request): string {
    console.log('hello')
    return 'Hello World from nestjs! ' + req.headers['dupa']
  }

  @Post()
  postRoot(@Req() req: Request): string {
    console.log('hello')
    return req.body
  }
}