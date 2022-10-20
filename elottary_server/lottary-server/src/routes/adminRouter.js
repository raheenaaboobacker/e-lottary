const express = require('express')
const router = express.Router()
const category = require('../models/CategoryData')
const ticket = require('../models/ticketgenData')
const login = require('../models/loginData')
const user = require('../models/userData')


router.post('/approve-category/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    category.updateOne(  { _id:id} , { $set: { status : "1"  } } )
    .then((user)=>{
        console.log("approvedddd",user);
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