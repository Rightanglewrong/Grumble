const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    description: {
        type: String
    },
    steps: {
        type: String
    },
    ingredients: [{type: Schema.Types.ObjectId, ref: 'ingredient'}],
    timestamp: true
})

module.exports = mongoose.model('Recipe', recipeSchema)