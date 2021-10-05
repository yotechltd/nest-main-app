import { Controller, Get, Post } from '@nestjs/common';
import { AccountsService } from './accounts/accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly appService: AccountsService) {}
  @Get()
  found(): string {
    return 'hello';
  }
  @Post('/api')
  create(): string {
    return this.appService.createNewAccount();
  }
}
