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

  create(createUserDto: CreateUserDto): Promise<User> {
    const entity = new User();
    entity.name = createUserDto.name;
    entity.email = createUserDto.email;
    entity.password = createUserDto.password;
    entity.status = 'active';
    entity.created_at = new Date();
    entity.updated_at = new Date();

    return this.usersRepository.create(entity);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
