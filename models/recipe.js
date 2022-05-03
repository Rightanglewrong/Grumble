const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String
    },
    steps: {
        type: String
    },
    ingredients: [{type: Schema.Types.ObjectId, ref: 'Ingredient'}],
    createdBy: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Recipe', recipeSchema)