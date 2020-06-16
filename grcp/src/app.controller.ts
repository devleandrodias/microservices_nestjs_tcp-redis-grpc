import { Controller, Get, Logger } from '@nestjs/common';
import { MathService } from './math.service';
import { GrpcMethod } from '@nestjs/microservices';

interface INumberArray {
  data: number[];
}

interface ISumOfNumberArray {
  sum: number;
}

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly _mathService: MathService) {}

  @GrpcMethod('AppController', 'Accumulate')
  accumulate(numberArray: INumberArray, metadata: any): ISumOfNumberArray {
    this.logger.log(`Adding ${numberArray.data.toString()}`);
    return {
      sum: this._mathService.accumulate(numberArray.data),
    };
  }
}
