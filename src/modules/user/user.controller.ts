import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { UserService } from './user.service';

import { JwtAuthGuard } from '../guards/jwt.guard';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('/')
  async fetch() {
    return await this.userService.fetch();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:email')
  async single(@Param('email') email: string) {
    return await this.userService.single(email);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}
