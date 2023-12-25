//for this program you''ll need postman and whenever there is a query remember to add ?n=somenumber
//try playing with GET,POST,PUT,DELETE to get the hang of it 
const express=require('express');
const app=express()
let st=new String
app.use(express.json()); 
const user=[{
    name:'akhil',
    friends:["sathya","anjan","nigga"],
    vehicles:{
        car:false,
        bike:true
    }
},{
    name:'liyan',
    friends:["akhil"],
    vehicles:{
        car:true,
        bike:true
    }
},{
    name:'anj',
    friends:["joseph","faraz"],
    vehicles:{
        car:true,
        bike:false
    }
}];
app.get('/',(req,res)=>{
    const n=req.query.n;
    n.toString();
    const userr=user[n-1];
    if(userr.vehicles.bike){
         st="rides bikes"
    }
    res.json({
        userr,
        st
        
    })
   // res.send(st)
})
app.post('/',(req,res)=>{
    const friendname=req.body.friends
    user[0].friends.push(friendname
    )
    res.json({
        msg:"done"
    })
})
app.put('/',(req,res)=>{
    const ubdate=req.body
    user[0]={
        ...user[0],
        ...ubdate,
    }
    res.json({
        msg:"done"
    })
})
app.delete('/',(req,res)=>{
    //deletes friend named nigga
    const newfriend=[]
    let flag=0
    for(let i = 0;i<user[0].friends.length;i++){
            if(user[0].friends[i]!="nigga"){
                newfriend.push(user[0].friends[i])
            }
            else{
                flag=1
            }
    }
    user[0].friends=newfriend
    if(flag==1){
    res.json({
        msg:"done"
    })
    }
    else{
        res.sendStatus(411)
    }
})
app.listen(3000,()=>{
    console.log("listening....");
})