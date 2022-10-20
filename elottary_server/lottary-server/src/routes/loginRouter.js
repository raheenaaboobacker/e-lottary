const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const user = require('../models/userData')
const login=require('../models/loginData')
const agency = require('../models/agencyData')
const system = require('../models/systemManagerData')
const jwt=require('jsonwebtoken')


router.post('/login',(req, res)=>{
    console.log(req.body);
    let fetchedUser
    login.findOne({email: req.body.email})
    .then((user)=>{
        console.log("logindata=>",user)
        if(!user){
            return res.status(401).json({
                success:false,
                error:true,
                message:"User Not Found!"
            })
        }else{
            fetchedUser = user
            return bcrypt.compare(req.body.password, user.password)      
        }
        })
    .then(result=>{
        
        if(!result){
            return res.status(401).json({
                success:false,
                error:true,
                message:"Please Check Password!"
            })
        }
        var id = fetchedUser._id
   
            if(fetchedUser.role==="1"){
                // console.log("role=>",fetchedUser.role);
                const token = jwt.sign(
                 {name:fetchedUser.name, userId:fetchedUser._id, userRole:fetchedUser.role},
                     "secret_this_should_be_longer",
                     { expiresIn: "4h" }
                 ) 
                 res.status(200).json({
                     success:true,
                     error:false,
                     token:token,
                     loginId: fetchedUser._id,
                     role:fetchedUser.role,
                 })
             }
            if(fetchedUser.role==="2"){
               console.log("role=>",fetchedUser.role);
               user.findOne({login_id:id})
                .then((registerData)=>{
                    console.log(registerData);
               const token = jwt.sign(
                {name:fetchedUser.name, userId:fetchedUser._id, userRole:fetchedUser.role},
                    "secret_this_should_be_longer",
                    { expiresIn: "4h" }
                ) 
                res.status(200).json({
                    success:true,
                    error:false,
                    token:token,
                    loginId: fetchedUser._id,
                    // name: registerData.name,
                    role:fetchedUser.role
                })
            })
            }
            else if(fetchedUser.role==="3"){
               console.log("role not=>",fetchedUser.role);
               
               system.findOne({login_id:id})
                .then((registerData)=>{  
                    
                    let status = fetchedUser.status
                    console.log(status);
                    if(status!=1){
                        return res.status(401).json({
                            success:false,
                            error:true,
                            message: "Waiting for admins approval",                        
                        })
                    }
                    else{
                        
                       
                        const token = jwt.sign(
                            {name:fetchedUser.name, userId:fetchedUser._id, userRole:fetchedUser.role},
                            "secret_this_should_be_longer",
                            { expiresIn: "1h" }
                        )            
                        res.status(200).json({
                            success:true,
                            error:false,
                            token:token,
                            loginId: fetchedUser._id,
                            name: fetchedUser.name,
                            role:fetchedUser.role
                        })
                    }
                   
                })
            }
            else if(fetchedUser.role==="4"){
                console.log("role not=>",fetchedUser.role);
                
                agency.findOne({login_id:id})
                 .then((registerData)=>{  
                     
                     let status = fetchedUser.status
                     console.log(status);
                     if(status!=1){
                         return res.status(401).json({
                             success:false,
                             error:true,
                             message: "Waiting for admins approval",                        
                         })
                     }
                     else{
                         
                        
                         const token = jwt.sign(
                             {name:fetchedUser.name, userId:fetchedUser._id, userRole:fetchedUser.role},
                             "secret_this_should_be_longer",
                             { expiresIn: "1h" }
                         )            
                         res.status(200).json({
                             success:true,
                             error:false,
                             token:token,
                             loginId: fetchedUser._id,
                             name: fetchedUser.name,
                             role:fetchedUser.role
                         })
                     }
                    
                 })
             }
        
       
        
 
    })
    .catch(err=>{
        return res.status(401).json({
            message: "Auth failed",
            error: err
        })
    })
})

router.post('/approve/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    login.updateOne(  { _id:id} , { $set: { status : 1  } } ).then((user)=>{
        console.log(user);
        res.status(200).json({
            success:true,
            error:false,
            message:"approved"
        })
        
    }).catch(err => {
        return res.status(401).json({
            message: "Something went Wrong!"
        })
    })
 
})

module.exports = router;