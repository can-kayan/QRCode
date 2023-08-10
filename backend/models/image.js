const mongoose = require('mongoose');

const autopopulate=require('mongoose-autopopulate')
mongoose.plugin(autopopulate);
const imageSchema=mongoose.Schema({
    path:{
        type:String,
        required:true
    }
},{ timestamps: true })
exports.Image=mongoose.model('Image',imageSchema);