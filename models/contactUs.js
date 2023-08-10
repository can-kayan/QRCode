const mongoose =require('mongoose')
const autopopulate=require('mongoose-autopopulate')

mongoose.plugin(autopopulate);
const contactUS=mongoose.Schema({
    phone:{type:String},
    address:{type:String}
},{ timestamps: true })
exports.ContactUs=mongoose.model('ContactUs',contactUS);