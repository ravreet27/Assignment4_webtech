const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = require('./productmodel');

const commentSchema = mongoose.Schema(
    {
        product: {
            type: Schema.Types.ObjectId, 
            ref: './productmodel', 
            required: true
        },
        user: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        images: {
            type: [String], 
            required: false
        },
        text: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
