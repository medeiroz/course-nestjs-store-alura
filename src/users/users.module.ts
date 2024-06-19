import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './repositories/users.repository';
import { UniqueEmailValidator } from './validators/uniqueEmail.validator';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'UsersRepositoryInterface',
      useClass: UsersRepository,
    },
    UniqueEmailValidator,
  ],
  exports: [UsersService],
})
export class UsersModule {}
