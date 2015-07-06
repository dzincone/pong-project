var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var db = require('monk')(process.env.MONGOLAB_URI);
var usernameCollection = db.get('login');
var gamesCollection = db.get('games');
var newGamesCollection = db.get('newgames');
var resultsCollection = db.get('results');

/* GET home page. */
router.get('/', function(req, res, next) {
  req.cookies.success;
  req.cookies.firstName;
  if(req.cookies.currentUser) {
      newGamesCollection.find({$or: [{person2: req.cookies.currentUser}, {person1: req.cookies.currentUser}]}, function (err, record) {
        gamesCollection.find({opponent: req.cookies.currentUser}, function(err, data) {
          gamesCollection.find({name: req.cookies.currentUser}, function (err, pending) {
            resultsCollection.find({$or: [{person1: req.cookies.currentUser}, {person2: req.cookies.currentUser}]}, function (err, results) {

                res.render('ping-pong/home', {success: req.cookies.success, data: data, games: record, pending: pending, currentUser: req.cookies.currentUser, firstName: req.cookies.firstName, results: results});
            })
          });
        });
      });
  }else {
  res.render('index', { title: 'Express' });
}
});

router.get("/newgame/:id", function (req, res, next) {
  newGamesCollection.find({_id: req.params.id}, function (err, data) {

      res.render("ping-pong/newgame", {data: data, currentUser: req.cookies.currentUser});
  })
})

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
      res.cookie("firstName", data.name);
      res.redirect('/');
      }
      else {
        errors.push("The username/password entered is incorrect.");
        res.render('index', {username: req.body.username, error: errors})
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
  res.clearCookie("firstName")
  res.redirect("/");
});


router.post('/home', function( req, res, next) {
  res.cookie("success", "success", {maxAge: 6000});
  gamesCollection.insert({mode: req.body.mode,
                          type: req.body.type,
                          games: req.body.games,
                          points: req.body.points,
                          opponent: req.body.opponent,
                          name: req.cookies.currentUser});
  res.redirect('/');
});

router.post('/new/:id', function(req, res, next) {
  newGamesCollection.insert({mode: req.body.mode,
                          type: req.body.type,
                          games: req.body.games,
                          points: req.body.points,
                          person2: req.body.person2,
                          person1: req.cookies.currentUser});
  gamesCollection.remove({_id: req.params.id});
  res.redirect('/');
});

router.post("/results/:id", function(req, res, next) {
  resultsCollection.insert({person1: req.body.person1,
                            person2: req.body.person2,
                            mode: req.body.mode,
                            type: req.body.type,
                            games: req.body.games,
                            points: req.body.points,
                            winner: req.body.winner});
  newGamesCollection.remove({_id: req.params.id});

  res.redirect('/');
})

router.post('/delete/:id', function(req, res, next) {
  gamesCollection.remove({_id: req.params.id});
  res.redirect('/');
});

router.get('/data', function(req, res, next) {
  req.cookies.currentUser;
  usernameCollection.find({username: {$ne: req.cookies.currentUser}}, function(err, data) {
    res.json(data)
  });
});



module.exports = router;
