import {
  Transport,
  ClientProxy,
  ClientProxyFactory,
} from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MathServiceRedis {
  private client: ClientProxy;
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379',
      },
    });
  }

  public accumulate(data: number[]) {
    return this.client.send<number, number[]>('add', data);
  }
}
