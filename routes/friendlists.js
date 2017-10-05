var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* GET users listing. */
router.get('/', function(req, res) {
  models.User.findAll({})
  .then(function(todos) {
    res.json(todos);
  });
});

router.post('/', function(req, res) {
  const name = req.body.name;
  models.User.create({ name: name })
  .then(newOwner => { res.json(newOwner); })
});

module.exports = router;
