const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const login = require('../models/loginData')
const system = require('../models/systemManagerData')
const checkAuth=require("../middleware/check-auth");
var ObjectId = require('mongodb').ObjectID;

router.get('/view-system-manager', (req, res) => {
    login.aggregate([
        {
          $lookup:
          {
            from:'system_manager_tbs',
            localField:'_id',
            foreignField:'login_id',
                     
            as:"registerdetails"
          }
        },
        {
            $match:
            {
                role:"3"
            }
        }
       
    ]).then(function (data) {
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

router.post('/system-register', (req, res) => {
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
            role: 3,
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
                                        address: req.body.address,
                                        id_category: req.body.id_category,
                                        id_proof: req.body.id_proof,
                                           
                                    }
                                    system.findOne({ mobile: registerdata.mobile })
                                        .then((mobile) => {
                                            if (!mobile) {
                                                
                                                    var register_item = system(registerdata)
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



module.exports = router