var express = require('express');
var router = express.Router();
let ingredientsCtrl = require('../controllers/ingredient')

// Get Ingredients Index
router.get('/', ingredientsCtrl.index);
// Get New Ingredient Page
router.get('/new', ingredientsCtrl.new);
// Post New Ingredient
router.post('/', ingredientsCtrl.create);
// Get Show page of each Ingredient
router.get('/:id', ingredientsCtrl.show);
// Delete Ingredient
router.delete('/:id', ingredientsCtrl.delete);

module.exports = router;