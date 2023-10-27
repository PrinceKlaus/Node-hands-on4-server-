const auth = require('../middleware/auth');

const blogRoutes=require('express').Router()

blogRoutes.get("/",auth,(req,res)=>{
    res.send("this is blog page")
})

module.exports=blogRoutes;