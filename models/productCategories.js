const mongoose = require('mongoose');
const autopopulate=require('mongoose-autopopulate')
mongoose.plugin(autopopulate);
const CategorySchema=mongoose.Schema({
    name:{
        type:String,
        requeire:true
    },
    productType:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ProductType',autopopulate:true
    }
},{ timestamps: true })
exports.ProductCategory=mongoose.model('ProductCategory',CategorySchema);

