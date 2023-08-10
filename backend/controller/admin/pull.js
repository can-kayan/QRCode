const pullAdmin={
    Orders:(req,res)=>({
        orderInformation:req.body.orderInformation,
    })
}
module.exports={pullAdmin}