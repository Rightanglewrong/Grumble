const Recipe = require('../models/recipe')

module.exports = {
    index,
    new: newRecipe,
    create,
}

function index(req, res, next) {
    Recipe.find({}, function (err, recipes) {
        res.render('recipes/index', {title: 'Recipes', recipes })
    })
}

function newRecipe(req, res, next) {
    const newRecipe = new Recipe();
 res.render('recipes/new', {title: 'Add a Recipe', newRecipe}) 
}

function create(req, res, next) {
    console.log(req.body)
    console.log('hi')
}