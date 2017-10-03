var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/'), function(req, res) {
  const name = req.body.name;
  const role = req.body.friend_list_id;
  db.users.create({ name: name })
  .then(newOwner => { res.json(newOwner); })
  });
});

module.exports = router;
