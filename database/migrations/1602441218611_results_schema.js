'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResultsSchema extends Schema {
  up () {
    this.create('results', (table) => {
      table.increments()
      table.timestamps()
      table.string('usuario')
      table.date('data_inicial')
      table.decimal('data_atual')
      table.decimal('lucro_dia')
      table.decimal('lucro_mes')
      table.decimal('lucro_total')
      table.decimal('inicial')
      table.decimal('final')

    })
  }

  down () {
    this.drop('results')
  }
}

module.exports = ResultsSchema
