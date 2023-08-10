const mongoose = require('mongoose');

const MainCategorySchema=mongoose.Schema({
    name:{
        type:String,
        requeire:true
    }
},{ timestamps: true })
exports.ProductType=mongoose.model('ProductType',MainCategorySchema);