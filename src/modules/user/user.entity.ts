import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Role } from 'src/constants/roles';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  full_name?: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  password: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  avatar?: string;

  @Column({
    type: 'varchar',
    default: Role.client,
  })
  role: Role;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  phone?: number;
}
