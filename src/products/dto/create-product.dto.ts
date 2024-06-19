import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsPositive()
  @IsNumber()
  price: number;

  @IsInt()
  @Min(-1)
  stock: number;

  @IsNotEmpty()
  @MaxLength(1000)
  description: string;

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(3)
  @Type(() => CharacteristicProductDto)
  characteristics: CharacteristicProductDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => ImageProductDto)
  images: ImageProductDto[];

  @IsNotEmpty()
  category: string;
}

export class CharacteristicProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;
}

export class ImageProductDto {
  @IsNotEmpty()
  url: string;

  @IsNotEmpty()
  description: string;
}
