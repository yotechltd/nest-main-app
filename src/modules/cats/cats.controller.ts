import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './schema/cat.schema';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService){}
  @Get()
  getCats():Promise<Cat[]>{
    return this.catsService.findOne();
  }

  @Get('/name')
  getName(): Promise<string>{
    return this.catsService.nameFinder();
  }
}
