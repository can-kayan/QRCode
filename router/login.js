const express=require('express');
const router=express.Router();
const {login}=require('../Services/login')

router.post(`/:tableNumber`,(req,res)=>{login(req,res)})
const {adminLogin}=require('../Services/adminLogin')

router.post(`/:lucyNumber/admin`,(req,res)=>{adminLogin(req,res)})
module.exports=router;