const express  = require("express");
const cors = require("cors")
require("dotenv").config()
const port =process.env.PORT||8000

const app = express();
app.use(express.json());
app.use(cors())
const connect  = require("./Confics/db")

const CartController  = require("./Controller/Cart.controller")
const HeadphoneController  = require("./Controller/headphone.controller")
const ProductController  = require("./Controller/Product.controller")
const {register,login}=require("./Controller/auth.controller")
app.post("/register",register)
app.post ("/login",login)
app.use("/cart",CartController)
app.use("/product",ProductController)
app.use("/headphone",HeadphoneController)

app.listen(port,async function(){
    try {
        await connect()
        console.log(`Port ${port} is working fine`)
    } catch (error) {
        console.log("some error occur")
    }
})