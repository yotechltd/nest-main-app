import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountsService {
  createNewAccount(): string {
    return 'Hello it created an object';
  }
}
