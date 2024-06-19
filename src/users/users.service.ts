import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepositoryInterface } from './repositories/users.repository.interface';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepositoryInterface')
    private readonly usersRepository: UsersRepositoryInterface,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const entity = new User();
    entity.name = createUserDto.name;
    entity.email = createUserDto.email;
    entity.password = createUserDto.password;
    entity.status = 'active';
    entity.created_at = new Date();
    entity.updated_at = new Date();

    return await this.usersRepository.create(entity);
  }

  async findAll() {
    return await this.usersRepository.findAll();
  }

  async findOne(id: number): Promise<User | undefined> {
    return await this.usersRepository.findOne(id);
  }

  async existsByEmail(email: string): Promise<boolean> {
    const user = await this.usersRepository.findByEmail(email);
    return user !== undefined;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<boolean> {
    return true;
  }

  async remove(id: number): Promise<boolean> {
    return true;
  }
}
