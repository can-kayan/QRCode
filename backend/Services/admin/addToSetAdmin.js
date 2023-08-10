//model bilgisi =>  :modelName  /  veri eklenecek modelin id bilgisi => :id
const { functionAddToSetAdmin,filterAddToSetAdmin } = require('../../helper/middilewareReferance')
const {addToSetAdmin} = require('../../helper/controllerReferance')
const errorMessages=require('../../errorHandling/errorMessages')
const {addToSet}=require('../../repository/addToSet')
const addToSetAdmins=async (req,res)=>{   
    try{
        const modelName=req.params.modelName
        const modelId=req.params.id
        const domainInfo=await addToSetAdmin[modelName](req,res)
        await filterAddToSetAdmin[modelName](req,res)
        // console.log(domainInfo)
        const adminitem=await addToSet(modelName,modelId,domainInfo)
        // console.log(adminitem)
        // const adminitem = await Model.findByIdAndUpdate(modelId,
        //     {$addToSet:domainInfo},{new:true});
        //     // console.log(adminitem.role)
        if(!adminitem)
            return res.json({success:false,message:errorMessages.FileContainsNoData})
        await functionAddToSetAdmin[modelName](req,res)
         return res.send(adminitem)
    }catch(error){
        return console.error(errorMessages.BadFileRequest)
    }
}
module.exports={addToSetAdmins}