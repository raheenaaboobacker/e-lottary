const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const login = require('../models/loginData')
const user = require('../models/userData')
const checkAuth=require("../middleware/check-auth");
var ObjectId = require('mongodb').ObjectID;
const multer=require("multer")
var ObjectId = require('mongodb').ObjectID;

var storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"../../client/public/upload")
    },
    filename: function(req,file,cb){
        cb(null,req.body.name)
    }
})

var upload=multer({storage:storage})
router.post('/upload',upload.single("file"),(req,res)=>{
return res.json("file uploaded")
})
router.get('/view-user', (req, res) => {
    login.aggregate([
        {
          $lookup:
          {
            from:'user_tbs',
            localField:'_id',
            foreignField:'login_id',
                     
            as:"registerdetails"
          }
        },
        {
            $match:
            {
                role:"2"
            }
        }
       
    ]).then(function (data) {
        console.log(data);
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

router.post('/user-register', (req, res) => {
    console.log("data " + JSON.stringify(req.body))
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'password hashing error'
            })
        }
        let logindata = {
            email: req.body.email,
            password: hashedPass,
            role: 2,
            status: 0
        }
        login.findOne({ email: req.body.email })
            .then(username => {
                if (username) {
                    return res.status(400).json({
                        success: false,
                        error: true,
                        message: 'Email already exist!'
                    })
                }
                else {
                    var item = login(logindata)
                    item.save()
                        .then(() => {
                            login.findOne({ email: logindata.email })
                                .then(function (details) {
                                    var id = details._id
                                    let registerdata = {
                                        login_id: id,
                                        name: req.body.name,
                                        mobile: req.body.mobile,
                                        gender: req.body.gender,
                                        address: req.body.address,
                                        id_category: req.body.id_category,
                                        relation: req.body.relation,
                                        id_proof: req.body.id_proof,
                                        nominee_name: req.body.nominee_name,
                                        nominee_id: req.body.nominee_id,                                       
                                        nominee_proof: req.body.nominee_proof,                                       
                                        
                                    }
                                    user.findOne({ mobile: registerdata.mobile })
                                        .then((mobile) => {
                                            if (!mobile) {
                                                
                                                    var register_item = user(registerdata)
                                                    register_item.save()
                                                        .then(() => {
                                                            res.status(200).json({
                                                                success: true,
                                                                error: false,
                                                                message: 'registration success'
                                                            })
                                                        })
                                              
                                            }
                                            else {
                                                console.log(id)
                                                login.deleteOne({ _id: id })
                                                    .then(() => {

                                                        res.status(401).json({
                                                            success: false,
                                                            error: true,
                                                            message: 'Mobile number is already registered with us'
                                                        })


                                                    })

                                            }
                                        })


                                })

                        })

                }

            })
    })

})

router.delete('/delete-user/:id', (req, res) => {
    const id = req.params.id   // login id 
    login.deleteOne({ _id: id }) .then(function () {
    user.deleteOne({ login_id: id })
        .then(function () {
            res.status(200).json({
                success: true,
                error: false,
                message: 'user deleted!'
            })
        })
    })
        .catch(err => {
            return res.status(401).json({
                message: "Something went Wrong!"
            })
        })
})


module.exports = router