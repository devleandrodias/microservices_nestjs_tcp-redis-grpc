import { Controller, Logger, Post, Body } from '@nestjs/common';
import { MathService } from './math.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  // create a logger instance
  private logger = new Logger('AppController');

  // inject the math service
  constructor(private mathService: MathService) {}

  // define the message pattern fot this method
  @MessagePattern('add')
  // define the logic to be executed
  async accumulate(data: number[]) {
    this.logger.log(`Adding ${data.toString()}`); //log something on every call
    return this.mathService.accumulate(data); // use math service to cal result and return
  }
}
