import { Injectable } from '@nestjs/common';
import { Account } from '../../account.model';

@Injectable()
export class AccountsService {
  accounts: Account[];
  createNewAccount(name: string, email: string, password: string, age: number): Account {
    let account = new Account(name, email, password, age, Math.random().toString());
    this.accounts.push(account);
    return account;
  }

  getAllAccount(): Account[]{
    return [...this.accounts]
  }
}
