const express=require("express");
const path=require("path");
const mongoose = require("mongoose");
const bodyparser=require("body-parser")
const dotenv=require("dotenv").config();
const connectdb=require("./init/dbConnetion");
const moment=require("moment");
const todo=require("./models/Todo")
const app=express();
const router=require("./routes/todo")
// app.use(express.json());
connectdb();

app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));

const  port=process.env.PORT||801;
app.use(express.static(path.join(__dirname,"public")));
app.use("/",router);

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})