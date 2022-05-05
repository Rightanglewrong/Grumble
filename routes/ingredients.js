var express = require('express');
var router = express.Router();
let ingredientsCtrl = require('../controllers/ingredient');

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
    console.log(req.user.id)
    if(req.user.id === '62742d2eb16dc64fc0dbd9b8') {
        next();
    } else {
        res.redirect('/ingredients')
    }
}


module.exports = router;