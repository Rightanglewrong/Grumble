const { append } = require("express/lib/response");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var usersSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    googleId: String,
  },
  {
    timestamps: true,
  },
  {
    //stock: [{ type: Schema.Types.ObjectId, ref: "ingredient" }],
  }
);

module.exports = mongoose.model("User", usersSchema);
