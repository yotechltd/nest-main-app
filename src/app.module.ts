import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './modules/accounts/accounts.module';
import { Transport, ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [
    AccountsModule,
    MongooseModule.forRoot(
      'mongodb+srv://kumol:kumol254@cluster0.5hz61.mongodb.net/YoFoodie?retryWrites=true&w=majority',
    ),
    ClientsModule.register([
      { name: 'service', transport: Transport.TCP}
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [MongooseModule],
})
export class AppModule {}
