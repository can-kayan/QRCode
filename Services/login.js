const jwt=require('jsonwebtoken')
const errorMessages=require('../errorHandling/errorMessages')
const {QRCode}=require('../helper/modelsReferance')
const login= async (req,res)=>{
    console.log('Girdi')
    const qrCode=await QRCode.findOne({tableNumber:req.params.tableNumber})
    console.log(qrCode)
    if(!qrCode)
        return res.send(errorMessages.AccessDenied)
        console.log(qrCode)
        const accessToken=jwt.sign({id:qrCode._id},process.env.SECRET_KEY,{expiresIn:"1h"});
        const {password, ...others}=qrCode._doc
        console.log({...others})
        return res.status(200).json({...others,accessToken})
}
module.exports={login}