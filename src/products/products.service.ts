import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { UsersService } from './../users/users.service';
import { UserNotFoundException } from 'src/users/exceptions/user-not-found.exception';
import { ProductCharacteristic } from './entities/product-characteristic.entity';
import { ProductImage } from './entities/product-image.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
    @Inject(UsersService)
    private readonly usersService: UsersService,
  ) {}

  async create(user, createProductDto: CreateProductDto): Promise<Product> {
    const userFound = await this.usersService.exists(user);

    if (!userFound) {
      throw new UserNotFoundException();
    }

    const entity = new Product();
    entity.userId = user;
    entity.name = createProductDto.name;
    entity.price = createProductDto.price;
    entity.stock = createProductDto.stock;
    entity.description = createProductDto.description;
    entity.category = createProductDto.category;
    entity.characteristics = createProductDto.characteristics.map(
      (characteristic) => {
        const characteristicEntity = new ProductCharacteristic();
        characteristicEntity.name = characteristic.name;
        characteristicEntity.description = characteristic.description;

        return characteristicEntity;
      },
    );

    entity.images = createProductDto.images.map((image) => {
      const imageEntity = new ProductImage();
      imageEntity.url = image.url;
      imageEntity.description = image.description;

      return imageEntity;
    });

    return await this.productsRepository.save(entity);
  }

  async getAll(user: null | string): Promise<Product[]> {
    if (!user) {
      return await this.productsRepository.find();
    }

    return await this.productsRepository.find({ where: { userId: user } });
  }

  async getById(id: string): Promise<Product | null> {
    return await this.productsRepository.findOne({ where: { id } });
  }

  async getByUserAndId(user: string, id: string): Promise<Product | null> {
    return await this.productsRepository.findOne({
      where: { userId: user, id },
    });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return await this.productsRepository.update(id, updateProductDto);
  }

  async delete(id: string): Promise<boolean> {
    await this.productsRepository.delete(id);
    return true;
  }
}
