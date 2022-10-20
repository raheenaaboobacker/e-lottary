const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://raheenaMTX:raheenaMTX@cluster0.rdoledt.mongodb.net/lotteryDB?retryWrites=true&w=majority') 
const Schema = mongoose.Schema    

const prebookSchema = new Schema({
    login_id:{ type: Schema.Types.ObjectId, ref: "login_tb", required: true },
    category_id:{type: Schema.Types.ObjectId, ref:"category_tb", required:true},
    ticket_id:{type: Schema.Types.ObjectId, ref:"ticket_tb", required:true},
    district:{type: String, required: true },
    prebook_date:{type: Date, required: true }
    
})

var prebookdata = mongoose.model('prebook_tb',prebookSchema) 
module.exports=prebookdata;