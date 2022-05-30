import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    const salt = 10;
    const hash = await bcrypt.hash(body.password, salt);
    const user = await this.userRepository.findOne({ email: body.email });

    if (user) {
      throw new HttpException('User already exist', HttpStatus.CONFLICT);
    }
    return await this.userRepository.save({ ...body, password: hash });
  }

  async fetch() {
    const users = await this.userRepository.find();
    return users;
  }

  async single(email: string) {
    const user = await this.userRepository.findOne({ email });
    return user;
  }

  async delete(id: string) {
    return await this.userRepository.delete(id);
  }
}
