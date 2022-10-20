const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://raheenaMTX:raheenaMTX@cluster0.rdoledt.mongodb.net/lotteryDB?retryWrites=true&w=majority') 
const Schema = mongoose.Schema    

const resultSchema = new Schema({
    // login_id:{type: Schema.Types.ObjectId, ref:"result_tb", required:true},
    category_id:{type: Schema.Types.ObjectId, ref:"category_tb", required:true},
    first:{type: String, required: true },
    second:{type: String, required: true },
    third:{type: String, required: true },
    third2:{type: String, required: true },
    third3:{type: String, required: true },
    result_date:{type: Date, required: true },
    status:{type: String, required: true }
})

var resultdata = mongoose.model('result_tb',resultSchema) 
module.exports=resultdata;