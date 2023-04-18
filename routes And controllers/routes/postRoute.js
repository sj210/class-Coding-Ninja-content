const { getPosts, createPost } = require('../controllers');

const router = require('express').Router();


router.get('/', getPosts);
router.post('/',createPost);


module.exports = router;