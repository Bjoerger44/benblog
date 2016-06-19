
exports.seed = function(knex, Promise) {
  return knex('post').del().then(function(){
  return Promise.all([

    knex('post').insert({title: 'Puppies', content: 'Puppies are great'}),
    knex('post').insert({title: 'Sports', content: 'Sports are great'}),
  ])
});
};
