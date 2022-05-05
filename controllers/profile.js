const User = require('../models/user');
const Recipe = require('../models/recipe');
const mongoose = require('mongoose')

module.exports = {
    show,
    addToWL,

}

function show(req, res, next) {
    User.findById(req.params.id).populate('recipes').exec(function (err, user){
        // Recipe.find({_id: {$nin: user.GroceryList.recipes}})
        // .exec(function(err, recipes) {
            res.render('user/index', {
                title: "Your Schtuff",
                // recipes
            })
        })
    // })
}

function addToWL(req, res, next) {
    User.findById(req.params.id, function (err, user) {
        user.recipes.push(req.body.recipeId);
        user.save(function (err) {
            res.redirect('/user')
        })
    })
}