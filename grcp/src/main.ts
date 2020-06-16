import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

const logger = new Logger('Main');

const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'app',
    protoPath: join(__dirname, '../src/app.proto'),
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  app.listen(() => {
    logger.log('Microservice is listening...');
  });
}
bootstrap();
