const jwt=require('jsonwebtoken')
const errorMessages=require('../errorHandling/errorMessages')
const { Admin } = require('../models/admin')
const bcrypt=require('bcrypt')
const adminLogin= async (req,res)=>{
    const admin=await Admin.findOne({lucyNumber:req.params.lucyNumber})
    if(!admin)
        return res.send(errorMessages.AccessDenied)
    bcrypt.compare(req.body.password,admin.password,function(err,trues){
        if(err){return res.json({success:false,message:errorMessages.AccessDenied})}
        const accessToken=jwt.sign({id:admin._id},process.env.SECRET_KEY,{expiresIn:"1h"});
        const {password, ...others}=admin._doc
        console.log({...others})
        return res.status(200).json({...others,accessToken})
        
    })
    

    // const accessToken=jwt.sign({id:qrCode._id},process.env.SECRET_KEY,{expiresIn:"1h"});
    // const {password, ...others}=qrCode._doc
    // console.log({...others})
    // return res.status(200).json({...others,accessToken})
}
module.exports={adminLogin}