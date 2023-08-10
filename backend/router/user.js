const express=require('express');
const router=express.Router();
const {getUsers,getAllUsers,getCountUsers,postUsers,putUsers,deleteUsers,addToSetUsers,pullUsers,setUsers}=require('../helper/servicesReferance');
const {login}=require('../Services/login')
const verify=require('../auth/verfy')
router.get(`/`,verify, (req,res)=>{getUsers(req,res)})
router.get(`/:schemaToSearch`,verify, (req,res)=>{getAllUsers(req,res)})
router.get(`/count/:modelToSearch`,verify, (req,res)=>{getCountUsers(req,res)})

router.post(`/new=:domainName`,verify, (req,res)=>{postUsers(req,res)})
router.post(`/:modelName/:id`,verify,(req,res)=>{addToSetUsers(req,res)})


router.put(`/update=:domainName`,verify, (req,res)=>{putUsers(req,res)})
router.put(`/:modelName/:modelId/:arrayName/:arrayId`,verify,(req,res)=>{setUsers(req,res)})

router.delete(`/del=:domainName`,verify,(req,res)=>{deleteUsers(req,res)})
router.delete(`/:modelName/:id`,verify,(req,res)=>{pullUsers(req,res)})

module.exports=router;