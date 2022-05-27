import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';

import { CreateUserDTO } from '../user/dto/create_user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) { }

  async createToken(email: string, id: string) {
    const payload = { email, sub: id };
    return { access_token: this.jwtService.sign(payload) };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.single(email);

    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: IUser) {
    const token = this.createToken(user.email, user.id);
    return token;
  }

  async register(data: CreateUserDTO) {
    const user = await this.userService.create(data);
    const token = await this.createToken(user.email, user.id);
    return { user, ...token };
  }
}
