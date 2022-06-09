import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  type: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  image: string;

  @Column({
    type: 'varchar',
    nullable: false,
    default: 'Some Text About Product',
  })
  description: string;

  @Column({
    type: 'varchar',
    array: true,
    default: [''],
    nullable: true,
  })
  allergenes: string[];

  @Column({
    nullable: false,
  })
  weight: number;

  @Column({
    nullable: false,
  })
  price: number;
}
