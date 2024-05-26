const mongoose = require('mongoose');

const ProductSchemna= new mongoose.Schema({
    name:{ type:String},
    description:{type:String},
    price:{type:Number},
    quantity:{type:Number}
})
module.exports=mongoose.model('Product',ProductSchemna)