import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductSchema } from './schemas/products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Products_JorgeChable',
        schema: ProductSchema,
        collection: 'Products_JorgeChable',
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}