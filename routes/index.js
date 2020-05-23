//to acess exress library
const express=require('express');
// to use express router 
const route=express.Router();
//to access controllers
const todoController=require('../controllers/todo_home');

//rendering homefile
route.get('/',todoController.home);







// to export routes
module.exports=route;