const express=require('express');
const router=express.Router();
const {getUsers,getAllUsers,getCountUsers,postUsers,putUsers,deleteUsers,addToSetUsers,pullUsers,setUsers}=require('../helper/servicesReferance');
const {login}=require('../Services/login')
const verify=require('../auth/verfy')
router.get(`/`, (req,res)=>{getUsers(req,res)})
router.get(`/:schemaToSearch`, (req,res)=>{getAllUsers(req,res)})
router.get(`/count/:modelToSearch`, (req,res)=>{getCountUsers(req,res)})

router.post(`/new=:domainName`, (req,res)=>{postUsers(req,res)})
router.post(`/:modelName/:id`,(req,res)=>{addToSetUsers(req,res)})


router.put(`/update=:domainName`, (req,res)=>{putUsers(req,res)})
router.put(`/:modelName/:modelId/:arrayName/:arrayId`,verify,(req,res)=>{setUsers(req,res)})

router.delete(`/del=:domainName`,(req,res)=>{deleteUsers(req,res)})
router.delete(`/:modelName/:id`,(req,res)=>{pullUsers(req,res)})

module.exports=router;