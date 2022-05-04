const { append } = require('express/lib/response');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var groceryListSchema = new mongoose.Schema({
//   item: [{type: Schema.Types.ObjectId, ref: 'Ingredient'}],
//   quantity: {type: Number, min: 0, default: 0 }, 
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
