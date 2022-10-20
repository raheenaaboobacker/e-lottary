const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://raheenaMTX:raheenaMTX@cluster0.rdoledt.mongodb.net/lotteryDB?retryWrites=true&w=majority')  //database connection
const Schema = mongoose.Schema  

const commentSchema = new Schema({
 name:{type: String, required: true },
 phone:{type: String, required: true },
 email:{type: String, required:true},
 message:{type: String,required:true},
 reply: String
  
})

var commentdata = mongoose.model('comment_tb',commentSchema) 
module.exports=commentdata;