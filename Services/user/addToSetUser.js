
const { functionAddToSetUser, filterAddToSetUser } = require('../../helper/middilewareReferance')
const { addToSetUser } = require('../../helper/controllerReferance')
const errorMessages=require('../../errorHandling/errorMessages')
const {addToSet}=require('../../repository/addToSet')
const addToSetUsers=async(req,res)=>{
    try{
        const filter = {};
        Object.keys(req.query).forEach(key => {
            filter[key] = req.query[key];
        });
        const modelName=req.params.modelName
        const modelId=req.params.id
        // console.log(modelName)
        const domainInfo=await addToSetUser[modelName](req,res)
        // console.log(domainInfo)
        // console.log(modelId)
        await filterAddToSetUser[modelName](req,res,filter)
        // console.log('geldi')
        const useritem =await addToSet(modelName,modelId,domainInfo)
        if(!useritem)
            return res.json({success:false,message:errorMessages.FileContainsNoData})
        // console.log(useritem)
        await functionAddToSetUser[modelName](req,res)
        return res.send(useritem)
    }catch(error){
        return console.error(errorMessages.BadFileRequest)
    }
}
module.exports={addToSetUsers}