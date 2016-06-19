
exports.seed = function(knex, Promise) {
  return knex('users').del().then(function(){
    return Promise.all([
    knex('users').insert({username: 'bweezy', image: 'https://pbs.twimg.com/profile_images/712863751/lil-wayne-gq-2.jpg'}),
    knex('users').insert({username: 'bradfordquailface', image: 'http://cdn.bleedingcool.net/wp-content/uploads/2013/09/2645293-bryan-cranston-stars-as-walter-white-in-breaking-bad_super.jpg'}),
    knex('users').insert({username: 'ihatelucas', image: 'http://cdn.bleedingcool.net/wp-content/uploads/2013/09/2645293-bryan-cranston-stars-as-walter-white-in-breaking-bad_super.jpg'})
  ])
});
};
