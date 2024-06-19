import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from './repositories/users.repository';
import { UniqueEmailValidator } from './validators/uniqueEmail.validator';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'UsersRepositoryInterface',
      useClass: UserRepository,
    },
    UniqueEmailValidator,
  ],
})
export class UsersModule {}
