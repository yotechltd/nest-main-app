import { Connection, Model } from "mongoose";
import { Injectable } from '@nestjs/common';
import { Cat, CatDocument } from "./schema/cat.schema";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { CreateCatDto } from "./dto/create-cat.dto";
@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>, @InjectConnection() private connection: Connection){}
  async createCat(createCatDto : CreateCatDto): Promise<Cat>{
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }
  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
  async findOne(): Promise<Cat[]>{
    console.log(Cat.name);
    console.log(this.catModel);
    return this.catModel.find();
  }

  async nameFinder(): Promise<string>{
    return Cat.name;
  }
}
