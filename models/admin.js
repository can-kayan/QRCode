const mongoose =require('mongoose')
const autopopulate=require('mongoose-autopopulate');

mongoose.plugin(autopopulate);
const adminSchema=mongoose.Schema({
    lucyNumber:{type:Number,default:'0'},
    password:{type:String,default:'0001'}
},{ timestamps: true })
exports.Admin=mongoose.model('Admin',adminSchema);