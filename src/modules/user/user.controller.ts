import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";

import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/create_user.dto";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('/')
  async fetch() {
    return await this.userService.fetch()
  }

  @Post('/')
  async create(@Body() user: CreateUserDTO) {
    return await this.userService.create(user)
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id)
  }
}