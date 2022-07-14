import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const logger = new Logger('Main');

const microservicesOptions = {
  transport: Transport.NATS,
  options: {
    servers: ['nats://nats:4222']
  }
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microservicesOptions);
  await app.listen();
}
bootstrap();
