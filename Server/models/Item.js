const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    comments: [{
        comment: {
            type: String,
        },
        user: {
            type: String
        }
    }],
    likes: [{
        user: {
            type: String
        }
    }]
});
/*
const ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
*/
module.exports = Item = mongoose.model('item', ItemSchema);