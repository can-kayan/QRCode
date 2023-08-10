const mongoose =require('mongoose')
const autopopulate=require('mongoose-autopopulate')

mongoose.plugin(autopopulate);
const siteBannerSchema=mongoose.Schema({
    title:{type:String},
    description:{type:String},
    image:{type:mongoose.Schema.Types.ObjectId,ref:'Image',autopopulate:true}
},{ timestamps: true })
exports.Banner=mongoose.model('Banner',siteBannerSchema);