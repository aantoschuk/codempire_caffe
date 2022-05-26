import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserModule } from './modules/user/user.module';

import { config } from './constants/config';
import { DatabaseConfig } from './config/database';

@Module({
  imports: [UserModule, ConfigModule.forRoot({
    isGlobal: true,
    load: [config]
  }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig
    })
  ],
})
export class AppModule { }
