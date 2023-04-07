const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    comments: {
        type: String
    },
    likeCount: {
        type: Number,
        default:0 
       },
}, {
    timestamps:true
})

module.exports = mongoose.model("Post", postSchema);