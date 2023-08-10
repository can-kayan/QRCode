const {Banner}=require('../models/banner')
const {ContactUs}=require('../models/contactUs')
const {Image}=require('../models/image')
const {Orders}=require('../models/orders')
const {Product}=require('../models/product')
const {ProductCategory}=require('../models/productCategories')
const {ProductType}=require('../models/productType')
const {QRCode}=require('../models/qrCode')
const {SiteInformation}=require('../models/siteInfornation')
const {SocialMedia}=require('../models/socialMedia')
const {Thema}=require('../models/thema')
const {Admin}=require('../models/admin')
module.exports={
    Admin,Banner,ContactUs,Image,Orders,Product,ProductCategory,ProductType,QRCode,SiteInformation,SocialMedia,Thema
}