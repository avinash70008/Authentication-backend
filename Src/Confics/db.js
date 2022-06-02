
const mongoose  = require("mongoose");


const connect  = () =>{
   return mongoose .connect("mongodb+srv://ankitsharma:Ankit1020@cluster0.repsk.mongodb.net/pcmobile")
}


module.exports= connect 