

const mongoose   = require("mongoose");

const CartSchema  = new mongoose .Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    discount:{type:Number,required:true},
    quantity:{type:Number,required:true}

},
{versionKey:false,
timestamps:true})




module.exports = mongoose.model("cart",CartSchema)