import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class MathService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.NATS,
      options: {
        servers: ['nats://nats:4222']
      },
    });
  }

  getHello(): string {
    return 'Hello World!';
  }
  
  public accumulate(data: number[]) {
    return this.client.send<number, number[]>('add', data);
    // return data;
  }
}
