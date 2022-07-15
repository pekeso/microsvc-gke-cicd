import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class MathService {
  getHello(): string {
    return 'Hello World!';
  }
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.NATS,
      options: {
        servers: ['nats://nats:4222']
      },
    });
  }
  
  public accumulate(data: number[]) {
    return this.client.send<number, number[]>('add', data);
    // return data;
  }
}
