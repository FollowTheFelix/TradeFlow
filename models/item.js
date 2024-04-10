const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const reviewSchema = new Schema({
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    retailPrice: {
        type: Number,
        required: true
    },
    wholesalePrice: {
        type: Number,
        required: true
    },
    qtyAvailable: {
        type: Number,
        required: true
    },
    minOrderQty: {
        type: Number,
        required: true
    },
    reviews: [reviewSchema]
},{
    timestamps: true
})

module.exports = mongoose.model('Item', itemSchema)