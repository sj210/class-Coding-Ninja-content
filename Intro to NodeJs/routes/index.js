const express = require('express');
const router = express.Router();

router.get('/posts', getPost)
router.post('/posts')
router.delete('/posts')