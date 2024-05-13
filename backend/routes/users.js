const express = require('express');
const router = express.Router();
const dbConnection = require('../db-connection');

/* GET users listing. */
router.get('/', function(req, res, next) {
  dbConnection.connect();
  dbConnection.query('SELECT * FROM users;', (error, results, fields) => {
    if (error) throw error;
    res.send({
      data: results[0]
    })
  });
  dbConnection.end();
});

module.exports = router;
