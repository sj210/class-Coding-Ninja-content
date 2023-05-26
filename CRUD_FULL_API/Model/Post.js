const mongoose = require('mongoose');


//Post Schema 
const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    imageUrl : {
        type: String
    },
    userName: {
        type:String,
        required: true,
        unique: true
    },
    comments:[{
        type: String,
    }],
    likesCount: {
        type: Number,
        default: 0
    }  
},{
    timestamps: true
});


// We need to register this schema in DB 

const Post = mongoose.model('Post',postSchema);
module.exports = Post


