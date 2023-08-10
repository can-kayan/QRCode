//model bilgisi =>  :modelName  /  veri eklenecek modelin id bilgisi => :id
const { filterSetAdmin,functionSetAdmin } = require('../../helper/middilewareReferance')
const { setModelAdmin, setDomainAdmin } = require('../../helper/controllerReferance')
const errorMessages=require('../../errorHandling/errorMessages')
const {Role}=require('../../helper/modelsReferance')
const { set } = require('../../repository/set')
const filterModelAdmin=(filter)=>{
    const fT=setModelAdmin.includes(filter)
    return fT
}
const filterDomainAdmin=(filter)=>{
    const tF=setDomainAdmin.includes(filter)
    return tF
}
const setAdmins=async (req,res)=>{
    try{
        if(filterModelAdmin(req.params.modelName)){
            if(filterDomainAdmin(req.params.arrayName)){
                await filterSetAdmin[modelName](req,res)
                await set(req,res)
                await functionSetAdmin[modelName](req,res)
            }
        }
    }
    catch(error){
        return res.send(errorMessages.BadFileRequest)
    }
}
module.exports={setAdmins}