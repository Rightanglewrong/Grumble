var express = require('express');
var router = express.Router();
const passport = require('passport');
const usersCtrl = require('../controllers/user')

/* GET Home page. */
router.get('/', usersCtrl.index)

//GoogleOAuth
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));


// OAUTH LOGOUT ROUTE
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
