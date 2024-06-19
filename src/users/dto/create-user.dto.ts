import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { UniqueEmail } from '../validators/uniqueEmail.validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @UniqueEmail({ message: 'Email $value already exists. Choose another one.' })
  email: string;

  @MinLength(8)
  password: string;
}
