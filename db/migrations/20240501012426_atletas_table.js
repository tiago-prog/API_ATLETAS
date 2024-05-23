/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('atletas_table', (table) => {
    table.increments("atleta_id");
    table.text("username");
    table.text("goal");
    table.json('zones');
    table.json('training');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("atletas_table");
};
