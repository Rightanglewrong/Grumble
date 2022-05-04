const Ingredient = require("../models/ingredient");
const User = require("../models/user");

module.exports = {
  index,
  new: newIngredient,
  create,
  delete: deleteItem,
  show,
};

function index(req, res, next) {
  Ingredient.find({}, function (err, items) {
    res.render('ingredients/index', {
      title: "Grocery List",
      items,
      user: req.user,
    });
  });
}

function newIngredient(req, res, next) {
  res.render("ingredients/new", {
    title: "What do I need to buy?",
    user: req.user,
  });
}

function create(req, res, next) {
  let newItem = new Ingredient(req.body);
  newItem.save(function (err) {
    if (err) return res.redirect("/ingredients/new");
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
