import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TABLE_NAME = 'acl'

export class CreateACLTable1652785526487 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(new Table({
      name: TABLE_NAME,
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'uuid',
        },
        {
          name: 'name',
          type: 'varchar',
          isUnique: true,
          isNullable: false
        },
        {
          name: 'literal',
          type: 'varchar',
          isNullable: false
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable(TABLE_NAME);
  }

}
