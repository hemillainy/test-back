const mongoose = require('../../database');

const FoodSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Food = mongoose.model('Foods', FoodSchema);
module.exports = Food;