const express = require('express');
const Cart = require("../Model/cart.model");
const router = express.Router();



router.post("",async(req,res)=>{
    try {
        
        const cart = await Cart.create(req.body);
        res.send(cart)
        
    } catch (err) {
        return res.status(500).send(err.message)
    }
})


router.get("",async(req,res)=>{
    try {
        const cart  = await Cart.find().lean().exec();
        res.send(cart)
        
    } catch (err) {
        return res.status(500).send(err.message)
    }
})


router.get("/:id",async(req,res)=>{
    try {
        const cart  = await Cart.findById(req.params.id).lean().exec()
         res.send(cart)
        
    } catch (err) {
        return res.status(500).send(err.message)
    }
})


router.delete("/:id",async(req,res)=>{
try {
    const cart  = await Cart.findByIdAndDelete(req.params.id);
    return res.send(cart)
} catch (err) {
    return res.status(500).send(err.message)
}
})
module.exports=router
