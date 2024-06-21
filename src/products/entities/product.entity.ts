import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { ProductCharacteristic } from './product-characteristic.entity';
import { ProductImage } from './product-image.entity';
import { User } from 'src/users/entities/user.entity';

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

  @Column({ length: 36 })
  userId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToMany(
    () => ProductCharacteristic,
    (productCharacteristic) => productCharacteristic.product,
    { cascade: true, eager: true },
  )
  characteristics: ProductCharacteristic[];

  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade: true,
    eager: true,
  })
  images: ProductImage[];

  @ManyToOne(() => User, (user) => user.products)
  user: User;
}
