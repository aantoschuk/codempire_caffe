import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ROLES } from 'src/constants/roles';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  full_name: string;

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
  avatar: string;

  @Column({
    type: 'enum',
    enum: ROLES,
    default: ROLES.client,
  })
  role: ROLES;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  phone: number;
}
