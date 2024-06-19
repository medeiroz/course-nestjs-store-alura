import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductCharacteristic } from './product-characteristic.entity';
import { ProductImage } from './product-image.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ type: 'float', unsigned: true, precision: 8, scale: 2 })
  price: number;

  @Column({ type: 'int', unsigned: true })
  stock: number;

  @Column({ type: 'text', length: 3000 })
  description: string;

  @Column({ length: 255 })
  category: string;

  // characteristics: ProductCharacteristic[];

  // images: ProductImage[];

  @Column({ name: 'created_by', length: 255 })
  created_by: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
