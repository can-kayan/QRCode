const pullUser={
    Orders:(req,res)=>({//masa numarasına göre filter
        orderInformation:req.body.orderInformation
    })
}
module.exports={pullUser}