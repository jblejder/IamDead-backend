import { Get, Controller } from '@nestjs/common'

@Controller()
export class AppController {

  @Get()
  root(): string {
    console.log('hello')
    return 'Hello World from nestjs!';
  }
}