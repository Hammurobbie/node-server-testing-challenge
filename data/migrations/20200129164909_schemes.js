exports.up = function(knex) {
  return knex.schema.createTable("schemes", tbl => {
    tbl.increments();
    tbl
      .text("name")
      .notNullable()
      .unique();
    tbl
      .text("film")
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("schemes");
};
