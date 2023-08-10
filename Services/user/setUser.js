const { setModelUser, setDomainUser } = require('../../helper/controllerReferance')
const errorMessages=require('../../errorHandling/errorMessages')
//model bilgisi =>  :modelName  /  veri eklenecek modelin id bilgisi => :id
const { functionSetUser, filterSetUser } = require('../../helper/middilewareReferance')
const filterModelUser=(filter)=>{
    const tF=setModelUser.includes(filter)
    return tF
}
const filterDomainUser=(filter)=>{
    const tF=setDomainUser.includes(filter)
    return tF
}
const setUsers=async (req,res)=>{
    if(filterModelUser(req.params.modelName)){
        try{
            if(filterDomainUser(req.params.arrayName)){
                const filter = {};
                Object.keys(req.query).forEach(key => {
                    filter[key] = req.query[key];
                });
                await filterSetUser[modelName](req,res,filter)
                await set(req,res)
                 await functionSetUser[modelName](req,res)
            }else{return res.send(errorMessages.FileNotFound)}
        }catch(error){
        return res.send(errorMessages.BadFileRequest)
    }
    }else{return res.send(errorMessages.AccessDenied)}
}
module.exports={setUsers}