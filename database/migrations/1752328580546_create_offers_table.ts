import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'offers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('user_id').unsigned().references('users.id').notNullable().onDelete('CASCADE')
      table
        .integer('brand_id')
        .unsigned()
        .references('car_brands.id')
        .notNullable()
        .onDelete('CASCADE')
      table
        .integer('model_id')
        .unsigned()
        .references('car_models.id')
        .notNullable()
        .onDelete('CASCADE')
      table
        .integer('car_type_id')
        .unsigned()
        .references('car_types.id')
        .notNullable()
        .onDelete('CASCADE')
      table
        .integer('fuel_type_id')
        .unsigned()
        .references('fuel_types.id')
        .notNullable()
        .onDelete('CASCADE')

      table.integer('production_year').notNullable()
      table.integer('price').notNullable()
      table.string('vin_number').notNullable()
      table.integer('mileage').notNullable()
      table.text('description')

      table.timestamp('sold_at')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
