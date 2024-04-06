const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = require('./productmodel');
const User = require('./usermodel');
const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        }
    }],
    totalPrice: {
        type: Number,
        required: true
    },

}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
