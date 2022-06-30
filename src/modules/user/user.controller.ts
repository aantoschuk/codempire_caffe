import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { UserService } from './user.service';

import { JwtAuthGuard } from '../guards/jwt.guard';
import { UpdateUserDTO } from './dto/update_user.dto';

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

  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  async update(@Param('email') email: string, @Body() body: UpdateUserDTO) {
    return await this.userService.update(email, body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}
