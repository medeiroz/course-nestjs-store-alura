import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepositoryInterface } from './repositories/products.repository.interface';
import { Product } from './entities/product.entity';
import { UsersService } from './../users/users.service';
import { UserNotFoundException } from 'src/users/exceptions/user-not-found.exception';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('ProductsRepositoryInterface')
    private readonly productsRepository: ProductsRepositoryInterface,
    private readonly usersService: UsersService,
  ) {}

  async create(user, createProductDto: CreateProductDto): Promise<Product> {
    const userFound = await this.usersService.exists(user);

    if (!userFound) {
      throw new UserNotFoundException();
    }

    const entity = new Product();
    entity.created_by = user;
    entity.name = createProductDto.name;
    entity.price = createProductDto.price;
    entity.stock = createProductDto.stock;
    entity.description = createProductDto.description;
    entity.category = createProductDto.category;
    // entity.characteristics = createProductDto.characteristics;
    // entity.images = createProductDto.images;

    return await this.productsRepository.create(entity);
  }

  async findAll(user: string) {
    return await this.productsRepository.findAll(user);
  }

  async findOne(user: string, id: string) {
    return await this.productsRepository.findOne(user, id);
  }

  async update(user: string, id: string, updateProductDto: UpdateProductDto) {
    return await this.productsRepository.update(user, id, updateProductDto);
  }

  async remove(user: string, id: string) {
    await this.productsRepository.remove(user, id);
    return true;
  }
}
