import * as dotenv from 'dotenv'
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

dotenv.config()

const env = {
    PORT: process.env.PORT
}

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  await app.listen(env.PORT);
}
bootstrap();