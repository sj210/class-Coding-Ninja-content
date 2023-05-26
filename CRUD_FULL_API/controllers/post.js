const Post = require('../Model/Post');
const User = require('../Model/User');
const client = require('../config/redis');
const { post } = require('../routes');
module.exports.getPosts = async (req,res) => {
    try{
        const page_size = 5;
        // we need to get all the posts from database and we need to return it 
        const pageNo = req.query.pageNo || 1;
        const skipDocs = pageNo * page_size;

        // check if post is available in redis or not 
          const postData = JSON.parse(await client.get('post'));

          if(postData) {
            console.log("Getting from cache");
             return res.status(200).json({
               msg: "Data fetched successfully",
               data: postData,
             });
          }
        // if post is available in redis return it from there 


        // get post from db and return it also update cache
        const posts = await Post.find({}).skip(skipDocs).limit(page_size);
         console.log("Getting from db");
        await client.set('post', JSON.stringify(posts));
        return res.status(200).json({
            msg:"Data fetched successfully",
            data: posts
        });
    }catch(error) {  
      console.log("error", error);
        return res.status(500).json({
            msg:"Internal server error",
            data: []
        })
    }
}

module.exports.getUserPost = async (req, res) => {
  try{
    console.log("Id", req.body.user.id);
    //  {
    //    user : {
    //     posts: []
    //    }
    //  }
    
    const usersPost = client.hGet(`user-posts-${req.body.user.id}`);

    if(usersPost) {
      return res.status(200).json({
        msg: "User posts",
        data: JSON.parse(post),
      });
    }
    const post = await User.findOne({id: req.body.user.id}).populate('posts').select('posts');
    console.log("Posts",post);

    await client.hSet(`user-posts-${req.body.user.id}`, JSON.stringify(posts));
      return res.status(200).json({
        msg:"User posts",
        data: post
      })
  }catch(error) {
    console.log("error",error);
    return res.status(500).json({
      msg: "Server error",
      data: [],
    });
  }
}
module.exports.createPost = async (req, res) => {
  try {
    const {content, imageUrl, userName } = req.body;
    const post = await Post.create({ content, imageUrl, userName });
    
    const user = await User.findOne({id: req.body.userId});
    user.posts.push(post.id);
    await user.save();
    return res.status(201).json({
      msg: "Data created successfully",
      data: post.id,
    });
  } catch (error) {
    console.log("error",error);
    return res.status(500).json({
      msg: "Internal server error",
      data: [],
    });
  }
};

module.exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;

    // If a post with above postId exist in my db 

    const post = await Post.findOne({id:postId});

    if(!post) {
        return res.status(400).json({
            msg:"Invalid postId",
            data:[]
        })
    }

    await Post.findByIdAndDelete(postId);
    return res.status(200).json({
      msg: "Data deleted successfully",
      data: postId,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Internal server error",
      data: [],
    });
  }
};