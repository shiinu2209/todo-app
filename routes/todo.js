const express=require("express");
const router=express.Router();
const todo=require("../models/Todo");
const moment=require("moment");
const funcs=require("../controller/todo");
router.get("/",funcs.todolist);
router.get("/newtodo",funcs.newtodo);
router.get("/updatetodo",funcs.updatetodo);
router.get("/deletetodo",funcs.deletetodo);
router.post("/new-todo",funcs.createnewtodo);
router.get("/deleteTodo/:id",funcs.deletetodofunc);
router.post("/update-todo/:id",funcs.updatetodofunc);

module.exports=router