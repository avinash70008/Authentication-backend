const express = require('express');
const router = express.Router()
const Product = require('../Model/product.model');

// router.post("", crudController(Charger).post)
// router.get("", crudController(Charger).getAll)
// router.get("/:id", crudController(Charger).getOne)
// router.delete("/:id", crudController(Charger).Delete)
// router.patch("/:id", crudController(Charger).Patch)



router.post("",async(req,res)=>{
    try {
        
        const product = await Product.create(req.body);
        res.send(product)

    } catch (err) {
        return res.status(500).send(err.message)
    }
})

router.post("/id", async(req,res)=>{

    try {
    const product  = await Product .create(req.body);
    res.send(product)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})


router.get("",async(req,res)=>{
    try {
        const product  = await Product .find().lean().exec();
        res.status(201).send(product)
        
    } catch (err) {
        return res.status(500).send(err.message)
    }
})


router.get("/:id" ,async (req,res)=>{
     try {
         const product  = await Product .findById(req.params.id).lean().exec();
         res.send(product)
         
     } catch (err) {
        return res.status(500).send(err.message)
     }
})


// now the below route for price sorting functionality ;

router.get("/sort/dsc",async(req,res)=>{
    try{
        const product=await Product.find().sort({price:-1}).lean().exec()
         res.status(201).send(product)
    }   
    catch(er){
       res.status(400).send(er.message);
    }
})


router.get("/sort/asc",async(req,res)=>{
    try{
        const product=await Product.find().sort({price:1}).lean().exec()
         res.status(201).send(product)
    }   
    catch(er){
       res.status(400).send(er.message);
    }
})

// below code for discount functionality 

router.get("/sort/discountasc",async(req,res)=>{
    try {
        const product = await Product.find().sort({discount:1}).lean().exec()
        res.status(201).send(product)
    } catch (err) {
        res.status(400).send(err.message)
    }
})


router.get("/sort/discountdsc" ,async(req,res)=>{
    try {
        const product  = await Product.find().sort({discount:-1}).lean().exec();
        res.status(201).send(product)
    } catch (err) {
        res.status(400).send(err.message)
    }
})


// below the router for the sorting by name 

router.get("/sort/nameasc",async(req,res)=>{
    try {
        const product  = await Product.find().sort({name:1}).lean().exec();
        res.status(201).send(product)
        
    } catch (err) {
        res.status(400).send(err.message)
    }
})

router.get("/sort/namedsc",async(req,res)=>{
    try {
        const product  = await Product.find().sort({name:-1}).lean().exec();
        res.status(201).send(product)
    } catch (err) {
        res.status(400).send(err.message)
    }
})


module.exports = router