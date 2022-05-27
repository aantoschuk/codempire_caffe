import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';

import { LocalAuthGuard } from '../guards/local.guard';

import { CreateUserDTO } from '../user/dto/create_user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() request) {
    return this.authService.login(request.user);
  }

  @Post('/register')
  async register(@Body() createUser: CreateUserDTO) {
    return await this.authService.register(createUser);
  }
}
