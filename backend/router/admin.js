const express=require('express');
const router=express.Router();
const {postAdmins,setAdmins,pullAdmins,addToSetAdmins, getAllAdmins, getCountAdmins, getAdmins,putAdmins, deleteAdmins}=require('../helper/servicesReferance');
const verify=require('../auth/verfy')

router.get(`/`, verify,(req,res)=>{getAdmins(req,res)})
router.get(`/:schemaToSearch`,verify, (req,res)=>{getAllAdmins(req,res)})
router.get(`/count/:modelToSearch`,verify, (req,res)=>{getCountAdmins(req,res)})

router.post(`/new=:modelName`, verify,(req,res)=>{postAdmins(req,res)})
router.post(`/:modelName/:id`,verify,(req,res)=>{addToSetAdmins(req,res)})

router.put(`/update=:modelName`,verify, (req,res)=>{putAdmins(req,res)})
router.put(`/:modelName=:modelId/:arrayName=:arrayId`,verify,(req,res)=>{setAdmins(req,res)})

router.delete(`/:modelName/:id`,verify,(req,res)=>{pullAdmins(req,res)})
router.delete(`/del=:modelName`,verify, (req,res)=>{deleteAdmins(req,res)})


module.exports=router;