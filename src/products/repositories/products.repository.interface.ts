import { Product } from '../entities/product.entity';

export interface ProductsRepositoryInterface {
  create(product: Product): Promise<Product>;

  findAll(user: string): Promise<Product[]>;

  findOne(user: string, id: string): Promise<Product | undefined>;

  update(user: string, id: string, product: Partial<Product>): Promise<Product>;

  remove(user: string, id: string): Promise<boolean>;
}
