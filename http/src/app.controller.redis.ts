import { Controller, Post, Body } from '@nestjs/common';
import { MathServiceRedis } from './math.service.redis';

@Controller()
export class AppControllerRedis {
  constructor(private readonly _mathService: MathServiceRedis) {}

  @Post('redis/add')
  accumulate(@Body('data') data: number[]) {
    return this._mathService.accumulate(data);
  }
}
