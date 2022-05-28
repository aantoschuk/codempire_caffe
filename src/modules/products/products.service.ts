import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { ProductEntity } from './products.entity';

import { CreateProductDTO } from './dto/create_product.dto';
import { UpdateProductDto } from './dto/update_product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) { }

  async create(body: CreateProductDTO) {
    return await this.productRepository.save(body);
  }

  async fetch() {
    return await this.productRepository.find();
  }

  async single(id: string) {
    return await this.productRepository.findOne(id);
  }

  async update(id: string, body: UpdateProductDto) {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException();
    }
    return await this.productRepository.update(product.id, body);
  }

  async delete(id: string) {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException();
    }
    return await this.productRepository.delete(id);
  }
}
