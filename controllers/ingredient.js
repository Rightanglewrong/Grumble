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
      items,
      user: req.user,
    });
  });
}

function newIngredient(req, res, next) {
  res.render("ingredients/new", {
    title: "What is that?",
    user: req.user,
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
      item,
      user: req.user,
    });
  });
}

function addToRep(req, res, next) {
  Recipe.findById(req.params.id, function (err, recipe) {
    console.log("recipe id:", req.params);
    console.log(req.body);
    recipe.ingredients.push(req.body.ingredientId);
    let user = req.user
    recipe.save(function (err) {
      res.redirect("/recipes/" + req.params.id);
    });
  });
}
