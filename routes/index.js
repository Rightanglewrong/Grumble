var express = require('express');
var router = express.Router();
const passport = require('passport');
const usersCtrl = require('../controllers/user')

/* GET home page. */
router.get('/', usersCtrl.index)

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/grumble', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
