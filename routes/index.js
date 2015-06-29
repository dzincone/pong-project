var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var db = require('monk')('localhost/pong-db');
var usernameCollection = db.get('login');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.cookies.currentUser) {
    res.render('ping-pong/home');
  }else {
  res.render('index', { title: 'Express' });
}
});

router.post('/', function (req, res, next) {
  var errors = [];
  if (req.body.username === "") {
    errors.push('Please type in your username');
  }
  if (req.body.password === "") {
    errors.push('Please type in your password');
  }
  if (errors.length === 0) {
    usernameCollection.findOne({username: req.body.username}, function (err, data){
    if(data) {
    var crypt = bcrypt.compareSync(req.body.password, data.password);
    if(crypt) {
      res.cookie("currentUser", req.body.username);
      res.redirect('/');
      }
    } else {
      errors.push("The username/password entered is incorrect.");
      res.render('index', {username: req.body.username, error: errors})
    }
    });
  }
  else {
    res.render('index', {username: req.body.username, error: errors});
  }
});

router.post('/logout', function (req, res, next) {
  res.clearCookie("currentUser");
  res.redirect("/");
})


module.exports = router;
