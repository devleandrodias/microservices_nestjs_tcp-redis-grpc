import {
  Transport,
  ClientProxy,
  ClientProxyFactory,
} from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';

// const logger = new Logger('Main');

// const microserviceOptions: ClientOptions = {
//   transport: Transport.TCP,
//   options: {
//     host: '127.0.0.1',
//     port: 8877,
//   },
// };

// const client = ClientProxyFactory.create(microserviceOptions);

// client
//   // .send<ReturnType, ParamType>('pattern', param)
//   .send<number, number[]>('add', [5, 10, 15, 45])
//   .subscribe(result => logger.log(result));

@Injectable()
export class MathServiceTcp {
  private client: ClientProxy;
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8877,
      },
    });
  }

  public accumulate(data: number[]) {
    return this.client.send<number, number[]>('add', data);
  }
}
