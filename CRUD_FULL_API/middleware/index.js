const jwt = require('jsonwebtoken');
require('dotenv').config();
const CustomError = require('../error/custom-error');


module.exports.verifyUser = async (req,res,next) => {

    try{
        const token = req.headers.authorization;
        const payload = await jwt.verify(token, process.env.JWT_SECRET);
        req.body.user = payload;
          console.log("Token", payload);
        next();
    }catch(error) {
        next(error);
    }

}


module.exports.errorHandler = (err, req, res, next) =>{
    logger(err);
    if(err instanceof CustomError) {
        return res.status(err.statusCode).json(err.seralizeError(err));
    }

    return res.status(500).json({
        msg: "Error",
        data: err
    });
}

const logger = (err) => {
    console.log(err);
}