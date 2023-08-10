
const { functionPullAdmin,filterPullAdmin } = require('../../helper/middilewareReferance')
const { pullAdmin } = require('../../helper/controllerReferance')
const errorMessages=require('../../errorHandling/errorMessages')
const { pull } = require('../../repository/pull')
const pullAdmins=async (req,res)=>{
    try{
        const modelName=req.params.modelName
        const modelId=req.params.id
        const domainInfo=await pullAdmin[modelName](req,res)
        await filterPullAdmin[modelName](req,res)
        const adminitem = await pull(modelName,modelId,domainInfo)
        if(!adminitem)
            return res.json({success:false,message:errorMessages.FileContainsNoData})
        await functionPullAdmin[modelName](req,res)
        return res.send(adminitem)
    }catch(error){
        return res.send(errorMessages.BadFileRequest)
    }
}
module.exports={pullAdmins}