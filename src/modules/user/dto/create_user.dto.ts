import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @Length(0, 50)
  full_name: string;


  @IsNotEmpty()
  @Length(0, 100)
  email: string;

  @IsNotEmpty()
  password: string;
}