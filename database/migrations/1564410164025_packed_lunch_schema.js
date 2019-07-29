'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PackedLunchSchema extends Schema {
  up () {
    this.create('packed_lunches', (table) => {
      table.increments()
      table.string('name', 200).notNullable()
      table.text('description').notNullable()
      table.text('ingredient_list').notNullable()
      table.float('price').notNullable()
      table.integer('amount').notNullable()
      table.binary('image').notNullable()
      table.float('discount').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('packed_lunches')
  }
}

module.exports = PackedLunchSchema
