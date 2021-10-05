import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  putService(): string {
    return 'Hello it created an object';
  }
}
