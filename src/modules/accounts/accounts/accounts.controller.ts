import { Body, Controller, Get, Post } from '@nestjs/common';
import { Account } from '../account.model';
import { AccountsService } from './accounts/accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly appService: AccountsService) {}
  @Get()
  found(): Account[] {
    return this.appService.getAllAccount();
  } 
  @Post('/api')
  create(@Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('age') age: number): Account {
    return this.appService.createNewAccount(name, email, password, age);
  }
}
