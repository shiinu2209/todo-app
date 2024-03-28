const todo=require("../models/Todo");
const moment=require("moment");
const todolist=async(req,res,next)=>{
    const todos=await todo.find().sort({createdAt:1});
    
    res.locals.moment=moment;
    res.render("home",{title:"home-page",todos});
    
}
const newtodo=(req,res,next)=>{
    
    res.render("newtodo",{title:"home-page"});
    
}
const updatetodo=async(req,res,next)=>{
    const _id=req.query;
    const todos=await todo.findById(_id);
    console.log(todos);
    res.render("updatetodo",{title:"update-todo",data:todos});
    
}
const deletetodo=(req,res,next)=>{
    const id=req.query;
    console.log(id);
    res.render("deletetodo",{title:"home-page",id:id._id});
    
}
const createnewtodo=async(req,res,next)=>{
    
    const {title,desc}=req.body;
const newtodo=await todo.create({"title":title,"desc":desc});


res.redirect("/");


};
const deletetodofunc=async(req,res,next)=>{
const {id}=req.params;
const deleted=await todo.deleteOne({_id:id});
res.redirect("/");
}
const updatetodofunc=async(req,res,next)=>{
const updt=await todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
}
module.exports={todolist,newtodo,updatetodo,deletetodo,createnewtodo,deletetodofunc,updatetodofunc}