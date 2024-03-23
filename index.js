const express=require("express");
const app=express();
app.set("view engine","ejs");
const PORT=8000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})