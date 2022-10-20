const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://raheenaMTX:raheenaMTX@cluster0.rdoledt.mongodb.net/lotteryDB?retryWrites=true&w=majority') 
const Schema = mongoose.Schema    

const LoginSchema = new Schema({
     email:{type: String, required: true },
     password:{type: String, required:true},
     role: String,
      status: String,
})

var Logindata = mongoose.model('login_tb',LoginSchema) 
module.exports=Logindata;