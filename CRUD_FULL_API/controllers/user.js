const User = require('../Model/User');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const {validationResult} = require('express-validator');

const BadRequest = require('../error/bad-request');
const CustomError = require('../error/custom-error');
require('dotenv').config();

module.exports.createUser = async(req, res, next) => {

  const {name, email, password} = req.body;
  const errors = validationResult(req);

  // if(!errors.isEmpty()) {
  //   throw new BadRequest("Bad request", errors);
  // }

  // We should not store password in plain text we should hash the passwords and store hashed password 
  //in our db  // bcrypt 
    if(_.isEmpty(email) || _.isEmpty(name) || _.isEmpty(password)) {
      throw new BadRequest("Invalid data");
    }
    
  const user = await User.create({name, password, email});
  return res.status(201).json({
      msg:"User register successfully.",
      data: user.id
  });
}

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {
    //   throw new BadRequest("Bad Request", errors);
    // }

     // we need to find the user by email in our db

     const user = await User.findOne({email});

     if(_.isEmpty(user)) {
        throw new BadRequest("Bad Request", errors);
     }

     if(user.password !== password) {
        throw new BadRequest("Password is incorrect");
     }

     // create a jwt token

     const token = jwt.sign({email: user.email, name: user.name, id: user.id}, process.env.JWT_SECRET);

    return res.status(201).json({
      msg: "User register successfully.",
      data: {
        token
      },
    });
  } catch (error) {
    if(error instanceof CustomError) {
      next(err);
    }
   
    return res.status(500).json({
      msg: "Internal server error",
      data: [],
    });
  }
};