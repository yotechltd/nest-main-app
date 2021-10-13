import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Message } from './message.event'; 

import { from, Observable } from 'node_modules/rxjs/dist/types';
import { Account } from './modules/accounts/schema/account.schema';
import { subscribeOn } from 'rxjs-compat/operator/subscribeOn';
@Controller()
export class AppController {
  constructor(@Inject('service') private readonly client:   ClientProxy) { }
  async onApplicationBootstrap() {
    await this.client.connect();
  }
  @Get()
  async getHello(): Promise<any> {
   return await this.client.emit<any>('printing', new Message('getData'));
  }

  @Get('/get')
  async sumAll(): Promise<any>{
    let value = await this.client.emit<any>('sum', [45,67]);
    console.log(value);
    return value;
  }

  @Get('/sum')
  async newSum(): Promise<any>{
    const pattern = { cmd: 'sums' };
    const payload = {"message": "Get User Data"};
    let value = await this.client.send<number>(pattern, payload);
    console.log(value);
    return value;
  }
}
