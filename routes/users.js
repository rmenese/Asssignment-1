/*
Assignment 1 - Express Portfolio Site  
Created by: Remedios Meneses
SN: 300691712
Submitted on: June 7, 2021
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
