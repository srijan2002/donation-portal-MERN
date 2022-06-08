const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const paymentSchema = new Schema({
    payment_id:{type:String},
    amount: {type: Number},
    method: {type:String},
    receiver: {type:String},
    
});
module.exports=paymentSchema;