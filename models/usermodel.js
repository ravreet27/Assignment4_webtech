const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = require('./productmodel');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    purchaseHistory: [{
        type: Schema.Types.ObjectId, 
        ref: './productmodel', 
        required: true
    }],
    shippingAddress: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
