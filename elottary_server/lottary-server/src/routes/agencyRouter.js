const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const login = require('../models/loginData')
const user = require('../models/userData')
const agency = require('../models/agencyData')
const prebook = require('../models/PrebookData')
const checkAuth=require("../middleware/check-auth");
var ObjectId = require('mongodb').ObjectID;

router.get('/view-agency', (req, res) => {
    login.aggregate([
        {
          $lookup:
          {
            from:'agency_tbs',
            localField:'_id',
            foreignField:'login_id',
                     
            as:"registerdetails"
          }
        },
        {
            $match:
            {
                role:"4"
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

router.post('/agency-register', (req, res) => {
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
            role: 4,
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
                                        district:req.body.district,
                                        address: req.body.address,
                                        license_name: req.body.license_name,
                                        licence_no: req.body.licence_no,
                                        licence_proof: req.body.licence_proof,
                                           
                                    }
                                    agency.findOne({ mobile: registerdata.mobile })
                                        .then((mobile) => {
                                            if (!mobile) {
                                                
                                                    var register_item = agency(registerdata)
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

router.delete('/delete-agency/:id', (req, res) => {
    const id = req.params.id   // login id 
    login.deleteOne({ _id: id }) .then(function () {
        agency.deleteOne({ login_id: id })
        .then(function () {
            res.status(200).json({
                success: true,
                error: false,
                message: 'agency deleted!'
            })
        })
    })
        .catch(err => {
            return res.status(401).json({
                message: "Something went Wrong!"
            })
        })
})

router.get('/view-prebooked-category/:id', (req, res) => {
    const id=req.params.id
    console.log(id);
 
    prebook.aggregate([
        {
          $lookup:
          {
            from: "category_tbs",
            localField: "category_id",
            foreignField: "_id",
            as: "registerdetails"
          }
        },
        {
            $unwind:'$registerdetails'
        }, 
        
        {
            $match:
            {
                login_id:ObjectId(id)
            }
        },
         {
            "$group": {
                "_id": "$_id",
                "category_id":{"$first": "$category_id"},
                "category_name": { "$first": "$registerdetails.category_name" },
            }
        }
    ])
    // .forEach(function(doc) {
    //     doc.category_id.shift();
    //     db.table.remove({
    //         _id: {$in: doc.slugs}
    //     });
    //  })
     
    .then(function (data) {
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

router.get('/agency-view-prebooked-ticket/:id', (req, res) => {
    const id=req.params.id
    console.log(id);
    prebook.aggregate([
        {
            '$lookup': {
              'from': 'login_tbs', 
              'localField': 'login_id', 
              'foreignField': '_id', 
              'as': 'result'
            }
        },
        
        {
            $unwind:'$result'
        },
         {
            '$lookup': {
              'from': 'ticketgen_tbs', 
              'localField': 'ticket_id', 
              'foreignField': '_id', 
              'as': 'ticketdetails'
            }
          },
            {
            $unwind:'$ticketdetails'
        },
        
        {
            $match:
            {
                login_id:ObjectId(id)
            }
        },
         {
            "$group": {
                "_id": "$_id",
                "prebood_date": { "$first": "$prebook_date" },
                "ticket_number": { "$first": "$ticketdetails.ticket_number" },
                "ticket_status": { "$first": "$ticketdetails.status" },
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

router.get('/view-district-agency/:id', (req, res) => {
    const id=req.params.id
    console.log(id);
 
    login.aggregate([
        {
            '$lookup': {
              'from': 'agency_tbs', 
              'localField': '_id', 
              'foreignField': 'login_id', 
              'as': 'agency'
            }
          },
        {
            '$unwind':'$agency'
        }, 
        
        {
           '$match':
            {
                'agency.district':id
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

router.get('/view-prebooked-ticket/:id/:id1', (req, res) => {
    const id=req.params.id
    console.log(id);
    const id1=req.params.id1
    console.log(id1);
    prebook.aggregate([
        {
          $lookup:
          {
            from: "ticketgen_tbs",
            localField: "ticket_id",
            foreignField: "_id",
            as: "registerdetails"
          }
        },
        {
            $unwind:'$registerdetails'
        }, 
        
        {
            $match:
            {
                login_id:ObjectId(id)
            }
        }, 
        
        {
            $match:
            {
                category_id:ObjectId(id1)
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
module.exports = router