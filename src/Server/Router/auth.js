const express = require("express");
const { models } = require("mongoose"); // to use mongo db library
const bcrypt = require("bcryptjs"); //to encrypt password in the DB
const jwt = require("jsonwebtoken"); // after login user should have a session using this tokken

const router = express.Router();

const User = require("../Model/userSchema");
router.get('/',(req,res) =>
{
  res.send("HELLO WORLD FROM SERVER auth");
});

//promises
/*

router.post('/register',(req,res)=>{
    // get data from the frontend
    const {name,email,password,cpassword,pnumber,address}= req.body;

    if(!name||!email||!password||!cpassword||!pnumber||!address)
    {
        return res.status(422).json({error:"All fields must be filled" });

    }

    User.findOne({email:email}).then((userExist)=>
    {

        if(userExist)
        {
            return res.status(422).json({error:"Email already exsist" });

        }

        const user = new User({ name, email, password, cpassword, pnumber, address });

        user.save().then(()=>{
            res.status(201).json({message:"User registered successfully" });
        }).catch((err)=>res.status(500).json({error:"Failed to register" }));
    
    }).catch(err => {console.log(err); });

});*/

//Using Async Await

router.post('/register',async (req,res)=>{
    // get data from the frontend
    const {name,email,password,cpassword,pnumber,address}= req.body;

      if(!name || !email || !password || !cpassword || !pnumber || !address)
    
        {
            return res.status(422).json({error:"All fields must be filled" });

        }

    try {

      const response  = await  User.findOne({email:email});
      
      if(response)
        {
            return res.status(422).json({error:"Email already exsist" });

        }

        else if(password != cpassword)
        {
            return res.status(422).json({error:"Password and Confirm Password should be same" });
        }

        else
        {
        const user = new User({ name, email, password, cpassword, pnumber, address });

         await user.save();

        res.status(201).json({message:"User registered successfully" });

        }
    
    }catch(err) {
        console.log(err);
    }
   
});

//login rout
router.post('/signin',async(req,res)=> {
   // console.log(req.body);
   // res.json({message:"Awsome"});

   try 
   {
        const {email,password} = req.body;
        if(!email || !password)
            {
                return res.status(400).json({error:"Email & Password should not be empty"});
            }

        const userLogin = await User.findOne({email:email});

        if(userLogin)
        { 
            
            const isMatch = await bcrypt.compare(password,userLogin.password);
            const token = userLogin.generateAuthToken();
            console.log(token);
            if(!isMatch)
                {
                res.status(400).json({error:"Invalid Password"});
                }

            else 
                {
                    res.json({message:"Mubarak ho bhae"});

                }

        }

        else
            {
                res.status(400).json({error:"Invalid Email"});

            }

       
        console.log(userLogin);
   } catch (err) {
       console.log(err);
   }
})
module.exports = router;