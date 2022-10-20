const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://raheenaMTX:raheenaMTX@cluster0.rdoledt.mongodb.net/lotteryDB?retryWrites=true&w=majority')  //database connection
const Schema = mongoose.Schema  

const ticketgenSchema = new Schema({
    category_id:{type: Schema.Types.ObjectId, ref:"category_tb", required:true},
    ticket_number:{type: String, required:true},
    date : {type: String, required:true},
   status: {type: Number, required: true }
})

var ticketgendata = mongoose.model('ticketgen_tb',ticketgenSchema) 
module.exports=ticketgendata;