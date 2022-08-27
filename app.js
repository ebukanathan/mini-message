const express = require('express')
const app = express()
require('dotenv').config()
const ejs = require("ejs")
const bodyparser = require("body-parser")

const port = process.env.PORT||5050

app.use(express.json({extended:false}))
app.use(bodyparser.urlencoded({extended:true}))


//view engine
app.set("view engine","ejs")


const messages = []

//get the index page on launching the url
app.get("/",(req,res)=>{
    res.status(200).render("index",{msgList:messages})
})

//direct to the form
app.get("/form",(req,res)=>{
    res.render("new")
})
//creat a new message
app.post("/new",(req,res)=>{
    messages.push({message:req.body.message,name:req.body.name,submitted:new Date()})
    res.redirect("/")
       
})

app.listen(port,()=>{console.log(`the server is listenng on port ${port}...`)})