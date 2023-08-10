const { pullModelUser } = require('../../helper/controllerReferance')
const errorMessages=require('../../errorHandling/errorMessages')
const { functionPullUser,filterPullUser } =require('../../helper/middilewareReferance')
const { pull } = require('../../repository/pull')
const pullUsers=async(req,res)=>{
    try{
        const filter = {};
        Object.keys(req.query).forEach(key => {
        filter[key] = req.query[key];
        });
        const modelName=req.params.modelName
        const modelId=req.params.id
        const domainInfo=await pullModelUser[modelName](req,res)
        await filterPullUser[modelName](req,res,filter)
        const useritem = await pull(modelName,modelId,domainInfo)
        if(!useritem)
            return res.json({success:false,message:errorMessages.FileContainsNoData})
        await functionPullUser[modelName](req,res)
        return res.send(useritem)
    }catch(error){
        return console.error(errorMessages.BadFileRequest)
    }
}
module.exports={pullUsers}