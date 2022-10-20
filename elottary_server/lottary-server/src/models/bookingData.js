const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://raheenaMTX:raheenaMTX@cluster0.rdoledt.mongodb.net/lotteryDB?retryWrites=true&w=majority')  //database connection
const Schema = mongoose.Schema  

const bookingSchema = new Schema({
    Login_id:{type: Schema.Types.ObjectId, ref:"login_tb", required:true},
    category_id:{type: Schema.Types.ObjectId, ref:"category_tb", required:true},
    ticket_id:{type: Schema.Types.ObjectId, ref:"category_tb", required:true},
    district:{type: String, required: true },
    date:{type: Date, required: true },
    amount:{type: String, required: true },
    agency_id:{type: String, required: true },
})

var bookingdata = mongoose.model('booking_tb',bookingSchema) 
module.exports=bookingdata;