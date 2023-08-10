//controller_admin
const {addToSetAdmin}=require('../controller/admin/addToSet')
const {deleteAdmin}=require('../controller/admin/delete')
const {getAdmin}=require('../controller/admin/get')
const {postAdmin}=require('../controller/admin/post')
const {pullAdmin}=require('../controller/admin/pull')
const {putAdmin}=require('../controller/admin/put')
const {setModelAdmin,setDomainAdmin}=require('../controller/admin/set')
//controller_user
const {addToSetUser}=require('../controller/user/addToSet')
const {deleteUser}=require('../controller/user/delete')
const {getUser}=require('../controller/user/get')
const {postUser}=require('../controller/user/post')
const {pullUser}=require('../controller/user/pull')
const {putUser}=require('../controller/user/put')
const {setModelUser,setDomainUser}=require('../controller/user/set')

module.exports={
    addToSetAdmin,deleteAdmin,getAdmin,postAdmin,pullAdmin,
    putAdmin, setModelAdmin,setDomainAdmin,
    addToSetUser,deleteUser,getUser,postUser,
    pullUser,putUser, setModelUser,setDomainUser,

}