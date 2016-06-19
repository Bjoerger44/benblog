var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var pg = require('pg');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.table('users').select().then(function(data){
    res.render('index',{users: data});
  })
  .catch(function(error){
    console.log(error);
    next(error)
  })
});

module.exports = router;
