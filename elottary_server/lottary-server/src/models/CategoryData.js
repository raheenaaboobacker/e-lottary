const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://raheenaMTX:raheenaMTX@cluster0.rdoledt.mongodb.net/lotteryDB?retryWrites=true&w=majority')  //database connection
const Schema = mongoose.Schema  

const categorySchema = new Schema({
    category_type:{type: String, required:true},
    category_name:{type: String, required: true },
    date:{type: String, required: true },
    first_price:{type:String,required:true},
    second_price:{type:String,required:true},
    third_price:{type:String,required:true},
    ticket_amount:{type: String, required: true },
    status:{type: String, required: true }
   
})

var categorydata = mongoose.model('category_tb',categorySchema) 
module.exports=categorydata;