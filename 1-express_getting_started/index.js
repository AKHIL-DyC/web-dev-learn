const express =require("express");
const app=express();
const port=3000
function random(n){
    return n*n;
}
app.get('/',(req,res)=>{
    const n=req.query.n;//to send a query use /?n=8,6 any number you like
    const square=random(n);
    //square.toString()
    res.send("hellow world"+square);
})
app.post('/posthere',(req,res)=>{
    console.log(req.headers)
    res.send({msg:"hello post"})
})
app.listen(port,()=>{
    console.log("listening");
   // console.log(app);
})