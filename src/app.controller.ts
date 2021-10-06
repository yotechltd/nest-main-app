import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Message } from './message.event'; 
@Controller()
export class AppController {
  constructor(@Inject('service') private readonly client:   ClientProxy) { }
  async onApplicationBootstrap() {
    await this.client.connect();
  }
  @Get()
  getHello() {
   this.client.emit<any>('printing', new Message('Hello World My publick '));
   return 'Hello World printed';
  }

  @Get('/get')
  Fatman(){
    //this.client.emit<any>('sums', 45);
    return 'turn'
  }
}
