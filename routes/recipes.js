var express = require('express');
var router = express.Router();
let recipesCtrl = require('../controllers/recipe')

// Get Recipes Index
router.get('/', recipesCtrl.index);
// Get new Recipe Form
router.get('/new', recipesCtrl.new);

module.exports = router;
