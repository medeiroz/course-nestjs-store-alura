import { Injectable } from '@nestjs/common';
import { User } from './../entities/user.entity';
import { UsersRepositoryInterface } from './users.repository.interface';

@Injectable()
export class UserRepository implements UsersRepositoryInterface {
  private entries: User[] = [];

  async create(user: User): Promise<User> {
    this.entries.push(user);
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.entries;
  }

  async findOne(id: number): Promise<User | undefined> {
    return this.entries.find((user) => user.id === id);
  }

  async update(id: number, user: User): Promise<User | undefined> {
    const index = this.entries.findIndex((user) => user.id === id);
    if (index === -1) {
      return undefined;
    }
    this.entries[index] = user;
    return user;
  }

  async remove(id: number): Promise<User | undefined> {
    const index = this.entries.findIndex((user) => user.id === id);
    if (index === -1) {
      return undefined;
    }
    const user = this.entries[index];
    this.entries.splice(index, 1);
    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.entries.find((user) => user.email === email);
  }
}
