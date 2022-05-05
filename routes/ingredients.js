var express = require('express');
var router = express.Router();
let ingredientsCtrl = require('../controllers/ingredient');
const user = require('../models/user');

// Get Ingredients Index
router.get('/', ingredientsCtrl.index);
// Get New Ingredient Page
router.get('/new', isLoggedIn, ingredientsCtrl.new);
// Post New Ingredient
router.post('/', isLoggedIn, ingredientsCtrl.create);
// Get Show page of each Ingredient
router.get('/:id', ingredientsCtrl.show);
// Delete Ingredient
router.delete('/:id', isLoggedIn, areYouAdmin, ingredientsCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

function areYouAdmin(req, res, next) {
    console.log(req.user)
    console.log(user.id)
    if(req.user.id === '626ff5adbe45e1857e7a3108') {
        next();
    } else {
        res.redirect('/ingredients')
    }
}


module.exports = router;