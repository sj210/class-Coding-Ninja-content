const posts = [];
const _ = require('lodash'); 


const getPosts = async (req,res) =>{
    return res.status(200).json({
        msg: "Posts fetched success",
        data: posts
    })
}


const createPost = async (req,res) =>{
    const {content, imageUrl, userName} = req.body;

    if(_.isEmpty(content) || _.isEmpty(imageUrl) || _.isEmpty(userName)){
        return res.status(400).json({
            msg: " Missing property please check or spelling error"
        })
    }

    const post = {
        id: Math.floor(Math.random()*1000 +1),
        content,
        userName,
        imageUrl
    }

    posts.push(post);

    return res.status(200).json({
        msg: "Post created",
        data: post
    })
}


module.exports = {
    getPosts,
    createPost
}
