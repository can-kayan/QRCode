const mongoose =require('mongoose')
const autopopulate=require('mongoose-autopopulate')

mongoose.plugin(autopopulate);
const siteInfoSchema=mongoose.Schema({
    name:{type:String,required:true},
    image:{type:mongoose.Schema.Types.ObjectId,ref:'Image',autopopulate:true},
},{ timestamps: true })
exports.SiteInformation=mongoose.model('SiteInformation',siteInfoSchema);