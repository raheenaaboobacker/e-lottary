const express = require('express')
const router = express.Router()
const category = require('../models/CategoryData')
const ticket = require('../models/ticketgenData')
const login = require('../models/loginData')
const claim = require('../models/claimData')



router.post('/claim-ticket/:id', (req, res) => {
   console.log(req.body);
   var item={
    login_id:req.params.id,
    ticket_number:req.body.ticket_number,
    price:req.body.price,
    amount:req.body.amount,
    category_name:req.body.category_name,
    status:0
   }
   console.log(item);
   claim.findOne({ticket_number: req.body.ticket_number})
   .then((data)=>{
       console.log("logindata=>",data)
       if(!data){
        var products=claim(item);
        products.save().then(()=>{
    
            res.status(200).json({
                success:true,
                error:false,
                message:' claimed!'
            })
        })
        .catch(err=>{
            return res.status(401).json({
                message: "Something went wrong"
            })
        })
       }else{
        return res.status(401).json({
            success:false,
            error:true,
            message:"Already Claimed"
        })     
       }
    })
})


router.get('/view-claim', (req, res) => {
    claim.aggregate([
        {
          '$lookup': {
            'from': 'user_tbs', 
            'localField': 'login_id', 
            'foreignField': 'login_id', 
            'as': 'result'
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

module.exports = router;