const express =require ("express");
const cors=require("cors")
const app=express();
app.use(cors())
app.get("/",(req,res)=>{
    const first=req.query.a;
    const second=req.query.b;
    const c=parseInt(first)+parseInt(second);
    res.send(c.toString())

})
app.listen(3000,()=>{
    console.log("listening.....");
})