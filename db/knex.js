var enviroment = process.env.NODE_ENV || 'development';
var config = require('../knexfile') || [enviroment];
var knex = require('knex')(config);

module.exports = knex;
