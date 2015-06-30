var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var db = require('monk')(process.env.MONGOLAB_URI);
var usernameCollection = db.get('login');
var gamesCollection = db.get('games');

/* GET home page. */
router.get('/', function(req, res, next) {
  req.cookies.success;
  if(req.cookies.currentUser) {
      gamesCollection.find({name: req.cookies.currentUser}, function(err, data) {
        res.render('ping-pong/home', {success: req.cookies.success, data: data})
      });
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
});


router.post('/home', function( req, res, next) {
  res.cookie("success", "success", {maxAge: 6000});
  gamesCollection.insert({mode: req.body.mode,
                          type: req.body.type,
                          games: req.body.games,
                          points: req.body.points,
                          name: req.cookies.currentUser});
  res.redirect('/');
});


module.exports = router;
