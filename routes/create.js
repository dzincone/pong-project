var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var db = require('monk')('localhost/pong-db');
var usernameCollection = db.get('login');

/* GET home page. */
router.get('/signup', function(req, res, next) {
  res.render('ping-pong/account', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {
  var hash = bcrypt.hashSync(req.body.password, 8);
  var errors = [];
  if (req.body.password.length < 5) {
    errors.push("Your password must be at least 6 characters long");
  }
  if(req.body.email == "") {
    errors.push("Username cannot be blank");
  }
  if(req.body.password == "") {
    errors.push("Password cannot be left blank");
  }
  if(req.body.password != req.body.passwordConfirm) {
    errors.push("Your passwords must match one another");
  }
  if (errors.length === 0) {
  res.cookie("currentUser", req.body.email);
  usernameCollection.insert({username: req.body.email, password: hash});
  res.redirect('/');
  }
  else {
    res.render('ping-pong/account', {error: errors});
  }
});


module.exports = router;
