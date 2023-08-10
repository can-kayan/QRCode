//service_admin
const {postAdmins}=require('../Services/admin/postAdmin')
const {putAdmins}=require('../Services/admin/putAdmin')
const {addToSetAdmins}=require('../Services/admin/addToSetAdmin')
const {getAllAdmins,getCountAdmins,getAdmins}=require('../Services/admin/getAdmin')
const {deleteAdmins}=require('../Services/admin/deleteAdmin')
const {pullAdmins}=require('../Services/admin/pullAdmin')
const {setAdmins}=require('../Services/admin/setAdmin')
//service_user
const {getUsers,getAllUsers,getCountUsers}=require('../Services/user/getUser')
const {postUsers}=require('../Services/user/postUser')
const {putUsers}=require('../Services/user/putUser')
const {deleteUsers}=require('../Services/user/deleteUser')
const {addToSetUsers}=require('../Services/user/addToSetUser')
const {pullUsers}=require('../Services/user/pullUser')
const {setUsers}=require('../Services/user/setUser')
module.exports={
    postAdmins,putAdmins,getAllAdmins,getAdmins,getCountAdmins,deleteAdmins,pullAdmins,
    setAdmins,addToSetAdmins,getUsers,getAllUsers,getCountUsers,
    postUsers,putUsers,deleteUsers,addToSetUsers,pullUsers,setUsers
}