const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }, 
    posts: [
        {
            ref: "Post",
            type: mongoose.Types.ObjectId
        }
    ]
});

const User = mongoose.model('Users-June', userSchema);

module.exports = User;