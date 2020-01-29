exports.seed = function(knex) {
  return knex("schemes").insert([
    { name: "cherry", film: "Grand Budapest Hotel" },
    { name: "mint", film: "Darjeeling Limited" }
  ]);
};
