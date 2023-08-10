const mongoose = require('mongoose');
const autopopulate=require('mongoose-autopopulate')
mongoose.plugin(autopopulate);
const orderSchema=mongoose.Schema({
    tableNumber:{type:String,required:true},
    orderInformation:[{productId:{type:mongoose.Schema.Types.ObjectId,ref:'Product',required:true},quantity:{type:Number,default:1},selectPrice:{type:Number}}],
    totalPrice:{type:Number,required:true},
    status:{type:String,required:true},
    note:{type:String,required:true}
},{ timestamps: true })
exports.Orders=mongoose.model('Orders',orderSchema);