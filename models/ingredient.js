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
        required: true,
        enum: ['Proteins','Fruit', 'Dairy','Vegetable', 'Grains', 'Misc']
    },
})

module.exports = mongoose.model('Ingredient', ingredientSchema)