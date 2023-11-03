const mongoose = require("mongoose")
const express = require("express")
const connect = require("./config/db")
const subCategory = require("./model/subcategory.schema")
const Category = require("./model/category.schema")
const app = express()
app.use(express.json())

app.post("/create",async(req,res)=>{
    let data = await Category.create(req.body)
    res.status(201).send(data)
})

app.post("/subcreate",async(req,res)=>{
    let data = await subCategory.create(req.body)
    res.status(201).send(data)
})

app.get("/",async(req,res)=>{
    let data = await subCategory.find().populate("catId")
    res.send(data)
})

app.listen(8090,()=>{
    connect()
    console.log("Server on 8090");
})