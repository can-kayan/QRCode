const express=require('express');
const router=express.Router();
const {postAdmins,setAdmins,pullAdmins,addToSetAdmins, getAllAdmins, getCountAdmins, getAdmins,putAdmins, deleteAdmins}=require('../helper/servicesReferance');
const verify=require('../auth/verfy')

router.get(`/`,(req,res)=>{getAdmins(req,res)})
router.get(`/:schemaToSearch`, (req,res)=>{getAllAdmins(req,res)})
router.get(`/count/:modelToSearch`, (req,res)=>{getCountAdmins(req,res)})

router.post(`/new=:modelName`, (req,res)=>{postAdmins(req,res)})
router.post(`/:modelName/:id`,(req,res)=>{addToSetAdmins(req,res)})

router.put(`/update=:modelName`, (req,res)=>{putAdmins(req,res)})
router.put(`/:modelName=:modelId/:arrayName=:arrayId`,(req,res)=>{setAdmins(req,res)})

router.delete(`/:modelName/:id`,(req,res)=>{pullAdmins(req,res)})
router.delete(`/del=:modelName`, (req,res)=>{deleteAdmins(req,res)})


module.exports=router;