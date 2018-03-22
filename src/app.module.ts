import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BatteryController } from './controllers/battery.controller'

@Module({
  imports: [],
  controllers: [AppController, BatteryController],
  components: [],
})
export class ApplicationModule {}
