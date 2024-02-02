//look at bad_middleware if we have many route ,to validate username,pass, age etc we have to write that code again and again ,
//so it is inneficient,also any future changes to made will be troublesome .

//if you have a service that has a freee trial ,then after some trial you need to stop it see calcRequest
//to test that just hit/free many times

//if you have some middleware to be checked in all route 
//app.use(functionname)
const express=require("express");
const zod=require("zod");
const schema_list=zod.array(zod.number());
const schema_id=zod.number();
let request=0;
const app=express();
app.use(express.json());
function usercheck(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;
    if(username!="akhil"&&password!="123"){
        res.status(403).json({
            "msg":"incorrect credential"
        })
    }
    else{
        next();
    }

}
function agecheck(req,res,next){
    const age=req.query.age;
    console.log("hellow");
    if(age==null){
        res.json({
            "msg":"enter your age by typing /?age="
        })
    }
    else if(age<18){
        res.json({
            "msg":"not allowed"
        })
    }
    else{
       next()
    }
}
//lets say you have a service that should be used only some time for free then it is not free
function calcRequests(req,res,next){
    request++;
    if(request>=5){
        res.send("you have used all your free trial");
    }
    else{
        next();
    }
}

app.get("/",agecheck,(req,res)=>{
    res.send("you have passed all the age check")
})
app.get("/premium",usercheck,agecheck,(req,res)=>{
    res.send("you have passed all the checks,ie user and age")
})
app.get("/free",calcRequests,(req,res)=>{
    res.send("premium service providing for free providing.....")
})
//in body if someone uses gibberish value ,we get error and the server will be exposed ,so we use global catch
app.get("/body",(req,res)=>{
    const name =req.body.name;
    const location=req.body.location;       
    res.send("your name is"+name+"and your location is "+location);
}
)
app.post("/zod", (req, res) => {
    const array=req.body.list;
    const id=req.body.id;
    const listf=schema_list.safeParse(array);
    const idf=schema_id.safeParse(id);
    //res.send("using zod list is "+listf+"id is"+idf);
    if(!listf.success||!idf.success){
        res.send({
            "msg":"some invalid input"
        })
    }
    else{
        res.send("using zod list is"+listf.data+"id is "+idf.data);
        
    }
});

//global catch is app.use thing with 4 input written after all app.get thing 
/*app.use((err,req,res,next)=>{
    res.json({
        "msg":"something happend ,try again or later"
    })
})
*/
app.listen(3000,()=>{
    console.log("listening....")
})