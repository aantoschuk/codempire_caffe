import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserEntity } from './user.entity';
import { CreateUserDTO } from './dto/create_user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) { }

  async create(body: CreateUserDTO) {
    return await this.userRepository.save(body);
  }

  async fetch() {
    const users = await this.userRepository.find();
    return users;
  }

  async delete(id: string) {
    return await this.userRepository.delete(id)
  }
}
