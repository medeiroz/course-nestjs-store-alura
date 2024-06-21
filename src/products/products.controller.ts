import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('users/:user/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('')
  async create(
    @Param('user') user: string,
    @Body() createProductDto: CreateProductDto,
  ) {
    const entry = await this.productsService.create(user, createProductDto);

    return {
      product: entry,
      message: 'Product created successfully!',
    };
  }

  @Get('')
  async findAll(@Param('user') user: string) {
    return await this.productsService.getAll(user);
  }

  @Get(':id')
  async findOne(@Param('user') user: string, @Param('id') id: string) {
    const entry = await this.productsService.getByUserAndId(user, id);

    if (!entry) {
      return {
        message: 'Product not found!',
      };
    }

    return entry;
  }

  @Patch(':id')
  async update(
    @Param('user') user: string,
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const entry = await this.productsService.update(id, updateProductDto);

    return {
      product: entry,
      message: 'Product updated successfully',
    };
  }

  @Delete(':id')
  async remove(@Param('user') user: string, @Param('id') id: string) {
    await this.productsService.delete(id);

    return {
      message: 'Product deleted successfully',
    };
  }
}
