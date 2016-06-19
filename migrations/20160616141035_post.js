
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', function(table){
    table.increments();
    table.string('title');
    table.string('content');
    table.integer('users_id').references('users.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('post');
};
