const postUser={
    Orders:(req,res)=>({//masa numarasına göre filter eklenecek 
        tableNumber:req.body.tableNumber,
        orderInformation:req.body.orderInformation,
        totalPrice:req.body.totalPrice,
        status:req.body.status,
        note:req.body.note
    })
}
module.exports={postUser}