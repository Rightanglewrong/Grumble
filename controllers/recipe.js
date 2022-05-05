const { default: mongoose } = require("mongoose");
const Recipe = require("../models/recipe");
const Ingredient = require("../models/ingredient");

module.exports = {
  index,
  new: newRecipe,
  create,
  show,
  delete: deleteRecipe,
  edit,
  update,
};

function index(req, res, next) {
  Recipe.find({}, function (err, recipes) {
    res.render("recipes/index", { title: "Recipes", recipes});
  });
}

function newRecipe(req, res, next) {
  const newRecipe = new Recipe();
  res.render("recipes/new", {
    title: "Add a Recipe",
    newRecipe
  });
}

function create(req, res, next) {
  let newRecipe = new Recipe(req.body);
  newRecipe.createdBy = req.user.id;
  newRecipe.save(function (err) {
    if (err) return res.redirect("recipes/new");
    res.redirect(`/recipes/${newRecipe._id}`);
  });
}

function show(req, res, next) {
  Recipe.findById(req.params.id).populate('ingredients').exec(function (err, recipe) {
    Ingredient.find({_id: {$nin: recipe.ingredients}})
    .exec(function(err, ingredients) {
      res.render("recipes/show", {
        title: "Deets",
        recipe,
        ingredients
      });
    })
  });
}

function deleteRecipe(req, res, next) {
  Recipe.findByIdAndDelete(req.params.id, function (err, item) {
    res.redirect("/recipes");
  });
}

function edit(req, res, next) {
  Recipe.findById(req.params.id, function (err, recipe) {
    res.render("recipes/edit", {
      title: "Edit Recipe",
      recipe,
    });
  });
}

function update(req, res, next) {
    Recipe.findByIdAndUpdate(req.params.id, req.body, function(err, recipe){
        res.redirect('/recipes')
    })
}
