const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://raheenaMTX:raheenaMTX@cluster0.rdoledt.mongodb.net/lotteryDB?retryWrites=true&w=majority')  //database connection
const Schema = mongoose.Schema  

const SystemSchema = new Schema({
     login_id:{ type: Schema.Types.ObjectId, ref: "login_tb", required: true },
     name:{ type: String, required: true },
     mobile:{type:Number ,required:true},
     address:{ type: String, required: true },
     id_category:{ type: String, required: true },
     id_proof:{ type: String, required: true },     
})

var Systemdata = mongoose.model('system_manager_tb',SystemSchema) 
module.exports=Systemdata;