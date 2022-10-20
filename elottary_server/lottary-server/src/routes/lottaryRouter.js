const express = require('express')
const router = express.Router()
const category = require('../models/CategoryData')
const ticket = require('../models/ticketgenData')
const login = require('../models/loginData')
const user = require('../models/userData')
const prebook = require('../models/PrebookData')


router.post('/add-category',((req,res)=>{
    console.log(req.body);
    var item = {
        category_type:req.body.category_type,
        category_name:req.body.category_name,
        date:new Date().toDateString(),
        first_price:req.body.first_price,
        second_price:req.body.second_price,
        third_price:req.body.third_price,
        ticket_amount:req.body.ticket_amount,
        status:0,
    }
    category.findOne({ category_name: req.body.category_name })
    .then(data => {
        console.log("dataaaa",data);
        if (data) {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'Category already exist!'
            })
        }
        else {
    console.log(item);
    var products=category(item);
    products.save().then(()=>{
        res.status(200).json({
            success:true,
            error:false,
            message:'Category Added!'
        })
    })
    .catch(err=>{
        return res.status(401).json({
            message: "Something went wrong"
        })
    })
        }})
}))
router.get('/view-all-category', (req, res) => {
    category.find()
        .then(function (data) {
            if (data == 0) {
                return res.status(401).json({
                    success: false,
                    error: true,
                    message: "No Item Found!"
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
router.get('/view-category', (req, res) => {
    category.find({status:1})
        .then(function (data) {
            if (data == 0) {
                return res.status(401).json({
                    success: false,
                    error: true,
                    message: "No Item Found!"
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
router.post('/approve-category/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    category.updateOne(  { _id:id} , { $set: { status : 1  } } ).then((user)=>{
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

router.post('/generate-lottary',((req,res)=>{
    console.log(req.body);
    category.findOne({ category_name: req.body.category_type })
    .then(data => {
        if (data) {
            console.log(data);
            var item = {
                category_id:data._id,
                ticket_number:req.body.ticket_number,
                date : new Date().toDateString(),       
               status:0
            }
            var products=ticket(item);
            products.save().then(()=>{
                res.status(200).json({
                    success:true,
                    error:false,
                    message:'Ticket Generated!'
                })
            }).catch(err=>{
                return res.status(401).json({
                    message: "Something went wrong"
                })
            })
                }})
  
}))

router.get('/view-ticket/:id', (req, res) => {
    const id=req.params.id
    ticket.find({category_id:id})
        .then(function (data) {
            if (data == 0) {
                return res.status(401).json({
                    success: false,
                    error: true,
                    message: "No Item Found!"
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


router.post('/pre-book/:id/:ticket_id',((req,res)=>{
    console.log(req.params.ticket_id);
    console.log(req.body);
    var item = {
        prebook_date:new Date().toDateString(),  
        category_id:req.body.category_id,
        login_id:req.params.id,
        ticket_id:req.params.ticket_id,
        district:req.body.district,
       
       
    }
    ticket.findOne({ _id: req.params.ticket_id })
            .then(data => {
                if (data) {
                  ticket.updateOne({_id: req.params.ticket_id} , { $set: { status : 1  } } )
                  .then((user)=>{
                    var products=prebook(item);
                    products.save().then(()=>{
                console.log("pre bookedddd");
                        res.status(200).json({
                            success:true,
                            error:false,
                            message:'Pre booked!'
                        })
                    })
                    .catch(err=>{
                        return res.status(401).json({
                            message: "Something went wrong"
                        })
                    })
                })
            }
            })
    console.log(item);
    
       
}))
module.exports = router;