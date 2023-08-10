const putUser={
    Orders:(req,res)=>({//masa numarasına göre filter
        tableNumber:req.params.tableNumber,
        orderInformation:req.body.orderInformation,
        totalPrice:req.body.totalPrice,
        status:req.body.status,
        note:req.body.note
    })
}
module.exports={putUser}