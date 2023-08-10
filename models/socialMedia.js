const mongoose =require('mongoose')

const autopopulate=require('mongoose-autopopulate')
mongoose.plugin(autopopulate);
const SocialMediaSchema=mongoose.Schema({
    name:{type:String,required:true},
    image:{type:mongoose.Schema.Types.ObjectId,ref:'Image',autopopulate:true},
    link:{type:String}
},{ timestamps: true })
exports.SocialMedia=mongoose.model('SocialMedia',SocialMediaSchema);