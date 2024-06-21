import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserNotFoundException } from './exceptions/user-not-found.exception';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return {
      user,
      message: 'User created successfully!',
    };
  }

  @Get()
  findAll() {
    return this.usersService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.getById(id);

    if (!user) {
      throw new UserNotFoundException();
    }

    return user;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.usersService.update(id, updateUserDto);

    return {
      user,
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.usersService.delete(id);

    return {
      message: 'User deleted successfully!',
    };
  }
}
