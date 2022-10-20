const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://raheenaMTX:raheenaMTX@cluster0.rdoledt.mongodb.net/lotteryDB?retryWrites=true&w=majority')  //database connection
const Schema = mongoose.Schema  

const agencySchema = new Schema({
     login_id:{ type: Schema.Types.ObjectId, ref: "login_tb", required: true },
     name:{ type: String, required: true },
     mobile:{ type: String, required: true },
     district:{ type: String, required: true },
     address:{ type: String, required: true },
     license_name:{ type: String, required: true },
     licence_no:{ type: String, required: true },
     licence_proof:{ type: String, required: true },     
})

var agencydata = mongoose.model('agency_tb',agencySchema) 
module.exports=agencydata;