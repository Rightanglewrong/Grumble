const { append } = require('express/lib/response');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var groceryListSchema = new mongoose.Schema({
//   recipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
//   items: [{type: Schema.Types.ObjectId, ref: 'Ingredient'}],
//   },
//   {
//   timestamps: true
//   }
// )

var usersSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    googleId: String,
  },
  // {
  //   groceryList:[groceryListSchema]
  // }
);

module.exports = mongoose.model("User", usersSchema);
