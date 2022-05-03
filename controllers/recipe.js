const { default: mongoose } = require("mongoose");
const Recipe = require("../models/recipe");
const User = require("../models/user");

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
    console.log(req.user);
    res.render("recipes/index", { title: "Recipes", recipes, user: req.user });
  });
}

function newRecipe(req, res, next) {
  const newRecipe = new Recipe();
  res.render("recipes/new", {
    title: "Add a Recipe",
    newRecipe,
    user: req.user,
  });
}

function create(req, res, next) {
  let newRecipe = new Recipe(req.body);
  console.log(req.body);
  console.log(req.params.id);
  newRecipe.createdBy = req.user.id;
  newRecipe.save(function (err) {
    if (err) return res.redirect("recipes/new");
    res.redirect("/recipes");
  });
}

function show(req, res, next) {
  Recipe.findById(req.params.id, function (err, recipe) {
      console.log(recipe.createdBy, "createdby")
      console.log(req.user, "req user")
    res.render("recipes/show", {
      title: "Do you wanna make this?",
      recipe,
      user: req.user,
    });
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
      user: req.user,
    });
  });
}

function update(req, res, next) {
    Recipe.findByIdAndUpdate(req.params.id, req.body, function(err, recipe){
        res.redirect('/recipes')
    })
}
