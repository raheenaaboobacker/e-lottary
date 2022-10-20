
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://raheenaMTX:raheenaMTX@cluster0.rdoledt.mongodb.net/lotteryDB?retryWrites=true&w=majority') 
const Schema = mongoose.Schema    

const claimSchema = new Schema({
    login_id:{type: Schema.Types.ObjectId, ref:"login_tb", required:true},
    ticket_number:{type: String, required: true },
    price:{type: String, required: true },
    amount:{type: String, required: true },
    category_name:{type: String, required: true },
    status:{type: String, required: true }
})

var claimdata = mongoose.model('claim_tb',claimSchema) 
module.exports=claimdata;