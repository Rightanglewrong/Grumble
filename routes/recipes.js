var express = require('express');
var router = express.Router();
let recipesCtrl = require('../controllers/recipe')
let ingredientsCtrl = require('../controllers/ingredient');
let Recipe = require('../models/recipe')

// Get Recipes Index
router.get('/', recipesCtrl.index);
// Get new Recipe Form
router.get('/new', isLoggedIn, recipesCtrl.new);
// Post new recipe
router.post('/', isLoggedIn, recipesCtrl.create);
// Get Each Recipe details
router.get('/:id', recipesCtrl.show)
// Delete recipe
router.delete('/:id', areYouAuthor, recipesCtrl.delete)
// Edit recipe page
router.get('/:id/edit', recipesCtrl.edit)
// Update page
router.put('/:id', areYouAuthor, recipesCtrl.update)
// Add Ingredient to Recipe
router.post('/:id/ingredients', ingredientsCtrl.addToRep)


function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

function areYouAuthor(req, res, next) {
  Recipe.findById(req.params.id, function(err, recipe){
    if (recipe.createdBy.equals(req.user.id)) {
      next();
    } else {
      res.redirect('/recipes')
    }
  })
}

module.exports = router;
