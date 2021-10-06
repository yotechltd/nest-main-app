import { Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './schema/cat.schema';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService){}
  @Get()
  getCats():Promise<Cat[]>{
    return this.catsService.findOne();
  }

  @Post()
  saveCats(): Promise<Cat>{
    return this.catsService.createCat({"name":"puppy","age": 21, "breed": "Indian"});
  }

  @Get('/name')
  getName(): Promise<string>{
    return this.catsService.nameFinder();
  }
}
