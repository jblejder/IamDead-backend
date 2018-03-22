import { Module, NestModule } from '@nestjs/common'
import { MiddlewaresConsumer } from '@nestjs/common/interfaces'
import { AppController } from './app.controller'
import { AuthenticationMiddleware } from './authentication.middleware'

@Module({
  imports: [],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes(AppController)
  }
}
