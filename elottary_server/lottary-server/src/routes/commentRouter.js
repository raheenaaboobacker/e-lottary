const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const comment = require('../models/commentData')
const system = require('../models/systemManagerData')
const checkAuth=require("../middleware/check-auth");
var ObjectId = require('mongodb').ObjectID;

router.post('/add-comment',((req,res)=>{
    console.log(req.body);
    var item = {
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        message:req.body.message, 
       reply:null
    }
    
        var products=comment(item);
        products
        .save().then(()=>{
    
            res.status(200).json({
                success:true,
                error:false,
                message:'Comment Added!'
            })
        })
        .catch(err=>{
            return res.status(401).json({
                message: "Something went wrong"
            })
        })
               
    console.log(item);
    
       
}))

router.get('/view-commend', (req, res) => {
    comment.find().then(function (data) {
            if (data == 0) {
                return res.status(401).json({
                    success: false,
                    error: true,
                    message: "No Data Found!"
                })
            }
            else {
                return res.status(200).json({
                    success: true,
                    error: false,
                    data: data
                })
            }
        })

})


router.post('/post-reply/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    console.log(req.body.vreply);
    comment.updateOne(  { _id:id} , { $set: { reply : req.body.vreply  } } )
    .then((user)=>{
        console.log("approvedddd",user);
        res.status(200).json({
            success:true,
            error:false,
            message:"Reply added"
        })
        
    }).catch(err => {
        return res.status(401).json({
            message: "Something went Wrong!"
        })
    })

})
module.exports = router