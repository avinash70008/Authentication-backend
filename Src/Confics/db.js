
const mongoose  = require("mongoose");


const connect  = () =>{
   return mongoose .connect("mongodb+srv://avinash:avinash1@cluster0.tznxj.mongodb.net/authentication?retryWrites=true&w=majority")
}


module.exports= connect 