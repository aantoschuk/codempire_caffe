import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Injectable, NotFoundException } from '@nestjs/common';

import { UserService } from '../user/user.service';

import { CreateUserDTO } from '../user/dto/create_user.dto';
import { Role } from 'src/constants/roles';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) { }

  async createToken(email: string, id: string, role: string) {
    const payload = { email, sub: id, role };

    return { access_token: this.jwtService.sign(payload) };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.single(email);
    const comparsion = await bcrypt.compare(password, user.password);
    if (user && comparsion) {
      const { password, ...result } = user;
      return result;
    }
    throw new NotFoundException('Wrong email or password');
  }

  async login(user: IUser) {
    const token = this.createToken(user.email, user.id, user.role);
    return token;
  }

  async register(data: CreateUserDTO) {
    const user = await this.userService.create(data);
    const role = Role[user.role];
    const token = await this.createToken(user.email, user.id, role);
    return { user, ...token };
  }
}
