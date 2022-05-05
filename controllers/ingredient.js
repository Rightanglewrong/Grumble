const Ingredient = require("../models/ingredient");
const Recipe = require("../models/recipe");
const User = require("../models/user");

module.exports = {
  index,
  new: newIngredient,
  create,
  delete: deleteItem,
  show,
  addToRep,
};

function index(req, res, next) {
  Ingredient.find({}, function (err, items) {
    res.render("ingredients/index", {
      title: "Ingredient Database",
      items
    });
  });
}

function newIngredient(req, res, next) {
  res.render("ingredients/new", {
    title: "What is that?"
  });
}

function create(req, res, next) {
  Ingredient.create(req.body, function (err, ingredient) {
    res.redirect("/ingredients");
  });
}

function deleteItem(req, res, next) {
  Ingredient.findByIdAndDelete(req.params.id, function (err, item) {
    res.redirect("/ingredients");
  });
}

function show(req, res, next) {
  Ingredient.findById(req.params.id, function (err, item) {
    res.render("ingredients/show", {
      title: "Lookie der",
      item
    });
  });
}

function addToRep(req, res, next) {
  Recipe.findById(req.params.id, function (err, recipe) {
    recipe.ingredients.push(req.body.ingredientId);
    recipe.save(function (err) {
      res.redirect("/recipes/" + req.params.id);
    });
  });
}
