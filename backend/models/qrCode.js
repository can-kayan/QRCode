const mongoose = require('mongoose');

const qrCode=mongoose.Schema({
    tableNumber:{type:String,required:true},
    webURL:{type:String,required:true}
},{ timestamps: true })
exports.QRCode=mongoose.model('QRCode',qrCode);