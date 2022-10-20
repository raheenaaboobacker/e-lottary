const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const login = require('../models/loginData')
const result = require('../models/resultData')
const book = require('../models/bookingData')
const prebook = require('../models/PrebookData')
const ticket = require('../models/ticketgenData')
const checkAuth=require("../middleware/check-auth");
var ObjectId = require('mongodb').ObjectID;

router.post('/add-result',((req,res)=>{
    console.log(req.body);
    var item = {
        category_id:req.body.category_id,
    first:req.body.first,
    second:req.body.second,
    third:req.body.third,
    third2:req.body.third2,
    third3:req.body.third3,
    result_date:new Date().toDateString(),
    status:0
       
       
    }
    
        var products=result(item);
        products.save().then(()=>{
    
            res.status(200).json({
                success:true,
                error:false,
                message:' result Added!'
            })
        })
        .catch(err=>{
            return res.status(401).json({
                message: "Something went wrong"
            })
        })
               
    console.log(item);
    
       
}))


router.get('/view-result', (req, res) => {
    
    result.aggregate([
        {
          $lookup:
          {
            from: 'category_tbs',
            localField: "category_id",
            foreignField: "_id",
            as: "ticketdetails"
          }
        },
        {
            $unwind:'$ticketdetails'
        }, 
        
       
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

router.post('/approve-price/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    result.updateOne(  { _id:id} , { $set: { status : "1"  } } ).then((user)=>{
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



router.get('/view-ticket-result/:data', (req, res) => {
    const data=req.params.data
    console.log("hhhh",data);
    result.aggregate([
        {
            '$lookup': {
              'from': 'category_tbs', 
              'localField': 'category_id', 
              'foreignField': '_id', 
              'as': 'category'
            }
          },
        {
            $unwind:'$category'
        },
        {
            "$match": {
                "status": "1",
                
            }
        },
        {
            "$group": {
                "_id": "$_id",
                "category_name": { "$first": "$category.category_name" },
                "category_type": { "$first": "$category.category_type" },
                "first_price": { "$first": "$category.first_price" },
                "second_price": { "$first": "$category.second_price" },
                "third_price": { "$first": "$category.third_price" },
                "firstPriceTicket": { "$first": "$first" },
                "secondPriceTicket": { "$first": "$second" },
                "thirdPriceTicket": { "$first": "$third" },
                "thirdPriceTicket2": { "$first": "$third2" },
                "thirdPriceTicket3": { "$first": "$third3" },
                "date": { "$first": "$result_date" },
                
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
router.get('/view-ticket-resultS', (req, res) => {
    const data=req.params.data
    console.log("hhhh",data);
    result.aggregate([
        {
            '$lookup': {
              'from': 'category_tbs', 
              'localField': 'category_id', 
              'foreignField': '_id', 
              'as': 'category'
            }
          },
        {
            $unwind:'$category'
        },
        {
            "$match": {
                "status": "1",
                
            }
        },
        {
            "$group": {
                "_id": "$_id",
                "category_name": { "$first": "$category.category_name" },
                "category_type": { "$first": "$category.category_type" },
                "first_price": { "$first": "$category.first_price" },
                "second_price": { "$first": "$category.second_price" },
                "third_price": { "$first": "$category.third_price" },
                "firstPriceTicket": { "$first": "$first" },
                "secondPriceTicket": { "$first": "$second" },
                "thirdPriceTicket": { "$first": "$third" },
                "thirdPriceTicket2": { "$first": "$third2" },
                "thirdPriceTicket3": { "$first": "$third3" },
                "date": { "$first": "$result_date" },
                
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