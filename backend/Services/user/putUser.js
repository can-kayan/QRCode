const {functionPutUser,filterPutUser}=require('../../helper/middilewareReferance')
const { putModelUser } = require('../../helper/controllerReferance')
const errorMessages=require('../../errorHandling/errorMessages')
const { updateMany } = require('../../repository/put')
const putUsers=async(req,res)=>{
    const filter = {};
    Object.keys(req.query).forEach(key => {
        filter[key] = req.query[key];
    });
    const modelNames=req.params.domainName
    console.log(modelNames)
    await filterPutUser[modelNames](req,res,filter)
    console.log('geldi')
    const updateData= await  putModelUser[modelNames](req,res);
    console.log(updateData)
    const result = await updateMany(modelNames,filter,updateData)
    console.log('result')
    if(result){
        await functionPutUser[modelNames](req,res,result)
        res.send(result);
    }else{
        res.status(404).send(errorMessages.FileContainsNoData);
    }
}
module.exports={putUsers}