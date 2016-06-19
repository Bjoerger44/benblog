
exports.seed = function(knex, Promise) {
  return knex('comment').del().then(function(){
    return Promise.all([
    knex('comment').insert({content: 'Cool bro'})
  ])
});
};
