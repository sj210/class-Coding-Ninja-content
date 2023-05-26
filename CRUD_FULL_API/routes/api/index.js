const express = require('express');
const router = express.Router();
const { getPosts, createPost, deletePost ,getUserPost} = require('../../controllers/post')
const {createUser, login} = require('../../controllers/user');
const {verifyUser} = require('../../middleware');
const { body, check} = require('express-validator');

router.get("/posts", verifyUser, getPosts);
router.post("/posts", verifyUser, createPost);
router.delete("/posts/:postId", verifyUser, deletePost);
router.put("/posts/:postId");
router.post(
  "/users/register",
  check("email", "email should not be empty")
    .notEmpty()
    .isEmail()
    .withMessage("Email should be a valid one"),
  check("password", "The password must be 5+ chars long and contain a number")
    .not()
    .isIn(["123", "password", "god"])
    .withMessage("Do not use a common word as the password")
    .isLength({ min: 5 }),
  body("confirm_password").isLength({ min: 5 }),
  body("confirm_password")
    .equals(body("password"))
    .withMessage("Password and confirm password is not euqal"),
  body("name").notEmpty(),
  createUser
);
router.post('/users/login',
check("email", "email should not be empty")
    .notEmpty()
    .isEmail()
    .withMessage("Email should be a valid one"),
    body('password').notEmpty(),
 login);

 router.get("/users/posts", verifyUser, getUserPost);


module.exports = router;