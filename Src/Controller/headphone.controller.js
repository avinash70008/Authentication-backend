const express = require('express');
const router = express.Router()
const Headphone  = require("../Model/headphone.model");
const { search } = require('./Cart.controller');

router.post("",async(req,res)=>{
    try {
        //     const product = await Headphone .create(req.body);
        const headphone = await Headphone.create(req.body);
        res.send(headphone)
        
    } catch (err) {
        return res.status(500).send(err.message)
    }
})


router.get("",async(req,res)=>{
    try {
        const headphone  = await Headphone.find().lean().exec();
        res.send(headphone)
        
    } catch (err) {
        return res.status(500).send(err.message)
    }
})


router.get("/:id",async(req,res)=>{
    try {
        const headphone  = await Headphone.findById(req.params.id).lean().exec()
         res.send(headphone)
        
    } catch (err) {
        return res.status(500).send(err.message)
    }
})


//now the below route for price sorting functionality ;

router.get("/sort/dsc",async(req,res)=>{
    try{
        const headphone=await Headphone.find().sort({price:-1}).lean().exec()
         res.status(201).send(headphone)
    }   
    catch(er){
       res.status(400).send(er.message);
    }
})


router.get("/sort/asc",async(req,res)=>{
    try{
        const headphone=await Headphone.find().sort({price:1}).lean().exec()
         res.status(201).send(headphone)
    }   
    catch(er){
       res.status(400).send(er.message);
    }
})

// below code for discount functionality 

router.get("/sort/discountasc",async(req,res)=>{
    try {
        const headphone = await Headphone.find().sort({discount:1}).lean().exec()
        res.status(201).send(headphone)
    } catch (err) {
        res.status(400).send(err.message)
    }
})


router.get("/sort/discountdsc" ,async(req,res)=>{
    try {
        const headphone  = await Headphone.find().sort({discount:-1}).lean().exec();
        res.status(201).send(headphone)
    } catch (err) {
        res.status(400).send(err.message)
    }
})


// below the router for the sorting by name 

router.get("/sort/nameasc",async(req,res)=>{
    try {
        const headphone  = await Headphone.find().sort({name:1}).lean().exec();
        res.status(201).send(headphone)
        
    } catch (err) {
        res.status(400).send(err.message)
    }
})

router.get("/sort/namedsc",async(req,res)=>{
    try {
        const headphone  = await Headphone.find().sort({name:-1}).lean().exec();
        res.status(201).send(headphone)
    } catch (err) {
        res.status(400).send(err.message)
    }
})

module.exports = router