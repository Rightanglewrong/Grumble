const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    ingredient: {
        type: String,
        required: true, 
        unique: true
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0
    },
    foodGroup: {
        type: String,
        enum: ['Proteins','Fruit', 'Dairy','Vegetable', 'Grains']
    },
    price: {
        type: Number,
        min: 0
    }
})

module.exports = mongoose.model('Ingredient', ingredientSchema)