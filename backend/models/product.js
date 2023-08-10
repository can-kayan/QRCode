const mongoose = require('mongoose');
const autopopulate=require('mongoose-autopopulate')
mongoose.plugin(autopopulate);
const productSchema=mongoose.Schema({
    productType:{type:mongoose.Schema.Types.ObjectId, ref:'ProductType',required:true},
    productCategory:{type:mongoose.Schema.Types.ObjectId,ref:'ProductCategories',required:true},
    image:{type:mongoose.Schema.Types.ObjectId,ref:'Image'},//default olarak not image 
    name:{type:String,required:true},
    description:{type:String,retquired:true},
    price:{type:Number,required:true}
    
},{ timestamps: true })
exports.Product=mongoose.model('Product',productSchema);