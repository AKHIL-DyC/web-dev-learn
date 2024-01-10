//after running go to postman ,and a query needed named age aswell on headers give username and password
const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    const username =req.headers.username;
    const password=req.headers.password;
    const age=req.query.age;
    let response={};
    if(username!="akhil"||password!="123"){
        res.status(400);
         response.msg="invalid credential";
         res.json(response);
        return
    }
    else{
        //res.json({"msg":"welcome to"});
         response.msg="welcome to";
    }
    if(age<18){
        //res.json({"loc":"epstien island"});
        response.loc="epstien island";
    }
    else{
        //res.send({"loc":"matrix"});
        response.loc="matrix"
    }
    res.json(response);
})
app.listen(3000,()=>{
    console.log("listening...");
})
