import {
  Injectable,
  OnModuleInit,
  Logger,
  Post,
  Body,
  Controller,
} from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microservicesOptions } from './grpc.options';
import { IGrpcService } from './grpc.interface';

@Injectable()
@Controller()
export class AppController implements OnModuleInit {
  private logger = new Logger();

  @Client(microservicesOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('AppController');
  }

  @Post('grpc/add')
  accumulate(@Body('data') data: number[]) {
    this.logger.log(`Adding ${data.toString()}`);
    return this.grpcService.accumulate({ data });
  }
}
