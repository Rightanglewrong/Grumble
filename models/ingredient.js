const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    ingredient: {
        type: String,
        required: true, 
        unique: true
    },
    foodGroup: {
        type: String,
        enum: ['Proteins','Fruit', 'Dairy','Vegetable', 'Grains']
    },
})

module.exports = mongoose.model('Ingredient', ingredientSchema)