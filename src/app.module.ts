import { Module, NestModule } from '@nestjs/common'
import { MiddlewaresConsumer } from '@nestjs/common/interfaces'
import { AppController } from './app.controller'
import { AuthenticationMiddleware } from './authentication.middleware'
import { BatteryController } from './controllers/battery.controller';
import { statusesProvider, usersProvider } from './app.providers';

@Module({
  imports: [],
  controllers: [AppController, BatteryController],
  components: [statusesProvider, usersProvider],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes(AppController)
  }
}
