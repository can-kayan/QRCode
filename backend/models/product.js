const mongoose = require('mongoose');
const autopopulate=require('mongoose-autopopulate')
mongoose.plugin(autopopulate);
const productSchema=mongoose.Schema({
    productType:{type:mongoose.Schema.Types.ObjectId, ref:'ProductType',autopopulate:true,required:true},
    productCategory:{type:mongoose.Schema.Types.ObjectId,ref:'ProductCategory',autopopulate:true,required:true},
    image:{type:mongoose.Schema.Types.ObjectId,ref:'Image',autopopulate:true},//default olarak not image 
    name:{type:String,required:true},
    description:{type:String,retquired:true},
    price:{type:Number,required:true}
    
},{ timestamps: true })
exports.Product=mongoose.model('Product',productSchema);