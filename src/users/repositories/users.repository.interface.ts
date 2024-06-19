import { User } from '../entities/user.entity';

export interface UsersRepositoryInterface {
  create(user: User): Promise<User>;

  findAll(): Promise<User[]>;

  findOne(id: string): Promise<User | undefined>;

  update(id: string, user: Partial<User>): Promise<User>;

  remove(id: string): Promise<boolean>;

  findByEmail(email: string): Promise<User | undefined>;
}
