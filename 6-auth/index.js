const jwt =require("jsonwebtoken")
const express=require("express")
const app=express()
app.use(express.json());
const jwtpass="akhdyc"
const ALLUSER=[{
    username:"akhil",
    pass:"123"
},
{
    username:"dyc",
    pass:"qwe"
},
{
    username:"git",
    pass:"asd"
}
]
function userexist(username,pass){
    let flag=false
    for(i=0;i<ALLUSER.length;i++){
        if(ALLUSER[i].username==username && ALLUSER[i].pass==pass){
            flag=true;
        }
    }
    return flag;
}
app.post("/login",(req,res)=>{
    const username=req.body.username;
    const pass=req.body.pass;
    if(!userexist(username,pass)){
        return res.status(403).json({
            msg:"user doesnt exist"
        })
    }
    var token=jwt.sign({username:username},jwtpass);
    return res.json({
        token,
    })
})
app.get("/list",(req,res)=>{
    const token=req.headers.authorization
    const decoded=jwt.verify(token,jwtpass);
    const username=decoded.username
    console.log(username);
})
app.listen(3000,()=>{
    console.log("listening...")
})