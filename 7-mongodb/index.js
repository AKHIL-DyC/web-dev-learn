const mongoose=require("mongoose");
const express=require("express");
const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://akhildyc:akhildyc@cluster0.hguji0l.mongodb.net/auth")
const User=mongoose.model('Users',{name:String,email:String,password:String});
app.post("/signup",async(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const exisistinguser=await User.findOne({email:email});
    if(exisistinguser){
        res.status(403).send("user exist");
    }
    const user=new User({
        name:name,
        email:email,
        password:password
    })
    user.save();
    res.send("user created");
})
app.listen(5000,()=>{
    console.log("listening....");
})