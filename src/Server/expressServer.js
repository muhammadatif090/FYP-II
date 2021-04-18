const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const expressServer = express();

//DataBase

dotenv.config({path:'./config.env'});
require('./DB/connection');

//User Schema
//const User = require('./Model/userSchema');

expressServer.use(express.json());

expressServer.use(require('./Router/auth'));
const PORT = process.env.PORT;


//Middleware
const Middleware = (req,res,next)=>{
console.log("Middleware");
next();
}



expressServer.get('/',(req,res)=>{
    res.send("Hello from server");
});

expressServer.get('/signin',Middleware,(req,res)=>{
    res.send("Hello from sign in");
});

expressServer.get('/signup',(req,res)=>{
    res.send("Hello from server");
});

expressServer.get('/contact',(req,res)=>{
    res.send("Hello from server");
});

expressServer.get('/about',(req,res)=>{
    res.send("Hello from about server");
});

expressServer.get('/user',(req,res)=>{
    res.send("Hello from server");
})


expressServer.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
});
