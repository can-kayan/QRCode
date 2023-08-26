const mongoose=require('mongoose')
const {functionPostUser,filterPostUser}=require('../../helper/middilewareReferance')
const {postUser } = require('../../helper/controllerReferance')
const errorMessages=require('../../errorHandling/errorMessages')
const { post } = require('../../repository/post')
const postUsers=async(req,res)=>{
    try{
        const filter = {};
        Object.keys(req.query).forEach(key => {
            filter[key] = req.query[key];
        });
        const domainNames=req.params.domainName
        console.log('geldi')
        const domainInfo=await postUser[domainNames](req,res)
        console.log('geldi')
        await filterPostUser[domainNames](req,res,filter)
        let useritem =await post(domainNames,domainInfo)
        console.log('geldi')
        if(!useritem)
            return res.status(404).send(errorMessages.FileContainsNoData)
        if(domainNames=='Basked')
            {useritem= await functionPostUser[domainNames](req,res,useritem)}
        else{await functionPostUser[domainNames](req,res,useritem)}
        return res.send(useritem); 
    }catch{return res.send(errorMessages.BadFileRequest)}
   
}
module.exports={postUsers}