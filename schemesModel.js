const db = require("./data/dbConfig");

module.exports = {
  add,
  find,
  findById,
  update,
  remove
};

function add(userData) {
  return db("schemes")
    .insert(userData)
    .then(ids => ids[0]);
}

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id });
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .insert(changes);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}
