import { IsNotEmpty, Length } from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @Length(0, 100)
  name: string;

  @IsNotEmpty()
  @Length(0, 20)
  type: string;

  @IsNotEmpty()
  image: string;

  allergenes: string[];

  @IsNotEmpty()
  weight: number;

  @IsNotEmpty()
  price: number;
}
