const jwt = require('jsonwebtoken');
const errorMessages = require('../errorHandling/errorMessages');
const verify = (req,res,next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.userId;
    console.log(userId)
    req.headers['decoded']= decoded 
    
    next()
  } catch (error) {
    return res.send(errorMessages.Unauthorized);
    
  }
};


module.exports=verify