import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product-dto';
import { ProductsService } from './products.service';
import { v4 as uuid } from 'uuid';

@Controller('products')
export class ProductsController {
  constructor(private service: ProductsService) {}

  @Get(':id')
  findById(@Res() response, @Param('id') itemId) {
    this.service
      .findById(itemId)
      .then(result => {
        response.status(HttpStatus.OK).json(result);
      })
      .catch(error => {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message:
            'A ocurrido un error inesperado. Favor de contactar al administrador del sistema.',
          detail: error,
        });
      });
  }

  @Get()
  findAll(@Res() response) {
    this.service
      .findAll()
      .then(result => {
        response.status(HttpStatus.OK).json(result);
      })
      .catch(error => {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message:
            'A ocurrido un error inesperado. Favor de contactar al administrador del sistema.',
          detail: error,
        });
      });
  }

  @Post()
  create(@Body() item: CreateProductDto, @Res() response) {
    item.IdProduct = uuid();
    item.TimeStamp = Math.floor(new Date().getTime() / 1000);
    this.service
      .create(item)
      .then(result => {
        response.status(HttpStatus.CREATED).json(result);
      })
      .catch(error => {
        console.log(error);
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message:
            'A ocurrido un error inesperado. Favor de contactar al administrador del sistema.',
          detail: error,
        });
      });
  }

  @Put(':id')
  update(@Body() item: CreateProductDto, @Res() response, @Param('id') itemId) {
    this.service
      .update(itemId, item)
      .then(result => {
        response.status(HttpStatus.OK).json(result);
      })
      .catch(error => {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message:
            'A ocurrido un error inesperado. Favor de contactar al administrador del sistema.',
          detail: error,
        });
      });
  }

  @Delete(':id')
  delete(@Res() response, @Param('id') itemId) {
    this.service
      .delete(itemId)
      .then(result => {
        response.status(HttpStatus.OK).json(result);
      })
      .catch(error => {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message:
            'A ocurrido un error inesperado. Favor de contactar al administrador del sistema.',
          detail: error,
        });
      });
  }
}
