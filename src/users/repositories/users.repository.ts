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

  async findOne(id: string): Promise<User | undefined> {
    return this.entries.find((user) => user.id === id);
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    delete user.id;

    const userFoundIndex = this.entries.findIndex((user) => user.id === id);

    if (userFoundIndex < 0) {
      throw new Error('User not found');
    }

    const userFound = this.entries[userFoundIndex];

    Object.assign(userFound, user);
    this.entries[userFoundIndex] = userFound;
    return userFound;
  }

  async remove(id: string): Promise<boolean> {
    const index = this.entries.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }
    const user = this.entries[index];
    this.entries.splice(index, 1);
    return user !== undefined;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.entries.find((user) => user.email === email);
  }
}
