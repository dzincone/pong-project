var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/auth/slack',
passport.authorize('slack'));

router.get('/logout', function (req, res, next) {
  req.session = null
  res.redirect('/')
});

router.get('/auth/slack/callback',
  passport.authorize('slack', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
