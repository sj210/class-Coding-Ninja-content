const Post = require("../modals/post");

// Get All Posts
const post_all = async (req, res) => {
    try {
        const page_size = 10
        const pageNo = req.query.pageNo || 0;
        const skipDocs = pageNo * page_size;
        const Posts = await Post.find({}).skip(skipDocs).limit(page_size);
        return res.status(200).json({
          msg: "Data Success fetch", 
          data: Posts
        });
      } catch (error) {
        return res.status(500).json({
          msg: "Internal Server Error",
          data: {
          }
        })
      }
};

// Single Post
const post_details = async (req, res) => {
    try {
        const Post = await Post.findById(req.params.PostId);
        return res.status(200).json({
          msg: "Data Success fetch", 
          data: Post
        });
      } catch (error) {
        return res.status(500).json({
          msg: "Internal Server Error",
          data: {
          }
        })
      }
};

// Add New Post
const post_create = async (req, res) => {
  
    try {

        const postJSON = {
            content: req.body.content,
            imageUrl: req.body.imageUrl,
            userName: req.body.userName,
          };

      const post = await Post.create(postJSON);

      return res.status(201).json({
        msg: "Data created",
        data: post,
      })

      } catch (error) {
        return res.status(500).json({
          msg: "Internal Server Error",
          data: {
          }
        })
      }
};

// Update Post
const post_delete = async (req, res) => {
    try {
        const postId = req.params.postId;

        const post = await Post.findOne({id:postId});

        if(!post){
          return res.sendStatus(400).json({
            msg: "Invalid postId",
            data:[]
          })
        }
    
       await Post.findByIdAndDelete(postId);
        return res.status(200).json({
          msg: "Data Deleted", 
          data: postId
        });
      } catch (error) {
        return res.status(500).json({
          msg: "Internal Server Error",
          data: {
          }
        })
      }
};

// Delete Post
const post_update = async (req, res) => {
    try {
      const post = {
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        userName: req.body.userName,
      };

      const updatedPost = await Post.findByIdAndUpdate(
        { _id: req.params.PostId },
        post
      );

      return res.sendStatus(201).json({
        msg: "Data updated",
        data: updatedPost,
      })

      } catch (error) {
        return res.status(500).json({
          msg: "Internal Server Error",
          data: {
          }
        })
      }
};

module.exports = {
    post_all, 
    post_details, 
    post_create, 
    post_update, 
    post_delete
  }