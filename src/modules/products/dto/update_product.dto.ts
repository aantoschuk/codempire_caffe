import { Length } from 'class-validator';

export class UpdateProductDto {
  @Length(0, 100)
  name: string;

  @Length(0, 20)
  type: string;

  image: string;

  allergenes: string[];

  weight: number;

  price: number;
}
