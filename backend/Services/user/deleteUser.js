const mongoose = require('mongoose');
const {functionDeleteUser,filterDeleteUser } = require('../../helper/middilewareReferance')
const { deleteModelUser } = require('../../helper/controllerReferance')
const errorMessages=require('../../errorHandling/errorMessages')
const {Role}=require('../../helper/modelsReferance');
const { deleteMany } = require('../../repository/deleteMany');

const filters=(value)=>{
  
  const authorizationGet=deleteModelUser.includes(value)
  return authorizationGet
}
const filterUser=async(req)=>{
    const userById=await Role.findOne({name:'User'})
    const decoded=req.headers.decoded
    const isUser=decoded.role.map(us=>us.toString()===userById._id.toString())
    const isTure=isUser.findIndex(is=>is==true)
    let result=await isUser[isTure]
    if(result)
        return true
    return false
  }
const deleteUsers=async(req,res)=>{
    if( filterUser(req)){
        if(filters(req.params.domainName)){
            const filter = {};
            Object.keys(req.query).forEach(key => {
                filter[key] = req.query[key];
            });
            
            await filterDeleteUser[req.params.domainName](req,res,filter)
            
            const result =await deleteMany(req.params.domainName,filter)
            if(!result)
            await functionDeleteUser[req.params.domainName](req,res,filter)
            return res.send(result)
        } else{return res.send(errorMessages.AccessDenied)}
    }else{return res.send(errorMessages.Unauthorized)}
}
module.exports={deleteUsers}

