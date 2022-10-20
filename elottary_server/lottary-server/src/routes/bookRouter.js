const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const category = require('../models/CategoryData')
const user = require('../models/userData')
const book = require('../models/bookingData')
const prebook = require('../models/PrebookData')
const ticket = require('../models/ticketgenData')
const checkAuth=require("../middleware/check-auth");
var ObjectId = require('mongodb').ObjectID;

router.get('/view-ticket-amound/:id', (req, res) => {
    const id=req.params.id
    category.find({_id:id})
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


router.post('/ticket-book/:id/:ticket',((req,res)=>{
    console.log(req.params.ticket);
    console.log(req.body);
    var item = {
        Login_id:req.params.id,
        date:new Date().toDateString(),  
        category_id:req.body.category_id,
        ticket_id:req.body.ticket_id,
        district:req.body.district,
        amount:req.params.ticket,
        agency_id:req.body.agency_id
    }
    ticket.updateOne({_id: req.body.ticket_id} , { $set: { status : 2  } } )             
            .then(data => {
                if (data) {                
                    var products=book(item);
                    products.save().then(()=>{              
                        res.status(200).json({
                            success:true,
                            error:false,
                            message:' booked!'
                        })
                    })
                    .catch(err=>{
                        return res.status(401).json({
                            message: "Something went wrong"
                        })
                    })
               
            }
            })
    console.log(item);
    
       
}))

router.get('/agency-view-Payment/:id', (req, res) => {
    const id=req.params.id
    console.log(id);
    book.aggregate([
        {
            '$lookup': {
                'from': 'ticketgen_tbs', 
                'localField': 'ticket_id', 
                'foreignField': '_id', 
                'as': 'ticket'
            }
          },
        {
            $unwind:'$ticket'
        },
        {
            '$lookup': {
              'from': 'user_tbs', 
              'localField': 'Login_id', 
              'foreignField': 'login_id', 
              'as': 'user'
            }
          },
          {
            $unwind:'$user'
        },
        {
            "$match": {
                'agency_id':id,
                
            }
        },
        {
            "$group": {
                "_id": "$_id",
                "amount": { "$first": "$amount" },
                "date": { "$first": "$date" },
                "ticket_number": { "$first": "$ticket.ticket_number" },
                "name": { "$first": "$user.name" },
                
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

router.get('/view-booked-ticket/:id', (req, res) => {
    const id=req.params.id
    book.aggregate([
        {
          $lookup:
          {
            from: 'ticketgen_tbs',
            localField: "ticket_id",
            foreignField: "_id",
            as: "ticketdetails"
          }
        },
        {
            $unwind:'$ticketdetails'
        }, 
        
        {
            $match:
            {
                Login_id:ObjectId(id)
            }
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

router.get('/view-all-booked-ticket', (req, res) => {
    const id=req.params.id
    book.aggregate([
        {
          $lookup:
          {
            from: 'ticketgen_tbs',
            localField: "ticket_id",
            foreignField: "_id",
            as: "ticketdetails"
          }
        },
        {
            $unwind:'$ticketdetails'
        }, 
        {
            $lookup:
            {
              from: 'user_tbs',
              localField: "Login_id",
              foreignField: "login_id",
              as: "userdetails"
            }
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

module.exports = router