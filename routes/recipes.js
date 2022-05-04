var express = require('express');
var router = express.Router();
let recipesCtrl = require('../controllers/recipe')

// Get Recipes Index
router.get('/', recipesCtrl.index);
// Get new Recipe Form
router.get('/new', isLoggedIn, recipesCtrl.new);
// Post new recipe
router.post('/', isLoggedIn, recipesCtrl.create);
// Get Each Recipe details
router.get('/:id', recipesCtrl.show)
// Delete recipe
router.delete('/:id', recipesCtrl.delete)
// Edit recipe page
router.get('/:id/edit', recipesCtrl.edit)
// Update page
router.put('/:id', recipesCtrl.update)


function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}
module.exports = router;
