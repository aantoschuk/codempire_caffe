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

import { ProductService } from './products.service';

import { RoleGuard } from '../guards/role.guard';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { Roles } from '../decorators/role.decorator';

import { Role } from 'src/constants/roles';
import { CreateProductDTO } from './dto/create_product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get('/')
  async fetch() {
    return await this.productService.fetch();
  }

  @Get('/:id')
  async single(@Param('id') id: string) {
    return await this.productService.single(id);
  }

  @Roles(Role.manager)
  @UseGuards(RoleGuard)
  @UseGuards(JwtAuthGuard)
  @Post('/')
  async create(@Body() body: CreateProductDTO) {
    return await this.productService.create(body);
  }

  @Roles(Role.manager)
  @UseGuards(RoleGuard)
  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() body: any) {
    return await this.productService.update(id, body);
  }

  @Roles(Role.manager)
  @UseGuards(RoleGuard)
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.productService.delete(id);
  }
}
