import Roles from '#enums/roles'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('name').notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('phone', 254).notNullable().unique()
      table.string('avatar_url', 254).notNullable().defaultTo('')
      table.string('password').notNullable()
      table.string('role').notNullable().defaultTo(Roles.USER)

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
