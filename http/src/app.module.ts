import { Module } from '@nestjs/common';
import { AppController } from './app.controller.grpc';
import { AppControllerTcp } from './app.controller.tcp';
import { AppControllerRedis } from './app.controller.redis';
import { MathServiceTcp } from './math.service.tcp';
import { MathServiceRedis } from './math.service.redis';

@Module({
  controllers: [AppControllerTcp, AppControllerRedis, AppController],
  providers: [MathServiceTcp, MathServiceRedis],
})
export class AppModule {}
