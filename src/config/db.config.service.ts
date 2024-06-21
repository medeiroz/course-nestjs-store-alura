import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { join } from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Injectable()
export class DbConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    const database = this.configService.get<string>('DB_NAME');
    const appEnv = this.configService.get<string>('APP_ENV');

    return {
      type: 'sqlite',
      database,
      entities: [join(__dirname, '/../**/**.entity{.ts,.js}')],
      synchronize: appEnv === 'development',
      namingStrategy: new SnakeNamingStrategy(),
    };
  }
}
