import { Controller, Post, Body } from '@nestjs/common';
import { MathServiceTcp } from './math.service.tcp';

@Controller()
export class AppControllerTcp {
  constructor(private readonly _mathService: MathServiceTcp) {}

  @Post('tcp/add')
  accumulate(@Body('data') data: number[]) {
    return this._mathService.accumulate(data);
  }
}
