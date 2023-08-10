//bottomLayer_admin
const {functionAddToSetAdmin}=require('../Middleware/functions/admin/functionAddToSetAdmin')
const {functionDeleteAdmin}=require('../Middleware/functions/admin/functionDeleteAdmin')
const {functionGetAdmin}=require('../Middleware/functions/admin/functionGetAdmin')
const {functionPostAdmin}=require('../Middleware/functions/admin/functionPostAdmin')
const {functionPullAdmin}=require('../Middleware/functions/admin/functionPullAdmin')
const {functionSetAdmin}=require('../Middleware/functions/admin/functionSetAdmin')
const {functionPutAdmin}=require('../Middleware/functions/admin/functionPutAdmin')
//bottomLayer_user
const {functionAddToSetUser}=require('../Middleware/functions/user/functionAddToSetUser')
const {functionDeleteUser}=require('../Middleware/functions/user/functionDeleteUser')
const {functionGetUser}=require('../Middleware/functions/user/functionGetUser')
const {functionPostUser}=require('../Middleware/functions/user/functionPostUser')
const {functionPullUser}=require('../Middleware/functions/user/functionPullUser')
const {functionSetUser}=require('../Middleware/functions/user/functionSetUser')
const {functionPutUser}=require('../Middleware/functions/user/functionPutUser')
//topLayer_admin
const {filterAddToSetAdmin}=require('../Middleware/filters/admin/filterAddToSetAdmin')
const {filterDeleteAdmin}=require('../Middleware/filters/admin/filterDeleteAdmin')
const {filterGetAdmin}=require('../Middleware/filters/admin/filterGetAdmin')
const {filterPostAdmin}=require('../Middleware/filters/admin/filterPostAdmin')
const {filterPullAdmin}=require('../Middleware/filters/admin/filterPullAdmin')
const {filterSetAdmin}=require('../Middleware/filters/admin/filterSetAdmin')
const {filterPutAdmin}=require('../Middleware/filters/admin/filterputAdmin')
//filter_user
const {filterAddToSetUser}=require('../Middleware/filters/user/filterAddToSetUser')
const {filterDeleteUser}=require('../Middleware/filters/user/filterDeleteUser')
const {filterGetUser}=require('../Middleware/filters/user/filterGetUser')
const {filterPostUser}=require('../Middleware/filters/user/filterPostUser')
const {filterPullUser}=require('../Middleware/filters/user/filterPullUser')
const {filterSetUser}=require('../Middleware/filters/user/filterSetUser')
const {filterPutUser}=require('../Middleware/filters/user/filterPutUser')




module.exports={functionAddToSetAdmin,
    functionDeleteAdmin,
    functionGetAdmin,
    functionPostAdmin,
    functionPullAdmin,
    functionSetAdmin,
    functionPutAdmin,
    functionAddToSetUser,
    functionDeleteUser,
    functionGetUser,
    functionPostUser,
    functionPullUser,
    functionSetUser,
    functionPutUser,
    filterAddToSetAdmin,
    filterDeleteAdmin,
    filterGetAdmin,
    filterPostAdmin,
    filterPullAdmin,
    filterSetAdmin,
    filterPutAdmin,
    filterAddToSetUser,
    filterDeleteUser,
    filterGetUser,
    filterPostUser,
    filterPullUser,
    filterSetUser,
    filterPutUser,
}