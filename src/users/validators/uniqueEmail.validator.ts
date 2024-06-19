import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsersService } from '../users.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private usersService: UsersService) {}

  async validate(value: string): Promise<boolean> {
    const userExists = await this.usersService.existsByEmail(value);
    return !userExists;
  }
}

export const UniqueEmail = (validationOptions: ValidationOptions) => {
  return (myObject: object, propertyName: string) => {
    registerDecorator({
      target: myObject.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: UniqueEmailValidator,
    });
  };
};
