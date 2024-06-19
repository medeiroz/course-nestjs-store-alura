import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { ListUserDto } from './dto/list-user.dto';
import { UserNotFoundException } from './exceptions/user-not-found.exception';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<ListUserDto> {
    const entity = new User();
    entity.name = createUserDto.name;
    entity.email = createUserDto.email;
    entity.password = createUserDto.password;

    const createdEntity = await this.usersRepository.save(entity);

    return new ListUserDto(
      createdEntity.id,
      createdEntity.name,
      createdEntity.email,
    );
  }

  async getAll(): Promise<ListUserDto[]> {
    const entities = await this.usersRepository.find();
    return entities.map(
      (entity) => new ListUserDto(entity.id, entity.name, entity.email),
    );
  }

  async getById(id: string): Promise<ListUserDto> {
    const entity = await this.usersRepository.findOne({ where: { id } });

    if (!entity) {
      throw new UserNotFoundException();
    }

    return new ListUserDto(entity.id, entity.name, entity.email);
  }

  async exists(id: string): Promise<boolean> {
    return await this.usersRepository.exists({ where: { id } });
  }

  async existsByEmail(email: string): Promise<boolean> {
    const user = await this.usersRepository.findOne({ where: { email } });
    return user !== null;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: string): Promise<boolean> {
    await this.usersRepository.delete(id);
    return true;
  }
}
