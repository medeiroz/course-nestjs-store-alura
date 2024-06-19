import { User } from '../entities/user.entity';

export interface UsersRepositoryInterface {
  create(user: User): Promise<User>;

  findAll(): Promise<User[]>;

  findOne(id: number): Promise<User | undefined>;

  update(id: number, user: User): Promise<User | undefined>;

  remove(id: number): Promise<User | undefined>;

  findByEmail(email: string): Promise<User | undefined>;
}
