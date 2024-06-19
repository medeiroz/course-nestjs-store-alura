import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { ProductsRepositoryInterface } from './products.repository.interface';
import { ProductNotFoundException } from '../exceptions/product-not-found.exception';

@Injectable()
export class ProductsRepository implements ProductsRepositoryInterface {
  private entries: Product[] = [];

  async create(entity: Product): Promise<Product> {
    this.entries.push(entity);
    return entity;
  }

  async findAll(user: string): Promise<Product[]> {
    return this.entries.filter((entry) => entry.created_by === user);
  }

  async findOne(user: string, id: string): Promise<Product | undefined> {
    return this.entries.find(
      (entry) => entry.created_by === user && entry.id === id,
    );
  }

  async update(
    user: string,
    id: string,
    entity: Partial<Product>,
  ): Promise<Product> {
    delete entity.id;

    const entryFoundIndex = this.entries.findIndex(
      (entry) => entry.created_by === user && entry.id === id,
    );

    if (entryFoundIndex < 0) {
      throw new ProductNotFoundException();
    }

    const entryFound = this.entries[entryFoundIndex];

    Object.assign(entryFound, entity);
    this.entries[entryFoundIndex] = entryFound;
    return entryFound;
  }

  async remove(user: string, id: string): Promise<boolean> {
    const index = this.entries.findIndex(
      (entry) => entry.created_by === user && entry.id === id,
    );
    if (index === -1) {
      throw new ProductNotFoundException();
    }
    const entry = this.entries[index];
    this.entries.splice(index, 1);
    return entry !== undefined;
  }
}
