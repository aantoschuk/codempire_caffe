import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'

import { ACLModule } from './acl/acl.module';
import { DatabaseConfig } from './config/database';
import { config } from './constants/config';

@Module({
  imports: [ACLModule, ConfigModule.forRoot({
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
