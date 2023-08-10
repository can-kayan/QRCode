const mongoose =require('mongoose')

const ThemaSchema=mongoose.Schema({
    headerColor:{type:String,default:'#3C0B0B'},
    footerColor:{type:String,default:'#3C0B0B'},
    backgroundColor:{type:String,default:'#292929'},
    productCardColor:{type:String,default:'#3C0B0B'},
    fontColor:{type:String,default:'#FFFFFF'},
    titleColor:{type:String,default:'#FFD900'},
    inputCardColor:{type:String,default:'#515151'},
    inputButton:{type:String,required:true,default:'#039D00'}
},{ timestamps: true })
exports.Thema=mongoose.model('Thema',ThemaSchema);