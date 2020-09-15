import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product-dto';
import { Product } from './schemas/products.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products_JorgeChable') private readonly model: Model<Product>,
  ) {}

  async findById(itemId: number): Promise<Product> {
    return await this.model.findById(itemId).exec();
  }

  async findAll(): Promise<Product[]> {
    return await this.model.find().exec();
  }

  async create(item: CreateProductDto): Promise<Product> {
    const newItem = new this.model(item);
    return await newItem.save();
  }

  async update(itemId: number, item: CreateProductDto): Promise<Product> {
    // return await this.model.updateOne({ IdProduct: itemId }, { $set: item });
    return await this.model.updateOne({ _id: itemId }, { $set: item });
  }

  async delete(itemId: number): Promise<any> {
    // return await this.model.deleteOne({ IdProduct: itemId });
    return await this.model.deleteOne({ _id: itemId });
  }
}
