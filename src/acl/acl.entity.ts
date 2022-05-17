import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('acl')
export class ACLEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true
  })
  name: string;

  @Column({
    type: 'varchar',
    width: 10,
    nullable: false,
  })
  literal: string;
}
